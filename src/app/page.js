'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TarotCard from './components/TarotCard';
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

// 스타일링된 로고
const Logo = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

// 스타일링된 시작 버튼
const StartButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.2rem',
  borderRadius: 30,
  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
  color: theme.palette.common.white,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.7)',
  },
}));

export default function Home() {
  return (
    <StyledContainer maxWidth="md">
      <Logo>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            mb: 1
          }}
        >
          달빛 연애 연구소
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            mb: 4
          }}
        >
          MBTI 연애 테스트
        </Typography>
      </Logo>

      <TarotCard
        variant="primary"
        title="지금 너의 연애 스타일은 어떤 모습일까?"
        sx={{ mb: 4, maxWidth: 450 }}
      >
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            당신의 MBTI를 기반으로 연애 스타일을 분석하고
            가장 잘 맞는 이상형을 알려드립니다.
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            "타로 카드가 당신의 운명을 예언합니다..."
          </Typography>
        </Box>
      </TarotCard>

      <Link href="/test" passHref>
        <StartButton variant="contained" size="large">
          테스트 시작하기
        </StartButton>
      </Link>
    </StyledContainer>
  );
}
