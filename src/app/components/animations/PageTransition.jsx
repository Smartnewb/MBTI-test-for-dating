'use client';

import { useState, useEffect, useRef, forwardRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter, usePathname } from 'next/navigation';
import { animations } from '../../styles/tokens/animations';

// 스타일링된 페이지 트랜지션 컨테이너
const TransitionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}));

// 스타일링된 페이지 컨텐츠
const PageContent = styled(Box)(({ theme, effect, direction, state, duration, easing }) => {
  // 애니메이션 이징 함수 선택
  const animationEasing = animations.easing[easing] || easing;
  
  // 애니메이션 지속 시간 선택
  const animationDuration = typeof duration === 'string'
    ? animations.duration[duration]
    : duration;
  
  // 기본 스타일
  const baseStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: `all ${animationDuration}ms ${animationEasing}`,
  };
  
  // 페이드 효과
  if (effect === 'fade') {
    return {
      ...baseStyle,
      opacity: state === 'entering' || state === 'entered' ? 1 : 0,
    };
  }
  
  // 슬라이드 효과
  if (effect === 'slide') {
    const slideDirection = direction === 'next' ? 1 : -1;
    return {
      ...baseStyle,
      opacity: state === 'entering' || state === 'entered' ? 1 : 0,
      transform: state === 'entering' || state === 'entered'
        ? 'translateX(0)'
        : `translateX(${slideDirection * 5}%)`,
    };
  }
  
  // 줌 효과
  if (effect === 'zoom') {
    const scale = direction === 'next'
      ? (state === 'entering' || state === 'entered' ? 1 : 0.9)
      : (state === 'entering' || state === 'entered' ? 1 : 1.1);
    
    return {
      ...baseStyle,
      opacity: state === 'entering' || state === 'entered' ? 1 : 0,
      transform: `scale(${scale})`,
    };
  }
  
  // 플립 효과
  if (effect === 'flip') {
    const flipDirection = direction === 'next' ? 1 : -1;
    return {
      ...baseStyle,
      opacity: state === 'entering' || state === 'entered' ? 1 : 0,
      transform: state === 'entering' || state === 'entered'
        ? 'rotateY(0)'
        : `rotateY(${flipDirection * 90}deg)`,
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden',
    };
  }
  
  // 기본 효과
  return baseStyle;
});

/**
 * 페이지 트랜지션 컴포넌트
 * 
 * 페이지 간 전환 애니메이션을 제공하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 페이지 컨텐츠
 * @param {string} [props.effect='fade'] - 전환 효과 ('fade', 'slide', 'zoom', 'flip')
 * @param {string} [props.direction='next'] - 전환 방향 ('next', 'prev')
 * @param {string|number} [props.duration='normal'] - 애니메이션 지속 시간 (ms 또는 'fast', 'normal', 'slow' 등)
 * @param {string} [props.easing='easeInOut'] - 애니메이션 이징 함수
 * @param {boolean} [props.skipInitialTransition=true] - 초기 로드 시 트랜지션 건너뛰기 여부
 * @param {Object} [props.sx] - 추가 스타일
 */
const PageTransition = forwardRef(function PageTransition(props, ref) {
  const {
    children,
    effect = 'fade',
    direction = 'next',
    duration = 'normal',
    easing = 'easeInOut',
    skipInitialTransition = true,
    sx = {},
    ...other
  } = props;
  
  // 현재 경로 및 라우터
  const pathname = usePathname();
  const router = useRouter();
  
  // 이전 경로 및 상태 관리
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [transitionState, setTransitionState] = useState(skipInitialTransition ? 'entered' : 'exiting');
  const [currentChildren, setCurrentChildren] = useState(children);
  const [prevChildren, setPrevChildren] = useState(null);
  
  // 경로 변경 감지
  useEffect(() => {
    if (pathname !== prevPathname) {
      // 이전 컨텐츠 저장
      setPrevChildren(currentChildren);
      
      // 현재 컨텐츠 업데이트
      setCurrentChildren(children);
      
      // 트랜지션 상태 업데이트
      setTransitionState('exiting');
      
      // 이전 경로 업데이트
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname, children, currentChildren]);
  
  // 트랜지션 상태 변경 처리
  useEffect(() => {
    if (transitionState === 'exiting') {
      // 애니메이션 지속 시간 계산
      const animationDuration = typeof duration === 'string'
        ? animations.duration[duration]
        : duration;
      
      // 트랜지션 타이머 설정
      const timer = setTimeout(() => {
        setTransitionState('entering');
        
        // 진입 애니메이션 완료 후 상태 업데이트
        const enterTimer = setTimeout(() => {
          setTransitionState('entered');
          setPrevChildren(null);
        }, animationDuration);
        
        return () => clearTimeout(enterTimer);
      }, animationDuration);
      
      return () => clearTimeout(timer);
    }
  }, [transitionState, duration]);
  
  return (
    <TransitionContainer ref={ref} sx={sx} {...other}>
      {/* 현재 페이지 컨텐츠 */}
      <PageContent
        effect={effect}
        direction={direction}
        state={transitionState}
        duration={duration}
        easing={easing}
        style={{ zIndex: 2 }}
      >
        {currentChildren}
      </PageContent>
      
      {/* 이전 페이지 컨텐츠 (트랜지션 중인 경우에만 표시) */}
      {prevChildren && transitionState === 'exiting' && (
        <PageContent
          effect={effect}
          direction={direction}
          state="exited"
          duration={duration}
          easing={easing}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          {prevChildren}
        </PageContent>
      )}
    </TransitionContainer>
  );
});

/**
 * 페이드 페이지 트랜지션 컴포넌트
 */
export function PageFade(props) {
  return <PageTransition effect="fade" {...props} />;
}

/**
 * 슬라이드 페이지 트랜지션 컴포넌트
 */
export function PageSlide(props) {
  return <PageTransition effect="slide" {...props} />;
}

/**
 * 줌 페이지 트랜지션 컴포넌트
 */
export function PageZoom(props) {
  return <PageTransition effect="zoom" {...props} />;
}

/**
 * 플립 페이지 트랜지션 컴포넌트
 */
export function PageFlip(props) {
  return <PageTransition effect="flip" {...props} />;
}

export default PageTransition;
