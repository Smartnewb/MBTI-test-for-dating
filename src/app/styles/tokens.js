/**
 * 디자인 토큰
 * 
 * 달빛 연애 연구소의 디자인 시스템에 사용되는 토큰 값들입니다.
 * 이 파일은 테마 생성에 필요한 기본 디자인 요소를 정의합니다.
 */

export const tokens = {
  // 색상 팔레트
  colors: {
    // 주요 색상
    primary: {
      main: '#6B3FA0', // 보라색 (주요 브랜드 색상)
      light: '#9A6DD7',
      dark: '#4A2B70',
      contrastText: '#FFFFFF',
    },
    // 보조 색상
    secondary: {
      main: '#F2C94C', // 금색 (타로 카드 테마)
      light: '#FFE082',
      dark: '#C9A227',
      contrastText: '#1A1A2E',
    },
    // 배경 색상
    background: {
      default: '#0F0F1A', // 어두운 남색 배경
      paper: '#1A1A2E', // 약간 밝은 남색
      card: '#1E1E32', // 카드 배경
    },
    // 텍스트 색상
    text: {
      primary: '#F5F5F7',
      secondary: '#B8B8C7',
      disabled: '#6C6C7F',
    },
    // 의미론적 색상
    semantic: {
      error: '#FF5252',
      warning: '#FFB74D',
      info: '#64B5F6',
      success: '#66BB6A',
    },
    // 기타 색상
    misc: {
      divider: 'rgba(255, 255, 255, 0.12)',
    },
    // 그라데이션
    gradients: {
      primary: 'linear-gradient(135deg, #6B3FA0 0%, #9A6DD7 100%)',
      secondary: 'linear-gradient(135deg, #F2C94C 0%, #FFE082 100%)',
      mystical: 'linear-gradient(135deg, #2E1A47 0%, #6B3FA0 50%, #2E1A47 100%)',
      dark: 'linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)',
    },
  },

  // 타이포그래피
  typography: {
    // 폰트 패밀리
    fontFamily: {
      primary: '"Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      display: '"Playfair Display", "Noto Serif KR", serif',
    },
    // 폰트 크기
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
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
    // 타이포그래피 변형
    variants: {
      h1: {
        fontFamily: '"Playfair Display", "Noto Serif KR", serif',
        fontSize: '3rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
      },
      h2: {
        fontFamily: '"Playfair Display", "Noto Serif KR", serif',
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontFamily: '"Playfair Display", "Noto Serif KR", serif',
        fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '0',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '0',
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '0',
      },
      h6: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '0',
      },
      subtitle1: {
        fontSize: '1.125rem',
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        letterSpacing: '0.00714em',
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'none',
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66,
        letterSpacing: '0.03333em',
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 2.66,
        letterSpacing: '0.08333em',
        textTransform: 'uppercase',
      },
    },
  },

  // 간격
  spacing: {
    unit: 8,
    values: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
  },

  // 테두리
  borders: {
    width: {
      none: '0',
      thin: '1px',
      thick: '2px',
      thicker: '4px',
    },
    radius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
  },

  // 그림자
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(107, 63, 160, 0.5)',
    mystical: '0 4px 20px rgba(107, 63, 160, 0.5), 0 0 0 1px rgba(107, 63, 160, 0.1)',
    glow: '0 0 15px rgba(107, 63, 160, 0.7), 0 0 5px rgba(242, 201, 76, 0.5)',
  },

  // 애니메이션
  animations: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      fastest: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      slower: '700ms',
      slowest: '1000ms',
    },
  },

  // 반응형 브레이크포인트
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  // z-index
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export default tokens;
