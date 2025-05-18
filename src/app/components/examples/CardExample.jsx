'use client';

import { useState } from 'react';
import { Box, Grid, Typography, Paper, Stack, Button } from '@mui/material';
import TarotCard from '../TarotCard';
import QuestionCard from '../QuestionCard';
import ResultCard from '../ResultCard';
import { FlipCard } from '../mystical';
import MysticalText from '../mystical/MysticalText';

/**
 * 카드 예제 컴포넌트
 * 
 * 다양한 카드 컴포넌트를 보여주는 예제 컴포넌트입니다.
 */
export default function CardExample() {
  const [flipped, setFlipped] = useState(false);
  
  // 예제 MBTI 결과 데이터
  const exampleResult = {
    mbtiType: 'ENFP',
    mbtiName: '열정적인 활동가',
    description: 'ENFP는 열정적이고 창의적인 성격으로, 새로운 가능성과 아이디어를 발견하는 것을 좋아합니다. 호기심이 많고 에너지가 넘치며, 다른 사람들과의 관계를 중요시합니다.',
    strengths: ['창의적', '열정적', '공감능력', '적응력', '소통능력'],
    weaknesses: ['산만함', '실용성 부족', '과도한 감정', '우유부단함'],
    datingStyle: 'ENFP는 연애에서 열정적이고 낭만적인 모습을 보입니다. 파트너에게 깊은 관심을 보이며, 새로운 경험을 함께 나누는 것을 좋아합니다. 자유로운 영혼을 가졌지만, 진정한 연결을 중요시합니다.'
  };
  
  return (
    <Box sx={{ p: 4 }}>
      <MysticalText variant="h4" textVariant="mystical" sx={{ mb: 4 }}>
        신비로운 카드 컴포넌트
      </MysticalText>
      
      <Grid container spacing={4}>
        {/* 기본 타로 카드 변형 */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              타로 카드 변형
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <TarotCard variant="default" title="기본 카드">
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    기본 스타일의 타로 카드입니다.
                  </Typography>
                </TarotCard>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <TarotCard variant="primary" title="프라이머리 카드">
                  <Typography variant="body1" sx={{ textAlign: 'center', color: 'white' }}>
                    프라이머리 스타일의 타로 카드입니다.
                  </Typography>
                </TarotCard>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <TarotCard variant="secondary" title="세컨더리 카드">
                  <Typography variant="body1" sx={{ textAlign: 'center', color: 'white' }}>
                    세컨더리 스타일의 타로 카드입니다.
                  </Typography>
                </TarotCard>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* 특수 타로 카드 변형 */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              특수 타로 카드 변형
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TarotCard variant="mystical" title="신비로운 카드">
                  <Typography variant="body1" sx={{ textAlign: 'center', color: 'white' }}>
                    신비로운 스타일의 타로 카드입니다.
                    별 반짝임 효과와 특별한 테두리 장식이 적용되었습니다.
                  </Typography>
                </TarotCard>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TarotCard variant="result" title="결과 카드">
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    결과 표시용 타로 카드입니다.
                    골드 색상의 테두리와 특별한 장식이 적용되었습니다.
                  </Typography>
                </TarotCard>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* 카드 뒤집기 효과 */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              카드 뒤집기 효과
            </Typography>
            
            <Box sx={{ maxWidth: 350, mx: 'auto' }}>
              <FlipCard
                front={
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>카드 앞면</Typography>
                    <Typography variant="body1">
                      이 카드를 클릭하면 뒤집힙니다.
                    </Typography>
                  </Box>
                }
                back={
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>카드 뒷면</Typography>
                    <Typography variant="body1">
                      다시 클릭하면 앞면으로 돌아갑니다.
                    </Typography>
                  </Box>
                }
                frontVariant="mystical"
                backVariant="result"
                frontTitle="앞면 제목"
                backTitle="뒷면 제목"
                flipped={flipped}
                onClick={() => setFlipped(!flipped)}
              />
              
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button 
                  variant="outlined" 
                  onClick={() => setFlipped(!flipped)}
                >
                  카드 뒤집기
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
        
        {/* 질문 카드 예제 */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              질문 카드 예제
            </Typography>
            
            <QuestionCard
              questionNumber={1}
              totalQuestions={12}
              questionText="당신은 새로운 사람들을 만날 때 어떤 편인가요?"
              optionA="적극적으로 먼저 다가가 대화를 시작한다"
              optionB="상대방이 먼저 다가오길 기다리는 편이다"
              isFirst={true}
              sx={{ maxWidth: '100%' }}
            />
          </Paper>
        </Grid>
        
        {/* 결과 카드 예제 */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              결과 카드 예제
            </Typography>
            
            <ResultCard
              mbtiType={exampleResult.mbtiType}
              mbtiName={exampleResult.mbtiName}
              description={exampleResult.description}
              strengths={exampleResult.strengths}
              weaknesses={exampleResult.weaknesses}
              datingStyle={exampleResult.datingStyle}
              onRestart={() => alert('테스트 다시 시작')}
              onShare={() => alert('결과 공유하기')}
              sx={{ maxWidth: '100%' }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
