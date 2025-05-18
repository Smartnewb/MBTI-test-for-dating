'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { tokens } from '../styles/tokens';
import baseTheme from '../styles/theme';

// 테마 컨텍스트 생성
const ThemeContext = createContext({
  mode: 'dark',
  toggleMode: () => {},
  theme: baseTheme,
});

// 테마 컨텍스트 훅
export const useThemeContext = () => useContext(ThemeContext);

/**
 * 테마 프로바이더 컴포넌트
 * 
 * 앱 전체에 테마를 제공하고 테마 모드(라이트/다크)를 전환할 수 있는 기능을 제공합니다.
 */
export function ThemeProvider({ children }) {
  // 로컬 스토리지에서 테마 모드 불러오기 (기본값: 다크 모드)
  const [mode, setMode] = useState('dark');
  
  // 컴포넌트 마운트 시 로컬 스토리지에서 테마 모드 불러오기
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);
  
  // 테마 모드 전환 함수
  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };
  
  // 라이트 모드 테마 생성
  const lightTheme = createTheme({
    ...baseTheme,
    palette: {
      ...baseTheme.palette,
      mode: 'light',
      primary: {
        ...baseTheme.palette.primary,
      },
      secondary: {
        ...baseTheme.palette.secondary,
      },
      background: {
        default: tokens.colors.white[100],
        paper: tokens.colors.white[50],
      },
      text: {
        primary: tokens.colors.black[900],
        secondary: tokens.colors.black[700],
        disabled: tokens.colors.black[500],
      },
    },
  });
  
  // 현재 모드에 따른 테마 선택
  const theme = mode === 'light' ? lightTheme : baseTheme;
  
  // 테마 컨텍스트 값
  const contextValue = {
    mode,
    toggleMode,
    theme,
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
