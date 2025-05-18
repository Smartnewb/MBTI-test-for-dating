'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { AnimatedElement, AnimatedBackground, AnimatedIcon } from '../animations';
import { Section } from '../layout';
import TarotCard from '../TarotCard';
import MysticalButton from '../MysticalButton';
import { throttle } from '../../utils/performance';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightsStayIcon from '@mui/icons-material/NightsStay';

// 스타일링된 히어로 컨테이너
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
}));

// 스타일링된 달 요소
const Moon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10%',
  right: '10%',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: `radial-gradient(circle at 30% 30%, ${theme.palette.common.white}, ${theme.palette.grey[300]})`,
  boxShadow: `0 0 30px 10px ${theme.palette.primary.light}40`,
  opacity: 0.7,
  zIndex: 0,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '15%',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: `radial-gradient(circle at center, ${theme.palette.grey[300]}, transparent)`,
    opacity: 0.8,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '40%',
    left: '60%',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    background: `radial-gradient(circle at center, ${theme.palette.grey[300]}, transparent)`,
    opacity: 0.6,
  },

  [theme.breakpoints.down('md')]: {
    width: '80px',
    height: '80px',
    top: '5%',
    right: '5%',
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
  textShadow: `0 0 15px ${theme.palette.primary.main}80`,
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '2px',
    background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, transparent)`,
    opacity: 0.7,
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',

    '&::after': {
      width: '80px',
    },
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
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '30px',
    height: '30px',
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${encodeURIComponent(theme.palette.secondary.main)}'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    opacity: 0.3,
    zIndex: -1,
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

// 스타일링된 별 장식
const Star = styled(Box)(({ theme, size, top, left, delay, color }) => ({
  position: 'absolute',
  width: size,
  height: size,
  top,
  left,
  borderRadius: '50%',
  background: color || theme.palette.secondary.main,
  boxShadow: `0 0 ${size}px ${size / 2}px ${color || theme.palette.secondary.main}`,
  animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${delay}s infinite`,
  opacity: 0.7,
  zIndex: 0,

  '@keyframes twinkle': {
    '0%, 100%': {
      opacity: 0.7,
      transform: 'scale(1)',
    },
    '50%': {
      opacity: 0.3,
      transform: 'scale(0.8)',
    },
  },
}));

// 스타일링된 유성 장식
const ShootingStar = styled(Box)(({ theme, top, left, delay, duration }) => ({
  position: 'absolute',
  top,
  left,
  width: '100px',
  height: '2px',
  background: `linear-gradient(90deg, transparent, ${theme.palette.common.white})`,
  opacity: 0,
  zIndex: 0,
  transform: 'rotate(-45deg)',
  animation: `shootingStar ${duration}s linear ${delay}s infinite`,
  boxShadow: `0 0 10px 1px ${theme.palette.common.white}`,

  '@keyframes shootingStar': {
    '0%': {
      opacity: 0,
      transform: 'translateX(0) translateY(0) rotate(-45deg)',
    },
    '10%, 15%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
      transform: 'translateX(-500px) translateY(500px) rotate(-45deg)',
    },
  },
}));

// 스타일링된 카드 컨테이너
const CardContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  perspective: '1000px',
  width: '100%',
  height: '100%',

  '&:hover .card': {
    transform: 'rotateY(10deg) rotateX(5deg)',
    boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.3),
                0 0 20px ${theme.palette.primary.main}40,
                0 0 30px ${theme.palette.secondary.main}30`,
  },

  '&:hover .card-back': {
    transform: 'translateX(-20px) translateY(20px) rotateZ(-8deg)',
  },

  '&:hover .card-glow': {
    opacity: 1,
  },
}));

// 스타일링된 카드 글로우 효과
const CardGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: theme.shape.borderRadius * 2,
  background: `radial-gradient(circle at center, ${theme.palette.primary.main}20 0%, transparent 70%)`,
  opacity: 0,
  transition: 'opacity 0.5s ease-in-out',
  pointerEvents: 'none',
  zIndex: 1,
}));

/**
 * 인트로 히어로 컴포넌트
 *
 * 랜딩 페이지의 히어로 섹션을 표시합니다.
 * 신비로운 타로 카드 테마와 별/달 배경 애니메이션을 제공합니다.
 */
export default function IntroHero() {
  const router = useRouter();
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 별 생성 (메모이제이션)
  useEffect(() => {
    // 별 생성 함수
    const generateStars = (count) => {
      const newStars = [];
      const colors = ['#D4AF37', '#9C27B0', '#6B3FA0', '#FFFFFF'];

      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          size: 2 + Math.random() * 4,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      return newStars;
    };

    // 유성 생성 함수
    const generateShootingStars = (count) => {
      const newShootingStars = [];

      for (let i = 0; i < count; i++) {
        newShootingStars.push({
          id: i,
          top: `${Math.random() * 30}%`,
          left: `${Math.random() * 70 + 30}%`,
          delay: Math.random() * 15 + 5,
          duration: Math.random() * 3 + 2,
        });
      }

      return newShootingStars;
    };

    // 별 생성 (캐싱)
    const cachedStars = sessionStorage.getItem('heroStars');
    const cachedShootingStars = sessionStorage.getItem('heroShootingStars');

    if (cachedStars && cachedShootingStars) {
      try {
        setStars(JSON.parse(cachedStars));
        setShootingStars(JSON.parse(cachedShootingStars));
      } catch (error) {
        console.error('Failed to parse cached stars:', error);
        const newStars = generateStars(30);
        const newShootingStars = generateShootingStars(3);
        setStars(newStars);
        setShootingStars(newShootingStars);
        sessionStorage.setItem('heroStars', JSON.stringify(newStars));
        sessionStorage.setItem('heroShootingStars', JSON.stringify(newShootingStars));
      }
    } else {
      const newStars = generateStars(30);
      const newShootingStars = generateShootingStars(3);
      setStars(newStars);
      setShootingStars(newShootingStars);
      sessionStorage.setItem('heroStars', JSON.stringify(newStars));
      sessionStorage.setItem('heroShootingStars', JSON.stringify(newShootingStars));
    }
  }, []);

  // 카드 3D 효과 처리
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      // 마우스 위치와 카드 중심 간의 거리 계산
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;

      // 회전 각도 계산 (최대 10도)
      const rotateY = mouseX * 0.05;
      const rotateX = -mouseY * 0.05;

      setMousePosition({ x: rotateY, y: rotateX });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      {/* 배경 애니메이션 */}
      <AnimatedBackground type="stars" starCount={0} />

      {/* 달 장식 */}
      <Moon>
        <AnimatedIcon animation="pulse" duration="slow" infinite>
          <NightsStayIcon sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 40,
            color: 'rgba(255,255,255,0.1)'
          }} />
        </AnimatedIcon>
      </Moon>

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
                  <Typography variant="body1" sx={{
                    mb: 4,
                    textAlign: { xs: 'center', md: 'left' },
                    position: 'relative',
                    zIndex: 2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    타로 카드의 신비로운 힘으로 당신의 MBTI 연애 유형을 분석해드립니다.
                    24개의 질문에 답하고 당신의 연애 스타일과 가장 잘 맞는 이상형을 찾아보세요.
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <AnimatedElement animation="pulse" duration="slow" delay={1000}>
                      <MysticalButton
                        variant="mystical"
                        size="large"
                        onClick={handleStartTest}
                        startIcon={<AutoAwesomeIcon />}
                        sx={{
                          position: 'relative',
                          zIndex: 2,
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: theme => `0 10px 20px -5px ${theme.palette.primary.main}40, 0 0 15px ${theme.palette.secondary.main}30`,
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        테스트 시작하기
                      </MysticalButton>
                    </AnimatedElement>
                  </Box>
                </AnimatedElement>
              </AnimatedElement>
            </Grid>

            {/* 오른쪽 카드 영역 */}
            <Grid item xs={12} md={6}>
              <AnimatedElement animation="zoomIn" duration="slow" delay={500}>
                <CardContainer>
                  <Box sx={{ position: 'relative' }} ref={cardRef}>
                    <CardGlow className="card-glow" />

                    <TarotCard
                      variant="primary"
                      title="당신의 MBTI 연애 유형은?"
                      sx={{
                        maxWidth: { xs: 280, md: 320 },
                        mx: 'auto',
                        transition: 'all 0.5s ease-in-out',
                        transform: `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`,
                        className: 'card'
                      }}
                    >
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        p: 2,
                        position: 'relative',
                        overflow: 'hidden',
                      }}>
                        <AnimatedIcon animation="pulse" duration="slow" infinite size="large" color="white">
                          <FavoriteIcon fontSize="inherit" sx={{
                            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
                          }} />
                        </AnimatedIcon>

                        <Typography variant="h4" sx={{
                          color: 'white',
                          textAlign: 'center',
                          mb: 2,
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          fontFamily: theme => theme.typography.fontFamily.secondary,
                        }}>
                          MBTI 연애 테스트
                        </Typography>

                        <Typography variant="body1" sx={{
                          color: 'white',
                          textAlign: 'center',
                          mb: 4,
                          textShadow: '0 1px 3px rgba(0,0,0,0.2)'
                        }}>
                          당신의 MBTI 유형을 기반으로 연애 성향과 이상형을 분석해드립니다.
                        </Typography>

                        <Box sx={{
                          position: 'relative',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center'
                        }}>
                          <AnimatedIcon animation="float" duration="slow" infinite size="large" color="white">
                            <WbTwilightIcon fontSize="inherit" sx={{ opacity: 0.8 }} />
                          </AnimatedIcon>
                        </Box>

                        {/* 카드 장식 요소 */}
                        <Box sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'url("/images/tarot-pattern.png")',
                          backgroundSize: '200px',
                          backgroundRepeat: 'repeat',
                          opacity: 0.05,
                          zIndex: -1,
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
                        opacity: 0.7,
                        transition: 'transform 0.5s ease-in-out',
                        className: 'card-back'
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
          color={star.color}
        />
      ))}

      {/* 유성 장식 */}
      {shootingStars.map((star) => (
        <ShootingStar
          key={star.id}
          top={star.top}
          left={star.left}
          delay={star.delay}
          duration={star.duration}
        />
      ))}
    </HeroContainer>
  );
}
