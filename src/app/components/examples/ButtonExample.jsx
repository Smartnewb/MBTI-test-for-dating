'use client';

import { Box, Grid, Typography, Paper, Stack } from '@mui/material';
import MysticalButton from '../MysticalButton';
import MysticalText from '../mystical/MysticalText';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

/**
 * 버튼 예제 컴포넌트
 * 
 * 다양한 버튼 변형과 상태를 보여주는 예제 컴포넌트입니다.
 */
export default function ButtonExample() {
  return (
    <Box sx={{ p: 4 }}>
      <MysticalText variant="h4" textVariant="mystical" sx={{ mb: 4 }}>
        신비로운 버튼 컴포넌트
      </MysticalText>
      
      <Grid container spacing={4}>
        {/* 버튼 변형 */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              버튼 변형
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
              <MysticalButton variant="mystical">
                Mystical 변형
              </MysticalButton>
              
              <MysticalButton variant="tarot">
                Tarot 변형
              </MysticalButton>
              
              <MysticalButton variant="glow">
                Glow 변형
              </MysticalButton>
              
              <MysticalButton variant="text">
                Text 변형
              </MysticalButton>
            </Stack>
          </Paper>
        </Grid>
        
        {/* 버튼 크기 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              버튼 크기
            </Typography>
            
            <Stack direction="column" spacing={2}>
              <MysticalButton variant="mystical" size="small">
                Small 크기
              </MysticalButton>
              
              <MysticalButton variant="mystical" size="medium">
                Medium 크기
              </MysticalButton>
              
              <MysticalButton variant="mystical" size="large">
                Large 크기
              </MysticalButton>
            </Stack>
          </Paper>
        </Grid>
        
        {/* 버튼 상태 */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              버튼 상태
            </Typography>
            
            <Stack direction="column" spacing={2}>
              <MysticalButton variant="mystical">
                기본 상태
              </MysticalButton>
              
              <MysticalButton variant="mystical" disabled>
                비활성화 상태
              </MysticalButton>
              
              <MysticalButton variant="mystical" loading>
                로딩 상태
              </MysticalButton>
            </Stack>
          </Paper>
        </Grid>
        
        {/* 아이콘 버튼 */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              아이콘 버튼
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <MysticalButton 
                variant="mystical" 
                startIcon={<AutoAwesomeIcon />}
              >
                시작 아이콘
              </MysticalButton>
              
              <MysticalButton 
                variant="tarot" 
                endIcon={<StarIcon />}
              >
                끝 아이콘
              </MysticalButton>
              
              <MysticalButton 
                variant="glow" 
                startIcon={<FavoriteIcon />}
                endIcon={<FavoriteIcon />}
              >
                양쪽 아이콘
              </MysticalButton>
            </Stack>
          </Paper>
        </Grid>
        
        {/* 접근성 예제 */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              접근성 지원
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <MysticalButton 
                variant="mystical" 
                aria-label="테스트 시작하기"
                startIcon={<AutoAwesomeIcon />}
              >
                ARIA 레이블 지원
              </MysticalButton>
              
              <MysticalButton 
                variant="tarot" 
                loading
                aria-label="결과 로딩 중"
              >
                로딩 상태 ARIA 지원
              </MysticalButton>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
