'use client';

/**
 * 안전한 색상 접근 유틸리티
 *
 * 테마 색상에 안전하게 접근하기 위한 유틸리티 함수입니다.
 * 색상 스케일(100, 200 등)에 접근할 때 undefined 오류를 방지합니다.
 */

/**
 * 색상 스케일에 안전하게 접근합니다.
 *
 * @param {Object} theme - MUI 테마 객체
 * @param {string} colorName - 색상 이름 (primary, secondary 등)
 * @param {number|string} scale - 색상 스케일 (100, 200 등) 또는 속성 (main, light, dark 등)
 * @param {string} fallback - 색상을 찾을 수 없을 때 사용할 대체 색상
 * @returns {string} 색상 값
 */
export function getColor(theme, colorName, scale, fallback = '#000000') {
  try {
    // 테마가 없는 경우
    if (!theme) return fallback;

    // 색상 객체가 없는 경우
    if (!theme.palette || !theme.palette[colorName]) {
      // theme.colors에서 시도
      if (theme.colors && theme.colors[colorName]) {
        if (theme.colors[colorName][scale]) {
          return theme.colors[colorName][scale];
        } else if (scale === 100 || scale === '100') {
          return theme.colors[colorName].light || fallback;
        } else if (scale === 200 || scale === '200') {
          return theme.colors[colorName].light || fallback;
        } else if (scale === 300 || scale === '300') {
          return theme.colors[colorName].light || fallback;
        } else if (scale === 400 || scale === '400') {
          return theme.colors[colorName].main || fallback;
        } else if (scale === 500 || scale === '500') {
          return theme.colors[colorName].main || fallback;
        } else if (scale === 600 || scale === '600') {
          return theme.colors[colorName].dark || fallback;
        } else if (scale === 700 || scale === '700') {
          return theme.colors[colorName].dark || fallback;
        } else if (scale === 800 || scale === '800') {
          return theme.colors[colorName].dark || fallback;
        } else if (scale === 900 || scale === '900') {
          return theme.colors[colorName].dark || fallback;
        }
      }
      return fallback;
    }

    // 팔레트에서 색상 스케일 접근
    if (theme.palette[colorName][scale]) {
      return theme.palette[colorName][scale];
    }

    // 스케일이 숫자인 경우 대체 색상 제공
    if (typeof scale === 'number' || !isNaN(parseInt(scale))) {
      const scaleNum = parseInt(scale);
      if (scaleNum <= 300) {
        return theme.palette[colorName].light || fallback;
      } else if (scaleNum <= 500) {
        return theme.palette[colorName].main || fallback;
      } else {
        return theme.palette[colorName].dark || fallback;
      }
    }

    // 기본 대체 색상 반환
    return fallback;
  } catch (error) {
    console.error('Error accessing color:', error);
    return fallback;
  }
}

/**
 * 색상 문자열을 생성합니다.
 *
 * @param {string} colorName - 색상 이름 (primary, secondary 등)
 * @param {number|string} scale - 색상 스케일 (100, 200 등) 또는 속성 (main, light, dark 등)
 * @returns {string} 색상 문자열 (예: 'primary.100')
 */
export function colorString(colorName, scale) {
  return `${colorName}.${scale}`;
}

export default getColor;
