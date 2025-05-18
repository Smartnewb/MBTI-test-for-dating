'use client';

import { useState } from 'react';
import { Box, Typography, Divider, Chip, Button, Grid, LinearProgress, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import TarotCard from '../TarotCard';
import MysticalButton from '../MysticalButton';
import { getMbtiDescription } from '../../utils/mbti';

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

// 스타일링된 점수 바
const ScoreBar = styled(LinearProgress)(({ theme, dimension }) => {
  let color;
  switch (dimension) {
    case 'E-I':
      color = '#3F51B5';
      break;
    case 'S-N':
      color = '#4CAF50';
      break;
    case 'T-F':
      color = '#FF9800';
      break;
    case 'J-P':
      color = '#9C27B0';
      break;
    default:
      color = theme.palette.primary.main;
  }
  
  return {
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.palette.background.paper,
    '& .MuiLinearProgress-bar': {
      backgroundColor: color,
      borderRadius: 5,
    },
  };
});

/**
 * 테스트 결과 컴포넌트
 * 
 * MBTI 테스트 결과를 표시하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.mbtiType - MBTI 유형 (예: 'INFP')
 * @param {Object} props.scores - MBTI 점수
 * @param {string} props.idealType - 이상형 MBTI 유형
 * @param {string} props.worstMatch - 최악의 궁합 MBTI 유형
 * @param {Function} props.onRestart - 테스트 재시작 핸들러
 * @param {Function} props.onShare - 결과 공유 핸들러
 */
export default function TestResult({
  mbtiType,
  scores,
  idealType,
  worstMatch,
  onRestart,
  onShare
}) {
  const [activeTab, setActiveTab] = useState(0);
  
  // MBTI 유형 설명 가져오기
  const mbtiDescription = getMbtiDescription(mbtiType);
  const idealTypeDescription = getMbtiDescription(idealType);
  const worstMatchDescription = getMbtiDescription(worstMatch);
  
  // MBTI 유형 색상 가져오기
  const mbtiColor = mbtiDescription?.color || '#6B3FA0';
  
  // 탭 변경 핸들러
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  // 점수 계산
  const calculateScore = (dimension) => {
    let score1, score2, label1, label2;
    
    switch (dimension) {
      case 'E-I':
        score1 = scores.E;
        score2 = scores.I;
        label1 = 'E';
        label2 = 'I';
        break;
      case 'S-N':
        score1 = scores.S;
        score2 = scores.N;
        label1 = 'S';
        label2 = 'N';
        break;
      case 'T-F':
        score1 = scores.T;
        score2 = scores.F;
        label1 = 'T';
        label2 = 'F';
        break;
      case 'J-P':
        score1 = scores.J;
        score2 = scores.P;
        label1 = 'J';
        label2 = 'P';
        break;
      default:
        return { score: 50, label1: '', label2: '' };
    }
    
    const total = score1 + score2;
    const percentage = total > 0 ? Math.round((score1 / total) * 100) : 50;
    
    return { score: percentage, label1, label2 };
  };
  
  // MBTI 유형 정보가 없는 경우
  if (!mbtiDescription) {
    return (
      <TarotCard variant="result" title="테스트 결과">
        <ResultContainer>
          <Typography variant="h4" sx={{ textAlign: 'center', my: 4 }}>
            결과를 불러올 수 없습니다
          </Typography>
          
          {mbtiType && (
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>
              당신의 MBTI 유형: {mbtiType}
            </Typography>
          )}
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <MysticalButton variant="mystical" onClick={onRestart}>
              테스트 다시 하기
            </MysticalButton>
          </Box>
        </ResultContainer>
      </TarotCard>
    );
  }
  
  return (
    <TarotCard variant="result" title="당신의 MBTI 유형은">
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
          {mbtiDescription.name}
        </Typography>
        
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{ mb: 3 }}
        >
          <Tab label="성격 특성" />
          <Tab label="점수 분석" />
          <Tab label="궁합 정보" />
        </Tabs>
        
        {/* 성격 특성 탭 */}
        {activeTab === 0 && (
          <Box>
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="body1" sx={{ mb: 2 }}>
              {mbtiDescription.description}
            </Typography>
            
            <DescriptionTitle variant="h5">
              연애 강점
            </DescriptionTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
              {mbtiDescription.strengths.map((strength, index) => (
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
              {mbtiDescription.weaknesses.map((weakness, index) => (
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
              {mbtiDescription.datingStyle}
            </Typography>
          </Box>
        )}
        
        {/* 점수 분석 탭 */}
        {activeTab === 1 && (
          <Box>
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="body1" sx={{ mb: 3 }}>
              당신의 MBTI 성향 점수 분석입니다. 각 차원에서 어느 쪽에 더 가까운지 확인해보세요.
            </Typography>
            
            {['E-I', 'S-N', 'T-F', 'J-P'].map(dimension => {
              const { score, label1, label2 } = calculateScore(dimension);
              
              return (
                <Box key={dimension} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">
                      {label1} ({score}%)
                    </Typography>
                    <Typography variant="body2">
                      {label2} ({100 - score}%)
                    </Typography>
                  </Box>
                  
                  <ScoreBar 
                    variant="determinate" 
                    value={score} 
                    dimension={dimension}
                  />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      {dimension === 'E-I' ? '외향적' : 
                       dimension === 'S-N' ? '현실적' : 
                       dimension === 'T-F' ? '논리적' : '계획적'}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {dimension === 'E-I' ? '내향적' : 
                       dimension === 'S-N' ? '직관적' : 
                       dimension === 'T-F' ? '감성적' : '즉흥적'}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
        
        {/* 궁합 정보 탭 */}
        {activeTab === 2 && (
          <Box>
            <Divider sx={{ my: 2 }} />
            
            <Grid container spacing={3}>
              {/* 이상형 정보 */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <DescriptionTitle variant="h5">
                    나의 이상형
                  </DescriptionTitle>
                  
                  {idealTypeDescription ? (
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" color="secondary.main" sx={{ mr: 1 }}>
                          {idealType}
                        </Typography>
                        <Typography variant="subtitle1">
                          {idealTypeDescription.name}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {idealTypeDescription.description}
                      </Typography>
                      
                      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        "{idealTypeDescription.datingStyle}"
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="body1">
                      정보를 불러올 수 없습니다.
                    </Typography>
                  )}
                </Box>
              </Grid>
              
              {/* 최악의 궁합 정보 */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <DescriptionTitle variant="h5">
                    주의해야 할 유형
                  </DescriptionTitle>
                  
                  {worstMatchDescription ? (
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" color="error" sx={{ mr: 1 }}>
                          {worstMatch}
                        </Typography>
                        <Typography variant="subtitle1">
                          {worstMatchDescription.name}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {worstMatchDescription.description}
                      </Typography>
                      
                      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        "{worstMatchDescription.datingStyle}"
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="body1">
                      정보를 불러올 수 없습니다.
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
          <MysticalButton variant="tarot" onClick={onRestart}>
            테스트 다시 하기
          </MysticalButton>
          
          {onShare && (
            <MysticalButton variant="mystical" onClick={onShare}>
              결과 공유하기
            </MysticalButton>
          )}
        </Box>
      </ResultContainer>
    </TarotCard>
  );
}
