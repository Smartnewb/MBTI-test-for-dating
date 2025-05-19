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
  'S-N': 'Sensing-Intuition', // 감각-직관
  'T-F': 'Thinking-Feeling', // 사고-감정
  'J-P': 'Judging-Perceiving', // 판단-인식
};

/**
 * 질문 방향 정의
 * - positive: 높은 점수가 첫 번째 문자(E, S, T, J)에 해당
 * - negative: 높은 점수가 두 번째 문자(I, N, F, P)에 해당
 */
export const DIRECTIONS = {
  positive: 'positive',
  negative: 'negative',
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
export const formatQuestionsFromSupabase = supabaseQuestions => {
  // 한국어 질문 매핑 (영어 질문을 한국어로 변환)
  const koreanQuestions = {
    'I enjoy being the center of attention': '나는 관심의 중심이 되는 것을 즐긴다',
    'I prefer one-on-one conversations to group activities':
      '나는 그룹 활동보다 일대일 대화를 선호한다',
    'I feel comfortable in social situations': '나는 사회적 상황에서 편안함을 느낀다',
    'I need quiet time to recharge after social events':
      '나는 사회적 모임 후에 혼자만의 시간이 필요하다',
    'I tend to think out loud': '나는 생각을 소리 내어 말하는 경향이 있다',
    'I focus on details rather than the big picture': '나는 큰 그림보다 세부 사항에 집중한다',
    'I trust facts and concrete information more than intuition':
      '나는 직관보다 사실과 구체적인 정보를 더 신뢰한다',
    'I prefer practical solutions over theoretical ones':
      '나는 이론적인 해결책보다 실용적인 해결책을 선호한다',
    'I often think about future possibilities': '나는 종종 미래의 가능성에 대해 생각한다',
    'I make decisions based on logic rather than emotions':
      '나는 감정보다 논리에 기반하여 결정을 내린다',
    'I value truth over tact': '나는 재치보다 진실을 중요시한다',
    'I prefer to analyze problems rather than discuss feelings':
      '나는 감정을 논의하기보다 문제를 분석하는 것을 선호한다',
    "I am sensitive to others' feelings": '나는 다른 사람들의 감정에 민감하다',
    'I consider how my decisions will affect others':
      '나는 내 결정이 다른 사람들에게 어떤 영향을 미칠지 고려한다',
    'I prefer to have a detailed plan rather than be spontaneous':
      '나는 즉흥적이기보다 상세한 계획을 갖는 것을 선호한다',
    'I like to have things decided and settled': '나는 일이 결정되고 정리되는 것을 좋아한다',
    'I find it stressful when things are disorganized':
      '나는 일이 정리되지 않을 때 스트레스를 느낀다',
    'I prefer to keep my options open': '나는 선택의 여지를 열어두는 것을 선호한다',
    'I am flexible and adapt easily to new situations': '나는 유연하고 새로운 상황에 쉽게 적응한다',
    'I enjoy thinking about abstract concepts': '나는 추상적인 개념에 대해 생각하는 것을 즐긴다',
  };

  return supabaseQuestions.map(q => ({
    id: q.id,
    // 한국어 질문이 있으면 사용하고, 없으면 원래 영어 질문 사용
    question: koreanQuestions[q.question] || q.question,
    optionA: q.option_a,
    optionB: q.option_b,
    dimension: q.dimension,
    direction: q.direction,
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
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
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
    scores,
  };
};

const questionsUtils = {
  DIMENSIONS,
  DIRECTIONS,
  formatQuestionsFromSupabase,
  calculateMbtiScores,
  calculateMbtiType,
  generateTestResult,
};

export default questionsUtils;
