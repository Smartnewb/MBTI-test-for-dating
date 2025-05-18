/**
 * MBTI 질문 데이터 구조 정의
 * 
 * 이 파일은 MBTI 테스트에 사용되는 질문 데이터 구조를 정의합니다.
 * 각 질문은 다음 속성을 가집니다:
 * - id: 질문 고유 ID
 * - question: 질문 텍스트
 * - optionA: A 선택지 텍스트
 * - optionB: B 선택지 텍스트
 * - dimension: MBTI 차원 (E-I, S-N, T-F, J-P)
 * - direction: 점수 계산 방향 (positive, negative)
 */

/**
 * MBTI 차원 정의
 */
export const DIMENSIONS = {
  'E-I': 'Extraversion-Introversion', // 외향-내향
  'S-N': 'Sensing-Intuition',         // 감각-직관
  'T-F': 'Thinking-Feeling',          // 사고-감정
  'J-P': 'Judging-Perceiving'         // 판단-인식
};

/**
 * 질문 방향 정의
 * - positive: 높은 점수가 첫 번째 문자(E, S, T, J)에 해당
 * - negative: 높은 점수가 두 번째 문자(I, N, F, P)에 해당
 */
export const DIRECTIONS = {
  'positive': 'positive',
  'negative': 'negative'
};

/**
 * 질문 데이터 타입 정의
 * @typedef {Object} Question
 * @property {number} id - 질문 고유 ID
 * @property {string} question - 질문 텍스트
 * @property {string} optionA - A 선택지 텍스트
 * @property {string} optionB - B 선택지 텍스트
 * @property {string} dimension - MBTI 차원 (E-I, S-N, T-F, J-P)
 * @property {string} direction - 점수 계산 방향 (positive, negative)
 */

/**
 * 사용자 응답 데이터 타입 정의
 * @typedef {Object} Response
 * @property {number} questionId - 질문 ID
 * @property {string} answer - 사용자 응답 ('A' 또는 'B')
 */

/**
 * 테스트 결과 데이터 타입 정의
 * @typedef {Object} TestResult
 * @property {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @property {Object} scores - 각 차원별 점수
 * @property {number} scores.E - E 점수
 * @property {number} scores.I - I 점수
 * @property {number} scores.S - S 점수
 * @property {number} scores.N - N 점수
 * @property {number} scores.T - T 점수
 * @property {number} scores.F - F 점수
 * @property {number} scores.J - J 점수
 * @property {number} scores.P - P 점수
 */

/**
 * Supabase에서 가져온 질문 데이터를 프론트엔드 형식으로 변환
 * @param {Array} supabaseQuestions - Supabase에서 가져온 질문 데이터
 * @returns {Array<Question>} 프론트엔드 형식의 질문 데이터
 */
export const formatQuestionsFromSupabase = (supabaseQuestions) => {
  return supabaseQuestions.map(q => ({
    id: q.id,
    question: q.question,
    optionA: q.option_a,
    optionB: q.option_b,
    dimension: q.dimension,
    direction: q.direction
  }));
};

/**
 * 사용자 응답을 MBTI 점수로 변환
 * @param {Array<Question>} questions - 질문 데이터
 * @param {Array<Response>} responses - 사용자 응답 데이터
 * @returns {Object} MBTI 점수 (E, I, S, N, T, F, J, P)
 */
export const calculateMbtiScores = (questions, responses) => {
  // 초기 점수 설정
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };
  
  // 각 응답에 대해 점수 계산
  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;
    
    const { dimension, direction } = question;
    const answer = response.answer;
    
    // 차원에 따라 점수 할당
    switch (dimension) {
      case 'E-I':
        if (direction === 'positive') {
          // positive 방향: A 선택 시 E에 점수, B 선택 시 I에 점수
          answer === 'A' ? scores.E++ : scores.I++;
        } else {
          // negative 방향: A 선택 시 I에 점수, B 선택 시 E에 점수
          answer === 'A' ? scores.I++ : scores.E++;
        }
        break;
      case 'S-N':
        if (direction === 'positive') {
          answer === 'A' ? scores.S++ : scores.N++;
        } else {
          answer === 'A' ? scores.N++ : scores.S++;
        }
        break;
      case 'T-F':
        if (direction === 'positive') {
          answer === 'A' ? scores.T++ : scores.F++;
        } else {
          answer === 'A' ? scores.F++ : scores.T++;
        }
        break;
      case 'J-P':
        if (direction === 'positive') {
          answer === 'A' ? scores.J++ : scores.P++;
        } else {
          answer === 'A' ? scores.P++ : scores.J++;
        }
        break;
    }
  });
  
  return scores;
};

/**
 * MBTI 점수를 MBTI 유형으로 변환
 * @param {Object} scores - MBTI 점수
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
 * 테스트 결과 생성
 * @param {Array<Question>} questions - 질문 데이터
 * @param {Array<Response>} responses - 사용자 응답 데이터
 * @returns {TestResult} 테스트 결과
 */
export const generateTestResult = (questions, responses) => {
  const scores = calculateMbtiScores(questions, responses);
  const mbtiType = calculateMbtiType(scores);
  
  return {
    mbtiType,
    scores
  };
};

export default {
  DIMENSIONS,
  DIRECTIONS,
  formatQuestionsFromSupabase,
  calculateMbtiScores,
  calculateMbtiType,
  generateTestResult
};
