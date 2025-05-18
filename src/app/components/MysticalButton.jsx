'use client';

import { forwardRef } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 버튼 컴포넌트
const StyledButton = styled(Button)(({ theme, variant, size, color }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  textTransform: 'none',
  fontFamily: theme.typography.fontFamily.primary,
  fontWeight: theme.typography.fontWeight.medium,
  letterSpacing: theme.typography.letterSpacing.wide,
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  overflow: 'hidden',
  
  // 크기 변형
  ...(size === 'small' && {
    padding: '6px 16px',
    fontSize: theme.typography.fontSize.xs,
  }),
  ...(size === 'medium' && {
    padding: '8px 24px',
    fontSize: theme.typography.fontSize.sm,
  }),
  ...(size === 'large' && {
    padding: '12px 32px',
    fontSize: theme.typography.fontSize.md,
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
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.variant='mystical'] - 버튼 변형 ('mystical', 'tarot', 'glow')
 * @param {string} [props.size='medium'] - 버튼 크기 ('small', 'medium', 'large')
 * @param {boolean} [props.loading=false] - 로딩 상태
 * @param {React.ReactNode} props.children - 버튼 내용
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
    ...other 
  } = props;
  
  return (
    <StyledButton 
      ref={ref}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      sx={sx}
      {...other}
    >
      {loading ? (
        <>
          <CircularProgress 
            size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} 
            color="inherit" 
            sx={{ mr: 1 }} 
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
