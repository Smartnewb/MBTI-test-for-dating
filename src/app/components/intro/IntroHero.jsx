'use client';

import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { AnimatedElement } from '../animations';
import { Section } from '../layout';
import TarotCard from '../TarotCard';
import MysticalButton from '../MysticalButton';
import { throttle } from '../../utils/performance';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';

// 스타일링된 히어로 컨테이너
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url(/images/stars-bg.png)',
    backgroundSize: 'cover',
    opacity: 0.3,
    pointerEvents: 'none',
    zIndex: -1,
  },
}));

// 스타일링된 로고 타이틀
const LogoTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", "Noto Serif KR", serif',
  fontWeight: 700,
  fontSize: '3.5rem',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',

  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

// 스타일링된 서브타이틀
const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontWeight: 500,
  fontSize: '1.5rem',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

// 스타일링된 별 장식
const Star = styled(Box)(({ theme, size, top, left, delay }) => ({
  position: 'absolute',
  width: size,
  height: size,
  top,
  left,
  borderRadius: '50%',
  background: theme.palette.secondary.main,
  boxShadow: `0 0 ${size}px ${size / 2}px ${theme.palette.secondary.main}`,
  animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${delay}s infinite`,
  opacity: 0.7,
  zIndex: -1,
}));

// 스타일링된 카드 컨테이너
const CardContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  perspective: '1000px',
  width: '100%',
  height: '100%',

  '&:hover .card': {
    transform: 'rotateY(10deg) rotateX(5deg)',
  },
}));

/**
 * 인트로 히어로 컴포넌트
 *
 * 랜딩 페이지의 히어로 섹션을 표시합니다.
 */
export default function IntroHero() {
  const router = useRouter();
  const [stars, setStars] = useState([]);

  // 별 생성 (메모이제이션)
  useEffect(() => {
    // 별 생성 함수
    const generateStars = (count) => {
      const newStars = [];

      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          size: 2 + Math.random() * 4,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 5,
        });
      }

      return newStars;
    };

    // 별 생성 (캐싱)
    const cachedStars = sessionStorage.getItem('heroStars');

    if (cachedStars) {
      try {
        setStars(JSON.parse(cachedStars));
      } catch (error) {
        console.error('Failed to parse cached stars:', error);
        const newStars = generateStars(20);
        setStars(newStars);
        sessionStorage.setItem('heroStars', JSON.stringify(newStars));
      }
    } else {
      const newStars = generateStars(20);
      setStars(newStars);
      sessionStorage.setItem('heroStars', JSON.stringify(newStars));
    }
  }, []);

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

  return (
    <HeroContainer>
      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* 왼쪽 텍스트 영역 */}
            <Grid item xs={12} md={6}>
              <AnimatedElement animation="fadeIn" duration="normal">
                <LogoTitle variant="h1">
                  달빛 연애 연구소
                </LogoTitle>

                <Subtitle variant="h2">
                  당신의 MBTI로 알아보는 연애 유형과 이상형
                </Subtitle>

                <AnimatedElement animation="slideUp" duration="normal" delay={300}>
                  <Typography variant="body1" sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
                    타로 카드의 신비로운 힘으로 당신의 MBTI 연애 유형을 분석해드립니다.
                    24개의 질문에 답하고 당신의 연애 스타일과 가장 잘 맞는 이상형을 찾아보세요.
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <MysticalButton
                      variant="mystical"
                      size="large"
                      onClick={handleStartTest}
                      startIcon={<AutoAwesomeIcon />}
                    >
                      테스트 시작하기
                    </MysticalButton>
                  </Box>
                </AnimatedElement>
              </AnimatedElement>
            </Grid>

            {/* 오른쪽 카드 영역 */}
            <Grid item xs={12} md={6}>
              <AnimatedElement animation="zoomIn" duration="slow" delay={500}>
                <CardContainer>
                  <Box sx={{ position: 'relative' }}>
                    <TarotCard
                      variant="primary"
                      title="당신의 MBTI 연애 유형은?"
                      sx={{
                        maxWidth: { xs: 280, md: 320 },
                        mx: 'auto',
                        transition: 'transform 0.5s ease-in-out',
                        transform: 'rotateY(0) rotateX(0)',
                        className: 'card'
                      }}
                    >
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        p: 2
                      }}>
                        <FavoriteIcon sx={{
                          fontSize: 60,
                          color: 'white',
                          mb: 2,
                          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
                        }} />

                        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 2 }}>
                          MBTI 연애 테스트
                        </Typography>

                        <Typography variant="body1" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
                          당신의 MBTI 유형을 기반으로 연애 성향과 이상형을 분석해드립니다.
                        </Typography>

                        <PsychologyIcon sx={{
                          fontSize: 40,
                          color: 'white',
                          opacity: 0.8
                        }} />
                      </Box>
                    </TarotCard>

                    {/* 장식용 카드 (뒤에 겹쳐서 표시) */}
                    <TarotCard
                      variant="secondary"
                      sx={{
                        maxWidth: { xs: 280, md: 320 },
                        height: 450,
                        position: 'absolute',
                        top: 10,
                        left: '50%',
                        transform: 'translateX(-50%) rotateZ(-5deg)',
                        zIndex: -1,
                        opacity: 0.7
                      }}
                    />
                  </Box>
                </CardContainer>
              </AnimatedElement>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* 별 장식 */}
      {stars.map((star) => (
        <Star
          key={star.id}
          size={star.size}
          top={star.top}
          left={star.left}
          delay={star.delay}
        />
      ))}
    </HeroContainer>
  );
}
