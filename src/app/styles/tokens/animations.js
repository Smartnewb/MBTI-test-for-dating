/**
 * 애니메이션 시스템
 * 
 * 달빛 연애 연구소의 애니메이션 시스템을 정의합니다.
 * 신비로운 타로 카드 컨셉을 반영한 애니메이션과 전환 효과입니다.
 */

// 애니메이션 지속 시간
export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
  
  // 커스텀 지속 시간
  fast: 300,
  normal: 500,
  slow: 800,
  verySlow: 1200,
};

// 애니메이션 이징 함수
export const easing = {
  // 기본 이징
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  
  // 커스텀 이징
  mystical: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  magical: 'cubic-bezier(0.6, 0.01, 0.05, 1)',
  bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

// 애니메이션 키프레임
export const keyframes = {
  // 페이드 인
  fadeIn: {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  
  // 페이드 아웃
  fadeOut: {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  
  // 위로 슬라이드
  slideUp: {
    from: {
      transform: 'translateY(20px)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
  
  // 아래로 슬라이드
  slideDown: {
    from: {
      transform: 'translateY(-20px)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
  
  // 왼쪽에서 슬라이드
  slideRight: {
    from: {
      transform: 'translateX(-20px)',
      opacity: 0,
    },
    to: {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },
  
  // 오른쪽에서 슬라이드
  slideLeft: {
    from: {
      transform: 'translateX(20px)',
      opacity: 0,
    },
    to: {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },
  
  // 확대
  zoomIn: {
    from: {
      transform: 'scale(0.9)',
      opacity: 0,
    },
    to: {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
  
  // 축소
  zoomOut: {
    from: {
      transform: 'scale(1.1)',
      opacity: 0,
    },
    to: {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
  
  // 회전
  rotate: {
    from: {
      transform: 'rotate(-5deg)',
      opacity: 0,
    },
    to: {
      transform: 'rotate(0deg)',
      opacity: 1,
    },
  },
  
  // 빛나는 효과
  glow: {
    '0%': {
      boxShadow: '0 0 5px rgba(107, 63, 160, 0.5), 0 0 10px rgba(212, 175, 55, 0.3)',
    },
    '50%': {
      boxShadow: '0 0 15px rgba(107, 63, 160, 0.7), 0 0 20px rgba(212, 175, 55, 0.5)',
    },
    '100%': {
      boxShadow: '0 0 5px rgba(107, 63, 160, 0.5), 0 0 10px rgba(212, 175, 55, 0.3)',
    },
  },
  
  // 별 반짝임 효과
  twinkle: {
    '0%': {
      opacity: 0.3,
      transform: 'scale(1)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1.2)',
    },
    '100%': {
      opacity: 0.3,
      transform: 'scale(1)',
    },
  },
  
  // 카드 뒤집기 효과
  flipCard: {
    '0%': {
      transform: 'rotateY(0deg)',
    },
    '100%': {
      transform: 'rotateY(180deg)',
    },
  },
  
  // 물결 효과
  ripple: {
    '0%': {
      transform: 'scale(0)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
  
  // 그라데이션 이동 효과
  gradientShift: {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
};

// 애니메이션 변형
export const variants = {
  // 페이드 인
  fadeIn: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: duration.normal / 1000,
        ease: easing.easeInOut,
      },
    },
  },
  
  // 위로 슬라이드
  slideUp: {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration.normal / 1000,
        ease: easing.mystical,
      },
    },
  },
  
  // 아래로 슬라이드
  slideDown: {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration.normal / 1000,
        ease: easing.mystical,
      },
    },
  },
  
  // 왼쪽에서 슬라이드
  slideRight: {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration.normal / 1000,
        ease: easing.mystical,
      },
    },
  },
  
  // 오른쪽에서 슬라이드
  slideLeft: {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration.normal / 1000,
        ease: easing.mystical,
      },
    },
  },
  
  // 확대
  zoomIn: {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration.normal / 1000,
        ease: easing.mystical,
      },
    },
  },
  
  // 축소
  zoomOut: {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration.normal / 1000,
        ease: easing.mystical,
      },
    },
  },
  
  // 회전
  rotate: {
    hidden: {
      rotate: -5,
      opacity: 0,
    },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: duration.normal / 1000,
        ease: easing.mystical,
      },
    },
  },
  
  // 스태거 (자식 요소 순차 애니메이션)
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// 모든 애니메이션 토큰을 하나의 객체로 내보내기
export const animations = {
  duration,
  easing,
  keyframes,
  variants,
};

export default animations;
