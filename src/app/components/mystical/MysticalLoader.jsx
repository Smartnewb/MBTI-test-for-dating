'use client';

import { Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// 스타일링된 로더 컨테이너
const LoaderContainer = styled(Box)(({ theme, size }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  width: size === 'small' ? 100 : size === 'medium' ? 150 : 200,
  height: size === 'small' ? 100 : size === 'medium' ? 150 : 200,
  position: 'relative',
}));

// 스타일링된 로더 원
const LoaderCircle = styled(Box)(({ theme, size }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.primary.main}30`,
  animation: 'rotate 10s linear infinite',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-5px',
    left: '50%',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 20px ${theme.palette.primary.main}`,
  },
}));

// 스타일링된 로더 원 2
const LoaderCircle2 = styled(Box)(({ theme, size }) => ({
  position: 'absolute',
  width: '80%',
  height: '80%',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.secondary.main}30`,
  animation: 'rotate 7s linear infinite reverse',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-5px',
    left: '50%',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: theme.palette.secondary.main,
    boxShadow: `0 0 10px ${theme.palette.secondary.main}, 0 0 20px ${theme.palette.secondary.main}`,
  },
}));

// 스타일링된 로더 아이콘
const LoaderIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  height: '50%',
  borderRadius: '50%',
  background: theme.palette.background.paper,
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  zIndex: 1,
  animation: 'pulse 2s ease-in-out infinite',
  
  '& svg': {
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
}));

// 스타일링된 로더 텍스트
const LoaderText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.medium,
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

/**
 * 신비로운 로딩 인디케이터 컴포넌트
 * 
 * 신비로운 타로 테마에 어울리는 로딩 인디케이터를 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.size='medium'] - 로더 크기 ('small', 'medium', 'large')
 * @param {string} [props.text='로딩 중...'] - 로더 텍스트
 * @param {boolean} [props.showText=true] - 텍스트 표시 여부
 * @param {React.ReactNode} [props.icon] - 커스텀 아이콘
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function MysticalLoader({
  size = 'medium',
  text = '로딩 중...',
  showText = true,
  icon,
  sx = {}
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...sx }}>
      <LoaderContainer size={size}>
        <LoaderCircle size={size} />
        <LoaderCircle2 size={size} />
        
        <LoaderIcon>
          {icon || <AutoAwesomeIcon />}
        </LoaderIcon>
      </LoaderContainer>
      
      {showText && (
        <LoaderText variant="body2">
          {text}
        </LoaderText>
      )}
      
      {/* 애니메이션 키프레임 */}
      <style jsx global>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
    </Box>
  );
}
