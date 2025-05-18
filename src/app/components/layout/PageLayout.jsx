'use client';

import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';

// 스타일링된 페이지 레이아웃 컴포넌트
const StyledPageLayout = styled(Box)(({ theme, variant }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  
  // 배경 효과
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 
      `radial-gradient(circle at 25% 25%, ${theme.palette.primary.main}15 0%, transparent 50%), 
       radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main}10 0%, transparent 50%)`,
    zIndex: 0,
    pointerEvents: 'none',
  },
  
  // 별 배경 효과
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 
      `radial-gradient(circle at 15% 15%, #FFFFFF 0%, transparent 0.1%),
       radial-gradient(circle at 35% 45%, #FFFFFF 0%, transparent 0.05%),
       radial-gradient(circle at 55% 25%, #FFFFFF 0%, transparent 0.08%),
       radial-gradient(circle at 75% 65%, #FFFFFF 0%, transparent 0.05%),
       radial-gradient(circle at 85% 15%, #FFFFFF 0%, transparent 0.07%),
       radial-gradient(circle at 25% 65%, #FFFFFF 0%, transparent 0.06%),
       radial-gradient(circle at 65% 85%, #FFFFFF 0%, transparent 0.08%)`,
    opacity: 0.3,
    zIndex: 0,
    pointerEvents: 'none',
  },
  
  // 기본 변형
  ...(variant === 'default' && {
    // 기본 스타일
  }),
  
  // 테스트 변형
  ...(variant === 'test' && {
    '&::before': {
      backgroundImage: 
        `radial-gradient(circle at 25% 25%, ${theme.palette.primary.main}20 0%, transparent 60%), 
         radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main}15 0%, transparent 60%)`,
    },
  }),
  
  // 결과 변형
  ...(variant === 'result' && {
    '&::before': {
      backgroundImage: 
        `radial-gradient(circle at 50% 50%, ${theme.palette.secondary.main}20 0%, transparent 70%)`,
    },
  }),
}));

// 스타일링된 메인 컨텐츠 컴포넌트
const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  position: 'relative',
  zIndex: 1,
}));

/**
 * 페이지 레이아웃 컴포넌트
 * 
 * 전체 페이지 레이아웃을 구성하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.variant='default'] - 레이아웃 변형 ('default', 'test', 'result')
 * @param {boolean} [props.hideHeader=false] - 헤더 숨김 여부
 * @param {boolean} [props.hideFooter=false] - 푸터 숨김 여부
 * @param {React.ReactNode} props.children - 페이지 내용
 * @param {Object} [props.sx] - 추가 스타일
 */
const PageLayout = forwardRef(function PageLayout(props, ref) {
  const { 
    variant = 'default', 
    hideHeader = false,
    hideFooter = false,
    children, 
    sx = {}, 
    ...other 
  } = props;
  
  return (
    <StyledPageLayout 
      ref={ref}
      variant={variant}
      sx={sx}
      {...other}
    >
      {!hideHeader && <Header />}
      
      <MainContent component="main">
        {children}
      </MainContent>
      
      {!hideFooter && <Footer />}
    </StyledPageLayout>
  );
});

export default PageLayout;
