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
      // Add numbered color scales if they exist in tokens
      ...(tokens.colors.primary[50] && { 50: tokens.colors.primary[50] }),
      ...(tokens.colors.primary[100] && { 100: tokens.colors.primary[100] }),
      ...(tokens.colors.primary[200] && { 200: tokens.colors.primary[200] }),
      ...(tokens.colors.primary[300] && { 300: tokens.colors.primary[300] }),
      ...(tokens.colors.primary[400] && { 400: tokens.colors.primary[400] }),
      ...(tokens.colors.primary[500] && { 500: tokens.colors.primary[500] }),
      ...(tokens.colors.primary[600] && { 600: tokens.colors.primary[600] }),
      ...(tokens.colors.primary[700] && { 700: tokens.colors.primary[700] }),
      ...(tokens.colors.primary[800] && { 800: tokens.colors.primary[800] }),
      ...(tokens.colors.primary[900] && { 900: tokens.colors.primary[900] }),
    },
    secondary: {
      main: tokens.colors.secondary.main,
      light: tokens.colors.secondary.light,
      dark: tokens.colors.secondary.dark,
      contrastText: tokens.colors.secondary.contrastText,
      // Add numbered color scales if they exist in tokens
      ...(tokens.colors.secondary[50] && { 50: tokens.colors.secondary[50] }),
      ...(tokens.colors.secondary[100] && { 100: tokens.colors.secondary[100] }),
      ...(tokens.colors.secondary[200] && { 200: tokens.colors.secondary[200] }),
      ...(tokens.colors.secondary[300] && { 300: tokens.colors.secondary[300] }),
      ...(tokens.colors.secondary[400] && { 400: tokens.colors.secondary[400] }),
      ...(tokens.colors.secondary[500] && { 500: tokens.colors.secondary[500] }),
      ...(tokens.colors.secondary[600] && { 600: tokens.colors.secondary[600] }),
      ...(tokens.colors.secondary[700] && { 700: tokens.colors.secondary[700] }),
      ...(tokens.colors.secondary[800] && { 800: tokens.colors.secondary[800] }),
      ...(tokens.colors.secondary[900] && { 900: tokens.colors.secondary[900] }),
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

  // Add colors directly to theme for easier access
  colors: {
    ...tokens.colors,
    // Ensure primary and secondary color scales are defined
    primary: {
      ...tokens.colors.primary,
      100: tokens.colors.primary[100] || tokens.colors.primary.light,
      200: tokens.colors.primary[200] || tokens.colors.primary.light,
      300: tokens.colors.primary[300] || tokens.colors.primary.light,
      400: tokens.colors.primary[400] || tokens.colors.primary.main,
      500: tokens.colors.primary[500] || tokens.colors.primary.main,
      600: tokens.colors.primary[600] || tokens.colors.primary.dark,
      700: tokens.colors.primary[700] || tokens.colors.primary.dark,
      800: tokens.colors.primary[800] || tokens.colors.primary.dark,
      900: tokens.colors.primary[900] || tokens.colors.primary.dark,
    },
    secondary: {
      ...tokens.colors.secondary,
      100: tokens.colors.secondary[100] || tokens.colors.secondary.light,
      200: tokens.colors.secondary[200] || tokens.colors.secondary.light,
      300: tokens.colors.secondary[300] || tokens.colors.secondary.light,
      400: tokens.colors.secondary[400] || tokens.colors.secondary.main,
      500: tokens.colors.secondary[500] || tokens.colors.secondary.main,
      600: tokens.colors.secondary[600] || tokens.colors.secondary.dark,
      700: tokens.colors.secondary[700] || tokens.colors.secondary.dark,
      800: tokens.colors.secondary[800] || tokens.colors.secondary.dark,
      900: tokens.colors.secondary[900] || tokens.colors.secondary.dark,
    },
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
  spacing: factor => `${tokens.spacing.unit * factor}px`,

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
      defaultProps: {
        disableElevation: false, // 그림자 활성화
      },
      styleOverrides: {
        root: {
          borderRadius: tokens.borders.radius.lg,
          textTransform: 'none',
          fontWeight: tokens.typography.fontWeight.medium,
          padding: `${tokens.spacing.values[2]} ${tokens.spacing.values[4]}`,
          transition: `all ${tokens.animations.duration.normal} ${tokens.animations.easing.easeInOut}`,
        },
        contained: {
          boxShadow: tokens.shadows.md,
          '&:hover': {
            boxShadow: tokens.shadows.lg,
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: tokens.colors.gradients.primary,
          '&:hover': {
            background: tokens.colors.gradients.primary,
            filter: 'brightness(1.1)',
          },
        },
        containedSecondary: {
          background: tokens.colors.gradients.secondary,
          '&:hover': {
            background: tokens.colors.gradients.secondary,
            filter: 'brightness(1.1)',
          },
        },
        outlined: {
          borderWidth: tokens.borders.width.thick,
          '&:hover': {
            borderWidth: tokens.borders.width.thick,
          },
        },
        outlinedPrimary: {
          borderColor: tokens.colors.primary.main,
          '&:hover': {
            backgroundColor: `${tokens.colors.primary.main}15`,
          },
        },
        outlinedSecondary: {
          borderColor: tokens.colors.secondary.main,
          '&:hover': {
            backgroundColor: `${tokens.colors.secondary.main}15`,
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(138, 79, 255, 0.08)',
          },
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
              transform: 'translateY(-2px)',
            },
          },
        },
        {
          props: { variant: 'tarot' },
          style: {
            background: 'transparent',
            color: tokens.colors.secondary.main,
            border: `${tokens.borders.width.thick} solid ${tokens.colors.secondary.main}`,
            fontFamily: tokens.typography.fontFamily.decorative,
            letterSpacing: tokens.typography.letterSpacing.wide,
            '&:hover': {
              background: `${tokens.colors.secondary.main}15`,
              borderColor: tokens.colors.secondary.light,
              color: tokens.colors.secondary.light,
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
            transform: 'translateY(-4px)',
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
            '&:hover': {
              boxShadow: tokens.shadows.glow,
              transform: 'translateY(-4px) scale(1.02)',
            },
          },
        },
        {
          props: { variant: 'result' },
          style: {
            backgroundColor: tokens.colors.background.card,
            borderRadius: tokens.borders.radius.lg,
            boxShadow: tokens.shadows.lg,
            overflow: 'hidden',
            position: 'relative',
            background: `linear-gradient(135deg, ${tokens.colors.background.card} 0%, ${tokens.colors.background.elevated} 100%)`,
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(circle at top right, ${tokens.colors.primary.main}20, transparent 70%)`,
              pointerEvents: 'none',
            },
            '&:hover': {
              boxShadow: tokens.shadows.glow,
              transform: 'translateY(-4px)',
            },
          },
        },
        {
          props: { variant: 'mystical' },
          style: {
            backgroundColor: 'transparent',
            borderRadius: tokens.borders.radius.lg,
            boxShadow: 'none',
            overflow: 'hidden',
            position: 'relative',
            backdropFilter: 'blur(10px)',
            background: 'rgba(26, 26, 46, 0.7)',
            border: `1px solid rgba(138, 79, 255, 0.3)`,
            '&:hover': {
              boxShadow: tokens.shadows.mystical,
              borderColor: 'rgba(138, 79, 255, 0.5)',
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
            backgroundColor: 'rgba(26, 26, 46, 0.5)',
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
              boxShadow: `0 0 0 2px ${tokens.colors.primary.main}30`,
            },
            '& .MuiInputBase-input': {
              color: tokens.colors.text.primary,
              '&::placeholder': {
                color: tokens.colors.text.secondary,
                opacity: 0.7,
              },
            },
          },
          '& .MuiInputLabel-root': {
            color: tokens.colors.text.secondary,
            '&.Mui-focused': {
              color: tokens.colors.primary.light,
            },
          },
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
          },
        },
      },
      variants: [
        {
          props: { variant: 'mystical' },
          style: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(26, 26, 46, 0.3)',
              backdropFilter: 'blur(4px)',
              '& fieldset': {
                borderColor: `rgba(138, 79, 255, 0.3)`,
              },
              '&:hover fieldset': {
                borderColor: `rgba(138, 79, 255, 0.5)`,
              },
              '&.Mui-focused fieldset': {
                borderColor: tokens.colors.primary.main,
                borderWidth: tokens.borders.width.thick,
                boxShadow: `0 0 0 2px ${tokens.colors.primary.main}30`,
              },
            },
          },
        },
      ],
    },

    // 아이콘 버튼 커스터마이징
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: tokens.colors.text.secondary,
          transition: `all ${tokens.animations.duration.fast} ${tokens.animations.easing.easeInOut}`,
          '&:hover': {
            backgroundColor: 'rgba(138, 79, 255, 0.08)',
            color: tokens.colors.text.primary,
            transform: 'scale(1.1)',
          },
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: tokens.colors.primary.main,
            '&:hover': {
              backgroundColor: 'rgba(138, 79, 255, 0.08)',
              color: tokens.colors.primary.light,
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            color: tokens.colors.secondary.main,
            '&:hover': {
              backgroundColor: 'rgba(242, 201, 76, 0.08)',
              color: tokens.colors.secondary.light,
            },
          },
        },
        {
          props: { variant: 'mystical' },
          style: {
            color: tokens.colors.primary.main,
            border: `1px solid rgba(138, 79, 255, 0.3)`,
            borderRadius: '50%',
            padding: tokens.spacing.values[1],
            '&:hover': {
              backgroundColor: 'rgba(138, 79, 255, 0.08)',
              borderColor: 'rgba(138, 79, 255, 0.5)',
              boxShadow: tokens.colors.misc.glowPurple,
            },
          },
        },
      ],
    },

    // 앱바 커스터마이징
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: tokens.colors.gradients.dark,
          boxShadow: 'none',
          borderBottom: `${tokens.borders.width.thin} solid ${tokens.colors.misc.divider}`,
          backdropFilter: 'blur(10px)',
        },
      },
      variants: [
        {
          props: { color: 'transparent' },
          style: {
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
            borderBottom: 'none',
          },
        },
        {
          props: { color: 'mystical' },
          style: {
            backgroundColor: 'rgba(26, 26, 46, 0.7)',
            backgroundImage: 'none',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
            borderBottom: `1px solid rgba(138, 79, 255, 0.2)`,
          },
        },
      ],
    },

    // 리니어 프로그레스 커스터마이징
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borders.radius.full,
          height: 8,
          backgroundColor: 'rgba(138, 79, 255, 0.2)',
          overflow: 'hidden',
        },
        bar: {
          borderRadius: tokens.borders.radius.full,
          backgroundImage: tokens.colors.gradients.mystical,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            animation: 'shimmer 2s infinite',
          },
          '@keyframes shimmer': {
            '0%': {
              transform: 'translateX(-100%)',
            },
            '100%': {
              transform: 'translateX(100%)',
            },
          },
        },
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            '& .MuiLinearProgress-bar': {
              backgroundImage: tokens.colors.gradients.secondary,
            },
          },
        },
      ],
    },

    // 페이퍼 커스터마이징
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors.background.paper,
          backgroundImage: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'mystical' },
          style: {
            backgroundColor: 'rgba(26, 26, 46, 0.7)',
            backdropFilter: 'blur(10px)',
            border: `1px solid rgba(138, 79, 255, 0.2)`,
          },
        },
      ],
    },
  },
});

// 반응형 폰트 크기 적용
theme = responsiveFontSizes(theme);

export default theme;
