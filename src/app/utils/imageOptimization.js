/**
 * 이미지 최적화 유틸리티
 * 
 * 이미지 최적화를 위한 유틸리티 함수들을 제공합니다.
 */

/**
 * 이미지 URL에 최적화 매개변수 추가
 * 
 * @param {string} url - 이미지 URL
 * @param {Object} options - 최적화 옵션
 * @param {number} [options.width] - 이미지 너비
 * @param {number} [options.height] - 이미지 높이
 * @param {number} [options.quality=80] - 이미지 품질 (1-100)
 * @param {string} [options.format='webp'] - 이미지 형식 ('webp', 'jpeg', 'png')
 * @returns {string} 최적화된 이미지 URL
 */
export function optimizeImageUrl(url, options = {}) {
  // 기본 옵션 설정
  const defaultOptions = {
    quality: 80,
    format: 'webp',
  };
  
  // 옵션 병합
  const mergedOptions = { ...defaultOptions, ...options };
  
  // 외부 URL인 경우 그대로 반환
  if (url.startsWith('http') || url.startsWith('https')) {
    return url;
  }
  
  // 이미지 URL 생성
  let optimizedUrl = url;
  
  // 쿼리 매개변수 추가
  const queryParams = [];
  
  if (mergedOptions.width) {
    queryParams.push(`w=${mergedOptions.width}`);
  }
  
  if (mergedOptions.height) {
    queryParams.push(`h=${mergedOptions.height}`);
  }
  
  if (mergedOptions.quality) {
    queryParams.push(`q=${mergedOptions.quality}`);
  }
  
  if (mergedOptions.format) {
    queryParams.push(`fm=${mergedOptions.format}`);
  }
  
  // 쿼리 매개변수가 있는 경우 URL에 추가
  if (queryParams.length > 0) {
    optimizedUrl += `?${queryParams.join('&')}`;
  }
  
  return optimizedUrl;
}

/**
 * 이미지 사전 로드
 * 
 * @param {string[]} urls - 이미지 URL 배열
 * @returns {Promise<void>}
 */
export function preloadImages(urls) {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  });
  
  return Promise.all(promises);
}

/**
 * 이미지 지연 로드 옵저버 생성
 * 
 * @param {Object} options - 옵저버 옵션
 * @param {string} [options.rootMargin='200px'] - 루트 마진
 * @param {number} [options.threshold=0.1] - 임계값
 * @returns {IntersectionObserver} 인터섹션 옵저버
 */
export function createLazyLoadObserver(options = {}) {
  // 기본 옵션 설정
  const defaultOptions = {
    rootMargin: '200px',
    threshold: 0.1,
  };
  
  // 옵션 병합
  const mergedOptions = { ...defaultOptions, ...options };
  
  // 인터섹션 옵저버 생성
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // 데이터 속성에서 이미지 URL 가져오기
        const src = element.dataset.src;
        
        if (src) {
          // 이미지 로드
          if (element.tagName === 'IMG') {
            element.src = src;
          } else {
            element.style.backgroundImage = `url(${src})`;
          }
          
          // 데이터 속성 제거
          element.removeAttribute('data-src');
        }
        
        // 옵저버 해제
        observer.unobserve(element);
      }
    });
  }, mergedOptions);
  
  return observer;
}

export default {
  optimizeImageUrl,
  preloadImages,
  createLazyLoadObserver,
};
