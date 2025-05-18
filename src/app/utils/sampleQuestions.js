/**
 * MBTI 테스트 샘플 질문 데이터
 * 
 * 개발 및 테스트 목적으로 사용되는 샘플 질문 데이터입니다.
 * 실제 서비스에서는 Supabase에서 데이터를 가져와 사용합니다.
 */

/**
 * 샘플 MBTI 질문 데이터
 * 각 MBTI 차원(E-I, S-N, T-F, J-P)별로 6개씩, 총 24개의 질문
 */
const sampleQuestions = [
  // E-I 차원 질문 (6개)
  {
    id: 1,
    question: "연인과 함께 있을 때 나는",
    optionA: "다양한 활동과 대화를 통해 에너지를 얻는다",
    optionB: "조용한 시간을 함께 보내며 에너지를 얻는다",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 2,
    question: "데이트 장소로 더 선호하는 곳은",
    optionA: "활기찬 페스티벌이나 사람이 많은 장소",
    optionB: "조용한 카페나 한적한 장소",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 3,
    question: "연인과의 갈등 후 나는",
    optionA: "바로 대화하고 해결하고 싶다",
    optionB: "혼자 생각할 시간이 필요하다",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 4,
    question: "연인의 친구들을 만날 때 나는",
    optionA: "새로운 사람들과 만나는 것이 즐겁다",
    optionB: "부담스럽고 에너지가 소모된다",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 5,
    question: "연애 중 힘든 일이 있을 때 나는",
    optionA: "여러 사람들과 이야기하며 해소한다",
    optionB: "혼자 생각하거나 가까운 한두 명에게만 털어놓는다",
    dimension: "E-I",
    direction: "positive"
  },
  {
    id: 6,
    question: "연인과의 관계에서 나는",
    optionA: "함께하는 활동과 경험을 중요시한다",
    optionB: "깊은 대화와 정서적 연결을 중요시한다",
    dimension: "E-I",
    direction: "negative"
  },
  
  // S-N 차원 질문 (6개)
  {
    id: 7,
    question: "연인과의 대화에서 나는",
    optionA: "구체적인 일상과 현실적인 주제를 선호한다",
    optionB: "미래의 가능성과 추상적인 주제를 선호한다",
    dimension: "S-N",
    direction: "positive"
  },
  {
    id: 8,
    question: "연인에게 선물을 고를 때 나는",
    optionA: "실용적이고 당장 필요한 것을 선택한다",
    optionB: "의미 있고 창의적인 것을 선택한다",
    dimension: "S-N",
    direction: "positive"
  },
  {
    id: 9,
    question: "연인과의 여행에서 나는",
    optionA: "구체적인 일정과 계획을 중요시한다",
    optionB: "새로운 가능성과 즉흥적인 경험을 중요시한다",
    dimension: "S-N",
    direction: "positive"
  },
  {
    id: 10,
    question: "연인과의 미래를 생각할 때 나는",
    optionA: "현실적인 계획과 단계를 고려한다",
    optionB: "관계의 성장 가능성과 비전을 그린다",
    dimension: "S-N",
    direction: "positive"
  },
  {
    id: 11,
    question: "연인의 이야기를 들을 때 나는",
    optionA: "구체적인 사실과 세부사항에 집중한다",
    optionB: "이야기의 의미와 패턴에 집중한다",
    dimension: "S-N",
    direction: "positive"
  },
  {
    id: 12,
    question: "연인과 함께 영화를 볼 때 나는",
    optionA: "현실적이고 사실적인 이야기를 선호한다",
    optionB: "상상력이 풍부하고 창의적인 이야기를 선호한다",
    dimension: "S-N",
    direction: "negative"
  },
  
  // T-F 차원 질문 (6개)
  {
    id: 13,
    question: "연인과의 중요한 결정에서 나는",
    optionA: "논리와 객관적인 사실을 기반으로 판단한다",
    optionB: "감정과 가치관을 기반으로 판단한다",
    dimension: "T-F",
    direction: "positive"
  },
  {
    id: 14,
    question: "연인과의 갈등 상황에서 나는",
    optionA: "논리적으로 문제를 분석하고 해결책을 찾는다",
    optionB: "서로의 감정을 고려하며 조화롭게 해결하려 한다",
    dimension: "T-F",
    direction: "positive"
  },
  {
    id: 15,
    question: "연인이 힘든 일을 겪을 때 나는",
    optionA: "문제 해결을 위한 실질적인 조언을 제공한다",
    optionB: "공감하고 정서적 지지를 보낸다",
    dimension: "T-F",
    direction: "positive"
  },
  {
    id: 16,
    question: "연인의 의견이 나와 다를 때 나는",
    optionA: "객관적인 사실을 바탕으로 논리적으로 접근한다",
    optionB: "서로의 가치관과 감정을 고려하여 접근한다",
    dimension: "T-F",
    direction: "positive"
  },
  {
    id: 17,
    question: "연인에게 나의 마음을 표현할 때 나는",
    optionA: "직접적이고 명확하게 표현한다",
    optionB: "섬세하고 따뜻한 방식으로 표현한다",
    dimension: "T-F",
    direction: "positive"
  },
  {
    id: 18,
    question: "연인이 나에게 조언을 구할 때 나는",
    optionA: "객관적이고 솔직한 의견을 제공한다",
    optionB: "상대방의 감정을 고려한 조언을 제공한다",
    dimension: "T-F",
    direction: "negative"
  },
  
  // J-P 차원 질문 (6개)
  {
    id: 19,
    question: "연애할 때 데이트 계획은",
    optionA: "미리 계획을 세우고 준비하는 게 좋다",
    optionB: "즉흥적으로 결정해도 괜찮다",
    dimension: "J-P",
    direction: "positive"
  },
  {
    id: 20,
    question: "연인과의 약속에 나는",
    optionA: "정확한 시간과 장소를 미리 정해두는 것이 중요하다",
    optionB: "상황에 따라 유연하게 변경할 수 있는 것이 좋다",
    dimension: "J-P",
    direction: "positive"
  },
  {
    id: 21,
    question: "연인과의 여행에서 나는",
    optionA: "일정과 방문할 장소를 미리 계획한다",
    optionB: "그때그때 끌리는 곳을 자유롭게 탐험한다",
    dimension: "J-P",
    direction: "positive"
  },
  {
    id: 22,
    question: "연인과 함께 결정을 내릴 때 나는",
    optionA: "빠르게 결정하고 실행에 옮기는 것을 선호한다",
    optionB: "더 많은 정보와 가능성을 탐색하는 것을 선호한다",
    dimension: "J-P",
    direction: "positive"
  },
  {
    id: 23,
    question: "연인과의 일상에서 나는",
    optionA: "규칙적이고 체계적인 생활을 선호한다",
    optionB: "자유롭고 융통성 있는 생활을 선호한다",
    dimension: "J-P",
    direction: "positive"
  },
  {
    id: 24,
    question: "연인과의 미래 계획에 대해 나는",
    optionA: "구체적인 목표와 단계를 설정하는 것이 중요하다",
    optionB: "상황에 따라 유연하게 조정하는 것이 중요하다",
    dimension: "J-P",
    direction: "negative"
  }
];

export default sampleQuestions;
