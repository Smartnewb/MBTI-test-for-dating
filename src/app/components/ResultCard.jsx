'use client';

import { forwardRef } from 'react';
import { Box, Typography, Divider, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import TarotCard from './TarotCard';

// 스타일링된 결과 컨테이너
const ResultContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
}));

// 스타일링된 MBTI 타입 표시
const MbtiType = styled(Typography)(({ theme, mbtiColor }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  background: mbtiColor ? `linear-gradient(135deg, ${mbtiColor} 30%, ${theme.palette.common.white} 90%)` : 
    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
}));

// 스타일링된 MBTI 설명 제목
const DescriptionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.semibold,
  fontSize: '1.25rem',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  color: theme.palette.secondary.main,
}));

// 스타일링된 특성 칩
const TraitChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.primary.main}`,
  '& .MuiChip-label': {
    color: theme.palette.text.primary,
  },
}));

/**
 * 결과 카드 컴포넌트
 * 
 * MBTI 테스트 결과를 표시하는 카드 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.mbtiType - MBTI 유형 (예: 'INFP')
 * @param {string} props.mbtiName - MBTI 유형 이름 (예: '중재자')
 * @param {string} props.description - MBTI 유형 설명
 * @param {string[]} props.strengths - 강점 목록
 * @param {string[]} props.weaknesses - 약점 목록
 * @param {string} props.datingStyle - 연애 스타일 설명
 * @param {string} [props.mbtiColor] - MBTI 유형 색상
 * @param {Object} [props.sx] - 추가 스타일
 */
const ResultCard = forwardRef(function ResultCard(props, ref) {
  const { 
    mbtiType, 
    mbtiName,
    description,
    strengths = [],
    weaknesses = [],
    datingStyle,
    mbtiColor,
    sx = {}, 
    ...other 
  } = props;
  
  return (
    <TarotCard 
      ref={ref}
      variant="result" 
      title={`당신의 MBTI 유형은`}
      sx={{ maxWidth: 500, mx: 'auto', ...sx }}
      {...other}
    >
      <ResultContainer>
        <MbtiType variant="h2" mbtiColor={mbtiColor}>
          {mbtiType}
        </MbtiType>
        
        <Typography 
          variant="h4" 
          component="h3" 
          sx={{ 
            textAlign: 'center', 
            mb: 3,
            fontFamily: theme => theme.typography.fontFamily.secondary,
          }}
        >
          {mbtiName}
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body1" sx={{ mb: 2 }}>
          {description}
        </Typography>
        
        <DescriptionTitle variant="h5">
          연애 강점
        </DescriptionTitle>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
          {strengths.map((strength, index) => (
            <TraitChip 
              key={index} 
              label={strength} 
              color="primary"
            />
          ))}
        </Box>
        
        <DescriptionTitle variant="h5">
          연애 약점
        </DescriptionTitle>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
          {weaknesses.map((weakness, index) => (
            <TraitChip 
              key={index} 
              label={weakness} 
              color="secondary"
            />
          ))}
        </Box>
        
        <DescriptionTitle variant="h5">
          연애 스타일
        </DescriptionTitle>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {datingStyle}
        </Typography>
      </ResultContainer>
    </TarotCard>
  );
});

export default ResultCard;
