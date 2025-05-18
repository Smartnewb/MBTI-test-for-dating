'use client';

import { Box, Typography, Container, Paper, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AnimatedElement, AnimatedGroup } from '../components/animations';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import WidgetsIcon from '@mui/icons-material/Widgets';
import GridViewIcon from '@mui/icons-material/GridView';
import AnimationIcon from '@mui/icons-material/Animation';

/**
 * 디자인 시스템 메인 페이지
 * 
 * 디자인 시스템의 메인 페이지입니다.
 */
export default function DesignSystemPage() {
  const router = useRouter();
  
  // 디자인 시스템 섹션 데이터
  const sections = [
    {
      title: '색상 시스템',
      description: '달빛 연애 연구소의 색상 팔레트와 사용 가이드라인을 확인하세요.',
      icon: <ColorLensIcon fontSize="large" />,
      path: '/design-system/colors',
      color: 'primary.main',
    },
    {
      title: '타이포그래피 시스템',
      description: '폰트, 크기, 두께 등 텍스트 스타일 가이드라인을 확인하세요.',
      icon: <TextFormatIcon fontSize="large" />,
      path: '/design-system/typography',
      color: 'secondary.main',
    },
    {
      title: '컴포넌트 시스템',
      description: '버튼, 카드, 입력 필드 등 UI 컴포넌트를 확인하세요.',
      icon: <WidgetsIcon fontSize="large" />,
      path: '/design-system/components',
      color: 'primary.dark',
    },
    {
      title: '레이아웃 시스템',
      description: '그리드, 컨테이너, 섹션 등 레이아웃 컴포넌트를 확인하세요.',
      icon: <GridViewIcon fontSize="large" />,
      path: '/design-system/layout',
      color: 'secondary.dark',
    },
    {
      title: '애니메이션 시스템',
      description: '전환, 강조, 피드백 등 애니메이션 효과를 확인하세요.',
      icon: <AnimationIcon fontSize="large" />,
      path: '/design-system/animations',
      color: 'primary.light',
    },
  ];
  
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <AnimatedElement animation="fadeIn" duration="normal">
        <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
          디자인 시스템
        </Typography>
        
        <Typography variant="subtitle1" sx={{ mb: 6 }}>
          달빛 연애 연구소의 디자인 시스템은 신비로운 타로 카드 컨셉을 기반으로 합니다.
          일관된 사용자 경험을 제공하기 위한 디자인 가이드라인과 컴포넌트를 확인하세요.
        </Typography>
      </AnimatedElement>
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          mb: 6, 
          background: 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundImage: 'url("/images/tarot-pattern.png")',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
          opacity: 0.03,
          zIndex: 0,
        }} />
        
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <AnimatedElement animation="slideUp" duration="normal">
            <Typography variant="h4" sx={{ mb: 3 }}>
              디자인 원칙
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4 }}>
              달빛 연애 연구소의 디자인 시스템은 다음과 같은 원칙을 기반으로 합니다:
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    신비로움
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    어두운 배경, 보라색과 골드 색상, 그라데이션 효과 등을 통해 신비로운 분위기를 연출합니다.
                    타로 카드의 신비로운 이미지를 디자인 요소에 반영합니다.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    직관적인 사용성
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    사용자가 쉽게 이해하고 사용할 수 있는 UI를 제공합니다.
                    명확한 시각적 계층 구조와 일관된 상호작용 패턴을 유지합니다.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    감성적 경험
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    부드러운 애니메이션, 세련된 타이포그래피, 감성적인 색상을 통해 사용자에게 특별한 경험을 제공합니다.
                    MBTI 테스트의 자기 발견 여정을 디자인으로 표현합니다.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </AnimatedElement>
        </Box>
      </Paper>
      
      <AnimatedGroup
        animation="slideUp"
        duration="normal"
        easing="mystical"
        staggerDelay={100}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          디자인 시스템 가이드
        </Typography>
        
        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 8,
                  },
                }}
              >
                <CardActionArea 
                  sx={{ height: '100%' }}
                  onClick={() => router.push(section.path)}
                >
                  <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: `${section.color}20`,
                        color: section.color,
                        mb: 2,
                      }}
                    >
                      {section.icon}
                    </Box>
                    
                    <Typography variant="h5" component="h2" gutterBottom>
                      {section.title}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                      {section.description}
                    </Typography>
                    
                    <Typography variant="button" color="primary">
                      자세히 보기
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </AnimatedGroup>
    </Container>
  );
}
