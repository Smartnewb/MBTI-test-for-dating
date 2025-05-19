/**
 * 성능 최적화 유틸리티
 *
 * 성능 최적화를 위한 유틸리티 함수들을 제공합니다.
 */

/**
 * 디바운스 함수
 *
 * 함수 호출을 지연시켜 성능을 최적화합니다.
 *
 * @param {Function} func - 실행할 함수
 * @param {number} wait - 지연 시간 (ms)
 * @returns {Function} 디바운스된 함수
 */
export function debounce(func, wait = 300) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * 스로틀 함수
 *
 * 함수 호출 빈도를 제한하여 성능을 최적화합니다.
 *
 * @param {Function} func - 실행할 함수
 * @param {number} limit - 제한 시간 (ms)
 * @returns {Function} 스로틀된 함수
 */
export function throttle(func, limit = 300) {
  let inThrottle;

  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * 메모이제이션 함수
 *
 * 함수 결과를 캐싱하여 성능을 최적화합니다.
 *
 * @param {Function} func - 메모이제이션할 함수
 * @returns {Function} 메모이제이션된 함수
 */
export function memoize(func) {
  const cache = new Map();

  return function memoizedFunction(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);

    return result;
  };
}

/**
 * 비동기 메모이제이션 함수
 *
 * 비동기 함수 결과를 캐싱하여 성능을 최적화합니다.
 *
 * @param {Function} func - 메모이제이션할 비동기 함수
 * @returns {Function} 메모이제이션된 비동기 함수
 */
export function memoizeAsync(func) {
  const cache = new Map();

  return async function memoizedAsyncFunction(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = await func(...args);
    cache.set(key, result);

    return result;
  };
}

/**
 * 성능 측정 함수
 *
 * 함수 실행 시간을 측정합니다.
 *
 * @param {Function} func - 측정할 함수
 * @param {string} [name] - 함수 이름
 * @returns {Function} 측정 함수
 */
export function measure(func, name) {
  return function measuredFunction(...args) {
    const funcName = name || func.name || 'Anonymous Function';
    console.time(funcName);
    const result = func(...args);
    console.timeEnd(funcName);
    return result;
  };
}

/**
 * 비동기 성능 측정 함수
 *
 * 비동기 함수 실행 시간을 측정합니다.
 *
 * @param {Function} func - 측정할 비동기 함수
 * @param {string} [name] - 함수 이름
 * @returns {Function} 측정 함수
 */
export function measureAsync(func, name) {
  return async function measuredAsyncFunction(...args) {
    const funcName = name || func.name || 'Anonymous Async Function';
    console.time(funcName);
    const result = await func(...args);
    console.timeEnd(funcName);
    return result;
  };
}

const performanceUtils = {
  debounce,
  throttle,
  memoize,
  memoizeAsync,
  measure,
  measureAsync,
};

export default performanceUtils;
