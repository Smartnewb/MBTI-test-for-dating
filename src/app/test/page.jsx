'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AnimatedElement } from '../components/animations';
import { PageLayout, Section } from '../components/layout';
import MysticalButton from '../components/MysticalButton';
import TarotCard from '../components/TarotCard';
import useMbtiTest from '../hooks/useMbtiTest';

/**
 * MBTI 테스트 시작 페이지
 *
 * 테스트 소개 및 시작 버튼을 제공합니다.
 */
export default function TestPage() {
  const router = useRouter();
  const { handleStartTest, resetStore, isTestStarted } = useMbtiTest();
  const [isLoading, setIsLoading] = useState(true);

  // 페이지 로드 시 테스트 상태 초기화
  useEffect(() => {
    resetStore();
    setIsLoading(false);
  }, [resetStore]);

  // 테스트 시작 핸들러
  const startTest = () => {
    handleStartTest();
    router.push('/test/question');
  };

  if (isLoading) {
    return (
      <PageLayout variant="test">
        <Section centered fullHeight>
          <Typography variant="h4">로딩 중...</Typography>
        </Section>
      </PageLayout>
    );
  }

  return (
    <PageLayout variant="test">
      <Section centered>
        <AnimatedElement animation="fadeIn" duration="normal">
          <TarotCard variant="mystical" sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 4 }}>
            <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
              달빛 연애 연구소의 MBTI 연애 테스트
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              당신의 MBTI 유형을 기반으로 연애 스타일과 이상형을 알아보세요.
              24개의 질문에 답하면 당신의 MBTI 유형과 연애 성향, 그리고 가장 잘 맞는 이상형을 알려드립니다.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              각 질문에는 정답이 없습니다. 평소 연애 상황에서 당신의 생각과 행동에 가장 가까운 답변을 선택해주세요.
              솔직하게 답변할수록 더 정확한 결과를 얻을 수 있습니다.
            </Typography>

            <Typography variant="body1" sx={{ mb: 5 }}>
              테스트는 약 5-10분 정도 소요됩니다. 중간에 테스트를 중단해도 진행 상황은 저장됩니다.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <MysticalButton
                variant="mystical"
                size="large"
                onClick={startTest}
              >
                테스트 시작하기
              </MysticalButton>
            </Box>
          </TarotCard>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" duration="normal" delay={300}>
          <Paper sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 4, bgcolor: 'background.paper' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              MBTI란 무엇인가요?
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              MBTI(Myers-Briggs Type Indicator)는 개인의 성격 유형을 16가지로 분류하는 성격 유형 지표입니다.
              각 유형은 4가지 선호 경향의 조합으로 이루어집니다:
            </Typography>

            <Box component="ul" sx={{ mb: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1">
                  <strong>에너지 방향(E/I)</strong>: 외향형(Extraversion) vs 내향형(Introversion)
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1">
                  <strong>인식 기능(S/N)</strong>: 감각형(Sensing) vs 직관형(iNtuition)
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1">
                  <strong>판단 기능(T/F)</strong>: 사고형(Thinking) vs 감정형(Feeling)
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1">
                  <strong>생활 양식(J/P)</strong>: 판단형(Judging) vs 인식형(Perceiving)
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1">
              이 테스트는 연애 관계에서의 선호 경향을 중심으로 질문이 구성되어 있어,
              당신의 연애 스타일과 이상형을 더 정확하게 파악할 수 있습니다.
            </Typography>
          </Paper>
        </AnimatedElement>
      </Section>
    </PageLayout>
  );
}
