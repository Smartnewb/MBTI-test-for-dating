'use client';

import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { tokens } from '../../styles/tokens';

/**
 * 색상 견본 컴포넌트
 * 
 * 단일 색상을 표시하는 컴포넌트입니다.
 */
function ColorSwatch({ color, name, textColor = '#FFFFFF' }) {
  return (
    <Paper
      elevation={2}
      sx={{
        bgcolor: color,
        height: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        borderRadius: 1,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Typography variant="subtitle2" sx={{ color: textColor, fontWeight: 'bold' }}>
        {name}
      </Typography>
      <Typography variant="caption" sx={{ color: textColor }}>
        {color}
      </Typography>
    </Paper>
  );
}

/**
 * 그라데이션 견본 컴포넌트
 * 
 * 그라데이션을 표시하는 컴포넌트입니다.
 */
function GradientSwatch({ gradient, name }) {
  return (
    <Paper
      elevation={2}
      sx={{
        background: gradient,
        height: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        borderRadius: 1,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
        {name}
      </Typography>
    </Paper>
  );
}

/**
 * 색상 그룹 컴포넌트
 * 
 * 관련된 색상들을 그룹으로 표시하는 컴포넌트입니다.
 */
function ColorGroup({ title, colorMap, textColors = {} }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(colorMap).map(([name, color]) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
            <ColorSwatch 
              color={color} 
              name={name} 
              textColor={textColors[name] || '#FFFFFF'} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

/**
 * 색상 스케일 컴포넌트
 * 
 * 색상의 다양한 음영을 표시하는 컴포넌트입니다.
 */
function ColorScale({ title, colorScale }) {
  // 숫자 키만 필터링 (50, 100, 200, ...)
  const numericKeys = Object.keys(colorScale).filter(key => !isNaN(key));
  
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title} 스케일
      </Typography>
      <Grid container spacing={2}>
        {numericKeys.map(key => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={key}>
            <ColorSwatch 
              color={colorScale[key]} 
              name={`${title} ${key}`} 
              textColor={parseInt(key) < 400 ? '#000000' : '#FFFFFF'} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

/**
 * 색상 팔레트 디스플레이 컴포넌트
 * 
 * 전체 색상 팔레트를 표시하는 컴포넌트입니다.
 */
export default function ColorPaletteDisplay() {
  const theme = useTheme();
  const colors = tokens.colors;
  
  // 기본 색상
  const baseColors = {
    'Primary': theme.palette.primary.main,
    'Primary Light': theme.palette.primary.light,
    'Primary Dark': theme.palette.primary.dark,
    'Secondary': theme.palette.secondary.main,
    'Secondary Light': theme.palette.secondary.light,
    'Secondary Dark': theme.palette.secondary.dark,
  };
  
  // 배경 색상
  const backgroundColors = {
    'Background Default': theme.palette.background.default,
    'Background Paper': theme.palette.background.paper,
    'Background Card': colors.background.card,
    'Background Elevated': colors.background.elevated,
    'Background Dark': colors.background.dark,
  };
  
  // 텍스트 색상
  const textColors = {
    'Text Primary': theme.palette.text.primary,
    'Text Secondary': theme.palette.text.secondary,
    'Text Disabled': theme.palette.text.disabled,
    'Text Hint': colors.text.hint,
    'Text Accent': colors.text.accent,
    'Text Mystical': colors.text.mystical,
  };
  
  // 의미적 색상
  const semanticColors = {
    'Success': colors.semantic.success,
    'Info': colors.semantic.info,
    'Warning': colors.semantic.warning,
    'Error': colors.semantic.error,
  };
  
  // 텍스트 색상 (어두운 배경에는 밝은 텍스트, 밝은 배경에는 어두운 텍스트)
  const textColorMap = {
    'Primary Light': '#000000',
    'Secondary': '#000000',
    'Secondary Light': '#000000',
    'Success': '#000000',
    'Info': '#000000',
    'Warning': '#000000',
  };
  
  return (
    <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'text.primary' }}>
        달빛 연애 연구소 색상 팔레트
      </Typography>
      
      <ColorGroup title="주요 색상" colorMap={baseColors} textColors={textColorMap} />
      
      <ColorGroup title="배경 색상" colorMap={backgroundColors} />
      
      <ColorGroup title="텍스트 색상" colorMap={textColors} />
      
      <ColorGroup title="의미적 색상" colorMap={semanticColors} textColors={textColorMap} />
      
      <ColorScale title="Primary" colorScale={colors.primary} />
      
      <ColorScale title="Secondary" colorScale={colors.secondary} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          그라데이션
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(colors.gradients).map(([name, gradient]) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
              <GradientSwatch gradient={gradient} name={name} />
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          MBTI 유형별 색상
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(colors.mbti)
            .filter(([key]) => key.length === 4) // MBTI 유형 코드만 필터링
            .map(([type, color]) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={type}>
                <ColorSwatch color={color} name={type} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
