'use client';

import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../contexts/ThemeContext';

/**
 * 테마 전환 버튼 컴포넌트
 * 
 * 라이트 모드와 다크 모드를 전환할 수 있는 버튼 컴포넌트입니다.
 */
export default function ThemeToggle({ sx = {} }) {
  const { mode, toggleMode } = useThemeContext();
  const theme = useTheme();
  
  return (
    <Tooltip title={mode === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}>
      <IconButton
        onClick={toggleMode}
        color="inherit"
        sx={{
          ml: 1,
          border: `1px solid ${theme.palette.primary.main}30`,
          borderRadius: '50%',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: `${theme.palette.primary.main}20`,
            transform: 'rotate(30deg)',
          },
          ...sx,
        }}
        aria-label="테마 전환"
      >
        {mode === 'dark' ? (
          <Brightness7Icon sx={{ color: theme.palette.secondary.main }} />
        ) : (
          <Brightness4Icon sx={{ color: theme.palette.primary.main }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
