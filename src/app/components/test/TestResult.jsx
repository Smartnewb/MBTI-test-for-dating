'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Divider, Chip, Button, Grid, LinearProgress, Tabs, Tab, Fade, useTheme, Modal, IconButton, Paper, Link } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ShareIcon from '@mui/icons-material/Share';
import SearchIcon from '@mui/icons-material/Search';
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

// 마법 구슬 버튼 스타일 - 이제 div를 기반으로 함
const MagicOrbButton = styled('div')(({ theme }) => ({
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
    background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
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
  background: mbtiColor ? `linear-gradient(135deg, ${mbtiColor} 30%, ${theme.palette.common.white} 90%)` :
    `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
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