'use client';

import { useState, useEffect, Suspense } from 'react';
import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { AnimatedElement } from '../components/animations';
import { PageLayout, Section } from '../components/layout';
import TestResult from '../components/test/TestResult';
import useMbtiTest from '../hooks/useMbtiTest';
import { useSupabase } from '../contexts/SupabaseContext';
import { saveTestResult, getTestResultByShareId } from '../services/resultService';
import { getMbtiDescription } from '../utils/mbti';
import { StarryBackground } from '../components/mystical';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { logError } from '../utils/errorLogger';

/**
 * MBTI 테스트 결과 페이지
 *
 * 테스트 결과를 표시합니다.
 */
function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { result, idealType, worstMatch, handleRestartTest, isTestCompleted } = useMbtiTest();
  const { user, sessionId } = useSupabase();

  const [isLoading, setIsLoading] = useState(true);
  const [showShareAlert, setShowShareAlert] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  const [savedResult, setSavedResult] = useState(null);

  // URL에서 공유 ID 가져오기 - 쿼리 파라미터 지원 유지 (이전 링크 호환성)
  const shareId = searchParams.get('id');

  console.log('URL shareId from query params:', shareId);

  // 쿼리 파라미터로 접근한 경우 새 URL 형식으로 리다이렉트
  useEffect(() => {
    if (shareId && typeof window !== 'undefined') {
      console.log('Redirecting from query param to path param:', shareId);
      router.replace(`/result/${shareId}`);
    }
  }, [shareId, router]);

  // 페이지 로드 시 테스트 완료 여부 확인 또는 공유된 결과 가져오기
  useEffect(() => {
    const loadResult = async () => {
      try {
        setIsLoading(true);
        console.log('Loading result with shareId:', shareId);
        console.log('isTestCompleted:', isTestCompleted);
        console.log('result:', result);
        console.log('Current URL:', typeof window !== 'undefined' ? window.location.href : 'SSR');
        console.log('Current pathname:', typeof window !== 'undefined' ? window.location.pathname : 'SSR');

        // 쿼리 파라미터로 접근한 경우 새 URL 형식으로 리다이렉트하고 함수 종료
        if (shareId && typeof window !== 'undefined' && window.location.search.includes('id=')) {
          console.log('Redirecting from query param to path param in loadResult');
          const newUrl = `/result/${shareId}`;
          console.log('New URL:', newUrl);
          window.location.href = newUrl;
          return;
        }

        // 현재 URL이 이미 /result/[id] 형식인지 확인
        const isPathFormat = typeof window !== 'undefined' &&
                            window.location.pathname.match(/^\/result\/[a-zA-Z0-9-]+$/);
        console.log('Is path format:', isPathFormat);

        // 테스트를 완료하지 않았고 결과도 없는 경우 테스트 페이지로 이동
        if (!isTestCompleted && !result && !isPathFormat) {
          console.log('Test not completed, redirecting to test page');
          router.push('/test');
          return;
        }

        // 결과가 있는 경우 항상 저장하고 /result/[id] 페이지로 리다이렉트
        if (result) {
          console.log('Result exists, saving and redirecting to result/[id] page');
          const saveResponse = await saveResult();
          console.log('Save response:', saveResponse);

          // 저장 성공 또는 실패 시에도 shareId가 있으면 리다이렉트
          if (saveResponse.shareId) {
            const newUrl = `/result/${saveResponse.shareId}`;
            console.log('Redirecting to result/[id] page:', newUrl);

            // 현재 URL이 /result/[id] 형식이 아닌 경우에만 리다이렉트
            if (!isPathFormat) {
              if (typeof window !== 'undefined') {
                window.location.href = newUrl;
              } else {
                router.push(newUrl);
              }
              return;
            }
          } else {
            console.error('No shareId returned after saving result');
          }
        } else if (!isPathFormat) {
          // 결과가 없고 현재 URL이 /result/[id] 형식이 아닌 경우 테스트 페이지로 이동
          console.log('No result and not on result/[id] page, redirecting to test page');
          router.push('/test');
          return;
        }
      } catch (error) {
        // 오류 로깅 및 추적
        logError(error, 'loadResult', {
          shareId,
          isTestCompleted,
          hasResult: !!result,
          errorType: 'RESULT_PAGE_LOAD_ERROR'
        });

        // 오류 발생 시 테스트 페이지로 이동
        if (typeof window !== 'undefined') {
          // 오류 정보 저장 (이미 logError에서 처리됨)
          // 추가 정보가 필요한 경우에만 여기에 추가
          sessionStorage.setItem('mbti_result_page_error', JSON.stringify({
            message: error.message,
            timestamp: new Date().toISOString(),
            page: 'result',
            shareId
          }));
        }

        router.push('/test');
      } finally {
        setIsLoading(false);
      }
    };

    // 페이지 로드 시 즉시 실행
    loadResult();
  }, [isTestCompleted, result, router, shareId, savedResult]);

  /**
   * 결과 저장 함수
   *
   * 개선된 버전:
   * 1. 항상 shareId를 반환하도록 보장
   * 2. 저장 실패 시에도 임시 ID 생성하여 반환
   * 3. 세션 스토리지에 결과 백업
   */
  const saveResult = async () => {
    // 결과가 없는 경우 임시 ID 생성하여 반환
    if (!result) {
      console.log('No result to save');
      const fallbackId = uuidv4();
      return {
        success: false,
        shareId: fallbackId,
        error: 'No result to save',
        isFallback: true
      };
    }

    try {
      console.log('Saving result with scores:', result.scores, 'and type:', result.mbtiType);

      // resultService의 saveTestResult 함수 호출
      const {
        success,
        data,
        shareId,
        shareUrl,
        sessionId: resultSessionId,
        error
      } = await saveTestResult(result.scores, result.mbtiType, user?.id, sessionId);

      console.log('Save result response:', { success, data, shareId, shareUrl, error });

      // 저장 성공 시
      if (success) {
        // 공유 URL 설정
        if (shareUrl) {
          setShareUrl(shareUrl);
          console.log('Saved share URL:', shareUrl);
        }

        // 저장된 결과에 shareId 추가
        if (shareId && result) {
          // 서버에서 반환된 데이터 사용
          const updatedResult = data ? {
            ...result,
            id: data.id,
            shareId: data.share_id || shareId,
            createdAt: data.created_at
          } : {
            ...result,
            shareId: shareId
          };

          console.log('Updating savedResult with data:', updatedResult);
          setSavedResult(updatedResult);

          // 세션 스토리지에 결과 백업 (클라이언트 사이드에서만)
          if (typeof window !== 'undefined') {
            try {
              sessionStorage.setItem(`mbti_result_${shareId}`, JSON.stringify(updatedResult));
              console.log('Result backed up to session storage');
            } catch (storageError) {
              console.warn('Failed to backup result to session storage:', storageError);
            }
          }

          // 실제 저장된 shareId 반환
          const actualShareId = data?.share_id || shareId;
          return {
            success: true,
            shareId: actualShareId,
            shareUrl: `${window.location.origin}/result/${actualShareId}`
          };
        }
      }

      // 저장 실패했지만 shareId가 있는 경우
      if (!success && shareId) {
        console.warn('Save failed but shareId is available:', shareId);

        // 임시 결과 객체 생성
        const fallbackResult = {
          ...result,
          shareId: shareId,
          isFallback: true,
          error: error
        };

        // 세션 스토리지에 임시 결과 저장 (클라이언트 사이드에서만)
        if (typeof window !== 'undefined') {
          try {
            sessionStorage.setItem(`mbti_result_${shareId}`, JSON.stringify(fallbackResult));
            console.log('Fallback result saved to session storage');
          } catch (storageError) {
            console.warn('Failed to save fallback result to session storage:', storageError);
          }
        }

        return {
          success: false,
          shareId: shareId,
          error: error,
          isFallback: true
        };
      }

      // shareId가 없는 경우 임시 ID 생성
      const fallbackId = uuidv4();
      console.warn('No shareId returned, using fallback ID:', fallbackId);

      return {
        success: false,
        shareId: fallbackId,
        error: error || 'No shareId returned',
        isFallback: true
      };
    } catch (error) {
      // 오류 로깅 및 추적
      const errorInfo = logError(error, 'saveResult', {
        mbtiType: result?.mbtiType,
        userId: user?.id,
        sessionId,
        errorType: 'RESULT_SAVE_ERROR'
      });

      // 오류 발생 시 임시 ID 생성
      const errorFallbackId = uuidv4();
      console.warn('Error occurred, using error fallback ID:', errorFallbackId);

      // 임시 결과 객체 생성
      const fallbackResult = result ? {
        ...result,
        shareId: errorFallbackId,
        isFallback: true,
        error: error.message,
        errorId: errorInfo.timestamp
      } : null;

      // 오류 정보와 함께 세션 스토리지에 저장 (클라이언트 사이드에서만)
      if (typeof window !== 'undefined' && fallbackResult) {
        try {
          // 임시 결과 저장
          sessionStorage.setItem(`mbti_result_${errorFallbackId}`, JSON.stringify(fallbackResult));
        } catch (storageError) {
          console.warn('Failed to save fallback result to session storage:', storageError);
        }
      }

      return {
        success: false,
        shareId: errorFallbackId,
        error: error.message || 'Unknown error',
        errorId: errorInfo.timestamp,
        isFallback: true
      };
    }
  };

  // 테스트 재시작 핸들러
  const handleRestart = () => {
    handleRestartTest();
    router.push('/test');
  };

  // MBTI 유형 이름 가져오기
  const getMbtiName = type => {
    const description = getMbtiDescription(type);
    return description?.name || type;
  };

  /**
   * 결과 공유 핸들러
   *
   * 개선된 버전:
   * 1. 항상 /result/[ID] 형식의 URL 사용
   * 2. 공유 전 결과가 저장되어 있지 않으면 저장 후 공유
   * 3. 오류 처리 및 로깅 개선
   */
  const handleShare = async () => {
    // 공유할 MBTI 정보 준비
    const mbtiType = savedResult?.mbtiType || result?.mbtiType;
    const mbtiName = getMbtiName(mbtiType);
    const shareText = `내 MBTI 연애 유형은 ${mbtiType}(${mbtiName})! 달빛 연애 연구소에서 당신의 MBTI 연애 유형도 알아보세요!`;

    // 디버깅 정보 출력
    console.log('Share handler - Current state:', {
      savedResult,
      shareUrl,
      currentUrl: typeof window !== 'undefined' ? window.location.href : 'SSR',
      pathname: typeof window !== 'undefined' ? window.location.pathname : 'SSR'
    });

    // 현재 URL이 이미 /result/[id] 형식인지 확인
    const isPathFormat = typeof window !== 'undefined' &&
                         window.location.pathname.match(/^\/result\/[a-zA-Z0-9-]+$/);
    console.log('Is current URL in path format:', isPathFormat);

    // 현재 URL에서 ID 추출 (이미 /result/[id] 형식인 경우)
    let idFromPath = null;
    if (isPathFormat && typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/');
      idFromPath = pathParts[pathParts.length - 1];
      console.log('ID extracted from current path:', idFromPath);
    }

    // 공유에 사용할 최종 shareId 결정
    let finalShareId = savedResult?.shareId || idFromPath;

    // shareId가 없는 경우 결과 저장 시도
    if (!finalShareId && result) {
      console.log('No shareId found, saving result before sharing...');
      try {
        // 결과 저장 및 shareId 가져오기
        const saveResponse = await saveResult();
        console.log('Save response before sharing:', saveResponse);

        // 저장 성공 또는 실패 시에도 shareId가 있으면 사용
        if (saveResponse.shareId) {
          finalShareId = saveResponse.shareId;
          console.log('Got shareId after saving:', finalShareId);

          // 현재 URL이 /result/[id] 형식이 아니면 리다이렉트
          if (!isPathFormat && typeof window !== 'undefined') {
            const newUrl = `/result/${finalShareId}`;
            console.log('Redirecting to result/[id] page before sharing:', newUrl);
            window.location.href = newUrl;
            return; // 리다이렉트 중이므로 공유 작업 중단
          }
        } else {
          console.error('No shareId returned after saving result');
          // 임시 ID 생성 (최후의 수단)
          finalShareId = uuidv4();
          console.warn('Using generated UUID as fallback shareId:', finalShareId);
        }
      } catch (error) {
        console.error('Error saving result before sharing:', error);
        // 오류 발생 시 임시 ID 생성
        finalShareId = uuidv4();
        console.warn('Using generated UUID as error fallback shareId:', finalShareId);
      }
    }

    // 최종 공유 URL 생성
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareUrl = `${origin}/result/${finalShareId}`;
    console.log('Final sharing URL:', shareUrl);

    // 현재 URL이 /result/[id] 형식이 아니고 finalShareId가 있으면 리다이렉트
    if (!isPathFormat && finalShareId && typeof window !== 'undefined') {
      const newUrl = `/result/${finalShareId}`;
      console.log('Current URL is not in path format, redirecting before sharing:', newUrl);
      window.location.href = newUrl;
      return; // 리다이렉트 중이므로 공유 작업 중단
    }

    // 공유 기능 실행
    try {
      // Web Share API 지원 여부 확인
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({
          title: `내 MBTI 연애 유형은 ${mbtiType}!`,
          text: shareText,
          url: shareUrl,
        });
        console.log('Successfully shared via Web Share API');
      } else {
        // Web Share API를 지원하지 않는 경우 클립보드에 복사
        copyToClipboard(shareText, shareUrl);
      }
    } catch (error) {
      // 오류 로깅 및 추적
      logError(error, 'handleShare', {
        mbtiType,
        shareUrl,
        errorType: 'SHARE_ERROR'
      });

      console.error('Share failed:', error);
      // 공유 실패 시 클립보드에 복사 (fallback)
      copyToClipboard(shareText, shareUrl);
    }
  };

  // 클립보드에 복사
  const copyToClipboard = (text, url) => {
    const shareText = `${text} ${url}`;

    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        setShowShareAlert(true);
      })
      .catch(error => {
        // 오류 로깅 및 추적
        logError(error, 'copyToClipboard', {
          errorType: 'CLIPBOARD_ERROR'
        });

        console.error('클립보드 복사 실패:', error);
      });
  };

  // 로딩 중 표시
  if (isLoading) {
    return (
      <PageLayout variant="result">
        {/* 별 반짝임 배경 효과 */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            overflow: 'hidden',
          }}
        >
          <StarryBackground starCount={30} shootingStarCount={2} fogCount={3} />
        </Box>

        <Section centered fullHeight reducedPadding>
          <AnimatedElement animation="pulse" duration="slow">
            <Box
              component="img"
              src="/images/tarot-back.svg"
              alt="타로 카드"
              sx={{
                width: 150,
                height: 225,
                mb: 4,
                animation: 'spin 3s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotateY(0deg)' },
                  '100%': { transform: 'rotateY(360deg)' },
                },
              }}
            />
          </AnimatedElement>
          <Typography variant="h4">결과를 불러오는 중...</Typography>
        </Section>
      </PageLayout>
    );
  }

  // 결과가 없는 경우
  const displayResult = savedResult || result;
  if (!displayResult || !displayResult.mbtiType) {
    return (
      <PageLayout variant="result" hideHeader={true} hideFooter={true}>
        {/* 별 반짝임 배경 효과 */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            overflow: 'hidden',
          }}
        >
          <StarryBackground starCount={30} shootingStarCount={2} fogCount={3} />
        </Box>

        <Section centered fullHeight reducedPadding>
          <AnimatedElement animation="fadeIn" duration="normal">
            <Typography variant="h4">테스트 결과가 없습니다</Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4, textAlign: 'center' }}>
              테스트를 먼저 완료해주세요.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <AnimatedElement animation="pulse" duration="slow">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push('/test')}
                  size="large"
                  sx={{ px: 4, py: 1.5 }}
                >
                  테스트 시작하기
                </Button>
              </AnimatedElement>
            </Box>
          </AnimatedElement>
        </Section>
      </PageLayout>
    );
  }

  return (
    <PageLayout variant="result" hideHeader={true} hideFooter={true}>
      {/* 별 반짝임 배경 효과 */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <StarryBackground starCount={50} shootingStarCount={3} fogCount={5} />
      </Box>

      <Section centered reducedPadding>
        <AnimatedElement animation="fadeIn" duration="normal">
          <Box sx={{ maxWidth: 800, mx: 'auto', my: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <AnimatedElement animation="pulse" duration="slow">
                <FavoriteIcon
                  sx={{
                    fontSize: 50,
                    color: 'secondary.main',
                    filter: 'drop-shadow(0 0 10px rgba(156, 39, 176, 0.5))',
                  }}
                />
              </AnimatedElement>
            </Box>

            <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }}>
              당신의 MBTI 연애 유형 결과
            </Typography>

            <Box sx={{ position: 'relative', mb: 8 }}>
              <TestResult
                mbtiType={displayResult.mbtiType}
                scores={displayResult.scores}
                idealType={savedResult?.idealType || idealType}
                worstMatch={savedResult?.worstMatch || worstMatch}
                onRestart={handleRestart}
                onShare={handleShare}
              />
            </Box>
          </Box>
        </AnimatedElement>
      </Section>

      {/* 공유 알림 */}
      <Snackbar
        open={showShareAlert}
        autoHideDuration={3000}
        onClose={() => setShowShareAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowShareAlert(false)} severity="success" sx={{ width: '100%' }}>
          결과 링크가 클립보드에 복사되었습니다!
        </Alert>
      </Snackbar>
    </PageLayout>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <PageLayout variant="result" hideHeader={true} hideFooter={true}>
          {/* 별 반짝임 배경 효과 */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              overflow: 'hidden',
            }}
          >
            <StarryBackground starCount={30} shootingStarCount={2} fogCount={3} />
          </Box>

          <Section centered fullHeight reducedPadding>
            <AnimatedElement animation="pulse" duration="slow">
              <Box
                component="img"
                src="/images/tarot-back.svg"
                alt="타로 카드"
                sx={{
                  width: 150,
                  height: 225,
                  mb: 4,
                  animation: 'spin 3s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                  },
                }}
              />
            </AnimatedElement>
            <Typography variant="h4">결과를 불러오는 중...</Typography>
          </Section>
        </PageLayout>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
