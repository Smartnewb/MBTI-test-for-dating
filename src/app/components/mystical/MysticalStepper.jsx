'use client';

import { forwardRef } from 'react';
import { Box, Stepper, Step, StepLabel, StepConnector, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';

// 스타일링된 스텝퍼 컨테이너
const StepperContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 0),
}));

// 스타일링된 스텝퍼
const StyledStepper = styled(Stepper)(({ theme, variant }) => ({
  '& .MuiStepConnector-line': {
    minHeight: 12,
  },
}));

// 스타일링된 스텝 커넥터
const StyledStepConnector = styled(StepConnector)(({ theme, variant }) => ({
  '& .MuiStepConnector-line': {
    height: 2,
    border: 0,
    backgroundColor: theme.palette.divider,
    borderRadius: 1,
  },
  
  '&.Mui-active, &.Mui-completed': {
    '& .MuiStepConnector-line': {
      ...(variant === 'primary' && {
        backgroundColor: theme.palette.primary.main,
      }),
      ...(variant === 'secondary' && {
        backgroundColor: theme.palette.secondary.main,
      }),
      ...(variant === 'mystical' && {
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        boxShadow: `0 0 8px ${theme.palette.primary.main}80`,
      }),
    },
  },
}));

// 스타일링된 스텝 아이콘
const StyledStepIcon = styled('div')(({ theme, variant, active, completed }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  borderRadius: '50%',
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  
  // 완료된 스텝
  ...(completed && {
    ...(variant === 'primary' && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: `0 0 8px ${theme.palette.primary.main}80`,
    }),
    ...(variant === 'secondary' && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      boxShadow: `0 0 8px ${theme.palette.secondary.main}80`,
    }),
    ...(variant === 'mystical' && {
      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      color: theme.palette.common.white,
      boxShadow: `0 0 10px ${theme.palette.primary.main}80`,
    }),
  }),
  
  // 활성 스텝
  ...(active && !completed && {
    ...(variant === 'primary' && {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      boxShadow: `0 0 8px ${theme.palette.primary.light}80`,
    }),
    ...(variant === 'secondary' && {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
      boxShadow: `0 0 8px ${theme.palette.secondary.light}80`,
    }),
    ...(variant === 'mystical' && {
      background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
      color: theme.palette.common.white,
      boxShadow: `0 0 10px ${theme.palette.primary.light}80`,
      animation: 'pulse 2s infinite ease-in-out',
    }),
  }),
  
  // 비활성 스텝
  ...(!active && !completed && {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.divider}`,
  }),
}));

// 스타일링된 스텝 라벨
const StyledStepLabel = styled(StepLabel)(({ theme, variant, active, completed }) => ({
  '& .MuiStepLabel-label': {
    marginTop: theme.spacing(1),
    fontFamily: theme.typography.fontFamily.secondary,
    
    // 완료된 스텝
    ...(completed && {
      color: variant === 'mystical' ? theme.palette.secondary.main : theme.palette.primary.main,
      fontWeight: theme.typography.fontWeight.medium,
    }),
    
    // 활성 스텝
    ...(active && !completed && {
      color: variant === 'mystical' ? theme.palette.secondary.main : theme.palette.primary.main,
      fontWeight: theme.typography.fontWeight.bold,
    }),
  },
}));

/**
 * 신비로운 스텝퍼 컴포넌트
 * 
 * 다단계 프로세스를 위한 스텝퍼 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.activeStep - 현재 활성화된 스텝 (0부터 시작)
 * @param {Array} props.steps - 스텝 목록 (각 스텝은 { label: string } 형태)
 * @param {string} [props.variant='primary'] - 스텝퍼 변형 ('primary', 'secondary', 'mystical')
 * @param {boolean} [props.alternativeLabel=true] - 라벨을 스텝 아래에 표시할지 여부
 * @param {boolean} [props.showStepIcon=true] - 스텝 아이콘 표시 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
const MysticalStepper = forwardRef(function MysticalStepper(props, ref) {
  const {
    activeStep,
    steps,
    variant = 'primary',
    alternativeLabel = true,
    showStepIcon = true,
    sx = {},
    ...other
  } = props;
  
  // 커스텀 스텝 아이콘 렌더링
  const CustomStepIcon = (iconProps) => {
    const { active, completed, icon } = iconProps;
    
    if (!showStepIcon) {
      return null;
    }
    
    return (
      <StyledStepIcon
        variant={variant}
        active={active}
        completed={completed}
      >
        {completed ? (
          variant === 'mystical' ? <StarIcon fontSize="small" /> : <CheckIcon fontSize="small" />
        ) : (
          <Typography variant="body2">{icon}</Typography>
        )}
      </StyledStepIcon>
    );
  };
  
  return (
    <StepperContainer ref={ref} sx={sx}>
      <StyledStepper
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
        connector={<StyledStepConnector variant={variant} />}
        {...other}
      >
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StyledStepLabel
              StepIconComponent={CustomStepIcon}
              variant={variant}
              active={activeStep === index}
              completed={activeStep > index}
            >
              {step.label}
            </StyledStepLabel>
          </Step>
        ))}
      </StyledStepper>
      
      {/* 애니메이션 키프레임 */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 5px ${variant === 'mystical' ? '#9c27b0' : '#6200ea'}80;
          }
          50% {
            box-shadow: 0 0 15px ${variant === 'mystical' ? '#9c27b0' : '#6200ea'}80;
          }
          100% {
            box-shadow: 0 0 5px ${variant === 'mystical' ? '#9c27b0' : '#6200ea'}80;
          }
        }
      `}</style>
    </StepperContainer>
  );
});

export default MysticalStepper;
