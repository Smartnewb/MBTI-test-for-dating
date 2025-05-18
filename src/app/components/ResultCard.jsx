'use client';

import { forwardRef } from 'react';
import { Box, Typography, Divider, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TarotCard from './TarotCard';
import MysticalButton from './MysticalButton';
import { AnimatedElement } from './animations';

// 스타일링된 결과 컨테이너
const ResultContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

// 스타일링된 MBTI 타입 표시
const MbtiType = styled(Typography)(({ theme, mbtiColor }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: '3rem',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  letterSpacing: '0.1em',

  // 기본 그라데이션 효과
  background: mbtiColor ?
    `linear-gradient(135deg, ${mbtiColor} 30%, ${theme.palette.common.white} 90%)` :
    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',

  // 글로우 효과
  textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',

  // 애니메이션 효과
  animation: 'pulse 2s infinite ease-in-out',
  '@keyframes pulse': {
    '0%': {
      textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
    },
    '50%': {
      textShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.3)',
    },
    '100%': {
      textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
    },
  },
}));

// 스타일링된 MBTI 설명 제목
const DescriptionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.semibold,
  fontSize: '1.25rem',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  color: '#D4AF37', // 골드 색상으로 변경
  textAlign: 'center',
  position: 'relative',

  // 장식 효과
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    width: '30px',
    height: '1px',
    background: `linear-gradient(90deg, transparent, #D4AF37, transparent)`,
  },
  '&::before': {
    left: '0',
  },
  '&::after': {
    right: '0',
  },

  // 반응형 조정
  [theme.breakpoints.up('sm')]: {
    '&::before': {
      width: '50px',
      left: '10%',
    },
    '&::after': {
      width: '50px',
      right: '10%',
    },
  },
}));

// 스타일링된 특성 칩
const TraitChip = styled(Chip)(({ theme, type = 'strength' }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'transparent',
  border: `1px solid ${type === 'strength' ? '#D4AF37' : theme.palette.secondary.main}`,
  transition: 'all 0.3s ease',

  '& .MuiChip-label': {
    color: type === 'strength' ? '#D4AF37' : theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeight.medium,
  },

  '&:hover': {
    backgroundColor: type === 'strength'
      ? 'rgba(212, 175, 55, 0.1)'
      : `${theme.palette.secondary.main}10`,
    transform: 'translateY(-2px)',
    boxShadow: type === 'strength'
      ? '0 2px 5px rgba(212, 175, 55, 0.2)'
      : `0 2px 5px ${theme.palette.secondary.main}20`,
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
 * @param {Function} [props.onRestart] - 테스트 다시 시작 버튼 클릭 시 호출되는 함수
 * @param {Function} [props.onShare] - 결과 공유 버튼 클릭 시 호출되는 함수
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
    onRestart,
    onShare,
    sx = {},
    ...other
  } = props;

  return (
    <TarotCard
      ref={ref}
      variant="result"
      title={`당신의 MBTI 유형은`}
      sx={{ maxWidth: 600, mx: 'auto', ...sx }}
      {...other}
    >
      <ResultContainer>
        <AnimatedElement animation="fadeIn" duration="normal" delay={300}>
          <MbtiType variant="h2" mbtiColor={mbtiColor}>
            {mbtiType}
          </MbtiType>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" duration="normal" delay={600}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              textAlign: 'center',
              mb: 3,
              fontFamily: theme => theme.typography.fontFamily.secondary,
              color: '#D4AF37',
            }}
          >
            {mbtiName}
          </Typography>

          <Divider sx={{ my: 2 }} />
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" duration="normal" delay={900}>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
            {description}
          </Typography>

          <DescriptionTitle variant="h5">
            연애 강점
          </DescriptionTitle>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2, justifyContent: 'center' }}>
            {strengths.map((strength, index) => (
              <TraitChip
                key={index}
                label={strength}
                type="strength"
              />
            ))}
          </Box>

          <DescriptionTitle variant="h5">
            연애 약점
          </DescriptionTitle>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2, justifyContent: 'center' }}>
            {weaknesses.map((weakness, index) => (
              <TraitChip
                key={index}
                label={weakness}
                type="weakness"
              />
            ))}
          </Box>

          <DescriptionTitle variant="h5">
            연애 스타일
          </DescriptionTitle>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
            {datingStyle}
          </Typography>
        </AnimatedElement>

        {(onRestart || onShare) && (
          <AnimatedElement animation="fadeIn" duration="normal" delay={1200}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 4,
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 0 }
            }}>
              {onRestart && (
                <MysticalButton
                  variant="tarot"
                  onClick={onRestart}
                  sx={{ width: { xs: '100%', sm: 'auto' } }}
                >
                  테스트 다시 하기
                </MysticalButton>
              )}

              {onShare && (
                <MysticalButton
                  variant="mystical"
                  onClick={onShare}
                  sx={{ width: { xs: '100%', sm: 'auto' } }}
                >
                  결과 공유하기
                </MysticalButton>
              )}
            </Box>
          </AnimatedElement>
        )}
      </ResultContainer>
    </TarotCard>
  );
});

export default ResultCard;
