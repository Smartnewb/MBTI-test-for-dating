'use client';

import { useState } from 'react';
import { Box, Typography, Container, Paper, Divider, Button, Grid, Card, CardContent } from '@mui/material';
import { AnimatedElement, AnimatedGroup } from '../../components/animations';
import { animations } from '../../styles/tokens/animations';
import MysticalButton from '../../components/MysticalButton';

/**
 * 애니메이션 시스템 문서 페이지
 * 
 * 디자인 시스템의 애니메이션을 문서화하는 페이지입니다.
 */
export default function AnimationsPage() {
  // 애니메이션 재생 상태
  const [playAnimation, setPlayAnimation] = useState({});
  
  // 애니메이션 재생 토글
  const toggleAnimation = (animation) => {
    setPlayAnimation(prev => ({
      ...prev,
      [animation]: !prev[animation]
    }));
    
    // 애니메이션 재생 후 상태 초기화
    setTimeout(() => {
      setPlayAnimation(prev => ({
        ...prev,
        [animation]: false
      }));
    }, animations.duration.normal * 2);
  };
  
  // 애니메이션 예시 카드
  const AnimationCard = ({ title, animation, description }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          
          <Box sx={{ 
            height: 120, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 2
          }}>
            <AnimatedElement 
              animation={animation} 
              duration="normal" 
              easing="mystical"
              key={playAnimation[animation] ? 'playing' : 'idle'}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  width: 80, 
                  height: 80, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  bgcolor: 'primary.main',
                  color: 'white'
                }}
              >
                {animation}
              </Paper>
            </AnimatedElement>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          
          <Button 
            variant="outlined" 
            size="small" 
            onClick={() => toggleAnimation(animation)}
            fullWidth
          >
            애니메이션 재생
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
        애니메이션 시스템
      </Typography>
      
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        달빛 연애 연구소의 애니메이션 시스템은 신비로운 타로 카드 컨셉을 반영합니다.
        부드럽고 우아한 애니메이션을 통해 사용자 경험을 향상시킵니다.
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      {/* 기본 애니메이션 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          기본 애니메이션
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          기본 애니메이션은 요소의 등장, 전환, 강조 등에 사용됩니다.
          다양한 애니메이션 유형을 제공하여 상황에 맞게 사용할 수 있습니다.
        </Typography>
        
        <Grid container spacing={3}>
          <AnimationCard 
            title="페이드 인" 
            animation="fadeIn" 
            description="요소가 서서히 나타나는 애니메이션입니다. 페이지 로드, 모달 등장 등에 사용됩니다."
          />
          
          <AnimationCard 
            title="위로 슬라이드" 
            animation="slideUp" 
            description="요소가 아래에서 위로 슬라이드하며 나타나는 애니메이션입니다. 카드, 목록 등에 사용됩니다."
          />
          
          <AnimationCard 
            title="아래로 슬라이드" 
            animation="slideDown" 
            description="요소가 위에서 아래로 슬라이드하며 나타나는 애니메이션입니다. 드롭다운, 알림 등에 사용됩니다."
          />
          
          <AnimationCard 
            title="오른쪽으로 슬라이드" 
            animation="slideRight" 
            description="요소가 왼쪽에서 오른쪽으로 슬라이드하며 나타나는 애니메이션입니다. 사이드바, 패널 등에 사용됩니다."
          />
          
          <AnimationCard 
            title="왼쪽으로 슬라이드" 
            animation="slideLeft" 
            description="요소가 오른쪽에서 왼쪽으로 슬라이드하며 나타나는 애니메이션입니다. 사이드바, 패널 등에 사용됩니다."
          />
          
          <AnimationCard 
            title="확대" 
            animation="zoomIn" 
            description="요소가 확대되며 나타나는 애니메이션입니다. 모달, 이미지 등에 사용됩니다."
          />
          
          <AnimationCard 
            title="축소" 
            animation="zoomOut" 
            description="요소가 축소되며 나타나는 애니메이션입니다. 모달, 이미지 등에 사용됩니다."
          />
          
          <AnimationCard 
            title="회전" 
            animation="rotate" 
            description="요소가 회전하며 나타나는 애니메이션입니다. 카드, 아이콘 등에 사용됩니다."
          />
        </Grid>
      </Box>
      
      <Divider sx={{ my: 4 }} />
      
      {/* 특수 애니메이션 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          특수 애니메이션
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          특수 애니메이션은 신비로운 타로 카드 컨셉을 강화하는 데 사용됩니다.
          빛나는 효과, 별 반짝임, 카드 뒤집기 등 독특한 애니메이션을 제공합니다.
        </Typography>
        
        <Paper sx={{ p: 4, mb: 3, position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            zIndex: 0,
            background: 'linear-gradient(135deg, #6B3FA0 0%, #D4AF37 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 5s ease infinite',
            opacity: 0.05,
            '@keyframes gradientShift': animations.keyframes.gradientShift,
          }} />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              빛나는 효과 (Glow)
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Paper 
                elevation={3} 
                sx={{ 
                  width: 100, 
                  height: 100, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  animation: 'glow 2s ease-in-out infinite',
                  '@keyframes glow': animations.keyframes.glow,
                }}
              >
                Glow
              </Paper>
            </Box>
            
            <Typography variant="body2" color="text.secondary">
              빛나는 효과는 중요한 요소를 강조하거나 신비로운 분위기를 연출할 때 사용됩니다.
              버튼, 카드, 아이콘 등에 적용하여 사용자의 주의를 끌 수 있습니다.
            </Typography>
          </Box>
        </Paper>
      </Box>
      
      <Divider sx={{ my: 4 }} />
      
      {/* 애니메이션 그룹 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          애니메이션 그룹
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          애니메이션 그룹은 여러 요소에 순차적으로 애니메이션을 적용할 때 사용됩니다.
          목록, 카드 그리드 등에 적용하여 시각적 흐름을 만들 수 있습니다.
        </Typography>
        
        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            스태거 애니메이션 (Stagger)
          </Typography>
          
          <MysticalButton 
            variant="mystical" 
            onClick={() => setPlayAnimation(prev => ({ ...prev, stagger: !prev.stagger }))}
            sx={{ mb: 3 }}
          >
            애니메이션 재생
          </MysticalButton>
          
          <AnimatedGroup
            key={playAnimation.stagger ? 'playing' : 'idle'}
            animation="slideUp"
            duration="normal"
            easing="mystical"
            staggerDelay={100}
            initialDelay={0}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <Paper 
                key={item}
                elevation={3} 
                sx={{ 
                  p: 2, 
                  mb: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  bgcolor: 'background.paper',
                }}
              >
                <Box 
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  {item}
                </Box>
                <Typography variant="body1">
                  스태거 애니메이션 아이템 {item}
                </Typography>
              </Paper>
            ))}
          </AnimatedGroup>
        </Paper>
      </Box>
    </Container>
  );
}
