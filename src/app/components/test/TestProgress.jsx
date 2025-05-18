'use client';

import { Box, Typography, LinearProgress, Stepper, Step, StepLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 진행 상태 컨테이너
const ProgressContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(4),
}));

// 스타일링된 진행 상태 표시기
const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.background.paper,
  '& .MuiLinearProgress-bar': {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    borderRadius: 5,
  },
}));

// 스타일링된 단계 표시기
const StyledStepper = styled(Stepper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& .MuiStepIcon-root': {
    color: theme.palette.background.paper,
    '&.Mui-active': {
      color: theme.palette.secondary.main,
    },
    '&.Mui-completed': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiStepLabel-label': {
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
    '&.Mui-active': {
      color: theme.palette.secondary.main,
    },
    '&.Mui-completed': {
      color: theme.palette.primary.main,
    },
  },
}));

/**
 * 테스트 진행 상태 컴포넌트
 * 
 * 테스트 진행 상태를 표시하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.currentStep - 현재 단계
 * @param {number} props.totalSteps - 전체 단계 수
 * @param {boolean} props.showStepper - 단계 표시기 표시 여부
 * @param {string} props.label - 진행 상태 라벨
 */
export default function TestProgress({
  currentStep,
  totalSteps,
  showStepper = false,
  label
}) {
  // 진행률 계산
  const progress = Math.round((currentStep / totalSteps) * 100);
  
  // 단계 생성
  const steps = [];
  if (showStepper) {
    // 단계가 많을 경우 일부만 표시
    if (totalSteps > 10) {
      // 시작, 현재 주변, 끝 단계만 표시
      const visibleSteps = [
        1,
        Math.max(2, currentStep - 1),
        currentStep,
        Math.min(currentStep + 1, totalSteps - 1),
        totalSteps
      ].filter((value, index, self) => self.indexOf(value) === index); // 중복 제거
      
      for (let i = 0; i < visibleSteps.length; i++) {
        const step = visibleSteps[i];
        
        // 건너뛴 단계가 있는 경우 구분선 추가
        if (i > 0 && visibleSteps[i] - visibleSteps[i - 1] > 1) {
          steps.push({
            label: '...',
            value: -1 // 구분선 표시용
          });
        }
        
        steps.push({
          label: `${step}`,
          value: step
        });
      }
    } else {
      // 모든 단계 표시
      for (let i = 1; i <= totalSteps; i++) {
        steps.push({
          label: `${i}`,
          value: i
        });
      }
    }
  }
  
  return (
    <ProgressContainer>
      {label && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {currentStep}/{totalSteps} ({progress}%)
          </Typography>
        </Box>
      )}
      
      <StyledLinearProgress variant="determinate" value={progress} />
      
      {showStepper && (
        <StyledStepper activeStep={currentStep - 1} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index} completed={currentStep > step.value}>
              {step.value === -1 ? (
                // 구분선
                <StepLabel StepIconComponent={() => (
                  <Typography variant="caption" color="text.secondary">...</Typography>
                )}>
                  {step.label}
                </StepLabel>
              ) : (
                <StepLabel>{step.label}</StepLabel>
              )}
            </Step>
          ))}
        </StyledStepper>
      )}
    </ProgressContainer>
  );
}
