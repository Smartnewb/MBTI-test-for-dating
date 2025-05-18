'use client';

import { useMemo, useCallback } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { AnimatedElement } from '../animations';
import { Section } from '../layout';
import { CallToAction } from '../engagement';
import { MysticalSection } from '../mystical';
import { throttle } from '../../utils/performance';
import TarotCard from '../TarotCard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// 스타일링된 카드 컨테이너
const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

// 스타일링된 미니 카드
const MiniCard = styled(TarotCard)(({ theme, index }) => ({
  maxWidth: 200,
  minHeight: 300,
  margin: theme.spacing(0, 2),
  transform: `rotate(${(index - 1) * 10}deg)`,

  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(2, 0),
    transform: 'none',
  },
}));

/**
 * 인트로 행동 유도 컴포넌트
 *
 * 랜딩 페이지의 행동 유도 섹션을 표시합니다.
 */
export default function IntroCallToAction() {
  const router = useRouter();

  // 테스트 시작 핸들러 (스로틀링 적용)
  const handleStartTest = useCallback(
    throttle(() => {
      // 테스트 페이지로 이동하기 전에 로딩 상태 표시
      const loadingElement = document.createElement('div');
      loadingElement.style.position = 'fixed';
      loadingElement.style.top = '0';
      loadingElement.style.left = '0';
      loadingElement.style.width = '100%';
      loadingElement.style.height = '3px';
      loadingElement.style.background = 'linear-gradient(to right, #6B3FA0, #E91E63)';
      loadingElement.style.zIndex = '9999';
      loadingElement.style.animation = 'loading 1s infinite linear';
      document.body.appendChild(loadingElement);

      // 스타일 추가
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes loading {
          0% { width: 0; }
          50% { width: 50%; }
          100% { width: 100%; }
        }
      `;
      document.head.appendChild(style);

      // 테스트 페이지로 이동
      setTimeout(() => {
        router.push('/test');
      }, 300);
    }, 500),
    [router]
  );

  // 미니 카드 데이터 (메모이제이션)
  const miniCards = useMemo(() => [
    {
      id: 1,
      title: 'ENFP',
      description: '열정적인 연애 탐험가',
      variant: 'primary',
    },
    {
      id: 2,
      title: 'INFJ',
      description: '이상적 관계의 수호자',
      variant: 'secondary',
    },
    {
      id: 3,
      title: 'ENTJ',
      description: '목표 지향적 연애 리더',
      variant: 'primary',
    },
  ], []);

  return (
    <MysticalSection variant="mystical" hasStars>
      <Container maxWidth="lg">
        <AnimatedElement animation="fadeIn" duration="normal" onScroll>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontFamily: theme => theme.typography.fontFamily.secondary,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            당신의 MBTI 연애 유형은 무엇일까요?
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'white',
              opacity: 0.9,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            지금 바로 테스트를 시작하고 당신의 연애 스타일과 이상형을 알아보세요.
            5분 안에 완료할 수 있는 간단한 테스트로 당신의 MBTI 연애 유형을 발견하세요!
          </Typography>
        </AnimatedElement>

        <AnimatedElement animation="zoomIn" duration="normal" delay={300} onScroll>
          <CardsContainer>
            {miniCards.map((card, index) => (
              <MiniCard
                key={card.id}
                variant={card.variant}
                title={card.title}
                index={index}
                sx={{
                  opacity: 0.9,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    transform: 'translateY(-10px)',
                  }
                }}
              >
                <Typography variant="body2" sx={{ textAlign: 'center', color: 'white' }}>
                  {card.description}
                </Typography>
              </MiniCard>
            ))}
          </CardsContainer>
        </AnimatedElement>

        <AnimatedElement animation="slideUp" duration="normal" delay={500} onScroll>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CallToAction
              title="지금 바로 테스트를 시작하세요!"
              description="당신의 MBTI 연애 유형을 알아보고 이상형을 찾아보세요."
              buttonText="테스트 시작하기"
              onClick={handleStartTest}
              variant="mystical"
              buttonVariant="glow"
              buttonSize="large"
              icon={<AutoAwesomeIcon />}
              sx={{ maxWidth: 500 }}
            />
          </Box>
        </AnimatedElement>
      </Container>
    </MysticalSection>
  );
}
