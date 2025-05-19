'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Divider, Chip, Grid, useTheme, Modal, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TarotCard from '../TarotCard';
import MysticalButton from '../MysticalButton';
import RelationshipAdvice from './RelationshipAdvice';
import { AnimatedElement } from '../animations';
import { getMbtiDescription } from '../../utils/mbti';
import useResponsive from '../../hooks/useResponsive';
import { FlipCard, StarryBackground } from '../mystical';

// 마법 구슬 효과를 위한 애니메이션
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 10px rgba(148, 0, 211, 0.5), 0 0 20px rgba(148, 0, 211, 0.3), inset 0 0 15px rgba(148, 0, 211, 0.5); }
  25% { box-shadow: 0 0 15px rgba(75, 0, 130, 0.6), 0 0 25px rgba(75, 0, 130, 0.4), inset 0 0 20px rgba(75, 0, 130, 0.6); }
  50% { box-shadow: 0 0 20px rgba(0, 0, 255, 0.7), 0 0 30px rgba(0, 0, 255, 0.5), inset 0 0 25px rgba(0, 0, 255, 0.7); }
  75% { box-shadow: 0 0 15px rgba(75, 0, 130, 0.6), 0 0 25px rgba(75, 0, 130, 0.4), inset 0 0 20px rgba(75, 0, 130, 0.6); }
  100% { box-shadow: 0 0 10px rgba(148, 0, 211, 0.5), 0 0 20px rgba(148, 0, 211, 0.3), inset 0 0 15px rgba(148, 0, 211, 0.5); }
`;

const colorChangeAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// 마법 구슬 버튼 스타일 - 이제 div를 기반으로 함 (수정됨)
const _MagicOrbButton = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 120,
  height: 120,
  borderRadius: '50%',
  background: 'linear-gradient(45deg, #9400D3, #4B0082, #0000FF, #4B0082, #9400D3)',
  backgroundSize: '400% 400%',
  animation: `${colorChangeAnimation} 10s ease infinite, ${glowAnimation} 3s infinite`,
  color: 'white',
  textDecoration: 'none',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
    borderRadius: '50%',
    opacity: 0.7,
    zIndex: 1,
  },

  '&:hover': {
    transform: 'scale(1.05)',
  },

  [theme.breakpoints.down('sm')]: {
    width: 100,
    height: 100,
  },
}));

// 스타일링된 결과 컨테이너
const ResultContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(6), // 하단 패딩 증가
}));

// 스타일링된 모달 컨테이너
const AdviceModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 900,
  maxHeight: '90vh',
  overflow: 'auto',
  borderRadius: theme.shape.borderRadius * 2,
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
  border: `1px solid ${theme.palette.primary.dark}`,
  padding: 0,
  outline: 'none',

  // 텍스처 효과
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
    zIndex: -1,
  },
}));

// 스타일링된 모달 헤더
const ModalHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
  borderTopLeftRadius: theme.shape.borderRadius * 2,
  borderTopRightRadius: theme.shape.borderRadius * 2,
  color: theme.palette.common.white,
}));

// 스타일링된 모달 내용
const ModalContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxHeight: 'calc(90vh - 70px)',
  overflow: 'auto',
}));

// 스타일링된 닫기 버튼
const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

// 스타일링된 MBTI 타입 표시
const MbtiType = styled(Typography)(({ theme, mbtiColor }) => ({
  fontFamily: '"Playfair Display", "Noto Serif KR", serif',
  fontWeight: 700, // bold 값을 직접 사용
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  background: mbtiColor
    ? `linear-gradient(135deg, ${mbtiColor} 30%, ${theme.palette.common.white} 90%)`
    : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',

  // 반응형 폰트 크기
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.75rem',
  },
}));

// 스타일링된 MBTI 설명 제목
const DescriptionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", "Noto Serif KR", serif',
  fontWeight: 600, // semibold 값을 직접 사용
  fontSize: '1.25rem',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  color: theme.palette.secondary.main,

  // 반응형 폰트 크기 및 여백
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    marginTop: theme.spacing(2),
  },
}));

// 스타일링된 특성 칩
const TraitChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.primary.main}`,
  '& .MuiChip-label': {
    color: theme.palette.text.primary,
  },

  // 모바일에서 더 작은 크기로 조정
  [theme.breakpoints.down('sm')]: {
    height: 28,
    fontSize: '0.75rem',
    '& .MuiChip-label': {
      padding: '0 8px',
    },
  },
}));

// 스타일링된 점수 바 컨테이너
const ScoreBarContainer = styled(Box)(({ theme }) => ({
  height: 24,
  display: 'flex',
  width: '100%',
  backgroundColor: 'transparent',
  position: 'relative',
  marginBottom: theme.spacing(1),

  // 모바일에서 더 작은 크기로 조정
  [theme.breakpoints.down('sm')]: {
    height: 20,
  },
}));

// 스타일링된 점수 바 (왼쪽)
const LeftScoreBar = styled(Box)(({ theme, dimension, width }) => {
  let color;
  switch (dimension) {
    case 'E-I':
      color = '#3F51B5'; // 파란색
      break;
    case 'S-N':
      color = '#4CAF50'; // 초록색
      break;
    case 'T-F':
      color = '#FF9800'; // 주황색
      break;
    case 'J-P':
      color = '#9C27B0'; // 보라색
      break;
    default:
      color = theme.palette.primary.main;
  }

  return {
    height: '100%',
    width: `${width}%`,
    backgroundColor: color,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    position: 'relative',
    transition: 'width 0.5s ease-in-out',

    // 모바일에서 더 작은 폰트 크기
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
    },
  };
});

// 스타일링된 점수 바 (오른쪽)
const RightScoreBar = styled(Box)(({ theme, dimension, width }) => {
  let color;
  switch (dimension) {
    case 'E-I':
      color = '#3F51B5'; // 파란색
      break;
    case 'S-N':
      color = '#4CAF50'; // 초록색
      break;
    case 'T-F':
      color = '#FF9800'; // 주황색
      break;
    case 'J-P':
      color = '#9C27B0'; // 보라색
      break;
    default:
      color = theme.palette.primary.main;
  }

  return {
    height: '100%',
    width: `${width}%`,
    backgroundColor: color,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    position: 'relative',
    transition: 'width 0.5s ease-in-out',

    // 모바일에서 더 작은 폰트 크기
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
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
  onShare,
}) {
  const [_activeTab, setActiveTab] = useState(0);
  const [openAdviceModal, setOpenAdviceModal] = useState(false);
  const [frontCardState, setFrontCardState] = useState('loading');
  const theme = useTheme();
  const responsive = useResponsive();

  // 모달 열기 핸들러
  const handleOpenAdviceModal = () => {
    setOpenAdviceModal(true);
  };

  // 모달 닫기 핸들러
  const handleCloseAdviceModal = () => {
    setOpenAdviceModal(false);
  };

  // MBTI 유형 설명 가져오기
  const mbtiDescription = getMbtiDescription(mbtiType);
  const idealTypeDescription = getMbtiDescription(idealType);
  const worstMatchDescription = getMbtiDescription(worstMatch);

  // MBTI 유형 색상 가져오기
  const mbtiColor = mbtiDescription?.color || '#6B3FA0';

  // 결과 로드 후 필요한 초기화 작업
  useEffect(() => {
    // 카드가 뒤집힌 후 탭이 보이도록 초기 탭 설정 - 성격 특성 탭(0)으로 설정
    setActiveTab(0);
  }, []);

  // 3초 후에 로딩 완료 상태로 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      setFrontCardState('completed');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // 점수 계산
  const calculateScore = dimension => {
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

    // 점수는 항상 왼쪽 값(score1)의 비율을 반환
    // ScoreBar 컴포넌트에서 이 값을 기준으로 색상 방향을 결정
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

  const cardFront = (
    <ResultContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          py: 8,
        }}
      >
        {frontCardState === 'loading' ? (
          <>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
              당신의 연애 MBTI 유형을 분석 중입니다...
            </Typography>
            <Box sx={{ position: 'relative', width: 150, height: 150 }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'spin 2s linear infinite',
                }}
              >
                <Box
                  component="img"
                  src="/images/보라색 망토를 입은 여우.png"
                  alt="보라색 망토를 입은 여우"
                  sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
            </Box>
            <Typography variant="body1" sx={{ mt: 4, textAlign: 'center' }}>
              잠시만 기다려주세요...
            </Typography>
          </>
        ) : (
          <>
            <Box sx={{ position: 'relative', width: 150, height: 150 }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              >
                <Box
                  component="img"
                  src="/images/보라색 망토를 입은 여우.png"
                  alt="보라색 망토를 입은 여우"
                  sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mt: 4,
                textAlign: 'center',
                color: '#B388FF', // 더 밝은 보라색으로 변경
                fontWeight: 'bold',
              }}
            >
              당신의 연애 MBTI 분석을 완료했습니다!
            </Typography>
          </>
        )}
      </Box>
      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </ResultContainer>
  );

  // 카드 뒷면 - 결과 표시
  const cardBack = (
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
          }}
        >
          {mbtiDescription.name}
        </Typography>
      </AnimatedElement>

      {/* 모든 섹션을 한 번에 표시 */}
      <AnimatedElement animation="fadeIn" duration="normal" delay={600}>
        <Box>
          {/* 성격 특성 섹션 */}
          <Box sx={{ mb: 4 }}>
            <DescriptionTitle
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 2,
                color: 'secondary.main',
                fontSize: '1.5rem',
                borderBottom: '2px solid',
                borderColor: 'secondary.main',
                pb: 1,
              }}
            >
              성격 특성
            </DescriptionTitle>

            <Typography variant="body1" sx={{ mb: 2 }}>
              {mbtiDescription.description}
            </Typography>

            <DescriptionTitle variant="h5">연애 강점</DescriptionTitle>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mb: 2,
                gap: 0.5,
                justifyContent: 'flex-start',
                '& .MuiChip-root': {
                  margin: '2px',
                  height: 'auto',
                  '& .MuiChip-label': {
                    whiteSpace: 'normal',
                    overflow: 'visible',
                    padding: '4px 8px',
                  },
                },
              }}
            >
              {mbtiDescription.strengths.map((strength, index) => (
                <AnimatedElement
                  key={index}
                  animation="slideUp"
                  duration="fast"
                  delay={index * 100}
                >
                  <TraitChip label={strength} color="primary" />
                </AnimatedElement>
              ))}
            </Box>

            <DescriptionTitle variant="h5">연애 약점</DescriptionTitle>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mb: 2,
                gap: 0.5,
                justifyContent: 'flex-start',
                '& .MuiChip-root': {
                  margin: '2px',
                  height: 'auto',
                  '& .MuiChip-label': {
                    whiteSpace: 'normal',
                    overflow: 'visible',
                    padding: '4px 8px',
                  },
                },
              }}
            >
              {mbtiDescription.weaknesses.map((weakness, index) => (
                <AnimatedElement
                  key={index}
                  animation="slideUp"
                  duration="fast"
                  delay={index * 100}
                >
                  <TraitChip label={weakness} color="secondary" />
                </AnimatedElement>
              ))}
            </Box>

            <DescriptionTitle variant="h5">연애 스타일</DescriptionTitle>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {mbtiDescription.datingStyle}
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* 점수 분석 섹션 */}
          <Box sx={{ mb: 4 }}>
            <DescriptionTitle
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 2,
                color: 'secondary.main',
                fontSize: '1.5rem',
                borderBottom: '2px solid',
                borderColor: 'secondary.main',
                pb: 1,
              }}
            >
              점수 분석
            </DescriptionTitle>

            <Typography variant="body1" sx={{ mb: 3 }}>
              당신의 MBTI 성향 점수 분석입니다. 각 차원에서 어느 쪽에 더 가까운지 확인해보세요.
            </Typography>

            {['E-I', 'S-N', 'T-F', 'J-P'].map((dimension, index) => {
              const { score, label1, label2 } = calculateScore(dimension);
              const leftScore = score;
              const rightScore = 100 - score;

              // 왼쪽이 더 높은지 오른쪽이 더 높은지 확인
              const isLeftHigher = leftScore >= rightScore;

              return (
                <AnimatedElement
                  key={dimension}
                  animation="slideRight"
                  duration="normal"
                  delay={index * 150}
                >
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" fontWeight={isLeftHigher ? 'bold' : 'normal'}>
                        {label1}
                      </Typography>
                      <Typography variant="body2" fontWeight={!isLeftHigher ? 'bold' : 'normal'}>
                        {label2}
                      </Typography>
                    </Box>

                    <ScoreBarContainer>
                      {isLeftHigher ? (
                        <LeftScoreBar dimension={dimension} width={leftScore}>
                          {leftScore}%
                        </LeftScoreBar>
                      ) : (
                        <Box sx={{ width: `${leftScore}%` }} />
                      )}

                      {!isLeftHigher ? (
                        <RightScoreBar dimension={dimension} width={rightScore}>
                          {rightScore}%
                        </RightScoreBar>
                      ) : (
                        <Box sx={{ width: `${rightScore}%` }} />
                      )}
                    </ScoreBarContainer>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                      <Typography variant="caption" color="text.secondary">
                        {dimension === 'E-I'
                          ? '외향적'
                          : dimension === 'S-N'
                            ? '현실적'
                            : dimension === 'T-F'
                              ? '논리적'
                              : '계획적'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {dimension === 'E-I'
                          ? '내향적'
                          : dimension === 'S-N'
                            ? '직관적'
                            : dimension === 'T-F'
                              ? '감성적'
                              : '즉흥적'}
                      </Typography>
                    </Box>
                  </Box>
                </AnimatedElement>
              );
            })}
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* 궁합 정보 섹션 */}
          <Box sx={{ mb: 4 }}>
            <DescriptionTitle
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 2,
                color: 'secondary.main',
                fontSize: '1.5rem',
                borderBottom: '2px solid',
                borderColor: 'secondary.main',
                pb: 1,
              }}
            >
              궁합 정보
            </DescriptionTitle>

            <Grid container spacing={3}>
              {/* 이상형 정보 */}
              <Grid item xs={12} md={6}>
                <AnimatedElement animation="slideUp" duration="normal" delay={100}>
                  <Box sx={{ mb: 3 }}>
                    <DescriptionTitle variant="h5">나의 이상형</DescriptionTitle>

                    {idealTypeDescription ? (
                      <>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="h6" color="secondary.main" sx={{ mr: 1 }}>
                            {idealType}
                          </Typography>
                          <Typography variant="subtitle1">{idealTypeDescription.name}</Typography>
                        </Box>

                        <Typography variant="body2" sx={{ mb: 2 }}>
                          {idealTypeDescription.description}
                        </Typography>

                        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                          &quot;{idealTypeDescription.datingStyle}&quot;
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="body1">정보를 불러올 수 없습니다.</Typography>
                    )}
                  </Box>
                </AnimatedElement>
              </Grid>

              {/* 최악의 궁합 정보 */}
              <Grid item xs={12} md={6}>
                <AnimatedElement animation="slideUp" duration="normal" delay={200}>
                  <Box sx={{ mb: 3 }}>
                    <DescriptionTitle variant="h5">주의해야 할 유형</DescriptionTitle>

                    {worstMatchDescription ? (
                      <>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="h6" color="error" sx={{ mr: 1 }}>
                            {worstMatch}
                          </Typography>
                          <Typography variant="subtitle1">{worstMatchDescription.name}</Typography>
                        </Box>

                        <Typography variant="body2" sx={{ mb: 2 }}>
                          {worstMatchDescription.description}
                        </Typography>

                        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                          &quot;{worstMatchDescription.datingStyle}&quot;
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="body1">정보를 불러올 수 없습니다.</Typography>
                    )}
                  </Box>
                </AnimatedElement>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </AnimatedElement>

      {/* 연애 조언 & 팁 버튼 */}
      <AnimatedElement animation="fadeIn" duration="normal" delay={900}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 3,
            mb: 2,
          }}
        >
          <MysticalButton
            variant="glow"
            onClick={e => {
              e.stopPropagation(); // 이벤트 전파 중지
              handleOpenAdviceModal();
            }}
            startIcon={<TipsAndUpdatesIcon />}
            sx={{
              borderRadius: '30px',
              py: 1.5,
              px: 3,
              color: 'white',
              fontSize: responsive.isMobile ? '0.875rem' : '1rem',
              fontWeight: 'bold',
              width: responsive.isMobile ? '100%' : 'auto',
              minWidth: '200px',
              background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              },
            }}
          >
            연애 조언 & 팁
          </MysticalButton>
        </Box>
      </AnimatedElement>

      {/* 마법 구슬 버튼 - 나의 이상형 찾기 */}
      <AnimatedElement animation="fadeIn" duration="normal" delay={1000}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 4,
            mb: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, textAlign: 'center', color: 'secondary.main', fontWeight: 'bold' }}
          >
            당신의 이상형을 찾아보세요!
          </Typography>

          <Box
            component="div"
            onClick={e => {
              e.stopPropagation(); // 이벤트 전파 중지
              window.open('https://some-in-univ.com/event/pre-signup', '_blank', 'noopener');
            }}
            sx={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #9400D3, #4B0082, #0000FF, #4B0082, #9400D3)',
              backgroundSize: '400% 400%',
              animation: `${colorChangeAnimation} 10s ease infinite, ${glowAnimation} 3s infinite`,
              color: 'white',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                opacity: 0.7,
                zIndex: 1,
              },
              '&:hover': {
                transform: 'scale(1.05)',
              },
              [theme.breakpoints.down('sm')]: {
                width: 100,
                height: 100,
              },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                p: 1,
              }}
            >
              <FavoriteIcon sx={{ fontSize: '2rem', mb: 0.5, color: 'white' }} />
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  lineHeight: 1.2,
                  color: 'white',
                }}
              >
                나의 이상형 찾기
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="caption"
            sx={{ mt: 2, textAlign: 'center', color: 'text.secondary', maxWidth: 250 }}
          >
            클릭하여 당신의 이상형을 만나보세요!
          </Typography>
        </Box>
      </AnimatedElement>

      {/* 하단 버튼 영역 */}
      <AnimatedElement animation="fadeIn" duration="normal" delay={1200}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={e => {
                e.stopPropagation(); // 이벤트 전파 중지
                onRestart();
              }}
              sx={{
                backgroundColor: 'primary.light',
                color: 'white',
                p: 1.5,
                mb: 1,
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
              }}
            >
              <RestartAltIcon fontSize="large" />
            </IconButton>
            <Typography variant="caption" color="text.secondary">
              테스트 다시 하기
            </Typography>
          </Box>

          {onShare && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={e => {
                  e.stopPropagation(); // 이벤트 전파 중지
                  onShare();
                }}
                sx={{
                  backgroundColor: 'secondary.light',
                  color: 'white',
                  p: 1.5,
                  mb: 1,
                  '&:hover': {
                    backgroundColor: 'secondary.main',
                  },
                }}
              >
                <ShareIcon fontSize="large" />
              </IconButton>
              <Typography variant="caption" color="text.secondary">
                결과 공유하기
              </Typography>
            </Box>
          )}
        </Box>
      </AnimatedElement>
    </ResultContainer>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        pt: 4,
        pb: 20, // 하단 패딩 유지
        px: 2,
        overflow: 'visible', // hidden에서 visible로 변경
      }}
    >
      {/* 별 반짝임 배경 효과 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <StarryBackground starCount={30} shootingStarCount={2} fogCount={3} />
      </Box>

      {/* 타로 카드 뒤집기 애니메이션 */}
      <FlipCard
        front={cardFront}
        back={cardBack}
        frontVariant="mystical"
        backVariant="result"
        frontTitle={frontCardState === 'loading' ? '타로 카드 해석 중...' : '타로 카드 해석 완료!'}
        backTitle="당신의 연애 MBTI 유형은"
        autoFlip={true}
        autoFlipDelay={1500}
        sx={{
          maxWidth: 800,
          mx: 'auto',
          position: 'relative',
          zIndex: 5,
          minHeight: { xs: 700, sm: 750, md: 800 }, // 반응형 최소 높이 증가
          display: 'block',
          mb: 6, // 하단 여백 추가
        }}
      />

      {/* 연애 조언 & 팁 모달 */}
      <Modal
        open={openAdviceModal}
        onClose={handleCloseAdviceModal}
        aria-labelledby="advice-modal-title"
        aria-describedby="advice-modal-description"
        closeAfterTransition
        sx={{
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <AdviceModalContainer onClick={e => e.stopPropagation()}>
          <ModalHeader>
            <Typography
              variant="h5"
              component="h2"
              id="advice-modal-title"
              sx={{ fontWeight: 'bold' }}
            >
              {mbtiType} 연애 조언 & 팁
            </Typography>
            <CloseButton
              aria-label="닫기"
              onClick={e => {
                e.stopPropagation(); // 이벤트 전파 중지
                handleCloseAdviceModal();
              }}
            >
              <CloseIcon />
            </CloseButton>
          </ModalHeader>
          <ModalContent id="advice-modal-description">
            {mbtiDescription && (
              <RelationshipAdvice
                mbtiType={mbtiType}
                description={mbtiDescription.description}
                strengths={mbtiDescription.strengths}
                weaknesses={mbtiDescription.weaknesses}
                datingStyle={mbtiDescription.datingStyle}
                idealTypeInfo={idealTypeDescription}
                worstMatchInfo={worstMatchDescription}
              />
            )}
          </ModalContent>
        </AdviceModalContainer>
      </Modal>
    </Box>
  );
}
