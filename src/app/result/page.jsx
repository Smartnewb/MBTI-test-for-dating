'use client';

import { useState, useEffect, Suspense } from 'react';
import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatedElement } from '../components/animations';
import { PageLayout, Section } from '../components/layout';
import TestResult from '../components/test/TestResult';
import useMbtiTest from '../hooks/useMbtiTest';
import { useSupabase } from '../contexts/SupabaseContext';
import { saveTestResult, getTestResultByShareId } from '../services/resultService';
import { getMbtiDescription } from '../utils/mbti';
import { StarryBackground } from '../components/mystical';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

        // 쿼리 파라미터로 접근한 경우 새 URL 형식으로 리다이렉트하고 함수 종료
        if (shareId && typeof window !== 'undefined' && window.location.search.includes('id=')) {
          console.log('Redirecting from query param to path param in loadResult');
          // router.replace는 다른 useEffect에서 처리하므로 여기서는 함수 종료
          return;
        }

        // 테스트를 완료하지 않았고 결과도 없는 경우 테스트 페이지로 이동
        if (!isTestCompleted && !result) {
          console.log('Test not completed, redirecting to test page');
          router.push('/test');
          return;
        }

        // 결과가 있고 아직 저장되지 않은 경우 결과 저장
        if (result && !savedResult) {
          console.log('Result exists but not saved, saving result...');
          const saveResponse = await saveResult();
          console.log('Save response:', saveResponse);

          // 저장 성공 시 새 URL 형식으로 리다이렉트
          if (saveResponse.success && saveResponse.shareId) {
            const newUrl = `/result/${saveResponse.shareId}`;
            console.log('Redirecting to new URL after saving:', newUrl);
            router.replace(newUrl);
            return;
          }
        }
      } catch (error) {
        console.error('Error loading result:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadResult();
  }, [isTestCompleted, result, router, shareId, savedResult]);

  // 결과 저장
  const saveResult = async () => {
    if (!result) {
      console.log('No result to save');
      return { success: false };
    }

    try {
      console.log('Saving result with scores:', result.scores, 'and type:', result.mbtiType);

      const {
        success,
        data,
        shareId,
        shareUrl,
        sessionId: resultSessionId,
      } = await saveTestResult(result.scores, result.mbtiType, user?.id, sessionId);

      console.log('Save result response:', { success, data, shareId, shareUrl });

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

          // 실제 저장된 shareId 반환
          const actualShareId = data?.share_id || shareId;
          return {
            success: true,
            shareId: actualShareId,
            shareUrl: `${window.location.origin}/result/${actualShareId}`
          };
        }
      }

      return { success, shareId, shareUrl };
    } catch (error) {
      console.error('Error saving result:', error);
      return { success: false, error };
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

  // 결과 공유 핸들러
  const handleShare = async () => {
    const mbtiType = savedResult?.mbtiType || result?.mbtiType;
    const mbtiName = getMbtiName(mbtiType);
    const shareText = `내 MBTI 연애 유형은 ${mbtiType}(${mbtiName})! 달빛 연애 연구소에서 당신의 MBTI 연애 유형도 알아보세요!`;

    // 디버깅 정보 출력
    console.log('Before share - savedResult:', savedResult);
    console.log('Before share - shareUrl:', shareUrl);
    console.log('Before share - Current URL:', window.location.href);

    // 먼저 결과가 저장되어 있는지 확인하고, 저장되어 있지 않으면 저장
    let finalShareId = savedResult?.shareId;
    let url;

    if (!finalShareId && result) {
      console.log('No shareId found, saving result before sharing...');
      try {
        // 결과 저장 및 shareId 가져오기
        const saveResponse = await saveResult();
        console.log('Save response before sharing:', saveResponse);

        if (saveResponse.success && saveResponse.shareId) {
          finalShareId = saveResponse.shareId;
          console.log('Got shareId after saving:', finalShareId);

          // 저장 성공 시 새 URL 형식으로 리다이렉트
          const newUrl = `/result/${saveResponse.shareId}`;
          console.log('Redirecting to new URL after saving in share handler:', newUrl);
          router.replace(newUrl);

          // 리다이렉트 중이므로 공유 작업 중단
          return;
        }
      } catch (error) {
        console.error('Error saving result before sharing:', error);
      }
    }

    // shareId가 있으면 새 URL 형식 사용
    if (finalShareId) {
      url = `${window.location.origin}/result/${finalShareId}`;
      console.log('Using shareId for URL:', finalShareId);
    } else {
      // shareId가 없으면 현재 URL 사용 (fallback)
      // 하지만 이 경우는 거의 발생하지 않아야 함
      url = window.location.href;
      console.log('No shareId available, using current URL as fallback:', url);

      // 현재 URL이 /result로 끝나는 경우 (공유 ID가 없는 경우)
      // 다시 한번 저장 시도
      if (url.endsWith('/result') && result) {
        console.log('URL ends with /result, trying to save again...');
        try {
          const saveResponse = await saveResult();
          if (saveResponse.success && saveResponse.shareId) {
            url = `${window.location.origin}/result/${saveResponse.shareId}`;
            console.log('Updated URL after saving again:', url);

            // 저장 성공 시 새 URL 형식으로 리다이렉트
            router.replace(`/result/${saveResponse.shareId}`);
            return;
          }
        } catch (error) {
          console.error('Error saving result before sharing (second attempt):', error);
        }
      }
    }

    console.log('Final sharing URL:', url);

    try {
      if (navigator.share) {
        await navigator.share({
          title: `내 MBTI 연애 유형은 ${mbtiType}!`,
          text: shareText,
          url: url,
        });
        console.log('Successfully shared');
      } else {
        copyToClipboard(shareText, url);
      }
    } catch (error) {
      console.error('공유 실패:', error);
      copyToClipboard(shareText, url);
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
