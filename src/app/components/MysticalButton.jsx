'use client';

import { forwardRef } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 버튼 컴포넌트
const StyledButton = styled(Button)(({ theme, variant, size, color }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  textTransform: 'none',
  fontFamily: '"Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontWeight: 500,
  letterSpacing: '0.05em',
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  overflow: 'hidden',

  // 크기 변형
  ...(size === 'small' && {
    padding: '6px 16px',
    fontSize: '0.75rem',
  }),
  ...(size === 'medium' && {
    padding: '8px 24px',
    fontSize: '0.875rem',
  }),
  ...(size === 'large' && {
    padding: '12px 32px',
    fontSize: '1rem',
  }),

  // 기본 효과
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease-in-out',
    zIndex: 0,
  },

  '&:hover::before': {
    transform: 'translateX(0)',
  },

  // 포커스 상태 (접근성 향상)
  '&:focus-visible': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}40, 0 0 0 1px ${theme.palette.primary.main}`,
  },

  // Mystical 변형
  ...(variant === 'mystical' && {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: theme.palette.common.white,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',

    '&:hover': {
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
    },

    '&:active': {
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(1px)',
    },

    '&:focus-visible': {
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}40, 0 0 0 1px ${theme.palette.primary.main}, 0 4px 10px rgba(0, 0, 0, 0.3)`,
    },
  }),

  // Tarot 변형
  ...(variant === 'tarot' && {
    background: theme.palette.background.paper,
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',

    '&:hover': {
      background: theme.palette.background.default,
      borderColor: theme.palette.primary.light,
      color: theme.palette.primary.light,
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
    },

    '&:active': {
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(1px)',
    },

    '&:focus-visible': {
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}40, 0 0 0 1px ${theme.palette.primary.main}, 0 4px 10px rgba(0, 0, 0, 0.2)`,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: -2,
      left: -2,
      right: -2,
      bottom: -2,
      borderRadius: 'inherit',
      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      zIndex: -1,
      opacity: 0.5,
    },
  }),

  // Glow 변형
  ...(variant === 'glow' && {
    background: theme.palette.background.paper,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    boxShadow: `0 0 10px ${theme.palette.secondary.main}80`,

    '&:hover': {
      boxShadow: `0 0 20px ${theme.palette.secondary.main}`,
      background: theme.palette.background.default,
    },

    '&:active': {
      boxShadow: `0 0 5px ${theme.palette.secondary.main}80`,
      transform: 'translateY(1px)',
    },

    '&:focus-visible': {
      boxShadow: `0 0 0 3px ${theme.palette.secondary.main}40, 0 0 0 1px ${theme.palette.secondary.main}, 0 0 10px ${theme.palette.secondary.main}80`,
    },
  }),

  // Text 변형 (새로 추가)
  ...(variant === 'text' && {
    background: 'transparent',
    color: theme.palette.primary.main,
    boxShadow: 'none',
    padding: size === 'small' ? '4px 8px' : size === 'medium' ? '6px 12px' : '8px 16px',

    '&:hover': {
      background: `${theme.palette.primary.main}10`,
      color: theme.palette.primary.dark,
    },

    '&:active': {
      background: `${theme.palette.primary.main}20`,
    },

    '&:focus-visible': {
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}40, 0 0 0 1px ${theme.palette.primary.main}`,
    },
  }),

  // 비활성화 상태
  '&.Mui-disabled': {
    background: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
    boxShadow: 'none',
    border: 'none',

    '&::after': {
      opacity: 0.1,
    },
  },
}));

/**
 * 신비로운 버튼 컴포넌트
 *
 * 신비로운 타로 카드 컨셉을 적용한 버튼 컴포넌트입니다.
 * 접근성을 준수하며 다양한 변형과 상태를 지원합니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.variant='mystical'] - 버튼 변형 ('mystical', 'tarot', 'glow', 'text')
 * @param {string} [props.size='medium'] - 버튼 크기 ('small', 'medium', 'large')
 * @param {boolean} [props.loading=false] - 로딩 상태
 * @param {boolean} [props.disabled] - 비활성화 상태
 * @param {React.ReactNode} props.children - 버튼 내용
 * @param {string} [props.aria-label] - 스크린 리더를 위한 접근성 레이블
 * @param {Object} [props.sx] - 추가 스타일
 */
const MysticalButton = forwardRef(function MysticalButton(props, ref) {
  const {
    variant = 'mystical',
    size = 'medium',
    loading = false,
    children,
    disabled,
    sx = {},
    'aria-label': ariaLabel,
    ...other
  } = props;

  // 로딩 상태일 때 접근성 속성 추가
  const accessibilityProps = loading ? {
    'aria-busy': true,
    'aria-live': 'polite',
  } : {};

  return (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      sx={sx}
      {...accessibilityProps}
      {...other}
    >
      {loading ? (
        <>
          <CircularProgress
            size={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
            color="inherit"
            sx={{ mr: 1 }}
            aria-hidden="true" // 스크린 리더가 중복 읽기 방지
          />
          {children}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
});

export default MysticalButton;
