'use client';

import { forwardRef } from 'react';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MysticalButton from '../MysticalButton';

// 스타일링된 네비게이션 컨테이너
const NavigationContainer = styled(Box)(({ theme, variant, position }) => ({
  display: 'flex',
  justifyContent: position === 'between' ? 'space-between' : position === 'center' ? 'center' : 'flex-start',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(2),
}));

// 스타일링된 아이콘 버튼
const StyledIconButton = styled(IconButton)(({ theme, variant }) => ({
  borderRadius: '50%',
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  
  // Primary 변형
  ...(variant === 'primary' && {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}20`,
    },
  }),
  
  // Secondary 변형
  ...(variant === 'secondary' && {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main}20`,
    },
  }),
  
  // Mystical 변형
  ...(variant === 'mystical' && {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}20`,
      boxShadow: `0 0 10px ${theme.palette.primary.main}40`,
    },
  }),
  
  // 비활성화 상태
  '&.Mui-disabled': {
    opacity: 0.5,
    color: theme.palette.text.disabled,
  },
}));

/**
 * 신비로운 네비게이션 컴포넌트
 * 
 * 다음/이전 네비게이션 컨트롤을 제공하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.variant='primary'] - 네비게이션 변형 ('primary', 'secondary', 'mystical')
 * @param {string} [props.position='between'] - 버튼 위치 ('between', 'center', 'start', 'end')
 * @param {string} [props.type='button'] - 네비게이션 타입 ('button', 'icon')
 * @param {string} [props.prevLabel='이전'] - 이전 버튼 라벨
 * @param {string} [props.nextLabel='다음'] - 다음 버튼 라벨
 * @param {boolean} [props.showPrev=true] - 이전 버튼 표시 여부
 * @param {boolean} [props.showNext=true] - 다음 버튼 표시 여부
 * @param {boolean} [props.disablePrev=false] - 이전 버튼 비활성화 여부
 * @param {boolean} [props.disableNext=false] - 다음 버튼 비활성화 여부
 * @param {string} [props.prevTooltip] - 이전 버튼 툴팁
 * @param {string} [props.nextTooltip] - 다음 버튼 툴팁
 * @param {Function} [props.onPrev] - 이전 버튼 클릭 핸들러
 * @param {Function} [props.onNext] - 다음 버튼 클릭 핸들러
 * @param {Object} [props.sx] - 추가 스타일
 */
const MysticalNavigation = forwardRef(function MysticalNavigation(props, ref) {
  const {
    variant = 'primary',
    position = 'between',
    type = 'button',
    prevLabel = '이전',
    nextLabel = '다음',
    showPrev = true,
    showNext = true,
    disablePrev = false,
    disableNext = false,
    prevTooltip,
    nextTooltip,
    onPrev,
    onNext,
    sx = {},
    ...other
  } = props;
  
  // 버튼 타입 네비게이션 렌더링
  const renderButtonNavigation = () => (
    <>
      {showPrev && (
        <Tooltip title={prevTooltip || ''} arrow={!!prevTooltip}>
          <span>
            <MysticalButton
              variant={variant === 'mystical' ? 'tarot' : 'outlined'}
              onClick={onPrev}
              disabled={disablePrev}
              startIcon={<ArrowBackIcon />}
              aria-label={prevLabel}
            >
              {prevLabel}
            </MysticalButton>
          </span>
        </Tooltip>
      )}
      
      {!showPrev && position === 'between' && <Box />}
      
      {showNext && (
        <Tooltip title={nextTooltip || ''} arrow={!!nextTooltip}>
          <span>
            <MysticalButton
              variant={variant === 'mystical' ? 'mystical' : 'contained'}
              onClick={onNext}
              disabled={disableNext}
              endIcon={<ArrowForwardIcon />}
              aria-label={nextLabel}
            >
              {nextLabel}
            </MysticalButton>
          </span>
        </Tooltip>
      )}
    </>
  );
  
  // 아이콘 타입 네비게이션 렌더링
  const renderIconNavigation = () => (
    <>
      {showPrev && (
        <Tooltip title={prevTooltip || prevLabel} arrow>
          <span>
            <StyledIconButton
              variant={variant}
              onClick={onPrev}
              disabled={disablePrev}
              aria-label={prevLabel}
              size="large"
            >
              <ArrowBackIcon />
            </StyledIconButton>
          </span>
        </Tooltip>
      )}
      
      {!showPrev && position === 'between' && <Box />}
      
      {showNext && (
        <Tooltip title={nextTooltip || nextLabel} arrow>
          <span>
            <StyledIconButton
              variant={variant}
              onClick={onNext}
              disabled={disableNext}
              aria-label={nextLabel}
              size="large"
            >
              <ArrowForwardIcon />
            </StyledIconButton>
          </span>
        </Tooltip>
      )}
    </>
  );
  
  return (
    <NavigationContainer
      ref={ref}
      variant={variant}
      position={position}
      sx={sx}
      {...other}
    >
      {type === 'button' ? renderButtonNavigation() : renderIconNavigation()}
    </NavigationContainer>
  );
});

export default MysticalNavigation;
