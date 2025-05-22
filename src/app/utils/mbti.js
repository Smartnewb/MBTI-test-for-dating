/**
 * MBTI 관련 유틸리티 함수
 */

/**
 * MBTI 유형 목록
 */
export const MBTI_TYPES = [
  'ISTJ',
  'ISFJ',
  'INFJ',
  'INTJ',
  'ISTP',
  'ISFP',
  'INFP',
  'INTP',
  'ESTP',
  'ESFP',
  'ENFP',
  'ENTP',
  'ESTJ',
  'ESFJ',
  'ENFJ',
  'ENTJ',
];

/**
 * MBTI 축 정의
 */
export const MBTI_DIMENSIONS = {
  E_I: { name: '에너지 방향', options: ['E', 'I'] },
  S_N: { name: '인식 기능', options: ['S', 'N'] },
  T_F: { name: '판단 기능', options: ['T', 'F'] },
  J_P: { name: '생활 양식', options: ['J', 'P'] },
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
  P: '인식형(Perceiving): 유연하고 적응적인 생활 선호',
};

/**
 * MBTI 유형 설명
 */
export const MBTI_DESCRIPTIONS = {
  // 오류 상태를 위한 특별 유형
  XXXX: {
    name: '분석 중',
    description: '테스트 결과를 분석하는 중입니다. 일시적인 오류가 발생했을 수 있습니다.',
    strengths: ['다시 시도하기', '인내심 갖기', '새로운 시작', '열린 마음'],
    weaknesses: ['기술적 문제', '일시적 오류', '연결 문제', '데이터 손실'],
    datingStyle: '테스트를 다시 시도하여 정확한 연애 스타일을 확인해보세요.',
    color: '#6B3FA0', // 기본 보라색 사용
  },
  INTJ: {
    name: '전략가',
    description: '독립적이고 분석적인 당신은 논리와 전략적 사고를 중요시합니다.',
    strengths: ['지적 호기심', '독립성', '목표 지향적', '신뢰성'],
    weaknesses: ['감정 표현 어려움', '완벽주의', '비판적 성향', '고집이 강함'],
    datingStyle: '장기적인 계획과 지적 교류를 중시하며, 파트너의 독립성을 존중합니다.',
  },
  INTP: {
    name: '논리술사',
    description: '호기심 많고 창의적인 당신은 지적 도전과 논리적 분석을 즐깁니다.',
    strengths: ['창의적 사고', '적응력', '지적 호기심', '독창성'],
    weaknesses: ['감정 표현 부족', '우유부단함', '현실 무시', '사회적 고립'],
    datingStyle: '지적 대화와 개인 공간을 중시하며, 파트너와의 깊은 사고 교류를 추구합니다.',
  },
  ENTJ: {
    name: '통솔자',
    description: '자신감 있고 결단력 있는 당신은 리더십과 효율성을 중요시합니다.',
    strengths: ['리더십', '결단력', '효율성', '목표 지향적'],
    weaknesses: ['지나친 통제', '감정 무시', '참을성 부족', '완벽주의'],
    datingStyle: '목표 지향적이고 효율적인 관계를 추구하며, 파트너의 성장을 지원합니다.',
  },
  ENTP: {
    name: '변론가',
    description: '창의적이고 논쟁을 즐기는 당신은 새로운 아이디어와 가능성을 탐색합니다.',
    strengths: ['창의성', '적응력', '유머 감각', '논리적 사고'],
    weaknesses: ['집중력 부족', '논쟁적', '규칙 무시', '감정 둔감'],
    datingStyle: '지적 자극과 다양한 경험을 추구하며, 파트너와의 활발한 대화를 즐깁니다.',
  },
  INFJ: {
    name: '옹호자',
    description: '이상주의적이고 통찰력 있는 당신은 깊은 연결과 의미를 추구합니다.',
    strengths: ['공감 능력', '직관력', '헌신적', '창의적'],
    weaknesses: ['완벽주의', '지나친 이상주의', '갈등 회피', '감정 과부하'],
    datingStyle: '깊고 의미 있는 관계를 추구하며, 파트너와의 정서적, 영적 연결을 중요시합니다.',
  },
  INFP: {
    name: '중재자',
    description: '이상주의적이고 감성적인 당신은 깊은 감정과 진정성을 중요시합니다.',
    strengths: ['공감 능력', '진실된 소통', '창의적 표현', '깊은 유대감'],
    weaknesses: ['이상적 기대', '현실과 괴리', '갈등 회피', '감정 기복'],
    datingStyle: '깊은 정서적 연결과 의미 있는 대화를 통해 파트너와 특별한 유대감을 형성합니다.',
  },
  ENFJ: {
    name: '선도자',
    description: '카리스마 있고 영감을 주는 당신은 타인의 성장과 조화를 중요시합니다.',
    strengths: ['공감 능력', '사교성', '영감 제공', '헌신적'],
    weaknesses: ['과도한 자기희생', '인정 욕구', '비판에 민감', '지나친 이상주의'],
    datingStyle: '파트너의 성장을 지원하고 조화로운 관계를 위해 적극적으로 소통합니다.',
  },
  ENFP: {
    name: '활동가',
    description: '열정적이고 창의적인 당신은 가능성과 새로운 경험을 추구합니다.',
    strengths: ['열정', '창의성', '공감 능력', '적응력'],
    weaknesses: ['집중력 부족', '우유부단함', '현실 무시', '감정 기복'],
    datingStyle: '자유롭고 진정성 있는 관계를 추구하며, 파트너와 함께 새로운 경험을 즐깁니다.',
  },
  ISTJ: {
    name: '현실주의자',
    description: '책임감 있고 체계적인 당신은 신뢰성과 안정성을 중요시합니다.',
    strengths: ['신뢰성', '책임감', '체계적', '실용적'],
    weaknesses: ['변화에 저항', '감정 표현 부족', '융통성 부족', '비판적'],
    datingStyle: '안정적이고 신뢰할 수 있는 관계를 추구하며, 책임감 있게 파트너를 대합니다.',
  },
  ISFJ: {
    name: '수호자',
    description: '따뜻하고 헌신적인 당신은 타인의 필요와 안정을 중요시합니다.',
    strengths: ['헌신적', '세심함', '신뢰성', '실용적'],
    weaknesses: ['자기주장 부족', '변화에 저항', '비판에 민감', '과도한 자기희생'],
    datingStyle: '안정적이고 조화로운 관계를 추구하며, 파트너의 필요에 세심하게 반응합니다.',
  },
  ESTJ: {
    name: '경영자',
    description: '체계적이고 실용적인 당신은 질서와 효율성을 중요시합니다.',
    strengths: ['조직력', '책임감', '결단력', '신뢰성'],
    weaknesses: ['융통성 부족', '감정 둔감', '지나친 통제', '비판적'],
    datingStyle: '명확한 역할과 책임이 있는 안정적인 관계를 추구하며, 파트너에게 헌신합니다.',
  },
  ESFJ: {
    name: '집정관',
    description: '사교적이고 배려심 깊은 당신은 조화와 협력을 중요시합니다.',
    strengths: ['사교성', '배려심', '조직력', '협력적'],
    weaknesses: ['비판에 민감', '인정 욕구', '갈등 회피', '지나친 자기희생'],
    datingStyle: '조화롭고 안정적인 관계를 추구하며, 파트너의 필요를 적극적으로 충족시킵니다.',
  },
  ISTP: {
    name: '장인',
    description: '독립적이고 적응력 있는 당신은 실용성과 효율성을 중요시합니다.',
    strengths: ['적응력', '문제 해결 능력', '독립성', '실용적'],
    weaknesses: ['감정 표현 부족', '약속에 무관심', '규칙 무시', '충동적'],
    datingStyle: '자유롭고 독립적인 관계를 추구하며, 파트너에게 공간과 자율성을 제공합니다.',
  },
  ISFP: {
    name: '모험가',
    description: '감성적이고 예술적인 당신은 진정성과 자유를 중요시합니다.',
    strengths: ['감성적 표현', '충실함', '적응력', '조화로움'],
    weaknesses: ['갈등 회피', '계획성 부족', '자기주장 부족', '감정 기복'],
    datingStyle: '진정성 있고 자유로운 관계를 추구하며, 파트너와 감성적인 교류를 즐깁니다.',
  },
  ESTP: {
    name: '사업가',
    description: '활동적이고 현실적인 당신은 즉각적인 경험과 효율성을 중요시합니다.',
    strengths: ['적응력', '실용적', '활동적', '문제 해결 능력'],
    weaknesses: ['장기 계획 부족', '감정 둔감', '인내심 부족', '위험 감수'],
    datingStyle: '활동적이고 자유로운 관계를 추구하며, 파트너와 함께 새로운 경험을 즐깁니다.',
  },
  ESFP: {
    name: '연예인',
    description: '사교적이고 열정적인 당신은 즐거움과 경험을 중요시합니다.',
    strengths: ['사교성', '열정', '적응력', '낙관적'],
    weaknesses: ['장기 계획 부족', '집중력 부족', '갈등 회피', '감정 기복'],
    datingStyle: '즐겁고 활기찬 관계를 추구하며, 파트너와 함께 현재의 순간을 즐깁니다.',
  },
};

/**
 * 응답 결과를 기반으로 MBTI 유형 계산
 * @param {Object} scores - 각 축별 점수 (예: { E: 3, I: 3, S: 2, N: 4, T: 5, F: 1, J: 4, P: 2 })
 * @returns {string} MBTI 유형 (예: 'ENFJ')
 */
export const calculateMbtiType = scores => {
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
 * MBTI 유형별 궁합 정보
 * 각 MBTI 유형에 대한 이상형(ideal)과 최악의 궁합(worst) 목록을 포함합니다.
 */
export const MBTI_COMPATIBILITY = {
  INFP: {
    ideal: ['ENFJ', 'ENTJ'],
    worst: ['ESTJ', 'ESFJ'],
  },
  ENFP: {
    ideal: ['INFJ', 'INTJ'],
    worst: ['ISTJ', 'ISFJ'],
  },
  INFJ: {
    ideal: ['ENFP', 'ENTP'],
    worst: ['ESTP', 'ESFP'],
  },
  ENFJ: {
    ideal: ['INFP', 'ISFP'],
    worst: ['ISTP', 'INTP'],
  },
  INTP: {
    ideal: ['ENTJ', 'ESTJ'],
    worst: ['ESFJ', 'ENFJ'],
  },
  ENTP: {
    ideal: ['INFJ', 'INTJ'],
    worst: ['ISFJ', 'ISTJ'],
  },
  INTJ: {
    ideal: ['ENFP', 'ENTP'],
    worst: ['ESFP', 'ESTP'],
  },
  ENTJ: {
    ideal: ['INFP', 'INTP'],
    worst: ['ISFP', 'ISTP'],
  },
  ISFP: {
    ideal: ['ENFJ', 'ESFJ'],
    worst: ['ENTJ', 'ESTJ'],
  },
  ESFP: {
    ideal: ['ISFJ', 'ISTJ'],
    worst: ['INTJ', 'INFJ'],
  },
  ISTP: {
    ideal: ['ESFJ', 'ESTJ'],
    worst: ['ENFJ', 'ENTJ'],
  },
  ESTP: {
    ideal: ['ISFJ', 'ISTJ'],
    worst: ['INFJ', 'INTJ'],
  },
  ISFJ: {
    ideal: ['ESFP', 'ESTP'],
    worst: ['ENTP', 'ENFP'],
  },
  ESFJ: {
    ideal: ['ISFP', 'ISTP'],
    worst: ['INTP', 'INFP'],
  },
  ISTJ: {
    ideal: ['ESFP', 'ESTP'],
    worst: ['ENFP', 'ENTP'],
  },
  ESTJ: {
    ideal: ['ISTP', 'INTP'],
    worst: ['INFP', 'ISFP'],
  },
};

/**
 * MBTI 유형에 따른 이상형 추천
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {string} 추천 이상형 MBTI 유형
 */
export const getIdealType = mbtiType => {
  // MBTI_COMPATIBILITY에서 이상형 가져오기
  const compatibility = MBTI_COMPATIBILITY[mbtiType];
  if (compatibility && compatibility.ideal && compatibility.ideal.length > 0) {
    // 이상형 중 랜덤으로 하나 선택
    const randomIndex = Math.floor(Math.random() * compatibility.ideal.length);
    return compatibility.ideal[randomIndex];
  }

  // 기본값으로 ENFP 반환
  return 'ENFP';
};

/**
 * MBTI 유형에 따른 궁합이 좋지 않은 유형
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {string} 궁합이 좋지 않은 MBTI 유형
 */
export const getWorstMatch = mbtiType => {
  // MBTI_COMPATIBILITY에서 최악의 궁합 가져오기
  const compatibility = MBTI_COMPATIBILITY[mbtiType];
  if (compatibility && compatibility.worst && compatibility.worst.length > 0) {
    // 최악의 궁합 중 랜덤으로 하나 선택
    const randomIndex = Math.floor(Math.random() * compatibility.worst.length);
    return compatibility.worst[randomIndex];
  }

  // 기본값으로 ESTJ 반환
  return 'ESTJ';
};

/**
 * MBTI 유형에 대한 설명 가져오기
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {Object} MBTI 유형 설명
 */
export const getMbtiDescription = mbtiType => {
  return MBTI_DESCRIPTIONS[mbtiType] || null;
};
