'use client';

import { useMemo, useCallback, useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
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
import TarotCard from '../TarotCard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

// 스타일링된 카드 컨테이너
const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
  position: 'relative',
  perspective: '1000px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

// 스타일링된 미니 카드
const MiniCard = styled(TarotCard)(({ theme, index, isHovered }) => ({
  maxWidth: 200,
  minHeight: 300,
  margin: theme.spacing(0, 2),
  transform: `rotate(${(index - 1) * 10}deg) translateZ(${isHovered ? 50 : 0}px)`,
  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  zIndex: isHovered ? 10 : index,
  boxShadow: isHovered
    ? `0 20px 30px rgba(0, 0, 0, 0.3), 0 0 30px ${theme.palette.primary.main}40`
    : `0 10px 20px rgba(0, 0, 0, 0.2)`,

  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(2, 0),
    transform: isHovered ? 'translateY(-10px)' : 'none',
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

  // 미니 카드 데이터 (메모이제이션)
  const miniCards = useMemo(
    () => [
      {
        id: 1,
        title: 'ENFP',
        description: '열정적인 연애 탐험가',
        variant: 'primary',
        icon: <FavoriteIcon />,
        color: '#6B3FA0',
      },
      {
        id: 2,
        title: 'INFJ',
        description: '이상적 관계의 수호자',
        variant: 'secondary',
        icon: <WbTwilightIcon />,
        color: '#E91E63',
      },
      {
        id: 3,
        title: 'ENTJ',
        description: '목표 지향적 연애 리더',
        variant: 'primary',
        icon: <StarIcon />,
        color: '#FF9800',
      },
    ],
    []
  );

  return (
    <MysticalSection variant="mystical" hasStars={false}>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
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
            <CardsContainer>
              {miniCards.map((card, index) => (
                <MiniCard
                  key={card.id}
                  variant={card.variant}
                  title={card.title}
                  index={index}
                  isHovered={hoveredCard === card.id}
                  onMouseEnter={() => handleCardHover(card.id)}
                  onMouseLeave={handleCardLeave}
                  sx={{
                    opacity: hoveredCard === card.id ? 1 : 0.9,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      p: 2,
                      position: 'relative',
                    }}
                  >
                    <AnimatedIcon
                      animation={hoveredCard === card.id ? 'pulse' : 'none'}
                      duration="slow"
                      infinite={hoveredCard === card.id}
                      color="white"
                      size="large"
                      sx={{ mb: 2 }}
                    >
                      {card.icon}
                    </AnimatedIcon>

                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 1,
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {card.description}
                    </Typography>

                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        opacity: 0.2,
                        transform: 'rotate(-15deg)',
                      }}
                    >
                      {card.icon}
                    </Box>
                  </Box>
                </MiniCard>
              ))}
            </CardsContainer>
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
