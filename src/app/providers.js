'use client';

import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SupabaseProvider } from './contexts/SupabaseContext';
import theme from './styles/theme';

/**
 * 애플리케이션 제공자 컴포넌트
 *
 * 애플리케이션 전체에서 사용되는 컨텍스트 제공자들을 모아놓은 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 자식 컴포넌트
 */
export default function Providers({ children }) {
  // React Query 클라이언트 생성
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1분
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </ThemeProvider>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
