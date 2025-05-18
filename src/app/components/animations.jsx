'use client';

import { Box } from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';
import AnimatedGroup from './animations/AnimatedGroup';

// 애니메이션 지속 시간 (ms)
const DURATIONS = {
  fast: 300,
  normal: 500,
  slow: 800,
  verySlow: 1200,
};

// 타로 카드 뒤집기 애니메이션
const tarotFlip = keyframes`
  0% {
    transform: perspective(1200px) rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: perspective(1200px) rotateY(0deg);
    opacity: 1;
  }
`;

// 타로 카드 공개 애니메이션
const tarotReveal = keyframes`
  0% {
    transform: perspective(1200px) rotateY(90deg) scale(0.9);
    opacity: 0;
  }
  50% {
    transform: perspective(1200px) rotateY(45deg) scale(0.95);
    opacity: 0.5;
  }
  100% {
    transform: perspective(1200px) rotateY(0deg) scale(1);
    opacity: 1;
  }
`;

// 빛나는 효과 애니메이션
const shine = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// 부드러운 등장 애니메이션
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 위로 슬라이드 애니메이션
const slideUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 오른쪽으로 슬라이드 애니메이션
const slideRight = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// 왼쪽으로 슬라이드 애니메이션
const slideLeft = keyframes`
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// 펄스 애니메이션
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// 애니메이션 스타일 매핑
const getAnimationStyle = (animation, duration) => {
  const durationMs = DURATIONS[duration] || DURATIONS.normal;

  switch (animation) {
    case 'tarotFlip':
      return {
        animation: `${tarotFlip} ${durationMs}ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
      };
    case 'tarotReveal':
      return {
        animation: `${tarotReveal} ${durationMs}ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
      };
    case 'shine':
      return {
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          animation: `${shine} ${durationMs * 2}ms linear infinite`,
        },
      };
    case 'fadeIn':
      return {
        animation: `${fadeIn} ${durationMs}ms ease-in-out forwards`,
      };
    case 'slideUp':
      return {
        animation: `${slideUp} ${durationMs}ms ease-out forwards`,
      };
    case 'slideRight':
      return {
        animation: `${slideRight} ${durationMs}ms ease-out forwards`,
      };
    case 'slideLeft':
      return {
        animation: `${slideLeft} ${durationMs}ms ease-out forwards`,
      };
    case 'pulse':
      return {
        animation: `${pulse} ${durationMs}ms ease-in-out infinite`,
      };
    default:
      return {};
  }
};

// 애니메이션 컨테이너
const AnimationContainer = styled(Box)(({ theme, animation, duration, delay = 0 }) => ({
  opacity: 0,
  ...getAnimationStyle(animation, duration),
  animationDelay: `${delay}ms`,
}));

/**
 * 애니메이션 요소 컴포넌트
 *
 * 다양한 애니메이션 효과를 적용할 수 있는 래퍼 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {string} props.animation - 애니메이션 유형 ('fadeIn', 'slideUp', 'tarotFlip', 'tarotReveal', 'shine', 'slideRight', 'slideLeft', 'pulse')
 * @param {string} props.duration - 애니메이션 지속 시간 ('fast', 'normal', 'slow', 'verySlow')
 * @param {number} props.delay - 애니메이션 시작 지연 시간 (ms)
 * @param {Object} props.sx - 추가 스타일 속성
 */
export function AnimatedElement({
  children,
  animation = 'fadeIn',
  duration = 'normal',
  delay = 0,
  sx = {},
  ...props
}) {
  return (
    <AnimationContainer
      animation={animation}
      duration={duration}
      delay={delay}
      sx={sx}
      {...props}
    >
      {children}
    </AnimationContainer>
  );
}

export { AnimatedGroup };
