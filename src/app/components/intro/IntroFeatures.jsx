'use client';

import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedElement from '../animations/AnimatedElement';
import AnimatedIcon from '../animations/AnimatedIcon';
import { Section } from '../layout';
import { MysticalTitle } from '../mystical';
import { MysticalDivider } from '../layout';
import TarotCard from '../TarotCard';
import { memoize } from '../../utils/performance';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

// 스타일링된 특징 섹션 컨테이너
const FeaturesContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background: theme.palette.background.default,
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
    zIndex: 1,
  },

  '&::after': {
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

// 스타일링된 특징 카드
const FeatureCard = styled(TarotCard)(({ theme, color }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: `linear-gradient(to right, ${color || theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0.7,
    zIndex: 1,
  },

  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: `0 20px 30px rgba(0, 0, 0, 0.2), 0 0 20px ${color || theme.palette.primary.main}30`,

    '& .card-icon': {
      transform: 'scale(1.1) rotate(5deg)',
    },

    '& .card-decoration': {
      opacity: 0.1,
    },
  },
}));

// 스타일링된 아이콘 컨테이너
const IconContainer = styled(Box)(({ theme, color }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${color || theme.palette.primary.main}30, ${color || theme.palette.primary.main}10)`,
  boxShadow: `0 8px 20px ${color || theme.palette.primary.main}20, 0 0 0 1px ${color || theme.palette.primary.main}10`,
  position: 'relative',
  transition: 'all 0.3s ease',
  className: 'card-icon',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
    borderRadius: '50%',
    background: `radial-gradient(circle at center, ${color || theme.palette.primary.main}10 0%, transparent 70%)`,
    opacity: 0.5,
    zIndex: 0,
  },
}));

// 스타일링된 카드 장식
const CardDecoration = styled(Box)(({ theme, color }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '150px',
  height: '150px',
  background: `radial-gradient(circle at top right, ${color || theme.palette.primary.main}10, transparent 70%)`,
  opacity: 0.05,
  transition: 'opacity 0.3s ease',
  className: 'card-decoration',
  zIndex: 0,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '30px',
    height: '30px',
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${encodeURIComponent(color || theme.palette.primary.main)}'%3E%3Cpath d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    opacity: 0.3,
  },
}));

/**
 * 인트로 특징 컴포넌트
 *
 * 랜딩 페이지의 특징 섹션을 표시합니다.
 * 타로 카드 스타일의 특징 카드와 애니메이션 효과를 제공합니다.
 */
export default function IntroFeatures() {
  // 특징 데이터 (메모이제이션)
  const getFeatures = memoize(() => [
    {
      id: 1,
      icon: <PsychologyIcon />,
      decorationIcon: <StarIcon />,
      title: '정확한 MBTI 분석',
      description:
        '24개의 질문을 통해 당신의 MBTI 유형을 정확하게 분석합니다. 연애 상황에 특화된 질문으로 더 정확한 결과를 제공합니다.',
      color: '#6B3FA0',
      animation: 'pulse',
    },
    {
      id: 2,
      icon: <FavoriteIcon />,
      decorationIcon: <WbTwilightIcon />,
      title: '이상형 매칭',
      description:
        '당신의 MBTI 유형과 가장 잘 맞는 이상형을 알려드립니다. MBTI 궁합 이론을 바탕으로 당신과 가장 잘 맞는 유형을 찾아보세요.',
      color: '#E91E63',
      animation: 'heartbeat',
    },
    {
      id: 3,
      icon: <AutoAwesomeIcon />,
      decorationIcon: <StarIcon />,
      title: '연애 성향 분석',
      description:
        '당신의 연애 강점과 약점, 연애 스타일을 상세하게 분석해드립니다. 자신의 연애 패턴을 이해하고 더 나은 관계를 만들어보세요.',
      color: '#FF9800',
      animation: 'float',
    },
    {
      id: 4,
      icon: <ShareIcon />,
      decorationIcon: <WbTwilightIcon />,
      title: '결과 공유',
      description:
        '테스트 결과를 친구나 연인과 공유할 수 있습니다. 서로의 MBTI 유형을 비교하고 더 깊이 이해해보세요.',
      color: '#2196F3',
      animation: 'bounce',
    },
  ]);

  // 특징 데이터 가져오기
  const features = getFeatures();

  return (
    <FeaturesContainer>
      <Section>
        <Container maxWidth="lg">
          <AnimatedElement animation="fadeIn" duration="normal" onScroll>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <MysticalTitle
                title="테스트 특징"
                subtitle="달빛 연애 연구소의 MBTI 테스트가 특별한 이유"
                align="center"
                hasGradient
                animation="none"
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
                icon={<StarIcon />}
                sx={{ maxWidth: 300 }}
              />
            </Box>
          </AnimatedElement>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={feature.id}>
                <AnimatedElement
                  animation="slideUp"
                  duration="normal"
                  delay={index * 150}
                  onScroll
                  threshold={0.1}
                >
                  <FeatureCard variant="paper" color={feature.color}>
                    <CardDecoration color={feature.color} />

                    <Box sx={{ position: 'relative', zIndex: 2, p: 3 }}>
                      <IconContainer color={feature.color}>
                        <AnimatedIcon
                          animation={feature.animation}
                          duration="slow"
                          infinite
                          color={feature.color}
                        >
                          {feature.icon}
                        </AnimatedIcon>
                      </IconContainer>

                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 'bold',
                          fontFamily: theme => theme.typography.fontFamily.secondary,
                          color: feature.color,
                        }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          position: 'relative',
                          zIndex: 2,
                        }}
                      >
                        {feature.description}
                      </Typography>

                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: -10,
                          right: -10,
                          opacity: 0.1,
                          transform: 'rotate(-15deg)',
                          color: feature.color,
                        }}
                      >
                        {feature.decorationIcon}
                      </Box>
                    </Box>
                  </FeatureCard>
                </AnimatedElement>
              </Grid>
            ))}
          </Grid>

          <AnimatedElement animation="fadeIn" duration="normal" delay={600} onScroll>
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
      </Section>
    </FeaturesContainer>
  );
}
