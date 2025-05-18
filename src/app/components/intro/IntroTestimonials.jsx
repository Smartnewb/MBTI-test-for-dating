'use client';

import { useState, useMemo, useCallback } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';
import { Section } from '../layout';
import { TestimonialCard } from '../engagement';
import { MysticalTitle } from '../mystical';
import { throttle } from '../../utils/performance';
import { optimizeImageUrl } from '../../utils/imageOptimization';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// 스타일링된 후기 섹션 컨테이너
const TestimonialsContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}20, ${theme.palette.secondary.dark}20)`,
}));

// 스타일링된 화살표 버튼
const ArrowButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',

  '&:hover': {
    background: theme.palette.background.default,
  },
}));

/**
 * 인트로 후기 컴포넌트
 *
 * 랜딩 페이지의 후기 섹션을 표시합니다.
 */
export default function IntroTestimonials() {
  // 후기 데이터 (메모이제이션)
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: '김지민',
      mbtiType: 'ENFP',
      avatarSrc: optimizeImageUrl('/images/avatars/avatar1.jpg', { width: 100, height: 100, quality: 80 }),
      text: '정말 재미있는 테스트였어요! 제 MBTI 유형과 연애 스타일이 정확하게 맞아서 놀랐습니다. 이상형으로 나온 INTJ 유형의 친구를 소개받았는데, 정말 잘 맞네요!',
      rating: 5,
    },
    {
      id: 2,
      name: '이현우',
      mbtiType: 'ISTJ',
      avatarSrc: optimizeImageUrl('/images/avatars/avatar2.jpg', { width: 100, height: 100, quality: 80 }),
      text: '처음에는 그냥 재미로 시작했는데, 결과가 너무 정확해서 깜짝 놀랐어요. 제 연애 패턴과 약점을 정확히 짚어주어서 많은 도움이 되었습니다. 친구들에게도 추천했어요!',
      rating: 4,
    },
    {
      id: 3,
      name: '박소연',
      mbtiType: 'INFJ',
      avatarSrc: optimizeImageUrl('/images/avatars/avatar3.jpg', { width: 100, height: 100, quality: 80 }),
      text: '타로 카드 테마가 정말 신비롭고 예뻐요! 결과도 상세하게 나와서 만족스러웠습니다. 특히 이상형 매칭 부분이 흥미로웠어요. 연인과 함께 테스트해보니 더 재미있었습니다.',
      rating: 5,
    },
  ], []);

  // 현재 표시 중인 후기 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 후기로 이동 (스로틀링 적용)
  const handlePrevious = useCallback(
    throttle(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, 300),
    [testimonials.length]
  );

  // 다음 후기로 이동 (스로틀링 적용)
  const handleNext = useCallback(
    throttle(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 300),
    [testimonials.length]
  );

  // 현재 후기
  const currentTestimonial = testimonials[currentIndex];

  return (
    <TestimonialsContainer>
      <Section>
        <Container maxWidth="lg">
          <AnimatedElement animation="fadeIn" duration="normal" onScroll>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <MysticalTitle
                title="사용자 후기"
                subtitle="달빛 연애 연구소를 경험한 사용자들의 이야기"
                align="center"
                hasGradient
              />
            </Box>
          </AnimatedElement>

          <AnimatedElement animation="fadeIn" duration="normal" onScroll>
            <Box sx={{ position: 'relative', my: 4 }}>
              <TestimonialCard
                text={currentTestimonial.text}
                name={currentTestimonial.name}
                mbtiType={currentTestimonial.mbtiType}
                avatarSrc={currentTestimonial.avatarSrc}
                rating={currentTestimonial.rating}
                variant="mystical"
                sx={{ maxWidth: 800, mx: 'auto' }}
              />

              {/* 화살표 버튼 */}
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                top: '50%',
                left: -20,
                right: -20,
                transform: 'translateY(-50%)',
              }}>
                <ArrowButton onClick={handlePrevious} size="large">
                  <ArrowBackIosNewIcon fontSize="small" />
                </ArrowButton>

                <ArrowButton onClick={handleNext} size="large">
                  <ArrowForwardIosIcon fontSize="small" />
                </ArrowButton>
              </Box>
            </Box>

            {/* 페이지네이션 인디케이터 */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    mx: 0.5,
                    bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </Box>
          </AnimatedElement>
        </Container>
      </Section>
    </TestimonialsContainer>
  );
}
