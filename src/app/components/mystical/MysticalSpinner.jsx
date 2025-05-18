'use client';

import { Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

// 스타일링된 스피너 컨테이너
const SpinnerContainer = styled(Box)(({ theme, size, variant }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: size === 'small' ? 60 : size === 'medium' ? 100 : 140,
  height: size === 'small' ? 60 : size === 'medium' ? 100 : 140,
}));

// 스타일링된 원형 프로그레스
const StyledCircularProgress = styled(CircularProgress)(({ theme, variant, size }) => ({
  color: variant === 'primary' 
    ? theme.palette.primary.main 
    : variant === 'secondary' 
      ? theme.palette.secondary.main 
      : theme.palette.primary.main,
  
  // Mystical 변형에 특별한 효과 추가
  ...(variant === 'mystical' && {
    filter: `drop-shadow(0 0 5px ${theme.palette.primary.main})`,
  }),
}));

// 스타일링된 내부 원형 프로그레스
const InnerCircularProgress = styled(CircularProgress)(({ theme, variant, size }) => ({
  position: 'absolute',
  color: variant === 'primary' 
    ? theme.palette.primary.light 
    : variant === 'secondary' 
      ? theme.palette.secondary.light 
      : theme.palette.secondary.main,
  
  // Mystical 변형에 특별한 효과 추가
  ...(variant === 'mystical' && {
    filter: `drop-shadow(0 0 5px ${theme.palette.secondary.main})`,
  }),
}));

// 스타일링된 아이콘 컨테이너
const IconContainer = styled(Box)(({ theme, variant }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  padding: theme.spacing(1),
  
  // 변형에 따른 스타일
  ...(variant === 'primary' && {
    color: theme.palette.primary.main,
  }),
  
  ...(variant === 'secondary' && {
    color: theme.palette.secondary.main,
  }),
  
  ...(variant === 'mystical' && {
    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
    color: theme.palette.secondary.main,
    animation: 'pulse 2s infinite ease-in-out',
  }),
}));

// 스타일링된 텍스트
const SpinnerText = styled(Typography)(({ theme, variant }) => ({
  marginTop: theme.spacing(2),
  fontFamily: theme.typography.fontFamily.secondary,
  fontWeight: theme.typography.fontWeight.medium,
  textAlign: 'center',
  
  // 변형에 따른 스타일
  ...(variant === 'primary' && {
    color: theme.palette.primary.main,
  }),
  
  ...(variant === 'secondary' && {
    color: theme.palette.secondary.main,
  }),
  
  ...(variant === 'mystical' && {
    color: theme.palette.text.primary,
    textShadow: `0 0 5px ${theme.palette.primary.main}40`,
  }),
}));

// 스타일링된 별 장식
const StarDecoration = styled(Box)(({ theme, index }) => ({
  position: 'absolute',
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
  animation: `twinkle 1.5s infinite ease-in-out ${index * 0.3}s`,
  
  // 별 위치 랜덤 배치
  top: `${20 + Math.random() * 60}%`,
  left: `${20 + Math.random() * 60}%`,
  transform: 'translate(-50%, -50%)',
}));

/**
 * 신비로운 스피너 컴포넌트
 * 
 * 로딩 상태를 표시하기 위한 스피너 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.size='medium'] - 스피너 크기 ('small', 'medium', 'large')
 * @param {string} [props.variant='primary'] - 스피너 변형 ('primary', 'secondary', 'mystical')
 * @param {string} [props.text] - 스피너 아래에 표시할 텍스트
 * @param {React.ReactNode} [props.icon] - 스피너 중앙에 표시할 아이콘
 * @param {boolean} [props.showStars=false] - 별 장식 표시 여부 (mystical 변형에서만 적용)
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function MysticalSpinner({
  size = 'medium',
  variant = 'primary',
  text,
  icon,
  showStars = false,
  sx = {},
}) {
  // 크기에 따른 값 계산
  const sizeValue = size === 'small' ? 40 : size === 'medium' ? 60 : 80;
  const innerSizeValue = size === 'small' ? 20 : size === 'medium' ? 30 : 40;
  const iconSize = size === 'small' ? 'small' : size === 'medium' ? 'medium' : 'large';
  
  // 아이콘 선택
  const renderIcon = () => {
    if (icon) return icon;
    
    if (variant === 'primary') return <AutoAwesomeIcon fontSize={iconSize} />;
    if (variant === 'secondary') return <StarIcon fontSize={iconSize} />;
    return <WbTwilightIcon fontSize={iconSize} />;
  };
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...sx }}>
      <SpinnerContainer size={size} variant={variant}>
        <StyledCircularProgress
          variant="indeterminate"
          size={sizeValue}
          thickness={4}
          variant={variant}
        />
        
        <InnerCircularProgress
          variant="indeterminate"
          size={innerSizeValue}
          thickness={4}
          variant={variant}
        />
        
        <IconContainer variant={variant} sx={{ width: innerSizeValue, height: innerSizeValue }}>
          {renderIcon()}
        </IconContainer>
        
        {/* 별 장식 (mystical 변형에서만 표시) */}
        {variant === 'mystical' && showStars && (
          <>
            {[...Array(5)].map((_, index) => (
              <StarDecoration key={index} index={index} />
            ))}
          </>
        )}
      </SpinnerContainer>
      
      {text && (
        <SpinnerText variant="body2" variant={variant}>
          {text}
        </SpinnerText>
      )}
      
      {/* 애니메이션 키프레임 */}
      <style jsx global>{`
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
        
        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(0.8) translate(-50%, -50%);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) translate(-50%, -50%);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.8) translate(-50%, -50%);
          }
        }
      `}</style>
    </Box>
  );
}
