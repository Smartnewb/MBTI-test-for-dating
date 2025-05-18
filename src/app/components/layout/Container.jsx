'use client';

import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 컨테이너 컴포넌트
const StyledContainer = styled(Box)(({ theme, maxWidth, centered, fullHeight }) => ({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  
  // 최대 너비 설정
  ...(maxWidth === 'xs' && {
    maxWidth: theme.breakpoints.values.xs,
  }),
  ...(maxWidth === 'sm' && {
    maxWidth: theme.breakpoints.values.sm,
  }),
  ...(maxWidth === 'md' && {
    maxWidth: theme.breakpoints.values.md,
  }),
  ...(maxWidth === 'lg' && {
    maxWidth: theme.breakpoints.values.lg,
  }),
  ...(maxWidth === 'xl' && {
    maxWidth: theme.breakpoints.values.xl,
  }),
  
  // 중앙 정렬
  ...(centered && {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  
  // 전체 높이
  ...(fullHeight && {
    minHeight: '100vh',
  }),
  
  // 반응형 패딩
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

/**
 * 컨테이너 컴포넌트
 * 
 * 콘텐츠를 감싸는 반응형 컨테이너 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.maxWidth='lg'] - 최대 너비 ('xs', 'sm', 'md', 'lg', 'xl')
 * @param {boolean} [props.centered=false] - 중앙 정렬 여부
 * @param {boolean} [props.fullHeight=false] - 전체 높이 여부
 * @param {React.ReactNode} props.children - 컨테이너 내용
 * @param {Object} [props.sx] - 추가 스타일
 */
const Container = forwardRef(function Container(props, ref) {
  const { 
    maxWidth = 'lg', 
    centered = false,
    fullHeight = false,
    children, 
    sx = {}, 
    ...other 
  } = props;
  
  return (
    <StyledContainer 
      ref={ref}
      maxWidth={maxWidth}
      centered={centered}
      fullHeight={fullHeight}
      sx={sx}
      {...other}
    >
      {children}
    </StyledContainer>
  );
});

export default Container;
