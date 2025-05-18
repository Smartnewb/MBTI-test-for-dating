'use client';

import { forwardRef, useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { animations } from '../../styles/tokens/animations';

// 스타일링된 애니메이션 컴포넌트
const StyledAnimatedElement = styled(Box)(({ theme, animation, duration, delay, easing, infinite }) => {
  // 애니메이션 키프레임 선택
  const keyframe = animations.keyframes[animation];
  
  // 애니메이션 지속 시간 선택
  const animationDuration = typeof duration === 'string' 
    ? animations.duration[duration] 
    : duration;
  
  // 애니메이션 이징 함수 선택
  const animationEasing = animations.easing[easing] || easing;
  
  return {
    // 애니메이션 스타일
    animation: keyframe && `${animation} ${animationDuration}ms ${animationEasing} ${delay}ms ${infinite ? 'infinite' : ''}`,
    
    // 애니메이션 키프레임 정의
    '@keyframes fadeIn': animations.keyframes.fadeIn,
    '@keyframes fadeOut': animations.keyframes.fadeOut,
    '@keyframes slideUp': animations.keyframes.slideUp,
    '@keyframes slideDown': animations.keyframes.slideDown,
    '@keyframes slideRight': animations.keyframes.slideRight,
    '@keyframes slideLeft': animations.keyframes.slideLeft,
    '@keyframes zoomIn': animations.keyframes.zoomIn,
    '@keyframes zoomOut': animations.keyframes.zoomOut,
    '@keyframes rotate': animations.keyframes.rotate,
    '@keyframes glow': animations.keyframes.glow,
    '@keyframes twinkle': animations.keyframes.twinkle,
    '@keyframes flipCard': animations.keyframes.flipCard,
    '@keyframes ripple': animations.keyframes.ripple,
    '@keyframes gradientShift': animations.keyframes.gradientShift,
  };
});

/**
 * 애니메이션 요소 컴포넌트
 * 
 * 애니메이션 효과를 적용한 요소 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.animation='fadeIn'] - 애니메이션 유형
 * @param {string|number} [props.duration='normal'] - 애니메이션 지속 시간 (ms 또는 'fast', 'normal', 'slow' 등)
 * @param {number} [props.delay=0] - 애니메이션 지연 시간 (ms)
 * @param {string} [props.easing='easeInOut'] - 애니메이션 이징 함수
 * @param {boolean} [props.infinite=false] - 무한 반복 여부
 * @param {boolean} [props.onScroll=false] - 스크롤 시 애니메이션 실행 여부
 * @param {number} [props.threshold=0.2] - 스크롤 애니메이션 임계값 (0-1)
 * @param {React.ReactNode} props.children - 애니메이션 요소 내용
 * @param {Object} [props.sx] - 추가 스타일
 */
const AnimatedElement = forwardRef(function AnimatedElement(props, ref) {
  const { 
    animation = 'fadeIn', 
    duration = 'normal',
    delay = 0,
    easing = 'easeInOut',
    infinite = false,
    onScroll = false,
    threshold = 0.2,
    children, 
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
  
  // 애니메이션 지속 시간 계산
  const animationDuration = typeof duration === 'string' 
    ? animations.duration[duration] 
    : duration;
  
  return (
    <StyledAnimatedElement 
      ref={resolvedRef}
      animation={isVisible ? animation : null}
      duration={animationDuration}
      delay={delay}
      easing={easing}
      infinite={infinite}
      sx={{
        opacity: isVisible ? 1 : 0,
        ...sx,
      }}
      {...other}
    >
      {children}
    </StyledAnimatedElement>
  );
});

export default AnimatedElement;
