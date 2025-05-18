'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SupabaseProvider>
        {children}
      </SupabaseProvider>
    </ThemeProvider>
  );
}
