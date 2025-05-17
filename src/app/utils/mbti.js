/**
 * MBTI 관련 유틸리티 함수
 */

/**
 * MBTI 유형 목록
 */
export const MBTI_TYPES = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

/**
 * MBTI 축 정의
 */
export const MBTI_DIMENSIONS = {
  E_I: { name: '에너지 방향', options: ['E', 'I'] },
  S_N: { name: '인식 기능', options: ['S', 'N'] },
  T_F: { name: '판단 기능', options: ['T', 'F'] },
  J_P: { name: '생활 양식', options: ['J', 'P'] }
};

/**
 * MBTI 축별 설명
 */
export const DIMENSION_DESCRIPTIONS = {
  E: '외향형(Extraversion): 외부 세계와 사람들에게서 에너지를 얻음',
  I: '내향형(Introversion): 내면의 세계와 생각에서 에너지를 얻음',
  S: '감각형(Sensing): 구체적인 정보와 사실에 집중',
  N: '직관형(iNtuition): 패턴과 가능성에 집중',
  T: '사고형(Thinking): 논리와 객관성을 중시',
  F: '감정형(Feeling): 가치와 조화를 중시',
  J: '판단형(Judging): 계획적이고 체계적인 생활 선호',
  P: '인식형(Perceiving): 유연하고 적응적인 생활 선호'
};

/**
 * 응답 결과를 기반으로 MBTI 유형 계산
 * @param {Object} scores - 각 축별 점수 (예: { E: 3, I: 3, S: 2, N: 4, T: 5, F: 1, J: 4, P: 2 })
 * @returns {string} MBTI 유형 (예: 'ENFJ')
 */
export const calculateMbtiType = (scores) => {
  const result = [];
  
  // E vs I
  result.push(scores.E >= scores.I ? 'E' : 'I');
  
  // S vs N
  result.push(scores.S >= scores.N ? 'S' : 'N');
  
  // T vs F
  result.push(scores.T >= scores.F ? 'T' : 'F');
  
  // J vs P
  result.push(scores.J >= scores.P ? 'J' : 'P');
  
  return result.join('');
};

/**
 * MBTI 유형에 따른 이상형 추천
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {string} 추천 이상형 MBTI 유형
 */
export const getIdealType = (mbtiType) => {
  const idealTypeMap = {
    'INFP': 'ENFJ',
    'ENFP': 'INFJ',
    'ISTJ': 'ESFP',
    'ISFJ': 'ENFP',
    'INFJ': 'ENFP',
    'INTJ': 'ENFP',
    'ISTP': 'ENFJ',
    'ISFP': 'ESFJ',
    'INTP': 'ENTJ',
    'ESTP': 'INFJ',
    'ESFP': 'ISFJ',
    'ENTP': 'INFP',
    'ENTJ': 'INFP',
    'ESFJ': 'ISFP',
    'ENFJ': 'INFP',
    'ESTJ': 'INFP'
  };
  
  return idealTypeMap[mbtiType] || 'ENFP'; // 기본값으로 ENFP 반환
};

/**
 * MBTI 유형에 따른 궁합이 좋지 않은 유형
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {string} 궁합이 좋지 않은 MBTI 유형
 */
export const getWorstMatch = (mbtiType) => {
  const worstMatchMap = {
    'INFP': 'ESTJ',
    'ENFP': 'ISTJ',
    'INFJ': 'ESTP',
    'ENFJ': 'ISTP',
    'INTP': 'ESFJ',
    'ENTP': 'ISFJ',
    'INTJ': 'ESFP',
    'ENTJ': 'ISFP',
    'ISFP': 'ENTJ',
    'ESFP': 'INTJ',
    'ISTP': 'ENFJ',
    'ESTP': 'INFJ',
    'ISFJ': 'ENTP',
    'ESFJ': 'INTP',
    'ISTJ': 'ENFP',
    'ESTJ': 'INFP'
  };
  
  return worstMatchMap[mbtiType] || 'ESTJ'; // 기본값으로 ESTJ 반환
};
