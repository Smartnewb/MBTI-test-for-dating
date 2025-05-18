/**
 * MBTI 계산 테스트 스크립트
 * 
 * 이 파일은 MBTI 계산 알고리즘을 테스트하기 위한 스크립트입니다.
 * 콘솔에서 실행하여 결과를 확인할 수 있습니다.
 */

import sampleQuestions from './sampleQuestions';
import { generateTestResult } from './mbtiAnalyzer';

/**
 * 테스트 응답 생성
 * @param {string} type - 생성할 MBTI 유형 (예: 'ENFP')
 * @returns {Array} 테스트 응답 배열
 */
export const generateTestResponses = (type) => {
  // 각 차원별 응답 방향 결정
  const directions = {
    'E': type.includes('E') ? 'A' : 'B',
    'I': type.includes('I') ? 'A' : 'B',
    'S': type.includes('S') ? 'A' : 'B',
    'N': type.includes('N') ? 'A' : 'B',
    'T': type.includes('T') ? 'A' : 'B',
    'F': type.includes('F') ? 'A' : 'B',
    'J': type.includes('J') ? 'A' : 'B',
    'P': type.includes('P') ? 'A' : 'B',
  };

  // 각 질문에 대한 응답 생성
  return sampleQuestions.map(question => {
    let answer;
    
    // 차원에 따라 응답 결정
    if (question.dimension === 'E-I') {
      // E-I 차원
      if (question.direction === 'positive') {
        // 긍정 방향 질문 (A=E, B=I)
        answer = directions['E'] === 'A' ? 'A' : 'B';
      } else {
        // 부정 방향 질문 (A=I, B=E)
        answer = directions['I'] === 'A' ? 'A' : 'B';
      }
    } else if (question.dimension === 'S-N') {
      // S-N 차원
      if (question.direction === 'positive') {
        // 긍정 방향 질문 (A=S, B=N)
        answer = directions['S'] === 'A' ? 'A' : 'B';
      } else {
        // 부정 방향 질문 (A=N, B=S)
        answer = directions['N'] === 'A' ? 'A' : 'B';
      }
    } else if (question.dimension === 'T-F') {
      // T-F 차원
      if (question.direction === 'positive') {
        // 긍정 방향 질문 (A=T, B=F)
        answer = directions['T'] === 'A' ? 'A' : 'B';
      } else {
        // 부정 방향 질문 (A=F, B=T)
        answer = directions['F'] === 'A' ? 'A' : 'B';
      }
    } else if (question.dimension === 'J-P') {
      // J-P 차원
      if (question.direction === 'positive') {
        // 긍정 방향 질문 (A=J, B=P)
        answer = directions['J'] === 'A' ? 'A' : 'B';
      } else {
        // 부정 방향 질문 (A=P, B=J)
        answer = directions['P'] === 'A' ? 'A' : 'B';
      }
    }

    return {
      questionId: question.id,
      answer
    };
  });
};

/**
 * MBTI 계산 테스트
 * @param {string} expectedType - 예상되는 MBTI 유형
 */
export const testMbtiCalculation = (expectedType) => {
  // 테스트 응답 생성
  const responses = generateTestResponses(expectedType);
  
  // 결과 계산
  const result = generateTestResult(sampleQuestions, responses);
  
  // 결과 출력
  console.log(`예상 MBTI: ${expectedType}`);
  console.log(`계산된 MBTI: ${result.mbtiType}`);
  console.log(`일치 여부: ${result.mbtiType === expectedType ? '✅ 일치' : '❌ 불일치'}`);
  console.log('점수:', result.scores);
  
  return result;
};

// 모든 MBTI 유형 테스트
export const testAllMbtiTypes = () => {
  const types = [
    'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
    'ISTP', 'ISFP', 'INFP', 'INTP',
    'ESTP', 'ESFP', 'ENFP', 'ENTP',
    'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
  ];
  
  const results = {};
  
  types.forEach(type => {
    const result = testMbtiCalculation(type);
    results[type] = {
      calculated: result.mbtiType,
      match: result.mbtiType === type
    };
  });
  
  console.log('===== 모든 MBTI 유형 테스트 결과 =====');
  console.table(results);
  
  const matchCount = Object.values(results).filter(r => r.match).length;
  console.log(`정확도: ${matchCount}/${types.length} (${Math.round((matchCount/types.length)*100)}%)`);
};

// 기본 테스트 실행
export const runTest = () => {
  console.log('===== MBTI 계산 테스트 =====');
  testMbtiCalculation('ENFP');
  console.log('===========================');
};

export default {
  generateTestResponses,
  testMbtiCalculation,
  testAllMbtiTypes,
  runTest
};
