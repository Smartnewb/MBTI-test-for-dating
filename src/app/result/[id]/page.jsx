'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AnimatedElement } from '../../components/animations';
import { PageLayout, Section } from '../../components/layout';
import TestResult from '../../components/test/TestResult';
import { getTestResultByShareId } from '../../services/resultService';
import { getMbtiDescription } from '../../utils/mbti';
import { StarryBackground } from '../../components/mystical';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { logError } from '../../utils/errorLogger';
// MBTI_TYPES import 제거 (사용하지 않음)

/**
 * 공유된 MBTI 테스트 결과 페이지
 *
 * 공유 ID로 테스트 결과를 가져와 표시합니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {Object} props.params - URL 파라미터
 * @param {string} props.params.id - 공유 ID
 */
export default function SharedResultPage({ params }) {
  const router = useRouter();
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showShareAlert, setShowShareAlert] = useState(false);

  // 공유 ID
  const shareId = params.id;

  // 페이지 로드 시 공유된 결과 가져오기
  useEffect(() => {
    const fetchSharedResult = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching shared result with ID:', shareId);

        if (!shareId) {
          throw new Error('공유 ID가 없습니다.');
        }

        // 먼저 세션 스토리지에서 결과 확인 (클라이언트 사이드에서만)
        if (typeof window !== 'undefined') {
          const sessionResult = sessionStorage.getItem(`mbti_result_${shareId}`);
          if (sessionResult) {
            try {
              const parsedResult = JSON.parse(sessionResult);
              console.log('Found result in session storage:', parsedResult);

              if (parsedResult.mbtiType) {
                setResult(parsedResult);
                setIsLoading(false);
                return;
              }
            } catch (parseError) {
              console.error('Error parsing session storage result:', parseError);
            }
          }
        }

        // 세션 스토리지에 없으면 API로 가져오기
        console.log('Fetching result from API');
        const sharedResult = await getTestResultByShareId(shareId);

        // 결과가 오류 객체인 경우
        if (sharedResult && sharedResult.error) {
          console.error('Error in result data:', sharedResult);
          throw new Error(sharedResult.message || '결과를 불러오는 데 실패했습니다.');
        }

        if (!sharedResult) {
          throw new Error('결과를 찾을 수 없습니다.');
        }

        console.log('Successfully fetched result:', sharedResult);
        setResult(sharedResult);

        // 결과를 세션 스토리지에 캐싱 (클라이언트 사이드에서만)
        if (typeof window !== 'undefined') {
          try {
            sessionStorage.setItem(`mbti_result_${shareId}`, JSON.stringify(sharedResult));
            console.log('Result cached in session storage');
          } catch (storageError) {
            console.warn('Failed to cache result in session storage:', storageError);
          }
        }
      } catch (error) {
        // 오류 로깅 및 추적
        logError(error, 'fetchSharedResult', {
          shareId,
          errorType: 'RESULT_PAGE_ERROR'
        });

        setError(error.message || '결과를 불러오는 데 실패했습니다.');

        // 오류 정보 저장 (클라이언트 사이드에서만)
        if (typeof window !== 'undefined') {
          try {
            // 오류 정보 저장 (이미 logError에서 처리됨)
            // 추가 정보가 필요한 경우에만 여기에 추가
            sessionStorage.setItem(`mbti_result_error_${shareId}`, JSON.stringify({
              shareId,
              message: error.message,
              timestamp: new Date().toISOString(),
              page: 'result/[id]'
            }));
          } catch (storageError) {
            console.warn('Failed to save error info to session storage:', storageError);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSharedResult();
  }, [shareId]);

  // 테스트 시작 핸들러
  const handleStartTest = () => {
    router.push('/test');
  };

  // 결과 공유 핸들러
  const handleShare = async () => {
    if (!result || !result.mbtiType) {
      console.error('No result to share');
      return;
    }

    // MBTI 유형 이름 가져오기
    const mbtiType = result.mbtiType;
    const mbtiDescription = getMbtiDescription(mbtiType);
    const mbtiName = mbtiDescription?.name || mbtiType;

    // 공유 텍스트 생성
    const shareText = `내 MBTI 연애 유형은 ${mbtiType}(${mbtiName})! 달빛 연애 연구소에서 당신의 MBTI 연애 유형도 알아보세요!`;

    // 공유 URL 생성
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareUrl = `${origin}/result/${shareId}`;

    console.log('Sharing result with URL:', shareUrl);

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
        shareId,
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

    if (typeof navigator !== 'undefined') {
      navigator.clipboard
        .writeText(shareText)
        .then(() => {
          setShowShareAlert(true);
        })
        .catch(error => {
          // 오류 로깅 및 추적
          logError(error, 'copyToClipboard', {
            shareId,
            errorType: 'CLIPBOARD_ERROR'
          });

          console.error('클립보드 복사 실패:', error);
        });
    }
  };

  // 로딩 중 표시
  if (isLoading) {
    return (
      <PageLayout variant="result">
        <Section centered fullHeight>
          <CircularProgress color="secondary" />
          <Typography variant="h5" sx={{ mt: 3 }}>
            결과를 불러오는 중...
          </Typography>
        </Section>
      </PageLayout>
    );
  }

  // 에러 표시
  if (error) {
    return (
      <PageLayout variant="result">
        <Section centered fullHeight>
          <Typography variant="h4" color="error">
            오류가 발생했습니다
          </Typography>
          <Typography variant="body1" color="error" sx={{ mt: 2, mb: 4 }}>
            {error}
          </Typography>
          <Button variant="contained" color="primary" onClick={() => router.push('/test')}>
            테스트 시작하기
          </Button>
        </Section>
      </PageLayout>
    );
  }

  // 결과가 없는 경우
  if (!result || !result.mbtiType) {
    return (
      <PageLayout variant="result">
        <Section centered fullHeight>
          <Typography variant="h4">결과를 찾을 수 없습니다</Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            공유된 결과가 만료되었거나 존재하지 않습니다.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => router.push('/test')}>
            테스트 시작하기
          </Button>
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

      <Section centered>
        <AnimatedElement animation="fadeIn" duration="normal">
          <Box sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <AnimatedElement animation="pulse" duration="slow">
                <FavoriteIcon
                  sx={{
                    fontSize: 60,
                    color: 'secondary.main',
                    filter: 'drop-shadow(0 0 10px rgba(156, 39, 176, 0.5))',
                  }}
                />
              </AnimatedElement>
            </Box>

            <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
              MBTI 연애 유형 결과
            </Typography>

            <TestResult
              mbtiType={result.mbtiType}
              scores={result.scores}
              idealType={result.idealType}
              worstMatch={result.worstMatch}
              onRestart={handleStartTest}
              onShare={handleShare}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
              <Button variant="contained" color="primary" onClick={handleStartTest}>
                나도 테스트 해보기
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleShare}>
                결과 공유하기
              </Button>
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
