'use client';

import { forwardRef } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 진행 상태 컨테이너
const ProgressContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

// 스타일링된 진행 상태 표시기
const StyledLinearProgress = styled(LinearProgress)(({ theme, variant }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.05)',
    zIndex: 1,
  },

  // Primary 변형
  ...(variant === 'primary' && {
    '& .MuiLinearProgress-bar': {
      background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
      borderRadius: 5,
    },
  }),

  // Secondary 변형
  ...(variant === 'secondary' && {
    '& .MuiLinearProgress-bar': {
      background: `linear-gradient(90deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
      borderRadius: 5,
    },
  }),

  // Mystical 변형
  ...(variant === 'mystical' && {
    '& .MuiLinearProgress-bar': {
      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      borderRadius: 5,
      boxShadow: `0 0 10px ${theme.palette.primary.main}80`,
      animation: 'glow 1.5s ease-in-out infinite alternate',
    },

    '@keyframes glow': {
      '0%': {
        boxShadow: `0 0 5px ${theme.palette.primary.main}40`,
      },
      '100%': {
        boxShadow: `0 0 15px ${theme.palette.primary.main}80`,
      },
    },
  }),
}));

// 스타일링된 진행 상태 라벨
const ProgressLabel = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(0.5),
}));

// 스타일링된 단계 표시기
const StepIndicator = styled(Box)(({ theme, active, completed }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  margin: '0 2px',
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,

  // 완료된 단계
  ...(completed && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
  }),

  // 활성 단계
  ...(active && !completed && {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
  }),

  // 미완료 단계
  ...(!active && !completed && {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
  }),
}));

/**
 * 신비로운 진행 상태 표시기 컴포넌트
 *
 * 신비로운 타로 카드 컨셉을 적용한 진행 상태 표시기 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.value - 진행 상태 값 (0-100)
 * @param {string} [props.variant='primary'] - 진행 상태 표시기 변형 ('primary', 'secondary', 'mystical')
 * @param {string} [props.label] - 진행 상태 라벨
 * @param {boolean} [props.showPercentage=true] - 백분율 표시 여부
 * @param {number} [props.totalSteps] - 전체 단계 수 (단계 표시기 사용 시)
 * @param {number} [props.currentStep] - 현재 단계 (단계 표시기 사용 시)
 * @param {Object} [props.sx] - 추가 스타일
 */
const MysticalProgress = forwardRef(function MysticalProgress(props, ref) {
  const {
    value,
    variant = 'primary',
    label,
    showPercentage = true,
    totalSteps,
    currentStep,
    sx = {},
    ...other
  } = props;

  // 단계 표시기 렌더링
  const renderStepIndicators = () => {
    if (!totalSteps || !currentStep) return null;

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <StepIndicator
            key={index}
            active={index + 1 === currentStep}
            completed={index + 1 < currentStep}
          />
        ))}
      </Box>
    );
  };

  return (
    <ProgressContainer ref={ref} sx={sx}>
      {(label || showPercentage) && (
        <ProgressLabel>
          {label && (
            <Typography variant="caption" color="text.secondary">
              {label}
            </Typography>
          )}
          {showPercentage && (
            <Typography variant="caption" color="text.secondary">
              {Math.round(value)}%
            </Typography>
          )}
        </ProgressLabel>
      )}

      <StyledLinearProgress
        value={value}
        variant={variant || "determinate"}
        {...other}
      />

      {renderStepIndicators()}
    </ProgressContainer>
  );
});

export default MysticalProgress;
