'use client';

import { forwardRef } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

// 스타일링된 디바이더 컨테이너
const DividerContainer = styled(Box)(({ theme, orientation, spacing }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: orientation === 'horizontal' 
    ? `${theme.spacing(spacing)} 0` 
    : 0,
  padding: 0,
}));

// 스타일링된 디바이더
const StyledDivider = styled(Divider)(({ theme, variant, thickness, glow }) => ({
  width: '100%',
  
  // 변형에 따른 스타일
  ...(variant === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.7,
  }),
  
  ...(variant === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.7,
  }),
  
  ...(variant === 'mystical' && {
    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent)`,
    height: thickness,
    border: 'none',
  }),
  
  // 두께 설정
  ...(thickness && {
    height: thickness,
    border: 'none',
  }),
  
  // 글로우 효과
  ...(glow && {
    boxShadow: `0 0 8px ${variant === 'primary' 
      ? theme.palette.primary.main 
      : variant === 'secondary' 
        ? theme.palette.secondary.main 
        : `${theme.palette.primary.main}, 0 0 12px ${theme.palette.secondary.main}`}`,
  }),
}));

// 스타일링된 텍스트 컨테이너
const TextContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 2),
  backgroundColor: theme.palette.background.default,
  zIndex: 1,
}));

// 스타일링된 아이콘 컨테이너
const IconContainer = styled(Box)(({ theme, variant }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  color: variant === 'primary' 
    ? theme.palette.primary.main 
    : variant === 'secondary' 
      ? theme.palette.secondary.main 
      : theme.palette.secondary.main,
}));

// 스타일링된 장식 요소
const Decoration = styled(Box)(({ theme, variant, position }) => ({
  position: 'absolute',
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: variant === 'primary' 
    ? theme.palette.primary.main 
    : variant === 'secondary' 
      ? theme.palette.secondary.main 
      : theme.palette.secondary.main,
  boxShadow: `0 0 5px ${variant === 'primary' 
    ? theme.palette.primary.main 
    : variant === 'secondary' 
      ? theme.palette.secondary.main 
      : theme.palette.secondary.main}`,
  ...(position === 'left' && {
    left: '20%',
  }),
  ...(position === 'right' && {
    right: '20%',
  }),
}));

/**
 * 신비로운 디바이더 컴포넌트
 * 
 * 섹션 구분을 위한 신비로운 디바이더 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.variant='default'] - 디바이더 변형 ('default', 'primary', 'secondary', 'mystical')
 * @param {string} [props.orientation='horizontal'] - 방향 ('horizontal', 'vertical')
 * @param {string} [props.text] - 디바이더 중앙에 표시할 텍스트
 * @param {React.ReactNode} [props.icon] - 디바이더 중앙에 표시할 아이콘
 * @param {number} [props.thickness] - 디바이더 두께 (px)
 * @param {boolean} [props.glow=false] - 글로우 효과 적용 여부
 * @param {boolean} [props.decorated=false] - 장식 효과 적용 여부
 * @param {number} [props.spacing=3] - 상하 여백 (theme.spacing 단위)
 * @param {Object} [props.sx] - 추가 스타일
 */
const MysticalDivider = forwardRef(function MysticalDivider(props, ref) {
  const {
    variant = 'default',
    orientation = 'horizontal',
    text,
    icon,
    thickness,
    glow = false,
    decorated = false,
    spacing = 3,
    sx = {},
    ...other
  } = props;
  
  // 아이콘 선택
  const renderIcon = () => {
    if (icon) return icon;
    
    if (variant === 'primary') return <AutoAwesomeIcon fontSize="small" />;
    if (variant === 'secondary') return <StarIcon fontSize="small" />;
    if (variant === 'mystical') return <WbTwilightIcon fontSize="small" />;
    
    return null;
  };
  
  return (
    <DividerContainer
      ref={ref}
      orientation={orientation}
      spacing={spacing}
      sx={sx}
      {...other}
    >
      <StyledDivider
        variant={variant}
        orientation={orientation}
        thickness={thickness}
        glow={glow}
      />
      
      {/* 텍스트 또는 아이콘 */}
      {(text || icon) && (
        <TextContainer>
          {icon && (
            <IconContainer variant={variant}>
              {renderIcon()}
            </IconContainer>
          )}
          
          {text && (
            <Typography
              variant="body2"
              color={variant === 'default' ? 'text.secondary' : 'inherit'}
              sx={{
                color: variant === 'primary' 
                  ? 'primary.main' 
                  : variant === 'secondary' 
                    ? 'secondary.main' 
                    : variant === 'mystical' 
                      ? 'secondary.main' 
                      : 'text.secondary',
                fontFamily: theme => theme.typography.fontFamily.secondary,
              }}
            >
              {text}
            </Typography>
          )}
        </TextContainer>
      )}
      
      {/* 장식 요소 */}
      {decorated && (
        <>
          <Decoration variant={variant} position="left" />
          <Decoration variant={variant} position="right" />
        </>
      )}
    </DividerContainer>
  );
});

export default MysticalDivider;
