/**
 * 타이포그래피 시스템
 *
 * 달빛 연애 연구소의 타이포그래피 시스템을 정의합니다.
 * 신비로운 타로 카드 컨셉을 반영한 폰트와 텍스트 스타일입니다.
 */

// 폰트 패밀리
export const fontFamily = {
  // 주요 폰트 (본문용)
  primary: '"Pretendard Variable", "Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',

  // 보조 폰트 (제목용 - 신비로운 느낌의 세리프 폰트)
  secondary: '"Playfair Display", "Nanum Myeongjo", "Gowun Batang", Georgia, Cambria, "Times New Roman", Times, serif',

  // 장식 폰트 (타로 카드 제목용)
  decorative: '"Cinzel Decorative", "Playfair Display SC", "Nanum Myeongjo", serif',

  // 모노스페이스 폰트 (코드용)
  monospace: '"Roboto Mono", "Source Code Pro", "Consolas", monospace',
};

// 폰트 크기
export const fontSize = {
  // 기본 크기
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

  // 반응형 크기 (모바일)
  mobile: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.375rem', // 22px
    '3xl': '1.5rem', // 24px
    '4xl': '1.75rem', // 28px
    '5xl': '2rem', // 32px
    '6xl': '2.5rem', // 40px
  },
};

// 폰트 두께
export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

// 행간
export const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

// 자간
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// 텍스트 변환
export const textTransform = {
  none: 'none',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
};

// 텍스트 장식
export const textDecoration = {
  none: 'none',
  underline: 'underline',
  lineThrough: 'line-through',
  overline: 'overline',
};

// 텍스트 스타일 변형
export const variants = {
  // 제목 스타일
  h1: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.none,
    marginBottom: '0.5em',
  },
  h2: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.none,
    marginBottom: '0.5em',
  },
  h3: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.none,
    marginBottom: '0.5em',
  },
  h4: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.none,
    marginBottom: '0.5em',
  },
  h5: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.none,
    marginBottom: '0.5em',
  },
  h6: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.none,
    marginBottom: '0.5em',
  },

  // 부제목 스타일
  subtitle1: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
    marginBottom: '0.5em',
  },
  subtitle2: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
    marginBottom: '0.5em',
  },

  // 본문 스타일
  body1: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
    marginBottom: '1em',
  },
  body2: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
    marginBottom: '1em',
  },

  // 버튼 스타일
  button: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
    textTransform: textTransform.none,
  },

  // 캡션 스타일
  caption: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.none,
  },

  // 오버라인 스타일
  overline: {
    fontFamily: fontFamily.primary,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.widest,
    textTransform: textTransform.uppercase,
  },

  // 특별 스타일 - 타로 카드 테마에 맞게 조정
  mystical: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.wide,
    textTransform: textTransform.none,
    fontStyle: 'italic',
    textShadow: '0 0 5px rgba(212, 175, 55, 0.3)', // 골드 글로우 효과
  },

  // 타로 카드 제목 스타일
  tarot: {
    fontFamily: fontFamily.decorative, // 장식 폰트 사용
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.wider,
    textTransform: textTransform.uppercase,
    color: '#D4AF37', // 골드 색상
  },

  // 타로 카드 설명 스타일
  tarotDescription: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
    fontStyle: 'italic',
    color: 'rgba(255, 255, 255, 0.9)',
  },

  // 인용구 스타일
  quote: {
    fontFamily: fontFamily.secondary,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
    fontStyle: 'italic',
    paddingLeft: '1em',
    borderLeft: '3px solid #D4AF37', // 골드 색상 테두리
  },

  // 결과 페이지 제목 스타일
  resultTitle: {
    fontFamily: fontFamily.decorative,
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.wide,
    textTransform: textTransform.none,
    textShadow: '0 0 10px rgba(138, 79, 255, 0.5)', // 보라색 글로우 효과
  },
};

// 반응형 타이포그래피 설정
export const responsive = {
  // 모바일 (600px 이하)
  sm: {
    h1: {
      fontSize: fontSize.mobile['5xl'],
      lineHeight: 1.2,
    },
    h2: {
      fontSize: fontSize.mobile['4xl'],
      lineHeight: 1.2,
    },
    h3: {
      fontSize: fontSize.mobile['3xl'],
      lineHeight: 1.3,
    },
    h4: {
      fontSize: fontSize.mobile['2xl'],
      lineHeight: 1.3,
    },
    h5: {
      fontSize: fontSize.mobile.xl,
    },
    h6: {
      fontSize: fontSize.mobile.lg,
    },
    mystical: {
      fontSize: fontSize.mobile['2xl'],
    },
    tarot: {
      fontSize: fontSize.mobile.xl,
      letterSpacing: letterSpacing.wide,
    },
    resultTitle: {
      fontSize: fontSize.mobile['3xl'],
    },
    body1: {
      fontSize: fontSize.mobile.md,
    },
    body2: {
      fontSize: fontSize.mobile.sm,
    },
  },

  // 태블릿 (900px 이하)
  md: {
    h1: {
      fontSize: fontSize['4xl'],
      lineHeight: 1.2,
    },
    h2: {
      fontSize: fontSize['3xl'],
      lineHeight: 1.2,
    },
    h3: {
      fontSize: fontSize['2xl'],
      lineHeight: 1.3,
    },
    mystical: {
      fontSize: fontSize['xl'],
    },
    resultTitle: {
      fontSize: fontSize['3xl'],
    },
  },

  // 데스크탑 (1200px 이상)
  lg: {
    h1: {
      fontSize: fontSize['5xl'],
    },
    h2: {
      fontSize: fontSize['4xl'],
    },
    resultTitle: {
      fontSize: fontSize['5xl'],
    },
  },
};

// 모든 타이포그래피 토큰을 하나의 객체로 내보내기
export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textTransform,
  textDecoration,
  variants,
  responsive,
};

export default typography;
