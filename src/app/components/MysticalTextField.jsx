'use client';

import { forwardRef } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 텍스트 필드 컴포넌트
const StyledTextField = styled(TextField)(({ theme, variant }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    backgroundColor: theme.palette.background.paper,
    
    // 기본 스타일
    '& fieldset': {
      borderColor: theme.palette.divider,
      transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    },
    
    // 호버 스타일
    '&:hover fieldset': {
      borderColor: theme.palette.primary.light,
    },
    
    // 포커스 스타일
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
    
    // 에러 스타일
    '&.Mui-error fieldset': {
      borderColor: theme.palette.error.main,
    },
    
    // 비활성화 스타일
    '&.Mui-disabled fieldset': {
      borderColor: theme.palette.action.disabled,
    },
  },
  
  // 라벨 스타일
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
    
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
  
  // 입력 텍스트 스타일
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
  },
  
  // 헬퍼 텍스트 스타일
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginRight: 0,
  },
  
  // Primary 변형
  ...(variant === 'primary' && {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}40`,
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.primary.main,
    },
  }),
  
  // Secondary 변형
  ...(variant === 'secondary' && {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.light,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
        boxShadow: `0 0 0 2px ${theme.palette.secondary.main}40`,
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.secondary.main,
    },
  }),
  
  // Mystical 변형
  ...(variant === 'mystical' && {
    '& .MuiOutlinedInput-root': {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
        zIndex: -1,
        opacity: 0,
        transition: `opacity ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
      },
      
      '&:hover::before': {
        opacity: 1,
      },
      
      '&.Mui-focused::before': {
        opacity: 1,
      },
      
      '&.Mui-focused fieldset': {
        borderWidth: 2,
        borderImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%) 1`,
        boxShadow: `0 0 10px ${theme.palette.primary.main}40`,
      },
    },
    
    '& .MuiInputLabel-root.Mui-focused': {
      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent',
    },
  }),
}));

/**
 * 신비로운 텍스트 필드 컴포넌트
 * 
 * 신비로운 타로 카드 컨셉을 적용한 텍스트 필드 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.variant='primary'] - 텍스트 필드 변형 ('primary', 'secondary', 'mystical')
 * @param {React.ReactNode} [props.startIcon] - 시작 아이콘
 * @param {React.ReactNode} [props.endIcon] - 끝 아이콘
 * @param {Object} [props.sx] - 추가 스타일
 */
const MysticalTextField = forwardRef(function MysticalTextField(props, ref) {
  const { 
    variant = 'primary', 
    startIcon,
    endIcon,
    sx = {}, 
    ...other 
  } = props;
  
  return (
    <StyledTextField 
      ref={ref}
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">
            {startIcon}
          </InputAdornment>
        ) : null,
        endAdornment: endIcon ? (
          <InputAdornment position="end">
            {endIcon}
          </InputAdornment>
        ) : null,
      }}
      variant={variant}
      sx={sx}
      {...other}
    />
  );
});

export default MysticalTextField;
