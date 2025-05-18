/**
 * 색상 팔레트 시스템
 * 
 * 달빛 연애 연구소의 색상 시스템을 정의합니다.
 * 신비로운 타로 카드 컨셉을 반영한 색상 팔레트입니다.
 */

// 기본 색상 값
const baseColors = {
  // 보라색 계열 (주요 브랜드 색상)
  purple: {
    50: '#F3EEFA',
    100: '#E2D4F2',
    200: '#C7AEE4',
    300: '#AB87D5',
    400: '#8E6DB6',
    500: '#6B3FA0', // 주요 보라색
    600: '#5A359F',
    700: '#4A235A',
    800: '#3A1D47',
    900: '#2A1433',
  },
  
  // 골드 계열 (강조 색상)
  gold: {
    50: '#FBF6E2',
    100: '#F5EAB8',
    200: '#EFDE8F',
    300: '#E6C65C',
    400: '#DDAF29',
    500: '#D4AF37', // 주요 골드색
    600: '#B8860B',
    700: '#9C6209',
    800: '#805007',
    900: '#643D05',
  },
  
  // 네이비 계열 (보조 색상)
  navy: {
    50: '#E6EAF2',
    100: '#C0CFDF',
    200: '#9AAFCC',
    300: '#748FB9',
    400: '#4E6FA6',
    500: '#284F93', // 주요 네이비색
    600: '#214279',
    700: '#1A3660',
    800: '#142946',
    900: '#0E1D2D',
  },
  
  // 회색 계열
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // 검은색 계열
  black: {
    50: '#2D2D2D',
    100: '#272727',
    200: '#232323',
    300: '#1E1E1E',
    400: '#181818',
    500: '#121212', // 주요 검은색
    600: '#0E0E0E',
    700: '#0A0A0A',
    800: '#050505',
    900: '#000000',
  },
  
  // 흰색 계열
  white: {
    50: '#FFFFFF',
    100: '#FAFAFA',
    200: '#F5F5F5',
    300: '#F0F0F0',
    400: '#E0E0E0',
    500: '#D0D0D0',
    600: '#C0C0C0',
    700: '#A0A0A0',
    800: '#808080',
    900: '#606060',
  },
  
  // 의미적 색상
  semantic: {
    success: '#4CAF50',
    info: '#2196F3',
    warning: '#FF9800',
    error: '#F44336',
  },
};

// 색상 팔레트
export const colors = {
  // 주요 색상
  primary: {
    main: baseColors.purple[500],
    light: baseColors.purple[400],
    dark: baseColors.purple[700],
    contrastText: baseColors.white[50],
    50: baseColors.purple[50],
    100: baseColors.purple[100],
    200: baseColors.purple[200],
    300: baseColors.purple[300],
    400: baseColors.purple[400],
    500: baseColors.purple[500],
    600: baseColors.purple[600],
    700: baseColors.purple[700],
    800: baseColors.purple[800],
    900: baseColors.purple[900],
  },
  
  // 보조 색상
  secondary: {
    main: baseColors.gold[500],
    light: baseColors.gold[300],
    dark: baseColors.gold[600],
    contrastText: baseColors.black[900],
    50: baseColors.gold[50],
    100: baseColors.gold[100],
    200: baseColors.gold[200],
    300: baseColors.gold[300],
    400: baseColors.gold[400],
    500: baseColors.gold[500],
    600: baseColors.gold[600],
    700: baseColors.gold[700],
    800: baseColors.gold[800],
    900: baseColors.gold[900],
  },
  
  // 강조 색상
  accent: {
    main: baseColors.navy[500],
    light: baseColors.navy[300],
    dark: baseColors.navy[700],
    contrastText: baseColors.white[50],
    50: baseColors.navy[50],
    100: baseColors.navy[100],
    200: baseColors.navy[200],
    300: baseColors.navy[300],
    400: baseColors.navy[400],
    500: baseColors.navy[500],
    600: baseColors.navy[600],
    700: baseColors.navy[700],
    800: baseColors.navy[800],
    900: baseColors.navy[900],
  },
  
  // 배경 색상
  background: {
    default: baseColors.black[900],
    paper: baseColors.black[500],
    card: baseColors.black[300],
    elevated: baseColors.black[50],
  },
  
  // 텍스트 색상
  text: {
    primary: baseColors.white[50],
    secondary: baseColors.white[600],
    disabled: baseColors.white[800],
    hint: baseColors.white[700],
  },
  
  // 의미적 색상
  semantic: {
    success: baseColors.semantic.success,
    info: baseColors.semantic.info,
    warning: baseColors.semantic.warning,
    error: baseColors.semantic.error,
    successLight: '#E8F5E9',
    infoLight: '#E3F2FD',
    warningLight: '#FFF3E0',
    errorLight: '#FFEBEE',
    successDark: '#2E7D32',
    infoDark: '#0D47A1',
    warningDark: '#E65100',
    errorDark: '#B71C1C',
  },
  
  // 그라데이션
  gradients: {
    primary: `linear-gradient(135deg, ${baseColors.purple[500]} 0%, ${baseColors.purple[700]} 100%)`,
    secondary: `linear-gradient(135deg, ${baseColors.gold[500]} 0%, ${baseColors.gold[600]} 100%)`,
    dark: `linear-gradient(135deg, ${baseColors.black[500]} 0%, ${baseColors.black[900]} 100%)`,
    mystical: `linear-gradient(135deg, ${baseColors.purple[500]} 0%, ${baseColors.gold[500]} 100%)`,
    purpleToNavy: `linear-gradient(135deg, ${baseColors.purple[500]} 0%, ${baseColors.navy[500]} 100%)`,
    goldToWhite: `linear-gradient(135deg, ${baseColors.gold[500]} 0%, ${baseColors.white[50]} 100%)`,
    darkPurple: `linear-gradient(135deg, ${baseColors.purple[700]} 0%, ${baseColors.purple[900]} 100%)`,
    darkGold: `linear-gradient(135deg, ${baseColors.gold[600]} 0%, ${baseColors.gold[800]} 100%)`,
  },
  
  // 기타 색상
  misc: {
    divider: 'rgba(255, 255, 255, 0.12)',
    overlay: 'rgba(0, 0, 0, 0.5)',
    backdrop: 'rgba(0, 0, 0, 0.8)',
    shadow: 'rgba(0, 0, 0, 0.2)',
    focus: 'rgba(107, 63, 160, 0.5)',
    hover: 'rgba(107, 63, 160, 0.08)',
  },
  
  // MBTI 유형별 색상
  mbti: {
    // 분석가형 (NT)
    INTJ: '#3F51B5', // 전략가
    INTP: '#5E35B1', // 논리술사
    ENTJ: '#1976D2', // 통솔자
    ENTP: '#7B1FA2', // 변론가
    
    // 외교관형 (NF)
    INFJ: '#6A1B9A', // 옹호자
    INFP: '#8E24AA', // 중재자
    ENFJ: '#4527A0', // 선도자
    ENFP: '#9C27B0', // 활동가
    
    // 관리자형 (SJ)
    ISTJ: '#00695C', // 현실주의자
    ISFJ: '#00796B', // 수호자
    ESTJ: '#00838F', // 경영자
    ESFJ: '#0097A7', // 집정관
    
    // 탐험가형 (SP)
    ISTP: '#E64A19', // 장인
    ISFP: '#F4511E', // 모험가
    ESTP: '#D84315', // 사업가
    ESFP: '#EF6C00', // 연예인
  },
};

export default colors;
