'use client';

import { useState, useEffect, Suspense } from 'react';
import { Box, Typography, Button, Snackbar, Alert, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
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
import EmailIcon from '@mui/icons-material/Email';

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
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [savedResult, setSavedResult] = useState(null);

  // URL에서 공유 ID 가져오기
  const shareId = searchParams.get('id');

  // 페이지 로드 시 테스트 완료 여부 확인 또는 공유된 결과 가져오기
  useEffect(() => {
    const loadResult = async () => {
      try {
        setIsLoading(true);

        // 공유 ID가 있는 경우 해당 결과 가져오기
        if (shareId) {
          const sharedResult = await getTestResultByShareId(shareId);

          if (sharedResult) {
            setSavedResult(sharedResult);
          } else {
            // 결과가 없는 경우 테스트 페이지로 이동
            router.push('/test');
          }
        } else if (!isTestCompleted && !result) {
          // 테스트를 완료하지 않은 경우 테스트 페이지로 이동
          router.push('/test');
        } else if (result && !savedResult) {
          // 결과가 있고 아직 저장되지 않은 경우 결과 저장
          saveResult();
        }
      } catch (error) {
        console.error('Error loading result:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadResult();
  }, [isTestCompleted, result, router, shareId]);

  // 결과 저장
  const saveResult = async (userEmail = null) => {
    if (!result) return;

    try {
      const { success, shareId, sessionId: resultSessionId } = await saveTestResult(
        result.scores,
        result.mbtiType,
        user?.id,
        sessionId,
        userEmail
      );

      if (success && shareId) {
        // 공유 URL 생성
        const url = `${window.location.origin}/result?id=${shareId}`;
        setShareUrl(url);
      }
    } catch (error) {
      console.error('Error saving result:', error);
    }
  };

  // 테스트 재시작 핸들러
  const handleRestart = () => {
    handleRestartTest();
    router.push('/test');
  };

  // 결과 공유 핸들러
  const handleShare = () => {
    const mbtiType = savedResult?.mbtiType || result?.mbtiType;
    const mbtiName = getMbtiName(mbtiType);
    const shareText = `내 MBTI 연애 유형은 ${mbtiType}(${mbtiName})! 달빛 연애 연구소에서 당신의 MBTI 연애 유형도 알아보세요!`;
    const url = shareUrl || window.location.href;

    if (navigator.share) {
      navigator.share({
        title: `내 MBTI 연애 유형은 ${mbtiType}!`,
        text: shareText,
        url: url,
      })
      .catch((error) => {
        console.error('공유 실패:', error);
        copyToClipboard(shareText, url);
      });
    } else {
      copyToClipboard(shareText, url);
    }
  };

  // 클립보드에 복사
  const copyToClipboard = (text, url) => {
    const shareText = `${text} ${url}`;

    navigator.clipboard.writeText(shareText)
      .then(() => {
        setShowShareAlert(true);
      })
      .catch((error) => {
        console.error('클립보드 복사 실패:', error);
      });
  };

  // 이메일 저장 핸들러
  const handleSaveEmail = () => {
    // 이메일 유효성 검사
    if (!email) {
      setEmailError('이메일을 입력해주세요.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('유효한 이메일 주소를 입력해주세요.');
      return;
    }

    // 이메일로 결과 저장
    saveResult(email);
    setShowEmailDialog(false);
  };

  // MBTI 유형 이름 가져오기
  const getMbtiName = (mbtiType) => {
    const mbtiDescription = getMbtiDescription(mbtiType);
    return mbtiDescription?.name || '';
  };

  // 로딩 중 표시
  if (isLoading) {
    return (
      <PageLayout variant="result">
        {/* 별 반짝임 배경 효과 */}
        <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
          <StarryBackground starCount={30} shootingStarCount={2} fogCount={3} />
        </Box>

        <Section centered fullHeight>
          <AnimatedElement animation="pulse" duration="slow">
            <Box component="img"
              src="/images/tarot-back.svg"
              alt="타로 카드"
              sx={{
                width: 150,
                height: 225,
                mb: 4,
                animation: 'spin 3s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotateY(0deg)' },
                  '100%': { transform: 'rotateY(360deg)' }
                }
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
      <PageLayout variant="result">
        {/* 별 반짝임 배경 효과 */}
        <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
          <StarryBackground starCount={30} shootingStarCount={2} fogCount={3} />
        </Box>

        <Section centered fullHeight>
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
    <PageLayout variant="result">
      {/* 별 반짝임 배경 효과 */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
        <StarryBackground starCount={50} shootingStarCount={3} fogCount={5} />
      </Box>

      <Section centered>
        <AnimatedElement animation="fadeIn" duration="normal">
          <Box sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <AnimatedElement animation="pulse" duration="slow">
                <FavoriteIcon sx={{
                  fontSize: 60,
                  color: 'secondary.main',
                  filter: 'drop-shadow(0 0 10px rgba(156, 39, 176, 0.5))'
                }} />
              </AnimatedElement>
            </Box>

            <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
              당신의 MBTI 연애 유형 결과
            </Typography>

            <TestResult
              mbtiType={displayResult.mbtiType}
              scores={displayResult.scores}
              idealType={savedResult?.idealType || idealType}
              worstMatch={savedResult?.worstMatch || worstMatch}
              onRestart={handleRestart}
              onShare={handleShare}
            />

            {!user && !shareId && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<EmailIcon />}
                  onClick={() => setShowEmailDialog(true)}
                >
                  이메일로 결과 저장하기
                </Button>
              </Box>
            )}
          </Box>
        </AnimatedElement>
      </Section>

      {/* 이메일 입력 다이얼로그 */}
      <Dialog open={showEmailDialog} onClose={() => setShowEmailDialog(false)}>
        <DialogTitle>이메일로 결과 저장하기</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            이메일을 입력하시면 결과를 저장하고 언제든지 다시 확인할 수 있습니다.
          </Typography>
          <TextField
            margin="dense"
            label="이메일"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowEmailDialog(false)}>취소</Button>
          <Button onClick={handleSaveEmail} color="primary">저장</Button>
        </DialogActions>
      </Dialog>

      {/* 공유 알림 */}
      <Snackbar
        open={showShareAlert}
        autoHideDuration={3000}
        onClose={() => setShowShareAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowShareAlert(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          결과 링크가 클립보드에 복사되었습니다!
        </Alert>
      </Snackbar>
    </PageLayout>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <PageLayout variant="result">
        {/* 별 반짝임 배경 효과 */}
        <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
          <StarryBackground starCount={30} shootingStarCount={2} fogCount={3} />
        </Box>

        <Section centered fullHeight>
          <AnimatedElement animation="pulse" duration="slow">
            <Box component="img"
              src="/images/tarot-back.svg"
              alt="타로 카드"
              sx={{
                width: 150,
                height: 225,
                mb: 4,
                animation: 'spin 3s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotateY(0deg)' },
                  '100%': { transform: 'rotateY(360deg)' }
                }
              }}
            />
          </AnimatedElement>
          <Typography variant="h4">결과를 불러오는 중...</Typography>
        </Section>
      </PageLayout>
    }>
      <ResultContent />
    </Suspense>
  );
}
