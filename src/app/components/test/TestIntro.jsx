'use client';

import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';
import TarotCard from '../TarotCard';
import MysticalButton from '../MysticalButton';

// 스타일링된 소개 컨테이너
const IntroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 800,
  margin: '0 auto',
}));

// 스타일링된 특징 아이템
const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
}));

// 스타일링된 특징 아이콘
const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: `${theme.palette.primary.main}20`,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  flexShrink: 0,
}));

/**
 * 테스트 소개 컴포넌트
 * 
 * MBTI 테스트 소개 및 시작 버튼을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {Function} props.onStart - 테스트 시작 핸들러
 * @param {React.ReactNode} props.icon - 아이콘
 */
export default function TestIntro({ onStart, icon }) {
  return (
    <IntroContainer>
      <AnimatedElement animation="fadeIn" duration="normal">
        <TarotCard variant="mystical" sx={{ width: '100%', my: 4, p: 4 }}>
          <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
            달빛 연애 연구소의 MBTI 연애 테스트
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            {icon && (
              <Box sx={{ 
                width: 80, 
                height: 80, 
                borderRadius: '50%',
                bgcolor: theme => `${theme.palette.primary.main}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2
              }}>
                {icon}
              </Box>
            )}
          </Box>
          
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
              onClick={onStart}
            >
              테스트 시작하기
            </MysticalButton>
          </Box>
        </TarotCard>
      </AnimatedElement>
      
      <AnimatedElement animation="slideUp" duration="normal" delay={300}>
        <Paper sx={{ width: '100%', my: 4, p: 4, bgcolor: 'background.paper' }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            테스트 특징
          </Typography>
          
          <FeatureItem>
            <FeatureIcon>1</FeatureIcon>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                연애 중심의 MBTI 질문
              </Typography>
              <Typography variant="body2" color="text.secondary">
                일반적인 MBTI 테스트와 달리, 연애 상황에 특화된 질문들로 구성되어 있어 
                당신의 연애 성향을 더 정확하게 파악할 수 있습니다.
              </Typography>
            </Box>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>2</FeatureIcon>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                이상형 매칭
              </Typography>
              <Typography variant="body2" color="text.secondary">
                당신의 MBTI 유형과 가장 잘 맞는 이상형을 알려드립니다. 
                MBTI 궁합 이론을 바탕으로 당신과 가장 잘 맞는 유형을 찾아보세요.
              </Typography>
            </Box>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>3</FeatureIcon>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                상세한 연애 성향 분석
              </Typography>
              <Typography variant="body2" color="text.secondary">
                당신의 연애 강점과 약점, 연애 스타일을 상세하게 분석해드립니다. 
                자신의 연애 패턴을 이해하고 더 나은 관계를 만들어보세요.
              </Typography>
            </Box>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>4</FeatureIcon>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                결과 공유 기능
              </Typography>
              <Typography variant="body2" color="text.secondary">
                테스트 결과를 친구나 연인과 공유할 수 있습니다. 
                서로의 MBTI 유형을 비교하고 더 깊이 이해해보세요.
              </Typography>
            </Box>
          </FeatureItem>
        </Paper>
      </AnimatedElement>
      
      <AnimatedElement animation="slideUp" duration="normal" delay={600}>
        <Paper sx={{ width: '100%', my: 4, p: 4, bgcolor: 'background.paper' }}>
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
    </IntroContainer>
  );
}
