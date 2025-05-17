'use client';

import { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import TarotCard from '../components/TarotCard';
import useMbtiTest from '../hooks/useMbtiTest';
import Link from 'next/link';

// 스타일링된 컨테이너
const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(4),
  position: 'relative',
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
    opacity: 0.2,
    pointerEvents: 'none',
    zIndex: -1,
  },
}));

// 스타일링된 공유 버튼
const ShareButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.2, 3),
  borderRadius: 30,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: theme.palette.common.white,
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
  },
}));

// 스타일링된 CTA 버튼
const CtaButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.2, 3),
  borderRadius: 30,
  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
  color: theme.palette.common.white,
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
  },
}));

// MBTI 유형별 연애 성향 데이터 (일부 예시)
const mbtiProfiles = {
  'INFP': {
    title: '이상적인 연애를 꿈꾸는 몽상가',
    description: '깊이 있는 감정 교류를 중시하며, 관계의 의미를 찾으려 합니다. 진심 어린 연결을 가장 중요하게 여깁니다.',
    strengths: '진정성 있는 감정 표현, 깊은 교감 능력',
    weaknesses: '이상화, 감정 과몰입, 상처에 민감함',
    conflictStyle: '감정 기반 대화 선호, 먼저 말 걸기 어려움',
    idealPartner: '외향적이고 감정 표현이 풍부한 사람이 안정감을 줌'
  },
  'ENFJ': {
    title: '따뜻한 리더십의 연애 가이드',
    description: '따뜻한 리더십으로 관계를 주도하며, 정서적 교감을 매우 중요시합니다. 상대방의 성장을 돕고 지지하는 연애를 합니다.',
    strengths: '상대에게 헌신적이고 감정적으로 섬세함',
    weaknesses: '스스로를 돌보지 못하고 과하게 맞추려 함',
    conflictStyle: '상대 감정을 먼저 고려하며 중재하려 함',
    idealPartner: '감정 공감 능력은 있지만 자기표현이 서툰 사람'
  }
  // 실제 구현 시 16가지 MBTI 유형 모두 추가
};

export default function ResultPage() {
  const router = useRouter();
  const { mbtiResult, idealType, worstMatch, isTestCompleted, restartTest } = useMbtiTest();
  
  // 테스트를 완료하지 않았으면 테스트 페이지로 리다이렉트
  useEffect(() => {
    if (!isTestCompleted && !mbtiResult) {
      router.push('/test');
    }
  }, [isTestCompleted, mbtiResult, router]);
  
  // 테스트 결과가 없으면 로딩 표시
  if (!mbtiResult) {
    return (
      <StyledContainer maxWidth="md">
        <Typography variant="h5">결과를 분석 중입니다...</Typography>
      </StyledContainer>
    );
  }
  
  // 임시 결과 (실제로는 useMbtiTest에서 계산된 결과 사용)
  const result = mbtiProfiles[mbtiResult] || mbtiProfiles['INFP'];
  const idealTypeProfile = mbtiProfiles[idealType] || mbtiProfiles['ENFJ'];
  
  return (
    <StyledContainer maxWidth="lg">
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          fontWeight: 'bold',
          color: 'primary.main',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          mb: 4,
          textAlign: 'center'
        }}
      >
        당신의 연애 운명이 밝혀졌습니다
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* 내 MBTI 결과 카드 */}
        <Grid item xs={12} md={4}>
          <TarotCard 
            variant="primary" 
            title={`${mbtiResult} 연애 스타일`}
          >
            <Typography variant="body1" sx={{ mb: 3 }}>
              {result.description}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              연애 장점
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {result.strengths}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              연애 단점
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {result.weaknesses}
            </Typography>
          </TarotCard>
        </Grid>
        
        {/* 이상형 MBTI 카드 */}
        <Grid item xs={12} md={4}>
          <TarotCard 
            variant="secondary" 
            title={`당신의 이상형: ${idealType}`}
          >
            <Typography variant="body1" sx={{ mb: 3 }}>
              {idealTypeProfile.description}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              궁합이 좋은 이유
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {mbtiResult}의 {result.weaknesses}를 {idealType}의 {idealTypeProfile.strengths}가 보완해줍니다.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              함께하면 좋은 데이트
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              서로의 성향을 고려한 조용한 대화와 새로운 경험을 함께 할 수 있는 활동
            </Typography>
          </TarotCard>
        </Grid>
        
        {/* 궁합 주의보 카드 */}
        <Grid item xs={12} md={4}>
          <TarotCard 
            title={`궁합 주의보: ${worstMatch}`}
            sx={{ 
              background: 'linear-gradient(135deg, #8B0000, #4A0000)',
              color: 'white'
            }}
          >
            <Typography variant="body1" sx={{ mb: 3 }}>
              {worstMatch} 유형과는 성향 차이로 인해 갈등이 발생할 수 있습니다.
            </Typography>
            <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              주의해야 할 점
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              소통 방식의 차이, 가치관의 충돌, 일상 생활 습관의 불일치로 인한 스트레스
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
              개선 방법
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              서로의 차이점을 이해하고 존중하며, 명확한 의사소통을 통해 갈등을 줄일 수 있습니다.
            </Typography>
          </TarotCard>
        </Grid>
      </Grid>
      
      {/* 버튼 영역 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <ShareButton variant="contained" size="large" sx={{ mb: 2 }}>
          내 연애 이상형 결과 공유하기
        </ShareButton>
        
        <CtaButton variant="contained" size="large" sx={{ mb: 2 }}>
          나랑 어울리는 사람, 썸타임에서 만나볼래요?
        </CtaButton>
        
        <Link href="/" passHref>
          <Button 
            onClick={restartTest}
            sx={{ color: 'text.secondary', mt: 2 }}
          >
            처음으로 돌아가기
          </Button>
        </Link>
      </Box>
    </StyledContainer>
  );
}
