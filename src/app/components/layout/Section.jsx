'use client';

import { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Container from './Container';

// 스타일링된 섹션 컴포넌트
const StyledSection = styled(Box)(({ theme, variant, fullHeight }) => ({
  position: 'relative',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8), // 하단 패딩 증가
  overflow: 'visible', // 오버플로우 허용

  // 전체 높이
  ...(fullHeight && {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),

  // 기본 변형
  ...(variant === 'default' && {
    backgroundColor: 'transparent',
  }),

  // Primary 변형
  ...(variant === 'primary' && {
    backgroundColor: theme.palette.background.default,
    backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.palette.primary.main}15 0%, transparent 50%)`,
  }),

  // Secondary 변형
  ...(variant === 'secondary' && {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main}15 0%, transparent 50%)`,
  }),

  // Mystical 변형
  ...(variant === 'mystical' && {
    backgroundColor: theme.palette.background.default,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url("/images/tarot-pattern.png")',
      backgroundSize: '200px',
      backgroundRepeat: 'repeat',
      opacity: 0.03,
      zIndex: 0,
      pointerEvents: 'none',
    },
  }),

  // 반응형 패딩
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

// 스타일링된 섹션 제목
const SectionTitle = styled(Typography)(({ theme, centered }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.bold,

  // 중앙 정렬
  ...(centered && {
    textAlign: 'center',
  }),

  // 밑줄 효과
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: centered ? '50%' : 0,
    transform: centered ? 'translateX(-50%)' : 'none',
    width: centered ? '80px' : '60px',
    height: '3px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    borderRadius: '3px',
  },
}));

// 스타일링된 섹션 부제목
const SectionSubtitle = styled(Typography)(({ theme, centered }) => ({
  marginBottom: theme.spacing(6),
  color: theme.palette.text.secondary,

  // 중앙 정렬
  ...(centered && {
    textAlign: 'center',
  }),
}));

/**
 * 섹션 컴포넌트
 *
 * 페이지의 섹션을 구성하는 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.variant='default'] - 섹션 변형 ('default', 'primary', 'secondary', 'mystical')
 * @param {string} [props.title] - 섹션 제목
 * @param {string} [props.subtitle] - 섹션 부제목
 * @param {boolean} [props.centered=false] - 중앙 정렬 여부
 * @param {boolean} [props.fullHeight=false] - 전체 높이 여부
 * @param {string} [props.maxWidth='lg'] - 최대 너비 ('xs', 'sm', 'md', 'lg', 'xl')
 * @param {React.ReactNode} props.children - 섹션 내용
 * @param {Object} [props.sx] - 추가 스타일
 */
const Section = forwardRef(function Section(props, ref) {
  const {
    variant = 'default',
    title,
    subtitle,
    centered = false,
    fullHeight = false,
    maxWidth = 'lg',
    children,
    sx = {},
    ...other
  } = props;

  return (
    <StyledSection
      ref={ref}
      variant={variant}
      fullHeight={fullHeight}
      component="section"
      sx={sx}
      {...other}
    >
      <Container maxWidth={maxWidth}>
        {title && (
          <SectionTitle variant="h2" centered={centered}>
            {title}
          </SectionTitle>
        )}

        {subtitle && (
          <SectionSubtitle variant="subtitle1" centered={centered}>
            {subtitle}
          </SectionSubtitle>
        )}

        {children}
      </Container>
    </StyledSection>
  );
});

export default Section;
