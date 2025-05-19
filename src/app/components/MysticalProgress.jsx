'use client';

import { forwardRef } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 진행 상태 컨테이너
const ProgressContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
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
  width: 6, // 기본 크기 더 감소
  height: 6, // 기본 크기 더 감소
  minWidth: 6, // 최소 너비 추가
  minHeight: 6, // 최소 높이 추가
  borderRadius: '50%',
  margin: '0 1px', // 간격 더 감소
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  flexShrink: 0, // 찌그러짐 방지

  // 완료된 단계
  ...(completed && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 3px ${theme.palette.primary.main}`,
  }),

  // 활성 단계
  ...(active &&
    !completed && {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: `0 0 3px ${theme.palette.secondary.main}`,
      transform: 'scale(1.2)', // 활성 단계 강조
    }),

  // 미완료 단계
  ...(!active &&
    !completed && {
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
    }),

  // 반응형 크기 조정 - 태블릿
  [theme.breakpoints.up('sm')]: {
    width: 10,
    height: 10,
    minWidth: 10,
    minHeight: 10,
    margin: '0 3px',
  },

  // 반응형 크기 조정 - 데스크톱
  [theme.breakpoints.up('md')]: {
    width: 12,
    height: 12,
    minWidth: 12,
    minHeight: 12,
    margin: '0 4px',
  },
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

      {/* 단계 표시기를 상단에 배치 - 한 줄로 표시 */}
      {totalSteps && currentStep ? (
        <Box
          sx={{
            mb: 1.5,
            py: 0.5, // 상하 패딩 감소
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
            overflow: 'hidden', // 넘치는 부분 숨김
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'nowrap', // 줄바꿈 방지
              gap: '1px', // 간격 감소
              width: 'max-content', // 내용에 맞게 너비 조정
              mx: 'auto', // 가운데 정렬
              px: 1, // 좌우 패딩 추가
            }}
          >
            {Array.from({ length: totalSteps }).map((_, index) => (
              <StepIndicator
                key={index}
                active={index + 1 === currentStep}
                completed={index + 1 < currentStep}
              />
            ))}
          </Box>
        </Box>
      ) : null}

      {/* 검정색 바 제거 - 필요한 경우에만 표시 */}
      {false && (
        <StyledLinearProgress value={value} variant={variant || 'determinate'} {...other} />
      )}
    </ProgressContainer>
  );
});

export default MysticalProgress;
