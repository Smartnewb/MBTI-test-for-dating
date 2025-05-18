'use client';

import { useState, useEffect, cloneElement, Children } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatedElement } from '../animations';

// 스타일링된 트랜지션 컨테이너
const TransitionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}));

// 스타일링된 트랜지션 아이템
const TransitionItem = styled(Box)(({ theme, active, direction, effect }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transition: `all ${theme.transitions.duration.complex}ms ${theme.transitions.easing.easeInOut}`,
  
  // 페이드 효과
  ...(effect === 'fade' && {
    opacity: active ? 1 : 0,
    transform: active ? 'scale(1)' : 'scale(0.98)',
  }),
  
  // 슬라이드 효과
  ...(effect === 'slide' && {
    opacity: active ? 1 : 0,
    transform: active 
      ? 'translateX(0)' 
      : direction === 'next' 
        ? 'translateX(-5%)' 
        : 'translateX(5%)',
  }),
  
  // 줌 효과
  ...(effect === 'zoom' && {
    opacity: active ? 1 : 0,
    transform: active 
      ? 'scale(1)' 
      : direction === 'next' 
        ? 'scale(0.9)' 
        : 'scale(1.1)',
  }),
  
  // 플립 효과
  ...(effect === 'flip' && {
    opacity: active ? 1 : 0,
    transform: active 
      ? 'rotateY(0)' 
      : direction === 'next' 
        ? 'rotateY(-90deg)' 
        : 'rotateY(90deg)',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
  }),
}));

/**
 * 질문 전환 컴포넌트
 * 
 * 질문 간 전환 애니메이션을 제공하는 컴포넌트입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 자식 컴포넌트 (현재 질문)
 * @param {string} [props.effect='fade'] - 전환 효과 ('fade', 'slide', 'zoom', 'flip')
 * @param {string} [props.direction='next'] - 전환 방향 ('next', 'prev')
 * @param {number} [props.duration=300] - 전환 지속 시간 (ms)
 * @param {Object} [props.sx] - 추가 스타일
 */
export default function QuestionTransition({
  children,
  effect = 'fade',
  direction = 'next',
  duration = 300,
  sx = {},
}) {
  // 현재 및 이전 자식 컴포넌트 상태
  const [currentChild, setCurrentChild] = useState(children);
  const [prevChild, setPrevChild] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  
  // 자식 컴포넌트가 변경되면 전환 애니메이션 시작
  useEffect(() => {
    // 자식 컴포넌트가 변경된 경우에만 전환
    if (children.key !== currentChild.key) {
      setPrevChild(currentChild);
      setCurrentChild(children);
      setTransitioning(true);
      
      // 전환 완료 후 이전 자식 컴포넌트 제거
      const timer = setTimeout(() => {
        setTransitioning(false);
        setPrevChild(null);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [children, currentChild, duration]);
  
  return (
    <TransitionContainer sx={sx}>
      {/* 현재 자식 컴포넌트 */}
      <TransitionItem
        active={true}
        direction={direction}
        effect={effect}
        style={{ 
          zIndex: 2,
          transition: `all ${duration}ms ${transitioning ? 'ease-out' : 'ease-in'}`,
        }}
      >
        {currentChild}
      </TransitionItem>
      
      {/* 이전 자식 컴포넌트 (전환 중인 경우에만 표시) */}
      {transitioning && prevChild && (
        <TransitionItem
          active={false}
          direction={direction}
          effect={effect}
          style={{ 
            zIndex: 1,
            transition: `all ${duration}ms ease-out`,
          }}
        >
          {prevChild}
        </TransitionItem>
      )}
    </TransitionContainer>
  );
}

/**
 * 질문 페이드 컴포넌트
 * 
 * 페이드 효과로 질문 간 전환을 제공하는 컴포넌트입니다.
 */
export function QuestionFade({ children, ...props }) {
  return (
    <QuestionTransition effect="fade" {...props}>
      {children}
    </QuestionTransition>
  );
}

/**
 * 질문 슬라이드 컴포넌트
 * 
 * 슬라이드 효과로 질문 간 전환을 제공하는 컴포넌트입니다.
 */
export function QuestionSlide({ children, ...props }) {
  return (
    <QuestionTransition effect="slide" {...props}>
      {children}
    </QuestionTransition>
  );
}

/**
 * 질문 줌 컴포넌트
 * 
 * 줌 효과로 질문 간 전환을 제공하는 컴포넌트입니다.
 */
export function QuestionZoom({ children, ...props }) {
  return (
    <QuestionTransition effect="zoom" {...props}>
      {children}
    </QuestionTransition>
  );
}

/**
 * 질문 플립 컴포넌트
 * 
 * 플립 효과로 질문 간 전환을 제공하는 컴포넌트입니다.
 */
export function QuestionFlip({ children, ...props }) {
  return (
    <QuestionTransition effect="flip" {...props}>
      {children}
    </QuestionTransition>
  );
}
