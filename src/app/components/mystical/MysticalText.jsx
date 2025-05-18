'use client';

import { forwardRef } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 텍스트 컴포넌트
const StyledText = styled(Typography)(
  ({ theme, variant, textVariant, color, hasGradient, hasGlow, hasShadow }) => ({
    position: 'relative',
    fontFamily:
      textVariant === 'mystical'
        ? theme.typography.fontFamily?.secondary || 'Cinzel, serif'
        : theme.typography.fontFamily?.primary || 'Raleway, sans-serif',

    // 그라데이션 텍스트 효과
    ...(hasGradient && {
      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textFillColor: 'transparent',
    }),

    // 글로우 효과
    ...(hasGlow && {
      textShadow: `0 0 5px ${color || theme.palette.primary.main}40, 0 0 10px ${color || theme.palette.primary.main}30`,
    }),

    // 그림자 효과
    ...(hasShadow && {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    }),

    // Mystical 변형
    ...(textVariant === 'mystical' && {
      fontWeight: 700, // theme.typography.fontWeight.bold
      letterSpacing: '0.05em',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -4,
        left: 0,
        width: '2em',
        height: 2,
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
      },
    }),

    // Tarot 변형
    ...(textVariant === 'tarot' && {
      fontFamily: theme.typography.fontFamily
        ? theme.typography.fontFamily.secondary
        : 'Cinzel, serif',
      fontWeight: 500, // theme.typography.fontWeight.medium
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    }),

    // Quote 변형
    ...(textVariant === 'quote' && {
      fontStyle: 'italic',
      borderLeft: `3px solid ${theme.palette.primary.main}`,
      paddingLeft: theme.spacing(2),
      margin: theme.spacing(2, 0),

      '&::before': {
        content: '"\\201C"', // 왼쪽 따옴표
        fontFamily: 'serif',
        fontSize: '1.5em',
        color: theme.palette.primary.main,
        marginRight: '0.2em',
      },

      '&::after': {
        content: '"\\201D"', // 오른쪽 따옴표
        fontFamily: 'serif',
        fontSize: '1.5em',
        color: theme.palette.primary.main,
        marginLeft: '0.2em',
      },
    }),
  })
);

/**
 * 신비로운 텍스트 컴포넌트
 *
 * 신비로운 타로 테마에 어울리는 텍스트 컴포넌트입니다.
 * 다양한 효과와 변형을 지원합니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 텍스트 내용
 * @param {string} [props.variant='body1'] - Typography 변형 ('h1', 'h2', 'body1', 등)
 * @param {string} [props.textVariant] - 텍스트 변형 ('mystical', 'tarot', 'quote')
 * @param {string} [props.color] - 텍스트 색상
 * @param {boolean} [props.hasGradient=false] - 그라데이션 효과 적용 여부
 * @param {boolean} [props.hasGlow=false] - 글로우 효과 적용 여부
 * @param {boolean} [props.hasShadow=false] - 그림자 효과 적용 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
const MysticalText = forwardRef(function MysticalText(props, ref) {
  const {
    children,
    variant = 'body1',
    textVariant,
    color,
    hasGradient = false,
    hasGlow = false,
    hasShadow = false,
    sx = {},
    ...other
  } = props;

  return (
    <StyledText
      ref={ref}
      variant={variant}
      textVariant={textVariant}
      color={color}
      hasGradient={hasGradient}
      hasGlow={hasGlow}
      hasShadow={hasShadow}
      sx={sx}
      {...other}
    >
      {children}
    </StyledText>
  );
});

export default MysticalText;
