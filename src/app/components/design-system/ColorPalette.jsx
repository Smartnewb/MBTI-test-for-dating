'use client';

import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { colors } from '../../styles/tokens/colors';

/**
 * 색상 스와치 컴포넌트
 * 
 * 색상 견본을 표시하는 컴포넌트입니다.
 */
function ColorSwatch({ color, name, textColor = '#FFFFFF' }) {
  return (
    <Paper
      sx={{
        bgcolor: color,
        height: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 1,
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Typography variant="caption" sx={{ color: textColor, fontWeight: 'bold' }}>
        {name}
      </Typography>
      <Typography variant="caption" sx={{ color: textColor }}>
        {color}
      </Typography>
    </Paper>
  );
}

/**
 * 색상 그룹 컴포넌트
 * 
 * 색상 그룹을 표시하는 컴포넌트입니다.
 */
function ColorGroup({ title, colorMap, textColors }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(colorMap).map(([name, color]) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={name}>
            <ColorSwatch 
              color={color} 
              name={name} 
              textColor={textColors?.[name] || '#FFFFFF'} 
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
 * 색상 스케일을 표시하는 컴포넌트입니다.
 */
function ColorScale({ title, colorScale, textColors }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        {Object.entries(colorScale)
          .filter(([key]) => !isNaN(parseInt(key)))
          .sort(([a], [b]) => parseInt(a) - parseInt(b))
          .map(([shade, color]) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={shade}>
              <ColorSwatch 
                color={color} 
                name={`${title} ${shade}`} 
                textColor={textColors?.[shade] || (parseInt(shade) <= 500 ? '#000000' : '#FFFFFF')} 
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

/**
 * 그라데이션 컴포넌트
 * 
 * 그라데이션을 표시하는 컴포넌트입니다.
 */
function GradientSwatch({ gradient, name }) {
  return (
    <Paper
      sx={{
        background: gradient,
        height: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 1,
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Typography variant="caption" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
        {name}
      </Typography>
    </Paper>
  );
}

/**
 * 색상 팔레트 컴포넌트
 * 
 * 전체 색상 팔레트를 표시하는 컴포넌트입니다.
 */
export default function ColorPalette() {
  const theme = useTheme();
  
  // 기본 색상
  const baseColors = {
    'Primary': theme.palette.primary.main,
    'Primary Light': theme.palette.primary.light,
    'Primary Dark': theme.palette.primary.dark,
    'Secondary': theme.palette.secondary.main,
    'Secondary Light': theme.palette.secondary.light,
    'Secondary Dark': theme.palette.secondary.dark,
    'Background': theme.palette.background.default,
    'Paper': theme.palette.background.paper,
    'Text Primary': theme.palette.text.primary,
    'Text Secondary': theme.palette.text.secondary,
  };
  
  // 의미적 색상
  const semanticColors = {
    'Success': colors.semantic.success,
    'Info': colors.semantic.info,
    'Warning': colors.semantic.warning,
    'Error': colors.semantic.error,
    'Success Dark': colors.semantic.successDark,
    'Info Dark': colors.semantic.infoDark,
    'Warning Dark': colors.semantic.warningDark,
    'Error Dark': colors.semantic.errorDark,
  };
  
  // 그라데이션
  const gradients = colors.gradients;
  
  // MBTI 색상
  const mbtiColors = colors.mbti;
  
  // 텍스트 색상 (어두운 배경에는 밝은 텍스트, 밝은 배경에는 어두운 텍스트)
  const textColors = {
    'Primary Light': '#000000',
    'Secondary': '#000000',
    'Secondary Light': '#000000',
    'Success': '#000000',
    'Info': '#000000',
    'Warning': '#000000',
    'Success Light': '#000000',
    'Info Light': '#000000',
    'Warning Light': '#000000',
    'Error Light': '#000000',
  };
  
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        색상 팔레트
      </Typography>
      
      <ColorGroup title="기본 색상" colorMap={baseColors} textColors={textColors} />
      
      <ColorScale title="Primary" colorScale={colors.primary} />
      
      <ColorScale title="Secondary" colorScale={colors.secondary} />
      
      <ColorScale title="Accent" colorScale={colors.accent} />
      
      <ColorGroup title="의미적 색상" colorMap={semanticColors} textColors={textColors} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          그라데이션
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(gradients).map(([name, gradient]) => (
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
          {Object.entries(mbtiColors).map(([type, color]) => (
            <Grid item xs={6} sm={3} md={2} lg={1.5} key={type}>
              <ColorSwatch color={color} name={type} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
