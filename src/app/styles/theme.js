'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { tokens } from './tokens';

/**
 * 달빛 연애 연구소 커스텀 테마
 * 
 * Material UI 테마를 기반으로 한 커스텀 테마입니다.
 * 신비로운 타로 카드 컨셉을 반영한 디자인 시스템을 구현합니다.
 */

// 기본 테마 생성
let theme = createTheme({
  // 색상 팔레트
  palette: {
    mode: 'dark',
    primary: {
      main: tokens.colors.primary.main,
      light: tokens.colors.primary.light,
      dark: tokens.colors.primary.dark,
      contrastText: tokens.colors.primary.contrastText,
    },
    secondary: {
      main: tokens.colors.secondary.main,
      light: tokens.colors.secondary.light,
      dark: tokens.colors.secondary.dark,
      contrastText: tokens.colors.secondary.contrastText,
    },
    background: {
      default: tokens.colors.background.default,
      paper: tokens.colors.background.paper,
    },
    text: {
      primary: tokens.colors.text.primary,
      secondary: tokens.colors.text.secondary,
      disabled: tokens.colors.text.disabled,
    },
    error: {
      main: tokens.colors.semantic.error,
    },
    warning: {
      main: tokens.colors.semantic.warning,
    },
    info: {
      main: tokens.colors.semantic.info,
    },
    success: {
      main: tokens.colors.semantic.success,
    },
    divider: tokens.colors.misc.divider,
  },
  
  // 타이포그래피
  typography: {
    fontFamily: tokens.typography.fontFamily.primary,
    h1: tokens.typography.variants.h1,
    h2: tokens.typography.variants.h2,
    h3: tokens.typography.variants.h3,
    h4: tokens.typography.variants.h4,
    h5: tokens.typography.variants.h5,
    h6: tokens.typography.variants.h6,
    subtitle1: tokens.typography.variants.subtitle1,
    subtitle2: tokens.typography.variants.subtitle2,
    body1: tokens.typography.variants.body1,
    body2: tokens.typography.variants.body2,
    button: tokens.typography.variants.button,
    caption: tokens.typography.variants.caption,
    overline: tokens.typography.variants.overline,
  },
  
  // 간격
  spacing: (factor) => `${tokens.spacing.unit * factor}px`,
  
  // 반응형 브레이크포인트
  breakpoints: {
    values: tokens.breakpoints.values,
  },
  
  // 그림자
  shadows: [
    'none',
    tokens.shadows.sm,
    tokens.shadows.md,
    tokens.shadows.lg,
    tokens.shadows.xl,
    tokens.shadows['2xl'],
    tokens.shadows.inner,
    tokens.shadows.outline,
    tokens.shadows.mystical,
    tokens.shadows.glow,
    ...Array(15).fill(tokens.shadows.md), // Material UI는 25개의 그림자를 필요로 함
  ],
  
  // 모양
  shape: {
    borderRadius: parseInt(tokens.borders.radius.md),
  },
  
  // 전환
  transitions: {
    easing: {
      easeInOut: tokens.animations.easing.easeInOut,
      easeOut: tokens.animations.easing.easeOut,
      easeIn: tokens.animations.easing.easeIn,
      sharp: tokens.animations.easing.sharp,
    },
    duration: {
      shortest: parseInt(tokens.animations.duration.fastest),
      shorter: parseInt(tokens.animations.duration.fast),
      short: parseInt(tokens.animations.duration.normal),
      standard: parseInt(tokens.animations.duration.normal),
      complex: parseInt(tokens.animations.duration.slow),
      enteringScreen: parseInt(tokens.animations.duration.normal),
      leavingScreen: parseInt(tokens.animations.duration.fast),
    },
  },
  
  // z-index
  zIndex: tokens.zIndex,
  
  // 컴포넌트 오버라이드
  components: {
    // 버튼 커스터마이징
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borders.radius.lg,
          textTransform: 'none',
          fontWeight: tokens.typography.fontWeight.medium,
          padding: `${tokens.spacing.values[2]} ${tokens.spacing.values[4]}`,
        },
        contained: {
          boxShadow: tokens.shadows.md,
          '&:hover': {
            boxShadow: tokens.shadows.lg,
          },
        },
        containedPrimary: {
          background: tokens.colors.gradients.primary,
          '&:hover': {
            background: tokens.colors.primary.dark,
          },
        },
        containedSecondary: {
          background: tokens.colors.gradients.secondary,
          '&:hover': {
            background: tokens.colors.secondary.dark,
          },
        },
        outlined: {
          borderWidth: tokens.borders.width.thick,
        },
        outlinedPrimary: {
          borderColor: tokens.colors.primary.main,
        },
        outlinedSecondary: {
          borderColor: tokens.colors.secondary.main,
        },
      },
      variants: [
        {
          props: { variant: 'mystical' },
          style: {
            background: tokens.colors.gradients.mystical,
            color: tokens.colors.text.primary,
            boxShadow: tokens.shadows.mystical,
            '&:hover': {
              boxShadow: tokens.shadows.glow,
              background: tokens.colors.gradients.mystical,
              filter: 'brightness(1.1)',
            },
          },
        },
      ],
    },
    
    // 카드 커스터마이징
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors.background.card,
          borderRadius: tokens.borders.radius.lg,
          boxShadow: tokens.shadows.md,
          overflow: 'hidden',
          position: 'relative',
          transition: `all ${tokens.animations.duration.normal} ${tokens.animations.easing.easeInOut}`,
          '&:hover': {
            boxShadow: tokens.shadows.lg,
          },
        },
      },
      variants: [
        {
          props: { variant: 'tarot' },
          style: {
            backgroundColor: tokens.colors.background.card,
            borderRadius: tokens.borders.radius.lg,
            boxShadow: tokens.shadows.mystical,
            border: `${tokens.borders.width.thin} solid ${tokens.colors.secondary.main}`,
            overflow: 'hidden',
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 'inherit',
              padding: '2px',
              background: tokens.colors.gradients.mystical,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              pointerEvents: 'none',
            },
          },
        },
      ],
    },
    
    // 텍스트 필드 커스터마이징
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: tokens.borders.radius.md,
            '& fieldset': {
              borderColor: tokens.colors.misc.divider,
              transition: `all ${tokens.animations.duration.fast} ${tokens.animations.easing.easeInOut}`,
            },
            '&:hover fieldset': {
              borderColor: tokens.colors.primary.light,
            },
            '&.Mui-focused fieldset': {
              borderColor: tokens.colors.primary.main,
              borderWidth: tokens.borders.width.thick,
            },
          },
        },
      },
    },
    
    // 아이콘 버튼 커스터마이징
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: tokens.colors.text.secondary,
          '&:hover': {
            backgroundColor: 'rgba(107, 63, 160, 0.08)',
          },
        },
      },
    },
    
    // 앱바 커스터마이징
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: tokens.colors.gradients.dark,
          boxShadow: 'none',
          borderBottom: `${tokens.borders.width.thin} solid ${tokens.colors.misc.divider}`,
        },
      },
    },
    
    // 리니어 프로그레스 커스터마이징
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borders.radius.full,
          height: 8,
          backgroundColor: 'rgba(107, 63, 160, 0.2)',
        },
        bar: {
          borderRadius: tokens.borders.radius.full,
          backgroundImage: tokens.colors.gradients.mystical,
        },
      },
    },
  },
});

// 반응형 폰트 크기 적용
theme = responsiveFontSizes(theme);

export default theme;
