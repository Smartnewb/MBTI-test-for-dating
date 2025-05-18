'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import theme from '../../styles/theme';

// 클라이언트 측 캐시 생성 함수
const createEmotionCache = () => {
  return createCache({ key: 'css' });
};

/**
 * 테마 제공자 컴포넌트
 * 
 * Material UI 테마와 Emotion 캐시를 제공하는 컴포넌트입니다.
 * Next.js 13 App Router와 함께 사용하기 위한 설정이 포함되어 있습니다.
 */
export default function ThemeProvider({ children }) {
  const [cache] = useState(() => createEmotionCache());

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
}
