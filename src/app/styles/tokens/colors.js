/**
 * 색상 팔레트 시스템
 *
 * 달빛 연애 연구소의 색상 시스템을 정의합니다.
 * 신비로운 타로 카드 컨셉을 반영한 색상 팔레트입니다.
 * 주요 색상: 보라색, 네이비, 골드
 */

// 기본 색상 값
const baseColors = {
  // 보라색 계열 (주요 브랜드 색상)
  purple: {
    50: '#F5EEFF',
    100: '#E9D9FF',
    200: '#D4B8FF',
    300: '#BE97FF',
    400: '#A876FF',
    500: '#8A4FFF', // 주요 보라색 (더 선명하게 조정)
    600: '#6B3FA0', // 이전 주요 색상
    700: '#4A235A',
    800: '#3A1D47',
    900: '#2A1433',
  },

  // 골드 계열 (강조 색상)
  gold: {
    50: '#FFF9E6',
    100: '#FFF0BF',
    200: '#FFE799',
    300: '#FFDD73',
    400: '#FFD44D',
    500: '#F2C94C', // 주요 골드색 (더 선명하게 조정)
    600: '#D4AF37', // 이전 주요 색상
    700: '#B8860B',
    800: '#9C6209',
    900: '#805007',
  },

  // 네이비 계열 (배경 및 보조 색상)
  navy: {
    50: '#E6E9F2',
    100: '#C0C9DF',
    200: '#9AA9CC',
    300: '#7489B9',
    400: '#4E69A6',
    500: '#1A1A2E', // 주요 네이비색 (더 어둡게 조정)
    600: '#151525',
    700: '#10101C',
    800: '#0A0A12',
    900: '#050509',
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
    50: '#2D2D3D', // 약간의 보라색 뉘앙스 추가
    100: '#272736',
    200: '#23232F',
    300: '#1E1E28',
    400: '#181821',
    500: '#12121A', // 주요 검은색 (약간의 보라색 뉘앙스 추가)
    600: '#0E0E14',
    700: '#0A0A0F',
    800: '#05050A',
    900: '#000000',
  },

  // 흰색 계열
  white: {
    50: '#FFFFFF',
    100: '#FAFAFA',
    200: '#F5F5F7', // 약간의 보라색 뉘앙스 추가
    300: '#F0F0F5',
    400: '#E0E0E8',
    500: '#D0D0D8',
    600: '#C0C0C8',
    700: '#A0A0A8',
    800: '#808088',
    900: '#606068',
  },

  // 의미적 색상
  semantic: {
    success: '#4CAF50',
    successLight: '#81C784',
    successDark: '#388E3C',
    info: '#2196F3',
    infoLight: '#64B5F6',
    infoDark: '#1976D2',
    warning: '#FF9800',
    warningLight: '#FFB74D',
    warningDark: '#F57C00',
    error: '#F44336',
    errorLight: '#E57373',
    errorDark: '#D32F2F',
  },
};

// 색상 팔레트
export const colors = {
  // 주요 색상
  primary: {
    main: baseColors.purple[500], // 더 선명한 보라색
    light: baseColors.purple[300],
    dark: baseColors.purple[600], // 이전 주요 색상
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
    default: baseColors.navy[700], // 어두운 네이비 배경
    paper: baseColors.navy[600], // 약간 밝은 네이비
    card: baseColors.navy[500], // 카드 배경
    elevated: baseColors.navy[400], // 상승된 요소 배경
    dark: baseColors.black[900], // 가장 어두운 배경
  },

  // 텍스트 색상
  text: {
    primary: baseColors.white[50], // 밝은 흰색
    secondary: baseColors.white[600], // 약간 어두운 흰색
    disabled: baseColors.white[800], // 더 어두운 흰색
    hint: baseColors.white[700], // 힌트 텍스트
    accent: baseColors.gold[400], // 강조 텍스트 (골드)
    mystical: baseColors.purple[300], // 신비로운 텍스트 (보라색)
  },

  // 의미적 색상
  semantic: {
    success: baseColors.semantic.success,
    info: baseColors.semantic.info,
    warning: baseColors.semantic.warning,
    error: baseColors.semantic.error,
    successLight: baseColors.semantic.successLight,
    infoLight: baseColors.semantic.infoLight,
    warningLight: baseColors.semantic.warningLight,
    errorLight: baseColors.semantic.errorLight,
    successDark: baseColors.semantic.successDark,
    infoDark: baseColors.semantic.infoDark,
    warningDark: baseColors.semantic.warningDark,
    errorDark: baseColors.semantic.errorDark,
  },

  // 그라데이션
  gradients: {
    // 기본 그라데이션
    primary: `linear-gradient(135deg, ${baseColors.purple[400]} 0%, ${baseColors.purple[600]} 100%)`,
    secondary: `linear-gradient(135deg, ${baseColors.gold[400]} 0%, ${baseColors.gold[600]} 100%)`,
    dark: `linear-gradient(135deg, ${baseColors.navy[500]} 0%, ${baseColors.navy[700]} 100%)`,

    // 신비로운 테마 그라데이션
    mystical: `linear-gradient(135deg, ${baseColors.purple[500]} 0%, ${baseColors.gold[500]} 100%)`,
    mysticalDark: `linear-gradient(135deg, ${baseColors.purple[600]} 0%, ${baseColors.gold[600]} 100%)`,
    mysticalLight: `linear-gradient(135deg, ${baseColors.purple[300]} 0%, ${baseColors.gold[300]} 100%)`,

    // 조합 그라데이션
    purpleToNavy: `linear-gradient(135deg, ${baseColors.purple[500]} 0%, ${baseColors.navy[500]} 100%)`,
    goldToWhite: `linear-gradient(135deg, ${baseColors.gold[500]} 0%, ${baseColors.white[50]} 100%)`,
    darkPurple: `linear-gradient(135deg, ${baseColors.purple[700]} 0%, ${baseColors.purple[900]} 100%)`,
    darkGold: `linear-gradient(135deg, ${baseColors.gold[600]} 0%, ${baseColors.gold[800]} 100%)`,

    // 특수 효과 그라데이션
    glow: `radial-gradient(circle, ${baseColors.purple[400]} 0%, transparent 70%)`,
    starryNight: `linear-gradient(to bottom, ${baseColors.navy[900]} 0%, ${baseColors.navy[700]} 100%)`,
    moonlight: `radial-gradient(circle at top right, ${baseColors.white[50]}20 0%, transparent 60%)`,
  },

  // 기타 색상
  misc: {
    divider: 'rgba(255, 255, 255, 0.12)',
    overlay: 'rgba(26, 26, 46, 0.7)', // 네이비 오버레이
    backdrop: 'rgba(10, 10, 18, 0.9)', // 어두운 배경
    shadow: 'rgba(0, 0, 0, 0.3)', // 그림자
    focus: `rgba(${parseInt(baseColors.purple[500].slice(1, 3), 16)}, ${parseInt(baseColors.purple[500].slice(3, 5), 16)}, ${parseInt(baseColors.purple[500].slice(5, 7), 16)}, 0.6)`, // 보라색 포커스
    hover: `rgba(${parseInt(baseColors.purple[500].slice(1, 3), 16)}, ${parseInt(baseColors.purple[500].slice(3, 5), 16)}, ${parseInt(baseColors.purple[500].slice(5, 7), 16)}, 0.1)`, // 보라색 호버
    glowPurple: `0 0 15px ${baseColors.purple[400]}80`, // 보라색 글로우 효과
    glowGold: `0 0 15px ${baseColors.gold[400]}80`, // 골드 글로우 효과
    starDust: `rgba(${parseInt(baseColors.gold[300].slice(1, 3), 16)}, ${parseInt(baseColors.gold[300].slice(3, 5), 16)}, ${parseInt(baseColors.gold[300].slice(5, 7), 16)}, 0.2)`, // 별 먼지 효과
  },

  // MBTI 유형별 색상 (타로 카드 테마에 맞게 조정)
  mbti: {
    // 분석가형 (NT) - 보라색/파란색 계열
    INTJ: '#512DA8', // 전략가 - 심판 (Judgement) 카드
    INTP: '#673AB7', // 논리술사 - 마법사 (The Magician) 카드
    ENTJ: '#303F9F', // 통솔자 - 세계 (The World) 카드
    ENTP: '#7B1FA2', // 변론가 - 바보 (The Fool) 카드

    // 외교관형 (NF) - 보라색/분홍색 계열
    INFJ: '#6A1B9A', // 옹호자 - 은둔자 (The Hermit) 카드
    INFP: '#8E24AA', // 중재자 - 달 (The Moon) 카드
    ENFJ: '#4527A0', // 선도자 - 연인들 (The Lovers) 카드
    ENFP: '#9C27B0', // 활동가 - 태양 (The Sun) 카드

    // 관리자형 (SJ) - 녹색/청록색 계열
    ISTJ: '#00695C', // 현실주의자 - 황제 (The Emperor) 카드
    ISFJ: '#00796B', // 수호자 - 여사제 (The High Priestess) 카드
    ESTJ: '#00838F', // 경영자 - 정의 (Justice) 카드
    ESFJ: '#0097A7', // 집정관 - 황후 (The Empress) 카드

    // 탐험가형 (SP) - 주황색/빨간색 계열
    ISTP: '#E64A19', // 장인 - 전차 (The Chariot) 카드
    ISFP: '#F4511E', // 모험가 - 별 (The Star) 카드
    ESTP: '#D84315', // 사업가 - 악마 (The Devil) 카드
    ESFP: '#EF6C00', // 연예인 - 힘 (Strength) 카드

    // 타로 카드 배경색
    tarotBackground: '#1A1A2E', // 타로 카드 기본 배경
    tarotBorder: '#D4AF37', // 타로 카드 테두리
    tarotSymbol: '#F2C94C', // 타로 카드 심볼
  },
};

export default colors;
