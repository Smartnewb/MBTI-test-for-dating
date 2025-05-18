'use client';

import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';
import { Section } from '../layout';
import { MysticalTitle } from '../mystical';
import { memoize } from '../../utils/performance';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShareIcon from '@mui/icons-material/Share';

// 스타일링된 특징 섹션 컨테이너
const FeaturesContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background: theme.palette.background.default,

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
}));

// 스타일링된 섹션 제목
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", "Noto Serif KR", serif',
  fontWeight: 700,
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  position: 'relative',
  display: 'inline-block',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '3px',
  },
}));

// 스타일링된 특징 카드
const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 2,
  background: theme.palette.background.paper,
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
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
  background: `linear-gradient(135deg, ${color}40, ${color}20)`,
  boxShadow: `0 4px 20px ${color}30`,

  '& svg': {
    fontSize: 40,
    color: color,
  },
}));

/**
 * 인트로 특징 컴포넌트
 *
 * 랜딩 페이지의 특징 섹션을 표시합니다.
 */
export default function IntroFeatures() {
  // 특징 데이터 (메모이제이션)
  const getFeatures = memoize(() => [
    {
      id: 1,
      icon: <PsychologyIcon />,
      title: '정확한 MBTI 분석',
      description: '24개의 질문을 통해 당신의 MBTI 유형을 정확하게 분석합니다. 연애 상황에 특화된 질문으로 더 정확한 결과를 제공합니다.',
      color: '#6B3FA0',
    },
    {
      id: 2,
      icon: <FavoriteIcon />,
      title: '이상형 매칭',
      description: '당신의 MBTI 유형과 가장 잘 맞는 이상형을 알려드립니다. MBTI 궁합 이론을 바탕으로 당신과 가장 잘 맞는 유형을 찾아보세요.',
      color: '#E91E63',
    },
    {
      id: 3,
      icon: <AutoAwesomeIcon />,
      title: '연애 성향 분석',
      description: '당신의 연애 강점과 약점, 연애 스타일을 상세하게 분석해드립니다. 자신의 연애 패턴을 이해하고 더 나은 관계를 만들어보세요.',
      color: '#FF9800',
    },
    {
      id: 4,
      icon: <ShareIcon />,
      title: '결과 공유',
      description: '테스트 결과를 친구나 연인과 공유할 수 있습니다. 서로의 MBTI 유형을 비교하고 더 깊이 이해해보세요.',
      color: '#2196F3',
    },
  ]);

  // 특징 데이터 가져오기
  const features = getFeatures();

  return (
    <FeaturesContainer>
      <Section>
        <Container maxWidth="lg">
          <AnimatedElement animation="fadeIn" duration="normal" onScroll>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <MysticalTitle
                title="테스트 특징"
                subtitle="달빛 연애 연구소의 MBTI 테스트가 특별한 이유"
                align="center"
                hasGradient
                animation="none"
              />
            </Box>
          </AnimatedElement>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={feature.id}>
                <AnimatedElement
                  animation="slideUp"
                  duration="normal"
                  delay={index * 100}
                  onScroll
                  threshold={0.1}
                >
                  <FeatureCard>
                    <IconContainer color={feature.color}>
                      {feature.icon}
                    </IconContainer>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </FeatureCard>
                </AnimatedElement>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </FeaturesContainer>
  );
}
