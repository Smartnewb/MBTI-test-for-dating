'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedElement from '../animations/AnimatedElement';
import AnimatedIcon from '../animations/AnimatedIcon';
import { Section } from '../layout';
import { MysticalDivider } from '../layout';
import { TestimonialCard } from '../engagement';
import { MysticalTitle } from '../mystical';
import { throttle } from '../../utils/performance';
import { optimizeImageUrl } from '../../utils/imageOptimization';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

// 스타일링된 후기 섹션 컨테이너
const TestimonialsContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}10, ${theme.palette.secondary.dark}10)`,
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/images/tarot-pattern.png")',
    backgroundSize: '200px',
    backgroundRepeat: 'repeat',
    opacity: 0.02,
    zIndex: 0,
    pointerEvents: 'none',
  },
}));

// 스타일링된 화살표 버튼
const ArrowButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: `0 4px 10px rgba(0, 0, 0, 0.1), 0 0 10px ${theme.palette.primary.main}20`,
  transition: 'all 0.3s ease',

  '&:hover': {
    background: theme.palette.background.default,
    transform: 'scale(1.1)',
    boxShadow: `0 6px 15px rgba(0, 0, 0, 0.15), 0 0 15px ${theme.palette.primary.main}30`,
  },
}));

// 스타일링된 슬라이더 컨테이너
const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  maxWidth: 800,
  margin: '0 auto',
}));

// 스타일링된 슬라이더 트랙
const SliderTrack = styled(Box)(({ theme, offset }) => ({
  display: 'flex',
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: `translateX(${offset}%)`,
}));

// 스타일링된 슬라이더 아이템
const SliderItem = styled(Box)(({ theme, active }) => ({
  flex: '0 0 100%',
  opacity: active ? 1 : 0.3,
  transform: active ? 'scale(1)' : 'scale(0.9)',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: theme.spacing(2),
}));

// 스타일링된 인용 아이콘
const QuoteIcon = styled(Box)(({ theme, position }) => ({
  position: 'absolute',
  [position === 'top' ? 'top' : 'bottom']: position === 'top' ? -10 : -10,
  [position === 'top' ? 'left' : 'right']: position === 'top' ? -10 : -10,
  color: theme.palette.primary.main,
  opacity: 0.1,
  fontSize: 80,
  transform: position === 'top' ? 'rotate(180deg)' : 'none',
  zIndex: 0,
}));

/**
 * 인트로 후기 컴포넌트
 *
 * 랜딩 페이지의 후기 섹션을 표시합니다.
 * 타로 카드 스타일의 후기 카드와 슬라이드 애니메이션을 제공합니다.
 */
export default function IntroTestimonials() {
  // 후기 데이터 (메모이제이션)
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: '김지민',
        mbtiType: 'ENFP',
        avatarSrc: optimizeImageUrl('/images/avatars/avatar1.jpg', {
          width: 100,
          height: 100,
          quality: 80,
        }),
        text: '정말 재미있는 테스트였어요! 제 MBTI 유형과 연애 스타일이 정확하게 맞아서 놀랐습니다. 이상형으로 나온 INTJ 유형의 친구를 소개받았는데, 정말 잘 맞네요!',
        rating: 5,
        color: '#6B3FA0',
      },
      {
        id: 2,
        name: '이현우',
        mbtiType: 'ISTJ',
        avatarSrc: optimizeImageUrl('/images/avatars/avatar2.jpg', {
          width: 100,
          height: 100,
          quality: 80,
        }),
        text: '처음에는 그냥 재미로 시작했는데, 결과가 너무 정확해서 깜짝 놀랐어요. 제 연애 패턴과 약점을 정확히 짚어주어서 많은 도움이 되었습니다. 친구들에게도 추천했어요!',
        rating: 4,
        color: '#E91E63',
      },
      {
        id: 3,
        name: '박소연',
        mbtiType: 'INFJ',
        avatarSrc: optimizeImageUrl('/images/avatars/avatar3.jpg', {
          width: 100,
          height: 100,
          quality: 80,
        }),
        text: '타로 카드 테마가 정말 신비롭고 예뻐요! 결과도 상세하게 나와서 만족스러웠습니다. 특히 이상형 매칭 부분이 흥미로웠어요. 연인과 함께 테스트해보니 더 재미있었습니다.',
        rating: 5,
        color: '#FF9800',
      },
      {
        id: 4,
        name: '정민준',
        mbtiType: 'ENTP',
        avatarSrc: optimizeImageUrl('/images/avatars/avatar4.jpg', {
          width: 100,
          height: 100,
          quality: 80,
        }),
        text: '다른 MBTI 테스트와는 다르게 연애 관점에서 분석해주는 점이 특별했어요. 제 성격과 연애 스타일을 정확하게 파악해주었고, 이상형 추천도 도움이 되었습니다!',
        rating: 5,
        color: '#2196F3',
      },
    ],
    []
  );

  // 현재 표시 중인 후기 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 타이머
  const [autoSlide, setAutoSlide] = useState(true);

  // 자동 슬라이드 처리
  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [autoSlide, testimonials.length]);

  // 사용자 상호작용 시 자동 슬라이드 일시 중지
  const pauseAutoSlide = useCallback(() => {
    setAutoSlide(false);

    // 30초 후 자동 슬라이드 재개
    const timer = setTimeout(() => {
      setAutoSlide(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // 이전 후기로 이동 (스로틀링 적용)
  const handlePrevious = useCallback(
    throttle(() => {
      pauseAutoSlide();
      setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, 300),
    [testimonials.length, pauseAutoSlide]
  );

  // 다음 후기로 이동 (스로틀링 적용)
  const handleNext = useCallback(
    throttle(() => {
      pauseAutoSlide();
      setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 300),
    [testimonials.length, pauseAutoSlide]
  );

  // 특정 후기로 이동
  const handleGoToIndex = useCallback(
    index => {
      pauseAutoSlide();
      setCurrentIndex(index);
    },
    [pauseAutoSlide]
  );

  // 슬라이더 오프셋 계산
  const sliderOffset = -currentIndex * 100;

  return (
    <TestimonialsContainer>
      <Section>
        <Container maxWidth="lg">
          <AnimatedElement animation="fadeIn" duration="normal" onScroll>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <MysticalTitle
                title="사용자 후기"
                subtitle="달빛 연애 연구소를 경험한 사용자들의 이야기"
                align="center"
                hasGradient
              />
            </Box>
          </AnimatedElement>

          <AnimatedElement animation="fadeIn" duration="normal" delay={200} onScroll>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
              <MysticalDivider
                variant="mystical"
                thickness={2}
                glow
                decorated
                icon={<FormatQuoteIcon />}
                sx={{ maxWidth: 300 }}
              />
            </Box>
          </AnimatedElement>

          <AnimatedElement animation="fadeIn" duration="normal" onScroll>
            <Box sx={{ position: 'relative', my: 4 }}>
              <SliderContainer>
                <SliderTrack offset={sliderOffset}>
                  {testimonials.map((testimonial, index) => (
                    <SliderItem key={testimonial.id} active={index === currentIndex}>
                      <Box sx={{ position: 'relative' }}>
                        <QuoteIcon position="top">
                          <FormatQuoteIcon fontSize="inherit" />
                        </QuoteIcon>

                        <TestimonialCard
                          text={testimonial.text}
                          name={testimonial.name}
                          mbtiType={testimonial.mbtiType}
                          avatarSrc={testimonial.avatarSrc}
                          rating={testimonial.rating}
                          variant="mystical"
                          sx={{
                            position: 'relative',
                            zIndex: 2,
                            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1), 0 0 20px ${testimonial.color}30`,
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform:
                              index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                            opacity: index === currentIndex ? 1 : 0.5,
                          }}
                        />

                        <QuoteIcon position="bottom">
                          <FormatQuoteIcon fontSize="inherit" />
                        </QuoteIcon>
                      </Box>
                    </SliderItem>
                  ))}
                </SliderTrack>
              </SliderContainer>

              {/* 화살표 버튼 */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: '50%',
                  left: { xs: -10, md: -20 },
                  right: { xs: -10, md: -20 },
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                }}
              >
                <AnimatedElement animation="fadeIn" duration="fast">
                  <ArrowButton
                    onClick={handlePrevious}
                    size="large"
                    aria-label="이전 후기"
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                    }}
                  >
                    <AnimatedIcon animation="pulse" duration="slow" infinite>
                      <ArrowBackIosNewIcon fontSize="small" />
                    </AnimatedIcon>
                  </ArrowButton>
                </AnimatedElement>

                <AnimatedElement animation="fadeIn" duration="fast">
                  <ArrowButton
                    onClick={handleNext}
                    size="large"
                    aria-label="다음 후기"
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                    }}
                  >
                    <AnimatedIcon animation="pulse" duration="slow" infinite>
                      <ArrowForwardIosIcon fontSize="small" />
                    </AnimatedIcon>
                  </ArrowButton>
                </AnimatedElement>
              </Box>
            </Box>

            {/* 페이지네이션 인디케이터 */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              {testimonials.map((testimonial, index) => (
                <AnimatedElement
                  key={testimonial.id}
                  animation="fadeIn"
                  duration="normal"
                  delay={index * 100}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      mx: 0.8,
                      bgcolor: index === currentIndex ? testimonial.color : 'grey.300',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
                      boxShadow:
                        index === currentIndex ? `0 0 10px ${testimonial.color}80` : 'none',
                      '&:hover': {
                        transform: 'scale(1.3)',
                        bgcolor: testimonial.color,
                        opacity: 0.8,
                      },
                    }}
                    onClick={() => handleGoToIndex(index)}
                    aria-label={`${index + 1}번 후기로 이동`}
                  />
                </AnimatedElement>
              ))}
            </Box>
          </AnimatedElement>

          <AnimatedElement animation="fadeIn" duration="normal" delay={600} onScroll>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
              <MysticalDivider
                variant="mystical"
                thickness={1}
                text="당신의 MBTI 연애 유형도 알아보세요"
                sx={{ maxWidth: 600 }}
              />
            </Box>
          </AnimatedElement>
        </Container>
      </Section>
    </TestimonialsContainer>
  );
}
