'use client';

import { forwardRef, useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { animations } from '../../styles/tokens/animations';

// 스타일링된 아이콘 컨테이너
const IconContainer = styled(Box)(({ theme, animation, duration, delay, easing, infinite, size, color }) => {
  // 애니메이션 키프레임 선택
  const keyframe = animations.keyframes[animation] || getCustomKeyframes(animation);
  
  // 애니메이션 지속 시간 선택
  const animationDuration = typeof duration === 'string'
    ? animations.duration[duration]
    : duration;
  
  // 애니메이션 이징 함수 선택
  const animationEasing = animations.easing[easing] || easing;
  
  // 아이콘 크기 계산
  const iconSize = size === 'small' ? 20 : size === 'medium' ? 24 : size === 'large' ? 36 : size;
  
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color || 'inherit',
    fontSize: iconSize,
    lineHeight: 1,
    animation: keyframe && `${animation} ${animationDuration}ms ${animationEasing} ${delay}ms ${infinite ? 'infinite' : 'forwards'}`,
    
    // 애니메이션 키프레임 정의
    '@keyframes rotate': animations.keyframes.rotate,
    '@keyframes pulse': animations.keyframes.pulse,
    '@keyframes fadeIn': animations.keyframes.fadeIn,
    '@keyframes zoomIn': animations.keyframes.zoomIn,
    '@keyframes bounce': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    '@keyframes shake': {
      '0%, 100%': { transform: 'translateX(0)' },
      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
      '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    '@keyframes ping': {
      '0%': { transform: 'scale(1)', opacity: 1 },
      '75%, 100%': { transform: 'scale(2)', opacity: 0 },
    },
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    '@keyframes heartbeat': {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.2)' },
    },
    '@keyframes flip': {
      '0%': { transform: 'perspective(400px) rotateY(0)' },
      '100%': { transform: 'perspective(400px) rotateY(360deg)' },
    },
    '@keyframes swing': {
      '0%, 100%': { transform: 'rotate(0deg)' },
      '20%': { transform: 'rotate(15deg)' },
      '40%': { transform: 'rotate(-10deg)' },
      '60%': { transform: 'rotate(5deg)' },
      '80%': { transform: 'rotate(-5deg)' },
    },
    '@keyframes tada': {
      '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
      '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
      '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
      '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
    },
  };
});

// 커스텀 키프레임 가져오기
const getCustomKeyframes = (animation) => {
  switch (animation) {
    case 'bounce':
      return {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      };
    case 'shake':
      return {
        '0%, 100%': { transform: 'translateX(0)' },
        '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
        '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
      };
    case 'spin':
      return {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      };
    case 'ping':
      return {
        '0%': { transform: 'scale(1)', opacity: 1 },
        '75%, 100%': { transform: 'scale(2)', opacity: 0 },
      };
    case 'float':
      return {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      };
    case 'heartbeat':
      return {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.2)' },
      };
    case 'flip':
      return {
        '0%': { transform: 'perspective(400px) rotateY(0)' },
        '100%': { transform: 'perspective(400px) rotateY(360deg)' },
      };
    case 'swing':
      return {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '20%': { transform: 'rotate(15deg)' },
        '40%': { transform: 'rotate(-10deg)' },
        '60%': { transform: 'rotate(5deg)' },
        '80%': { transform: 'rotate(-5deg)' },
      };
    case 'tada':
      return {
        '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
        '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
        '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
        '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
      };
    default:
      return null;
  }
};

/**
 * 애니메이션 아이콘 컴포넌트
 * 
 * 다양한 애니메이션 효과를 적용한 아이콘 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 아이콘 컴포넌트
 * @param {string} [props.animation='fadeIn'] - 애니메이션 유형
 * @param {string|number} [props.duration='normal'] - 애니메이션 지속 시간 (ms 또는 'fast', 'normal', 'slow' 등)
 * @param {number} [props.delay=0] - 애니메이션 지연 시간 (ms)
 * @param {string} [props.easing='easeInOut'] - 애니메이션 이징 함수
 * @param {boolean} [props.infinite=false] - 무한 반복 여부
 * @param {boolean} [props.onScroll=false] - 스크롤 시 애니메이션 실행 여부
 * @param {number} [props.threshold=0.2] - 스크롤 애니메이션 임계값 (0-1)
 * @param {string|number} [props.size='medium'] - 아이콘 크기 ('small', 'medium', 'large' 또는 숫자)
 * @param {string} [props.color] - 아이콘 색상
 * @param {Object} [props.sx] - 추가 스타일
 */
const AnimatedIcon = forwardRef(function AnimatedIcon(props, ref) {
  const {
    children,
    animation = 'fadeIn',
    duration = 'normal',
    delay = 0,
    easing = 'easeInOut',
    infinite = false,
    onScroll = false,
    threshold = 0.2,
    size = 'medium',
    color,
    sx = {},
    ...other
  } = props;
  
  // 내부 참조 생성
  const elementRef = useRef(null);
  const resolvedRef = ref || elementRef;
  
  // 애니메이션 상태
  const [isVisible, setIsVisible] = useState(!onScroll);
  
  // 스크롤 애니메이션 처리
  useEffect(() => {
    if (!onScroll || typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    if (resolvedRef.current) {
      observer.observe(resolvedRef.current);
    }
    
    return () => {
      if (resolvedRef.current) {
        observer.unobserve(resolvedRef.current);
      }
    };
  }, [onScroll, resolvedRef, threshold]);
  
  return (
    <IconContainer
      ref={resolvedRef}
      animation={isVisible ? animation : null}
      duration={duration}
      delay={delay}
      easing={easing}
      infinite={infinite}
      size={size}
      color={color}
      sx={{
        opacity: isVisible || animation === 'fadeIn' ? 1 : 0,
        ...sx,
      }}
      {...other}
    >
      {children}
    </IconContainer>
  );
});

export default AnimatedIcon;
