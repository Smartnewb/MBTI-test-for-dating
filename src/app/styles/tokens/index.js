/**
 * 디자인 시스템 토큰
 * 
 * 이 파일은 디자인 시스템의 기본 토큰을 정의합니다.
 * 색상, 타이포그래피, 간격, 그림자 등의 기본 디자인 요소를 포함합니다.
 */

// 색상 토큰
export const colors = {
  // 주요 색상
  primary: {
    main: '#6B3FA0', // 보라색 (주요 브랜드 색상)
    light: '#8E6DB6',
    dark: '#4A235A',
    contrastText: '#FFFFFF',
  },
  
  // 보조 색상
  secondary: {
    main: '#D4AF37', // 골드 (강조 색상)
    light: '#E6C65C',
    dark: '#B8860B',
    contrastText: '#000000',
  },
  
  // 배경 색상
  background: {
    default: '#000000', // 검은색 배경
    paper: '#121212', // 약간 밝은 검은색 (카드 배경)
    card: '#1E1E1E', // 카드 배경
    elevated: '#2D2D2D', // 상승된 요소 배경
  },
  
  // 텍스트 색상
  text: {
    primary: '#FFFFFF', // 흰색 (주요 텍스트)
    secondary: '#C0C0C0', // 은색 (보조 텍스트)
    disabled: '#6C6C6C', // 비활성화된 텍스트
    hint: '#9E9E9E', // 힌트 텍스트
  },
  
  // 의미적 색상
  semantic: {
    success: '#4CAF50', // 성공
    info: '#2196F3', // 정보
    warning: '#FF9800', // 경고
    error: '#F44336', // 오류
  },
  
  // 그라데이션
  gradients: {
    primary: 'linear-gradient(135deg, #6B3FA0 0%, #4A235A 100%)',
    secondary: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
    dark: 'linear-gradient(135deg, #121212 0%, #000000 100%)',
    mystical: 'linear-gradient(135deg, #6B3FA0 0%, #D4AF37 100%)',
  },
  
  // 기타 색상
  misc: {
    divider: 'rgba(255, 255, 255, 0.12)',
    overlay: 'rgba(0, 0, 0, 0.5)',
    backdrop: 'rgba(0, 0, 0, 0.8)',
  },
};

// 타이포그래피 토큰
export const typography = {
  // 폰트 패밀리
  fontFamily: {
    primary: '"Pretendard", "Noto Sans KR", sans-serif',
    secondary: '"Playfair Display", "Nanum Myeongjo", serif',
    monospace: '"Roboto Mono", monospace',
  },
  
  // 폰트 크기
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },
  
  // 폰트 두께
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // 행간
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // 자간
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // 텍스트 스타일 변형
  variants: {
    h1: {
      fontFamily: '"Playfair Display", "Nanum Myeongjo", serif',
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: '"Playfair Display", "Nanum Myeongjo", serif',
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: '"Playfair Display", "Nanum Myeongjo", serif',
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.375,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontFamily: '"Playfair Display", "Nanum Myeongjo", serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.375,
      letterSpacing: '-0.025em',
    },
    h5: {
      fontFamily: '"Playfair Display", "Nanum Myeongjo", serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.375,
      letterSpacing: '-0.025em',
    },
    h6: {
      fontFamily: '"Playfair Display", "Nanum Myeongjo", serif',
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.375,
      letterSpacing: '-0.025em',
    },
    subtitle1: {
      fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    subtitle2: {
      fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    body1: {
      fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    body2: {
      fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    button: {
      fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.025em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    overline: {
      fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
};

// 간격 토큰
export const spacing = {
  // 기본 간격 단위 (4px)
  unit: 4,
  
  // 간격 함수 (단위의 배수)
  values: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
  },
};

// 반응형 브레이크포인트 토큰
export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  unit: 'px',
};

// 그림자 토큰
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(107, 63, 160, 0.5)',
  // 특별한 그림자 효과
  mystical: '0 0 15px rgba(107, 63, 160, 0.5), 0 0 30px rgba(212, 175, 55, 0.3)',
  glow: '0 0 10px rgba(212, 175, 55, 0.5)',
};

// 테두리 토큰
export const borders = {
  radius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  width: {
    none: '0',
    thin: '1px',
    thick: '2px',
    thicker: '4px',
  },
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
};

// 애니메이션 토큰
export const animations = {
  duration: {
    fastest: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '400ms',
    slowest: '500ms',
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    mystical: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
};

// z-index 토큰
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// 모든 토큰을 하나의 객체로 내보내기
export const tokens = {
  colors,
  typography,
  spacing,
  breakpoints,
  shadows,
  borders,
  animations,
  zIndex,
};

export default tokens;
