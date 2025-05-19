'use client';

import { useMemo, useCallback, useState, useEffect } from 'react';
import { Box, Typography, Container, IconButton, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import AnimatedElement from '../animations/AnimatedElement';
import AnimatedIcon from '../animations/AnimatedIcon';
import AnimatedBackground from '../animations/AnimatedBackground';
import { Section } from '../layout';
import { MysticalDivider } from '../layout';
import { CallToAction } from '../engagement';
import { MysticalSection, MysticalText } from '../mystical';
import { throttle } from '../../utils/performance';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// 스타일링된 카드 컨테이너
const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  position: 'relative',
  perspective: '1000px',
  minHeight: 150, // 높이 증가
  overflow: 'hidden',
  width: '100%',
  maxWidth: 800, // 최대 너비 증가
  margin: '0 auto',

  // 반응형 크기 조정
  [theme.breakpoints.down('md')]: {
    minHeight: 120,
    maxWidth: 700,
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: 100,
    maxWidth: 600,
  },
}));

// 스타일링된 카드 트랙
const CardsTrack = styled(Box)(({ theme, offset }) => ({
  display: 'flex',
  transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
  transform: `translateX(${offset}%)`,
  position: 'relative',
  width: '100%',
  padding: theme.spacing(1, 0),
}));

// 스타일링된 캐러셀 네비게이션 버튼
const CarouselNavButton = styled(IconButton)(({ theme, direction }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 20,
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    transform: 'translateY(-50%) scale(1.1)',
  },
  transition: 'all 0.3s ease',
  ...(direction === 'prev' ? { left: -15 } : { right: -15 }),
  [theme.breakpoints.down('sm')]: {
    ...(direction === 'prev' ? { left: -8 } : { right: -8 }),
    padding: 4,
  },
}));

// 스타일링된 미니 카드 (TarotCard 대신 직접 Card 사용)
const MiniCard = styled(Card)(({ theme, active, isHovered, color }) => ({
  width: '100%', // 너비를 100%로 설정하여 컨테이너에 맞춤
  maxWidth: 280, // 최대 너비 증가
  height: 100, // 카드 높이 증가
  margin: theme.spacing(0, 1), // 마진 줄임
  flex: '0 0 auto',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  zIndex: isHovered ? 10 : active ? 5 : 1,
  opacity: active ? 1 : 0.7,
  transform: active ? (isHovered ? 'scale(1.05)' : 'scale(1)') : 'scale(0.85)',
  boxShadow:
    isHovered || active
      ? `0 8px 16px rgba(0, 0, 0, 0.3), 0 0 15px ${color || theme.palette.primary.main}40`
      : `0 4px 10px rgba(0, 0, 0, 0.2)`,
  borderRadius: 12,
  background: color
    ? `linear-gradient(135deg, ${color}, ${color}DD)`
    : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  overflow: 'hidden',

  // 반응형 크기 조정
  [theme.breakpoints.down('md')]: {
    height: 80, // 태블릿에서는 높이 줄임
    maxWidth: 220,
  },
  [theme.breakpoints.down('sm')]: {
    height: 70, // 모바일에서는 더 줄임
    maxWidth: 180,
  },

  // 그라데이션 효과
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)',
    opacity: 0.4,
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(1, 0),
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

// 스타일링된 버튼 컨테이너
const ButtonContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '300px',
    background: `radial-gradient(circle at center, ${theme.palette.primary.main}20 0%, transparent 70%)`,
    opacity: 0.5,
    zIndex: 0,
    borderRadius: '50%',
  },
}));

/**
 * 인트로 행동 유도 컴포넌트
 *
 * 랜딩 페이지의 행동 유도 섹션을 표시합니다.
 * 타로 카드 스타일의 카드와 애니메이션 효과를 제공합니다.
 */
export default function IntroCallToAction() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [stars, setStars] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 미니 카드 데이터 (메모이제이션)
  const miniCards = useMemo(
    () => [
      {
        id: 1,
        title: 'ENFP',
        description: '열정적인 연애 탐험가',
        icon: <FavoriteIcon fontSize="small" />,
        color: '#FF6B6B', // 붉은 계열
      },
      {
        id: 2,
        title: 'INFJ',
        description: '이상적 관계의 수호자',
        icon: <WbTwilightIcon fontSize="small" />,
        color: '#4ECDC4', // 청록색 계열
      },
      {
        id: 3,
        title: 'ENTJ',
        description: '목표 지향적 연애 리더',
        icon: <StarIcon fontSize="small" />,
        color: '#9D65C9', // 보라색 계열
      },
      {
        id: 4,
        title: 'INTP',
        description: '논리적인 연애 분석가',
        icon: <AutoAwesomeIcon fontSize="small" />,
        color: '#5D576B', // 어두운 보라색 계열
      },
      {
        id: 5,
        title: 'ISFJ',
        description: '헌신적인 연애 수호자',
        icon: <WbTwilightIcon fontSize="small" />,
        color: '#F8961E', // 주황색 계열
      },
      {
        id: 6,
        title: 'ESTP',
        description: '모험적인 연애 도전자',
        icon: <StarIcon fontSize="small" />,
        color: '#577590', // 청색 계열
      },
      {
        id: 7,
        title: 'INTJ',
        description: '전략적인 연애 설계자',
        icon: <AutoAwesomeIcon fontSize="small" />,
        color: '#F94144', // 빨간색 계열
      },
      {
        id: 8,
        title: 'ESFP',
        description: '즐거운 연애 연예인',
        icon: <FavoriteIcon fontSize="small" />,
        color: '#43AA8B', // 녹색 계열
      },
    ],
    []
  );

  // 캐러셀 자동 재생 효과
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveCardIndex(prev => (prev + 1) % miniCards.length);
      }, 2500); // 2.5초마다 다음 카드로 이동 (더 부드러운 흐름)
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, miniCards.length]);

  // 별 생성 (메모이제이션)
  useEffect(() => {
    // 별 생성 함수
    const generateStars = count => {
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

    // 별 생성 (캐싱)
    const cachedStars = sessionStorage.getItem('ctaStars');

    if (cachedStars) {
      try {
        setStars(JSON.parse(cachedStars));
      } catch (error) {
        console.error('Failed to parse cached stars:', error);
        const newStars = generateStars(15);
        setStars(newStars);
        sessionStorage.setItem('ctaStars', JSON.stringify(newStars));
      }
    } else {
      const newStars = generateStars(15);
      setStars(newStars);
      sessionStorage.setItem('ctaStars', JSON.stringify(newStars));
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

  // 카드 호버 핸들러
  const handleCardHover = useCallback(id => {
    setHoveredCard(id);
  }, []);

  // 카드 호버 아웃 핸들러
  const handleCardLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  // 캐러셀 이동 핸들러
  const handlePrevCard = useCallback(() => {
    setIsAutoPlaying(false); // 수동 조작 시 자동 재생 중지
    setActiveCardIndex(prev => (prev - 1 + miniCards.length) % miniCards.length);
  }, [miniCards.length]);

  const handleNextCard = useCallback(() => {
    setIsAutoPlaying(false); // 수동 조작 시 자동 재생 중지
    setActiveCardIndex(prev => (prev + 1) % miniCards.length);
  }, [miniCards.length]);

  return (
    <MysticalSection variant="mystical" hasStars={false} sx={{ pb: 8 }}>
      <Box sx={{ position: 'relative', overflow: 'visible' }}>
        <AnimatedBackground type="stars" starCount={0} />

        {/* 별 장식 */}
        {stars.map(star => (
          <Star
            key={star.id}
            size={star.size}
            top={star.top}
            left={star.left}
            delay={star.delay}
            color={star.color}
          />
        ))}

        <Container maxWidth="lg">
          <AnimatedElement animation="fadeIn" duration="normal" onScroll>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <MysticalText
                variant="h2"
                textVariant="mystical"
                sx={{
                  fontWeight: 'bold',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                }}
              >
                당신의 MBTI 연애 유형은 무엇일까요?
              </MysticalText>

              <MysticalDivider
                variant="mystical"
                thickness={2}
                glow
                decorated
                sx={{ maxWidth: 300, mx: 'auto', my: 2 }}
              />

              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  color: 'white',
                  opacity: 0.9,
                  maxWidth: 700,
                  mx: 'auto',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                }}
              >
                지금 바로 테스트를 시작하고 당신의 연애 스타일과 이상형을 알아보세요. 5분 안에
                완료할 수 있는 간단한 테스트로 당신의 MBTI 연애 유형을 발견하세요!
              </Typography>
            </Box>
          </AnimatedElement>

          <AnimatedElement animation="zoomIn" duration="normal" delay={300} onScroll>
            <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto' }}>
              {/* 캐러셀 네비게이션 버튼 */}
              <CarouselNavButton
                direction="prev"
                onClick={handlePrevCard}
                aria-label="이전 카드"
                size="small"
              >
                <AnimatedIcon animation="pulse" duration="slow" infinite color="white" size="small">
                  <NavigateBeforeIcon />
                </AnimatedIcon>
              </CarouselNavButton>

              <CarouselNavButton
                direction="next"
                onClick={handleNextCard}
                aria-label="다음 카드"
                size="small"
              >
                <AnimatedIcon animation="pulse" duration="slow" infinite color="white" size="small">
                  <NavigateNextIcon />
                </AnimatedIcon>
              </CarouselNavButton>

              {/* 카드 캐러셀 */}
              <CardsContainer>
                <CardsTrack offset={-activeCardIndex * 100}>
                  {miniCards.map((card, index) => {
                    // 현재 활성 카드 여부
                    const isActive = index === activeCardIndex;

                    return (
                      <Box
                        key={card.id}
                        sx={{
                          flex: '0 0 100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: { xs: 1.5, sm: 2, md: 2.5 },
                        }}
                      >
                        <MiniCard
                          active={isActive}
                          isHovered={hoveredCard === card.id}
                          color={card.color}
                          onMouseEnter={() => handleCardHover(card.id)}
                          onMouseLeave={handleCardLeave}
                        >
                          <CardContent
                            sx={{
                              p: { xs: 1, sm: 1.5, md: 2 },
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                width: '100%',
                                position: 'relative',
                              }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  mr: { xs: 1, sm: 1.5, md: 2 },
                                  ml: { xs: 0.5, sm: 0.5, md: 0.5 },
                                }}
                              >
                                <AnimatedIcon
                                  animation={isActive ? 'pulse' : 'none'}
                                  duration="slow"
                                  infinite={isActive}
                                  color="white"
                                  size={isActive ? 'medium' : 'small'}
                                >
                                  {card.icon}
                                </AnimatedIcon>
                              </Box>

                              <Box sx={{ flex: 1 }}>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
                                    lineHeight: 1.2,
                                    mb: 0.5,
                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                                    letterSpacing: '0.02em',
                                  }}
                                >
                                  {card.title}
                                </Typography>

                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: 'white',
                                    fontWeight: 'medium',
                                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                                    lineHeight: 1.2,
                                    opacity: 0.9,
                                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                                  }}
                                >
                                  {card.description}
                                </Typography>
                              </Box>
                            </Box>
                          </CardContent>
                        </MiniCard>
                      </Box>
                    );
                  })}
                </CardsTrack>
              </CardsContainer>

              {/* 캐러셀 인디케이터 */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                {miniCards.map((card, index) => (
                  <Box
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveCardIndex(index);
                    }}
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      mx: 0.3,
                      backgroundColor:
                        index === activeCardIndex
                          ? card.color || 'white'
                          : 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      transform: index === activeCardIndex ? 'scale(1.2)' : 'scale(1)',
                      boxShadow:
                        index === activeCardIndex ? `0 0 5px ${card.color || 'white'}80` : 'none',
                      '&:hover': {
                        backgroundColor: card.color || 'white',
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </AnimatedElement>

          <AnimatedElement animation="slideUp" duration="normal" delay={500} onScroll>
            <ButtonContainer>
              <CallToAction
                title="지금 바로 테스트를 시작하세요!"
                description="당신의 MBTI 연애 유형을 알아보고 이상형을 찾아보세요."
                buttonText="테스트 시작하기"
                onClick={handleStartTest}
                variant="mystical"
                buttonVariant="glow"
                buttonSize="large"
                icon={
                  <AnimatedIcon animation="pulse" duration="slow" infinite>
                    <AutoAwesomeIcon />
                  </AnimatedIcon>
                }
                sx={{
                  maxWidth: 500,
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: theme =>
                    `0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px ${theme.palette.primary.main}30`,
                  '& .MuiButton-root': {
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.05)',
                      boxShadow: theme =>
                        `0 15px 30px rgba(0, 0, 0, 0.3), 0 0 30px ${theme.palette.primary.main}50`,
                    },
                  },
                }}
              />
            </ButtonContainer>
          </AnimatedElement>

          <AnimatedElement animation="fadeIn" duration="normal" delay={700} onScroll>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
              <MysticalDivider
                variant="mystical"
                thickness={1}
                text="신비로운 타로 카드의 힘으로 당신의 MBTI 연애 유형을 분석해보세요"
                sx={{ maxWidth: 600 }}
              />
            </Box>
          </AnimatedElement>
        </Container>
      </Box>
    </MysticalSection>
  );
}
