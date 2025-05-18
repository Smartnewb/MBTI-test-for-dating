'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { PageLayout, Section } from '../../components/layout';
import { testMbtiCalculation, testAllMbtiTypes } from '../../utils/testMbtiCalculation';

/**
 * MBTI 계산 디버그 페이지
 *
 * MBTI 계산 알고리즘을 테스트하기 위한 페이지입니다.
 */
export default function DebugPage() {
  const [results, setResults] = useState(null);
  const [allResults, setAllResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // 단일 MBTI 유형 테스트
  const handleTestSingle = (type) => {
    setLoading(true);
    
    // 비동기 처리를 위한 setTimeout 사용
    setTimeout(() => {
      try {
        const result = testMbtiCalculation(type);
        setResults({
          expectedType: type,
          calculatedType: result.mbtiType,
          match: result.mbtiType === type,
          scores: result.scores
        });
      } catch (error) {
        console.error('테스트 실행 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    }, 100);
  };

  // 모든 MBTI 유형 테스트
  const handleTestAll = () => {
    setLoading(true);
    
    // 비동기 처리를 위한 setTimeout 사용
    setTimeout(() => {
      try {
        const types = [
          'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
          'ISTP', 'ISFP', 'INFP', 'INTP',
          'ESTP', 'ESFP', 'ENFP', 'ENTP',
          'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
        ];
        
        const testResults = {};
        let matchCount = 0;
        
        types.forEach(type => {
          const result = testMbtiCalculation(type);
          testResults[type] = {
            calculated: result.mbtiType,
            match: result.mbtiType === type
          };
          
          if (result.mbtiType === type) {
            matchCount++;
          }
        });
        
        setAllResults({
          results: testResults,
          matchCount,
          accuracy: Math.round((matchCount / types.length) * 100)
        });
      } catch (error) {
        console.error('모든 유형 테스트 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    }, 100);
  };

  return (
    <PageLayout>
      <Section>
        <Typography variant="h4" sx={{ mb: 4 }}>
          MBTI 계산 디버그 페이지
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            단일 MBTI 유형 테스트
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {['ENFP', 'INTJ', 'ISFJ', 'ESTP'].map(type => (
              <Button
                key={type}
                variant="outlined"
                onClick={() => handleTestSingle(type)}
                disabled={loading}
              >
                {type} 테스트
              </Button>
            ))}
          </Box>
          
          {results && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">
                예상 MBTI: {results.expectedType}
              </Typography>
              <Typography variant="subtitle1">
                계산된 MBTI: {results.calculatedType}
              </Typography>
              <Typography variant="subtitle1">
                일치 여부: {results.match ? '✅ 일치' : '❌ 불일치'}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                점수:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary={`E: ${results.scores.E.toFixed(2)} vs I: ${results.scores.I.toFixed(2)}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`S: ${results.scores.S.toFixed(2)} vs N: ${results.scores.N.toFixed(2)}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`T: ${results.scores.T.toFixed(2)} vs F: ${results.scores.F.toFixed(2)}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`J: ${results.scores.J.toFixed(2)} vs P: ${results.scores.P.toFixed(2)}`} />
                </ListItem>
              </List>
            </Box>
          )}
        </Paper>
        
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            모든 MBTI 유형 테스트
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            onClick={handleTestAll}
            disabled={loading}
          >
            모든 유형 테스트 실행
          </Button>
          
          {allResults && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                정확도: {allResults.matchCount}/16 ({allResults.accuracy}%)
              </Typography>
              
              <Divider sx={{ mb: 2 }} />
              
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                상세 결과:
              </Typography>
              
              <List dense>
                {Object.entries(allResults.results).map(([type, result]) => (
                  <ListItem key={type}>
                    <ListItemText
                      primary={`${type} → ${result.calculated} (${result.match ? '✅' : '❌'})`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Paper>
      </Section>
    </PageLayout>
  );
}
