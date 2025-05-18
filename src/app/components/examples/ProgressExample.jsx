'use client';

import { useState } from 'react';
import { Box, Typography, Paper, Grid, Stack, Button, Divider } from '@mui/material';
import MysticalProgress from '../MysticalProgress';
import MysticalStepper from '../mystical/MysticalStepper';
import MysticalSpinner from '../mystical/MysticalSpinner';
import MysticalLoader from '../mystical/MysticalLoader';
import MysticalNavigation from '../mystical/MysticalNavigation';
import MysticalText from '../mystical/MysticalText';

/**
 * 진행 상태 표시기 예제 컴포넌트
 * 
 * 다양한 진행 상태 표시기 컴포넌트를 보여주는 예제 컴포넌트입니다.
 */
export default function ProgressExample() {
  // 상태 관리
  const [progress, setProgress] = useState(60);
  const [activeStep, setActiveStep] = useState(1);
  
  // 스텝 정의
  const steps = [
    { label: '시작' },
    { label: '정보 입력' },
    { label: '테스트 진행' },
    { label: '결과 분석' },
    { label: '완료' },
  ];
  
  // 진행 상태 증가/감소 핸들러
  const handleIncreaseProgress = () => {
    setProgress(prev => Math.min(prev + 10, 100));
  };
  
  const handleDecreaseProgress = () => {
    setProgress(prev => Math.max(prev - 10, 0));
  };
  
  // 스텝 이동 핸들러
  const handleNextStep = () => {
    setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  };
  
  const handlePrevStep = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
  };
  
  return (
    <Box sx={{ p: 4 }}>
      <MysticalText variant="h4" textVariant="mystical" sx={{ mb: 4 }}>
        신비로운 진행 상태 표시기
      </MysticalText>
      
      {/* 선형 진행 상태 표시기 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          선형 진행 상태 표시기 (MysticalProgress)
        </Typography>
        
        <Stack spacing={3} sx={{ mb: 3 }}>
          <MysticalProgress
            variant="primary"
            value={progress}
            label="Primary 변형"
          />
          
          <MysticalProgress
            variant="secondary"
            value={progress}
            label="Secondary 변형"
          />
          
          <MysticalProgress
            variant="mystical"
            value={progress}
            label="Mystical 변형"
          />
        </Stack>
        
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          단계 표시기
        </Typography>
        
        <MysticalProgress
          variant="mystical"
          value={progress}
          label="단계 표시기"
          totalSteps={5}
          currentStep={Math.ceil(progress / 20)}
        />
        
        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={handleDecreaseProgress}
          >
            감소 (-10%)
          </Button>
          
          <Button
            variant="contained"
            onClick={handleIncreaseProgress}
          >
            증가 (+10%)
          </Button>
        </Box>
      </Paper>
      
      {/* 스텝퍼 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          스텝퍼 (MysticalStepper)
        </Typography>
        
        <Stack spacing={4} sx={{ mb: 3 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Primary 변형
            </Typography>
            
            <MysticalStepper
              variant="primary"
              activeStep={activeStep}
              steps={steps}
            />
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Secondary 변형
            </Typography>
            
            <MysticalStepper
              variant="secondary"
              activeStep={activeStep}
              steps={steps}
            />
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Mystical 변형
            </Typography>
            
            <MysticalStepper
              variant="mystical"
              activeStep={activeStep}
              steps={steps}
            />
          </Box>
        </Stack>
        
        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={handlePrevStep}
            disabled={activeStep === 0}
          >
            이전 단계
          </Button>
          
          <Button
            variant="contained"
            onClick={handleNextStep}
            disabled={activeStep === steps.length - 1}
          >
            다음 단계
          </Button>
        </Box>
      </Paper>
      
      {/* 스피너 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          스피너 (MysticalSpinner)
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Primary 변형
              </Typography>
              
              <MysticalSpinner
                variant="primary"
                text="로딩 중..."
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Secondary 변형
              </Typography>
              
              <MysticalSpinner
                variant="secondary"
                text="처리 중..."
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Mystical 변형
              </Typography>
              
              <MysticalSpinner
                variant="mystical"
                text="분석 중..."
                showStars
              />
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          크기 변형
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="caption" sx={{ mb: 1 }}>
                Small
              </Typography>
              
              <MysticalSpinner
                variant="mystical"
                size="small"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="caption" sx={{ mb: 1 }}>
                Medium
              </Typography>
              
              <MysticalSpinner
                variant="mystical"
                size="medium"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="caption" sx={{ mb: 1 }}>
                Large
              </Typography>
              
              <MysticalSpinner
                variant="mystical"
                size="large"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
      {/* 로더 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          로더 (MysticalLoader)
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Small
              </Typography>
              
              <MysticalLoader
                size="small"
                text="로딩 중..."
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Medium
              </Typography>
              
              <MysticalLoader
                size="medium"
                text="처리 중..."
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Large
              </Typography>
              
              <MysticalLoader
                size="large"
                text="분석 중..."
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
      {/* 네비게이션 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          네비게이션 (MysticalNavigation)
        </Typography>
        
        <Stack spacing={4}>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              버튼 타입 - Primary
            </Typography>
            
            <MysticalNavigation
              variant="primary"
              type="button"
              onPrev={() => {}}
              onNext={() => {}}
            />
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              버튼 타입 - Secondary
            </Typography>
            
            <MysticalNavigation
              variant="secondary"
              type="button"
              onPrev={() => {}}
              onNext={() => {}}
            />
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              버튼 타입 - Mystical
            </Typography>
            
            <MysticalNavigation
              variant="mystical"
              type="button"
              onPrev={() => {}}
              onNext={() => {}}
            />
          </Box>
          
          <Divider />
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              아이콘 타입 - Primary
            </Typography>
            
            <MysticalNavigation
              variant="primary"
              type="icon"
              position="center"
              onPrev={() => {}}
              onNext={() => {}}
            />
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              아이콘 타입 - Secondary
            </Typography>
            
            <MysticalNavigation
              variant="secondary"
              type="icon"
              position="center"
              onPrev={() => {}}
              onNext={() => {}}
            />
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              아이콘 타입 - Mystical
            </Typography>
            
            <MysticalNavigation
              variant="mystical"
              type="icon"
              position="center"
              onPrev={() => {}}
              onNext={() => {}}
            />
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
