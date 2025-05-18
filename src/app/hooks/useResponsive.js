'use client';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * 반응형 디자인을 위한 커스텀 훅
 * 
 * 현재 화면 크기에 따른 반응형 값을 제공하는 훅입니다.
 * 
 * @returns {Object} 반응형 유틸리티 객체
 * @returns {boolean} returns.isMobile - 모바일 화면 여부 (sm 이하)
 * @returns {boolean} returns.isTablet - 태블릿 화면 여부 (md 이하)
 * @returns {boolean} returns.isDesktop - 데스크톱 화면 여부 (lg 이상)
 * @returns {boolean} returns.isLargeDesktop - 대형 데스크톱 화면 여부 (xl 이상)
 * @returns {function} returns.up - 특정 브레이크포인트 이상인지 확인하는 함수
 * @returns {function} returns.down - 특정 브레이크포인트 이하인지 확인하는 함수
 * @returns {function} returns.between - 두 브레이크포인트 사이인지 확인하는 함수
 * @returns {function} returns.only - 특정 브레이크포인트에만 해당하는지 확인하는 함수
 * @returns {function} returns.width - 현재 화면 너비에 따라 다른 값을 반환하는 함수
 */
export default function useResponsive() {
  const theme = useTheme();
  
  // 기본 브레이크포인트 쿼리
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  
  /**
   * 특정 브레이크포인트 이상인지 확인
   * @param {string} breakpoint - 브레이크포인트 ('xs', 'sm', 'md', 'lg', 'xl')
   * @returns {boolean} 해당 브레이크포인트 이상인지 여부
   */
  const up = (breakpoint) => useMediaQuery(theme.breakpoints.up(breakpoint));
  
  /**
   * 특정 브레이크포인트 이하인지 확인
   * @param {string} breakpoint - 브레이크포인트 ('xs', 'sm', 'md', 'lg', 'xl')
   * @returns {boolean} 해당 브레이크포인트 이하인지 여부
   */
  const down = (breakpoint) => useMediaQuery(theme.breakpoints.down(breakpoint));
  
  /**
   * 두 브레이크포인트 사이인지 확인
   * @param {string} start - 시작 브레이크포인트 ('xs', 'sm', 'md', 'lg', 'xl')
   * @param {string} end - 종료 브레이크포인트 ('xs', 'sm', 'md', 'lg', 'xl')
   * @returns {boolean} 두 브레이크포인트 사이인지 여부
   */
  const between = (start, end) => useMediaQuery(theme.breakpoints.between(start, end));
  
  /**
   * 특정 브레이크포인트에만 해당하는지 확인
   * @param {string} breakpoint - 브레이크포인트 ('xs', 'sm', 'md', 'lg', 'xl')
   * @returns {boolean} 특정 브레이크포인트에만 해당하는지 여부
   */
  const only = (breakpoint) => useMediaQuery(theme.breakpoints.only(breakpoint));
  
  /**
   * 화면 크기에 따라 다른 값 반환
   * @param {Object} values - 브레이크포인트별 값 객체
   * @param {*} [values.xs] - 모바일 S 값 (0-600px)
   * @param {*} [values.sm] - 모바일 L 값 (600-900px)
   * @param {*} [values.md] - 태블릿 값 (900-1200px)
   * @param {*} [values.lg] - 데스크톱 값 (1200-1536px)
   * @param {*} [values.xl] - 대형 데스크톱 값 (1536px 이상)
   * @returns {*} 현재 화면 크기에 맞는 값
   */
  const width = (values) => {
    const { xs, sm, md, lg, xl } = values;
    
    if (isLargeDesktop && xl !== undefined) return xl;
    if (isDesktop && lg !== undefined) return lg;
    if (!isTablet && md !== undefined) return md;
    if (!isMobile && sm !== undefined) return sm;
    return xs;
  };
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    up,
    down,
    between,
    only,
    width,
  };
}
