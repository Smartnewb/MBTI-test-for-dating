'use client';

import { useState } from 'react';
import { Box, Typography, Divider, Chip, Paper, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WarningIcon from '@mui/icons-material/Warning';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PsychologyIcon from '@mui/icons-material/Psychology';

// 스타일링된 조언 컨테이너
const AdviceContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  border: `1px solid ${theme.palette.primary.dark}`,
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: theme.shape.borderRadius * 2,
    background: 'url(/images/card-texture.png)',
    backgroundSize: 'cover',
    opacity: 0.05,
    pointerEvents: 'none',
  },
}));

// 스타일링된 조언 제목
const AdviceTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.semibold,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.secondary.main,
  textAlign: 'center',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
}));

// 스타일링된 조언 카드
const AdviceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(42, 42, 74, 0.8) 100%)`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  border: `1px solid ${theme.palette.primary.dark}`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
}));

// 스타일링된 아이콘 아바타
const IconAvatar = styled(Avatar)(({ theme, color = 'primary' }) => ({
  backgroundColor: theme.palette[color].main,
  color: theme.palette[color].contrastText,
  width: 40,
  height: 40,
  marginBottom: theme.spacing(1),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}));

/**
 * 연애 조언 컴포넌트
 * 
 * MBTI 유형에 따른 연애 조언을 표시하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.mbtiType - MBTI 유형 (예: 'INFP')
 * @param {Object} props.description - MBTI 유형 설명
 * @param {string[]} props.strengths - 강점 목록
 * @param {string[]} props.weaknesses - 약점 목록
 * @param {string} props.datingStyle - 연애 스타일 설명
 * @param {Object} props.idealTypeInfo - 이상형 MBTI 정보
 * @param {Object} props.worstMatchInfo - 최악의 궁합 MBTI 정보
 */
export default function RelationshipAdvice({
  mbtiType,
  description,
  strengths = [],
  weaknesses = [],
  datingStyle,
  idealTypeInfo,
  worstMatchInfo
}) {
  // 연애 조언 생성
  const generateAdvice = () => {
    // 강점과 약점 기반 조언
    const strengthsAdvice = strengths.length > 0 
      ? `당신의 ${strengths[0]}와(과) ${strengths.length > 1 ? strengths[1] : ''} 특성을 활용하세요.`
      : '당신의 강점을 활용하세요.';
    
    const weaknessesAdvice = weaknesses.length > 0
      ? `${weaknesses[0]}와(과) ${weaknesses.length > 1 ? weaknesses[1] : ''} 부분에 주의하세요.`
      : '약점을 인식하고 개선하려고 노력하세요.';
    
    // MBTI 유형별 맞춤 조언
    let personalizedAdvice = '';
    
    switch(mbtiType.substring(0, 2)) {
      case 'IN':
        personalizedAdvice = '내면의 감정을 솔직하게 표현하는 연습을 하세요. 상대방이 당신의 마음을 알아차리지 못할 수 있습니다.';
        break;
      case 'IS':
        personalizedAdvice = '새로운 경험에 열린 마음을 가지세요. 익숙한 것에서 벗어나 새로운 데이트 아이디어를 시도해보세요.';
        break;
      case 'EN':
        personalizedAdvice = '상대방에게 충분한 개인 공간을 제공하세요. 당신의 열정이 때로는 부담이 될 수 있습니다.';
        break;
      case 'ES':
        personalizedAdvice = '상대방의 깊은 감정과 생각에 귀 기울이세요. 때로는 즐거움보다 깊은 대화가 필요합니다.';
        break;
      default:
        personalizedAdvice = '자신의 성격 특성을 이해하고 상대방과의 차이점을 존중하세요.';
    }
    
    return {
      strengthsAdvice,
      weaknessesAdvice,
      personalizedAdvice
    };
  };
  
  const advice = generateAdvice();
  
  return (
    <AdviceContainer>
      <AdviceTitle variant="h4">
        연애 조언 & 팁
      </AdviceTitle>
      
      <Grid container spacing={3}>
        {/* 강점 활용 조언 */}
        <Grid item xs={12} md={4}>
          <AnimatedElement animation="slideUp" duration="normal" delay={100}>
            <AdviceCard>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <IconAvatar color="primary">
                  <FavoriteIcon />
                </IconAvatar>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  강점 활용하기
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2">
                {advice.strengthsAdvice} 당신의 강점은 연애 관계에서 큰 매력으로 작용합니다.
              </Typography>
              <Box sx={{ mt: 2 }}>
                {strengths.slice(0, 3).map((strength, index) => (
                  <Chip 
                    key={index} 
                    label={strength} 
                    size="small"
                    color="primary" 
                    variant="outlined"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </AdviceCard>
          </AnimatedElement>
        </Grid>
        
        {/* 약점 개선 조언 */}
        <Grid item xs={12} md={4}>
          <AnimatedElement animation="slideUp" duration="normal" delay={200}>
            <AdviceCard>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <IconAvatar color="warning">
                  <WarningIcon />
                </IconAvatar>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  주의할 점
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2">
                {advice.weaknessesAdvice} 이러한 부분들을 인식하고 개선하면 더 건강한 관계를 만들 수 있습니다.
              </Typography>
              <Box sx={{ mt: 2 }}>
                {weaknesses.slice(0, 3).map((weakness, index) => (
                  <Chip 
                    key={index} 
                    label={weakness} 
                    size="small"
                    color="secondary" 
                    variant="outlined"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </AdviceCard>
          </AnimatedElement>
        </Grid>
        
        {/* 맞춤 조언 */}
        <Grid item xs={12} md={4}>
          <AnimatedElement animation="slideUp" duration="normal" delay={300}>
            <AdviceCard>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <IconAvatar color="secondary">
                  <TipsAndUpdatesIcon />
                </IconAvatar>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  맞춤 조언
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2">
                {advice.personalizedAdvice}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Chip 
                  icon={<PsychologyIcon />}
                  label={`${mbtiType} 연애 스타일`}
                  size="small"
                  color="info" 
                  variant="outlined"
                  sx={{ m: 0.5 }}
                />
              </Box>
            </AdviceCard>
          </AnimatedElement>
        </Grid>
      </Grid>
    </AdviceContainer>
  );
}
