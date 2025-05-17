'use client';

import { Box, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 진행 바
const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.background.paper,
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

/**
 * 테스트 진행 상태를 보여주는 진행 바 컴포넌트
 * @param {Object} props
 * @param {number} props.value - 진행률 (0-100)
 * @param {number} props.currentQuestion - 현재 질문 번호 (1-24)
 * @param {number} props.totalQuestions - 전체 질문 수
 */
export default function ProgressBar({ value, currentQuestion, totalQuestions = 24 }) {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" color="text.secondary">
          진행률: {value}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentQuestion}/{totalQuestions}
        </Typography>
      </Box>
      <StyledLinearProgress variant="determinate" value={value} />
    </Box>
  );
}
