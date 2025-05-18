'use client';

import { forwardRef, useRef, useEffect, useState, Children, cloneElement } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 스타일링된 애니메이션 그룹 컴포넌트
const StyledAnimatedGroup = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

/**
 * 애니메이션 그룹 컴포넌트
 * 
 * 자식 요소에 순차적으로 애니메이션을 적용하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} [props.animation='fadeIn'] - 애니메이션 유형
 * @param {string|number} [props.duration='normal'] - 애니메이션 지속 시간 (ms 또는 'fast', 'normal', 'slow' 등)
 * @param {string} [props.easing='easeInOut'] - 애니메이션 이징 함수
 * @param {number} [props.staggerDelay=100] - 자식 요소 간 지연 시간 (ms)
 * @param {number} [props.initialDelay=0] - 첫 번째 자식 요소 지연 시간 (ms)
 * @param {boolean} [props.onScroll=false] - 스크롤 시 애니메이션 실행 여부
 * @param {number} [props.threshold=0.2] - 스크롤 애니메이션 임계값 (0-1)
 * @param {React.ReactNode} props.children - 애니메이션 그룹 내용
 * @param {Object} [props.sx] - 추가 스타일
 */
const AnimatedGroup = forwardRef(function AnimatedGroup(props, ref) {
  const { 
    animation = 'fadeIn', 
    duration = 'normal',
    easing = 'easeInOut',
    staggerDelay = 100,
    initialDelay = 0,
    onScroll = false,
    threshold = 0.2,
    children, 
    sx = {}, 
    ...other 
  } = props;
  
  // 내부 참조 생성
  const groupRef = useRef(null);
  const resolvedRef = ref || groupRef;
  
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
  
  // 자식 요소에 애니메이션 속성 추가
  const childrenWithAnimation = Children.map(children, (child, index) => {
    if (!child || typeof child !== 'object') return child;
    
    // 자식 요소별 지연 시간 계산
    const delay = initialDelay + (index * staggerDelay);
    
    // 자식 요소에 애니메이션 속성 추가
    return cloneElement(child, {
      animation: isVisible ? animation : null,
      duration,
      delay,
      easing,
      style: {
        ...child.props.style,
        opacity: isVisible ? 1 : 0,
      },
    });
  });
  
  return (
    <StyledAnimatedGroup 
      ref={resolvedRef}
      sx={sx}
      {...other}
    >
      {childrenWithAnimation}
    </StyledAnimatedGroup>
  );
});

export default AnimatedGroup;
