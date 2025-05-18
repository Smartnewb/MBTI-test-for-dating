'use client';

import { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Divider, Stack } from '@mui/material';
import { AnimatedElement, AnimatedGroup } from '../animations';
import AnimatedText from '../animations/AnimatedText';
import AnimatedIcon from '../animations/AnimatedIcon';
import AnimatedBackground from '../animations/AnimatedBackground';
import { PageFade, PageSlide, PageZoom, PageFlip } from '../animations/PageTransition';
import MysticalText from '../mystical/MysticalText';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CelebrationIcon from '@mui/icons-material/Celebration';

/**
 * 애니메이션 예제 컴포넌트
 * 
 * 다양한 애니메이션 컴포넌트를 보여주는 예제 컴포넌트입니다.
 */
export default function AnimationExample() {
  // 페이지 전환 상태
  const [currentPage, setCurrentPage] = useState(0);
  const [transitionEffect, setTransitionEffect] = useState('fade');
  const [direction, setDirection] = useState('next');
  
  // 페이지 전환 핸들러
  const handlePageChange = (newPage) => {
    setDirection(newPage > currentPage ? 'next' : 'prev');
    setCurrentPage(newPage);
  };
  
  // 전환 효과 변경 핸들러
  const handleEffectChange = (effect) => {
    setTransitionEffect(effect);
  };
  
  // 페이지 컨텐츠
  const pages = [
    <Box key="page-1" sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        페이지 1
      </Typography>
      <Typography variant="body1">
        이것은 첫 번째 페이지입니다. 다양한 전환 효과를 확인해보세요.
      </Typography>
    </Box>,
    <Box key="page-2" sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        페이지 2
      </Typography>
      <Typography variant="body1">
        이것은 두 번째 페이지입니다. 다양한 전환 효과를 확인해보세요.
      </Typography>
    </Box>,
    <Box key="page-3" sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        페이지 3
      </Typography>
      <Typography variant="body1">
        이것은 세 번째 페이지입니다. 다양한 전환 효과를 확인해보세요.
      </Typography>
    </Box>,
  ];
  
  // 페이지 전환 컴포넌트 선택
  const renderPageTransition = () => {
    switch (transitionEffect) {
      case 'fade':
        return (
          <PageFade direction={direction}>
            {pages[currentPage]}
          </PageFade>
        );
      case 'slide':
        return (
          <PageSlide direction={direction}>
            {pages[currentPage]}
          </PageSlide>
        );
      case 'zoom':
        return (
          <PageZoom direction={direction}>
            {pages[currentPage]}
          </PageZoom>
        );
      case 'flip':
        return (
          <PageFlip direction={direction}>
            {pages[currentPage]}
          </PageFlip>
        );
      default:
        return pages[currentPage];
    }
  };
  
  return (
    <Box sx={{ p: 4 }}>
      <MysticalText variant="h4" textVariant="mystical" sx={{ mb: 4 }}>
        애니메이션 컴포넌트
      </MysticalText>
      
      {/* 기본 애니메이션 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          기본 애니메이션 (AnimatedElement)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          AnimatedElement 컴포넌트는 다양한 애니메이션 효과를 제공합니다.
          등장, 퇴장, 강조 등 다양한 상황에 맞게 사용할 수 있습니다.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                페이드인 (fadeIn)
              </Typography>
              
              <AnimatedElement animation="fadeIn" duration="normal">
                <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>
                  <Typography variant="body2">페이드인 효과</Typography>
                </Box>
              </AnimatedElement>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                슬라이드 (slideUp)
              </Typography>
              
              <AnimatedElement animation="slideUp" duration="normal">
                <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'white', borderRadius: 1 }}>
                  <Typography variant="body2">슬라이드 효과</Typography>
                </Box>
              </AnimatedElement>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                줌 (zoomIn)
              </Typography>
              
              <AnimatedElement animation="zoomIn" duration="normal">
                <Box sx={{ p: 2, bgcolor: 'info.main', color: 'white', borderRadius: 1 }}>
                  <Typography variant="body2">줌 효과</Typography>
                </Box>
              </AnimatedElement>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                펄스 (pulse)
              </Typography>
              
              <AnimatedElement animation="pulse" duration="slow" infinite>
                <Box sx={{ p: 2, bgcolor: 'error.main', color: 'white', borderRadius: 1 }}>
                  <Typography variant="body2">펄스 효과</Typography>
                </Box>
              </AnimatedElement>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                바운스 (bounce)
              </Typography>
              
              <AnimatedElement animation="bounce" duration="normal" infinite>
                <Box sx={{ p: 2, bgcolor: 'success.main', color: 'white', borderRadius: 1 }}>
                  <Typography variant="body2">바운스 효과</Typography>
                </Box>
              </AnimatedElement>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                회전 (rotate)
              </Typography>
              
              <AnimatedElement animation="rotate" duration="normal" infinite>
                <Box sx={{ p: 2, bgcolor: 'warning.main', color: 'white', borderRadius: 1 }}>
                  <Typography variant="body2">회전 효과</Typography>
                </Box>
              </AnimatedElement>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      
      {/* 애니메이션 그룹 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          애니메이션 그룹 (AnimatedGroup)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          AnimatedGroup 컴포넌트는 여러 요소를 순차적으로 애니메이션화합니다.
          리스트, 그리드 등 여러 요소를 표시할 때 유용합니다.
        </Typography>
        
        <AnimatedGroup animation="fadeIn" stagger={100}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                mb: 1,
                bgcolor: `primary.${index * 100 + 100}`,
                color: index > 3 ? 'white' : 'black',
                borderRadius: 1,
              }}
            >
              <Typography variant="body2">아이템 {index + 1}</Typography>
            </Box>
          ))}
        </AnimatedGroup>
      </Paper>
      
      {/* 애니메이션 텍스트 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          애니메이션 텍스트 (AnimatedText)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          AnimatedText 컴포넌트는 다양한 텍스트 애니메이션 효과를 제공합니다.
          타이핑, 글자별 애니메이션 등 다양한 효과를 지원합니다.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              타이핑 효과
            </Typography>
            
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <AnimatedText
                text="안녕하세요, 달빛 연애 연구소입니다. 당신의 MBTI 연애 유형을 알아보세요."
                animation="typing"
                typingSpeed={50}
                variant="h6"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              글자별 애니메이션
            </Typography>
            
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <AnimatedText
                text="달빛 연애 연구소"
                animation="charByChar"
                charAnimation="fadeIn"
                charDelay={100}
                variant="h5"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              슬라이드 효과
            </Typography>
            
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <AnimatedText
                text="MBTI 연애 테스트"
                animation="slideUp"
                duration="normal"
                variant="h6"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              물결 효과
            </Typography>
            
            <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <AnimatedText
                text="당신의 연애 유형은?"
                animation="wave"
                duration="slow"
                variant="h6"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
      {/* 애니메이션 아이콘 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          애니메이션 아이콘 (AnimatedIcon)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          AnimatedIcon 컴포넌트는 다양한 아이콘 애니메이션 효과를 제공합니다.
          회전, 펄스, 바운스 등 다양한 효과를 지원합니다.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <AnimatedIcon animation="pulse" infinite duration="slow" size="large" color="primary.main">
                <StarIcon fontSize="inherit" />
              </AnimatedIcon>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                펄스
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <AnimatedIcon animation="spin" infinite duration="normal" size="large" color="secondary.main">
                <AutoAwesomeIcon fontSize="inherit" />
              </AnimatedIcon>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                회전
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <AnimatedIcon animation="bounce" infinite duration="normal" size="large" color="error.main">
                <FavoriteIcon fontSize="inherit" />
              </AnimatedIcon>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                바운스
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <AnimatedIcon animation="float" infinite duration="slow" size="large" color="info.main">
                <WbTwilightIcon fontSize="inherit" />
              </AnimatedIcon>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                플로트
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <AnimatedIcon animation="shake" infinite duration="normal" size="large" color="warning.main">
                <LocalFireDepartmentIcon fontSize="inherit" />
              </AnimatedIcon>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                쉐이크
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <AnimatedIcon animation="tada" infinite duration="normal" size="large" color="success.main">
                <CelebrationIcon fontSize="inherit" />
              </AnimatedIcon>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                타다
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
      {/* 페이지 전환 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          페이지 전환 (PageTransition)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          PageTransition 컴포넌트는 페이지 간 전환 애니메이션을 제공합니다.
          페이드, 슬라이드, 줌, 플립 등 다양한 효과를 지원합니다.
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Button
              variant={transitionEffect === 'fade' ? 'contained' : 'outlined'}
              onClick={() => handleEffectChange('fade')}
              size="small"
            >
              페이드
            </Button>
            
            <Button
              variant={transitionEffect === 'slide' ? 'contained' : 'outlined'}
              onClick={() => handleEffectChange('slide')}
              size="small"
            >
              슬라이드
            </Button>
            
            <Button
              variant={transitionEffect === 'zoom' ? 'contained' : 'outlined'}
              onClick={() => handleEffectChange('zoom')}
              size="small"
            >
              줌
            </Button>
            
            <Button
              variant={transitionEffect === 'flip' ? 'contained' : 'outlined'}
              onClick={() => handleEffectChange('flip')}
              size="small"
            >
              플립
            </Button>
          </Stack>
          
          <Paper sx={{ height: 200, overflow: 'hidden', mb: 2 }}>
            {renderPageTransition()}
          </Paper>
          
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button
              variant="outlined"
              onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
            >
              이전
            </Button>
            
            <Button
              variant="outlined"
              onClick={() => handlePageChange(Math.min(pages.length - 1, currentPage + 1))}
              disabled={currentPage === pages.length - 1}
            >
              다음
            </Button>
          </Stack>
        </Box>
      </Paper>
      
      {/* 애니메이션 배경 컴포넌트 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          애니메이션 배경 (AnimatedBackground)
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          AnimatedBackground 컴포넌트는 다양한 배경 애니메이션 효과를 제공합니다.
          그라데이션, 파티클, 물결, 별 등 다양한 효과를 지원합니다.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ height: 200, position: 'relative', overflow: 'hidden' }}>
              <AnimatedBackground type="gradient" colors={['#6B3FA0', '#9C27B0', '#3F51B5']} />
              <Box sx={{ p: 3, position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  그라데이션 배경
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Paper sx={{ height: 200, position: 'relative', overflow: 'hidden' }}>
              <AnimatedBackground type="stars" />
              <Box sx={{ p: 3, position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0, 0, 0, 0.8)' }}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  별 배경
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Paper sx={{ height: 200, position: 'relative', overflow: 'hidden' }}>
              <AnimatedBackground type="particles" particleCount={30} colors={['#6B3FA0', '#9C27B0', '#3F51B5']} />
              <Box sx={{ p: 3, position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6">
                  파티클 배경
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Paper sx={{ height: 200, position: 'relative', overflow: 'hidden' }}>
              <AnimatedBackground type="wave" waveColor="#6B3FA0" />
              <Box sx={{ p: 3, position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6">
                  물결 배경
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
