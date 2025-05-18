-- Additional seed data for enhanced schema

-- Update MBTI types with additional fields
UPDATE public.mbti_types
SET 
  tarot_card = CASE type_code
    WHEN 'INFP' THEN '달 (The Moon)'
    WHEN 'INFJ' THEN '은둔자 (The Hermit)'
    WHEN 'INTP' THEN '마법사 (The Magician)'
    WHEN 'INTJ' THEN '심판 (Judgement)'
    WHEN 'ISFP' THEN '별 (The Star)'
    WHEN 'ISFJ' THEN '여사제 (The High Priestess)'
    WHEN 'ISTP' THEN '전차 (The Chariot)'
    WHEN 'ISTJ' THEN '황제 (The Emperor)'
    WHEN 'ENFP' THEN '태양 (The Sun)'
    WHEN 'ENFJ' THEN '연인들 (The Lovers)'
    WHEN 'ENTP' THEN '바보 (The Fool)'
    WHEN 'ENTJ' THEN '세계 (The World)'
    WHEN 'ESFP' THEN '힘 (Strength)'
    WHEN 'ESFJ' THEN '황후 (The Empress)'
    WHEN 'ESTP' THEN '악마 (The Devil)'
    WHEN 'ESTJ' THEN '정의 (Justice)'
  END,
  tarot_description = CASE type_code
    WHEN 'INFP' THEN '달은 직관과 꿈의 세계를 상징합니다. INFP처럼 깊은 내면의 세계와 창의적인 상상력을 가진 사람들을 나타냅니다.'
    WHEN 'INFJ' THEN '은둔자는 내면의 지혜와 고독한 성찰을 상징합니다. INFJ처럼 깊은 통찰력과 자기 성찰을 가진 사람들을 나타냅니다.'
    WHEN 'INTP' THEN '마법사는 지식과 창의적인 변화를 상징합니다. INTP처럼 논리적이고 혁신적인 사고를 가진 사람들을 나타냅니다.'
    WHEN 'INTJ' THEN '심판은 명확한 결정과 전략적 사고를 상징합니다. INTJ처럼 미래를 계획하고 체계적으로 접근하는 사람들을 나타냅니다.'
    WHEN 'ISFP' THEN '별은 희망과 영감을 상징합니다. ISFP처럼 예술적 감각과 자유로운 영혼을 가진 사람들을 나타냅니다.'
    WHEN 'ISFJ' THEN '여사제는 직관적 지혜와 내면의 지식을 상징합니다. ISFJ처럼 배려심 깊고 헌신적인 사람들을 나타냅니다.'
    WHEN 'ISTP' THEN '전차는 의지력과 결단력을 상징합니다. ISTP처럼 실용적이고 문제 해결 능력이 뛰어난 사람들을 나타냅니다.'
    WHEN 'ISTJ' THEN '황제는 권위와 안정성을 상징합니다. ISTJ처럼 책임감 있고 체계적인 사람들을 나타냅니다.'
    WHEN 'ENFP' THEN '태양은 활력과 열정을 상징합니다. ENFP처럼 긍정적이고 에너지 넘치는 사람들을 나타냅니다.'
    WHEN 'ENFJ' THEN '연인들은 조화와 관계를 상징합니다. ENFJ처럼 사람들을 연결하고 영감을 주는 사람들을 나타냅니다.'
    WHEN 'ENTP' THEN '바보는 모험과 새로운 시작을 상징합니다. ENTP처럼 호기심 많고 관습에 얽매이지 않는 사람들을 나타냅니다.'
    WHEN 'ENTJ' THEN '세계는 성취와 완성을 상징합니다. ENTJ처럼 목표 지향적이고 리더십이 있는 사람들을 나타냅니다.'
    WHEN 'ESFP' THEN '힘은 용기와 정열을 상징합니다. ESFP처럼 활기차고 자발적인 사람들을 나타냅니다.'
    WHEN 'ESFJ' THEN '황후는 풍요와 양육을 상징합니다. ESFJ처럼 따뜻하고 사교적인 사람들을 나타냅니다.'
    WHEN 'ESTP' THEN '악마는 욕망과 물질적 세계를 상징합니다. ESTP처럼 모험적이고 현실적인 사람들을 나타냅니다.'
    WHEN 'ESTJ' THEN '정의는 균형과 질서를 상징합니다. ESTJ처럼 공정하고 체계적인 사람들을 나타냅니다.'
  END,
  dating_tips = CASE type_code
    WHEN 'INFP' THEN ARRAY['진정성 있는 대화를 나누세요', '그들의 가치관과 이상을 존중하세요', '감정적인 연결을 중요시하세요', '창의적인 데이트를 계획하세요', '그들의 독립성을 존중하세요']
    WHEN 'INFJ' THEN ARRAY['깊은 대화를 나누세요', '그들의 직관을 신뢰하세요', '진실된 관계를 추구하세요', '조용한 시간을 함께 보내세요', '그들의 경계를 존중하세요']
    WHEN 'INTP' THEN ARRAY['지적인 대화를 나누세요', '논리적인 접근을 존중하세요', '그들의 독립성을 인정하세요', '새로운 아이디어를 함께 탐구하세요', '감정 표현에 인내심을 가지세요']
    WHEN 'INTJ' THEN ARRAY['지적 자극을 제공하세요', '그들의 계획을 존중하세요', '직접적이고 솔직하게 소통하세요', '그들의 독립성을 존중하세요', '장기적인 비전을 함께 나누세요']
    WHEN 'ISFP' THEN ARRAY['자발적인 활동을 즐기세요', '그들의 예술적 표현을 격려하세요', '현재에 집중하세요', '감각적인 경험을 함께 나누세요', '그들의 가치관을 존중하세요']
    WHEN 'ISFJ' THEN ARRAY['안정적인 관계를 구축하세요', '작은 배려를 보여주세요', '전통과 가족을 중요시하세요', '감사를 표현하세요', '일관성 있게 행동하세요']
    WHEN 'ISTP' THEN ARRAY['실용적인 활동을 함께하세요', '그들의 독립성을 존중하세요', '과도한 감정 표현을 자제하세요', '문제 해결에 함께 참여하세요', '공간과 자유를 주세요']
    WHEN 'ISTJ' THEN ARRAY['신뢰와 일관성을 보여주세요', '계획을 함께 세우세요', '전통적인 가치를 존중하세요', '책임감 있게 행동하세요', '실용적인 선물을 고려하세요']
    WHEN 'ENFP' THEN ARRAY['새로운 경험을 함께 탐험하세요', '그들의 열정을 지지하세요', '자발성을 받아들이세요', '깊은 대화를 나누세요', '그들의 창의성을 격려하세요']
    WHEN 'ENFJ' THEN ARRAY['진정한 관심을 보여주세요', '그들의 감정을 인정하세요', '사회적 활동에 함께 참여하세요', '진실된 대화를 나누세요', '그들의 이타적인 본성을 존중하세요']
    WHEN 'ENTP' THEN ARRAY['지적인 도전을 제공하세요', '토론을 즐기세요', '새로운 아이디어에 열린 마음을 가지세요', '유머 감각을 공유하세요', '그들의 독립성을 존중하세요']
    WHEN 'ENTJ' THEN ARRAY['목표와 성취에 대해 이야기하세요', '효율성을 보여주세요', '직접적으로 소통하세요', '그들의 리더십을 인정하세요', '지적인 대화를 나누세요']
    WHEN 'ESFP' THEN ARRAY['즐거운 경험을 함께 만드세요', '자발적인 활동에 참여하세요', '현재에 집중하세요', '긍정적인 에너지를 공유하세요', '그들의 사회성을 존중하세요']
    WHEN 'ESFJ' THEN ARRAY['감사를 표현하세요', '가족과 친구를 중요시하세요', '안정적인 관계를 구축하세요', '그들의 배려심을 인정하세요', '사회적 활동에 함께 참여하세요']
    WHEN 'ESTP' THEN ARRAY['모험적인 활동을 함께하세요', '현재에 집중하세요', '실용적인 접근을 보여주세요', '자유와 공간을 주세요', '직접적으로 소통하세요']
    WHEN 'ESTJ' THEN ARRAY['계획과 구조를 존중하세요', '책임감 있게 행동하세요', '전통적인 가치를 인정하세요', '직접적으로 소통하세요', '효율성을 보여주세요']
  END,
  famous_people = CASE type_code
    WHEN 'INFP' THEN ARRAY['아이유', '정국(BTS)', '윌리엄 셰익스피어', '톨킨', '빈센트 반 고흐']
    WHEN 'INFJ' THEN ARRAY['아델', '마틴 루터 킹', '테일러 스위프트', '레이디 가가', '넬슨 만델라']
    WHEN 'INTP' THEN ARRAY['알버트 아인슈타인', '빌 게이츠', '래리 페이지', '슈가(BTS)', '마리 퀴리']
    WHEN 'INTJ' THEN ARRAY['일론 머스크', '마크 저커버그', '프리드리히 니체', '크리스토퍼 놀란', '니콜라 테슬라']
    WHEN 'ISFP' THEN ARRAY['브루노 마스', '마이클 잭슨', '브리트니 스피어스', '케빈 코스트너', '밥 딜런']
    WHEN 'ISFJ' THEN ARRAY['케이트 미들턴', '비욘세', '앤 해서웨이', '셀레나 고메즈', '로사 파크스']
    WHEN 'ISTP' THEN ARRAY['클린트 이스트우드', '톰 크루즈', '키아누 리브스', '마이클 조던', '스티브 잡스']
    WHEN 'ISTJ' THEN ARRAY['퀸 엘리자베스 2세', '워렌 버핏', '조지 워싱턴', '나탈리 포트만', '헤르미온느 그레인저']
    WHEN 'ENFP' THEN ARRAY['로버트 다우니 주니어', '제니퍼 로렌스', '엘렌 드제너러스', '로빈 윌리엄스', '월트 디즈니']
    WHEN 'ENFJ' THEN ARRAY['오프라 윈프리', '버락 오바마', '레오나르도 디카프리오', '제니퍼 로페즈', '닐 패트릭 해리스']
    WHEN 'ENTP' THEN ARRAY['스티브 워즈니악', '토마스 에디슨', '짐 캐리', '사샤 바론 코헨', '에이미 포엘러']
    WHEN 'ENTJ' THEN ARRAY['스티브 잡스', '고든 램지', '마가렛 대처', '해리슨 포드', '찰리즈 테론']
    WHEN 'ESFP' THEN ARRAY['머라이어 캐리', '제이미 폭스', '아담 레빈', '카메론 디아즈', '리오넬 메시']
    WHEN 'ESFJ' THEN ARRAY['테일러 스위프트', '휴 잭맨', '제니퍼 가너', '빌 클린턴', '크리스 에반스']
    WHEN 'ESTP' THEN ARRAY['도널드 트럼프', '마돈나', '잭 니콜슨', '에디 머피', '브루스 윌리스']
    WHEN 'ESTJ' THEN ARRAY['미셸 오바마', '존 D. 록펠러', '엠마 왓슨', '닥터 필', '저지 주디']
  END,
  ideal_partner_types = CASE type_code
    WHEN 'INFP' THEN ARRAY['ENFJ', 'ENTJ', 'INFJ', 'INTJ']
    WHEN 'INFJ' THEN ARRAY['ENFP', 'ENTP', 'INFP', 'INTJ']
    WHEN 'INTP' THEN ARRAY['ENTJ', 'ESTJ', 'INTJ', 'ENFJ']
    WHEN 'INTJ' THEN ARRAY['ENFP', 'ENTP', 'INFP', 'INTP']
    WHEN 'ISFP' THEN ARRAY['ENFJ', 'ESFJ', 'ESTJ', 'ISFJ']
    WHEN 'ISFJ' THEN ARRAY['ESFP', 'ESTP', 'ISFP', 'ESTJ']
    WHEN 'ISTP' THEN ARRAY['ESFJ', 'ESTJ', 'ISFJ', 'ENTJ']
    WHEN 'ISTJ' THEN ARRAY['ESFP', 'ESTP', 'ISFP', 'ESFJ']
    WHEN 'ENFP' THEN ARRAY['INFJ', 'INTJ', 'ENFJ', 'ENTJ']
    WHEN 'ENFJ' THEN ARRAY['INFP', 'ISFP', 'ENFP', 'INFJ']
    WHEN 'ENTP' THEN ARRAY['INFJ', 'INTJ', 'INTP', 'ENFJ']
    WHEN 'ENTJ' THEN ARRAY['INFP', 'INTP', 'ENFP', 'ENTP']
    WHEN 'ESFP' THEN ARRAY['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ']
    WHEN 'ESFJ' THEN ARRAY['ISFP', 'ISTP', 'ESFP', 'ISFJ']
    WHEN 'ESTP' THEN ARRAY['ISFJ', 'ISTJ', 'ESFJ', 'ISTP']
    WHEN 'ESTJ' THEN ARRAY['ISFP', 'ISTP', 'ESFP', 'ISFJ']
  END,
  relationship_strengths = CASE type_code
    WHEN 'INFP' THEN ARRAY['깊은 감정적 연결 형성', '파트너의 독특함 존중', '갈등 해결에 창의적 접근', '진정성 있는 소통', '파트너의 성장 지원']
    WHEN 'INFJ' THEN ARRAY['깊은 정서적 이해', '장기적 관계 지향', '파트너의 필요 예측', '의미 있는 대화 유도', '갈등 해결에 통찰력 발휘']
    WHEN 'INTP' THEN ARRAY['지적 호기심 공유', '문제 해결 능력', '독립성 존중', '논리적 분석으로 갈등 해결', '창의적인 아이디어 제공']
    WHEN 'INTJ' THEN ARRAY['장기적 관계 계획', '지적 자극 제공', '문제 해결 능력', '독립성 존중', '헌신적인 파트너십']
    WHEN 'ISFP' THEN ARRAY['현재에 충실한 관계', '감각적 경험 공유', '파트너의 개성 존중', '갈등 시 실용적 해결', '따뜻한 정서적 지원']
    WHEN 'ISFJ' THEN ARRAY['안정적이고 신뢰할 수 있는 파트너', '세심한 배려', '실용적인 지원 제공', '전통과 가치 중시', '헌신적인 관계 유지']
    WHEN 'ISTP' THEN ARRAY['문제 해결 능력', '실용적인 관계 접근', '독립성과 공간 존중', '스트레스 없는 관계 유지', '모험과 새로운 경험 공유']
    WHEN 'ISTJ' THEN ARRAY['신뢰성과 일관성', '책임감 있는 파트너십', '실용적인 문제 해결', '안정적인 관계 구축', '헌신적인 장기 관계']
    WHEN 'ENFP' THEN ARRAY['열정적인 관계 에너지', '창의적인 데이트 아이디어', '감정적 연결 중시', '파트너의 성장 격려', '재미와 모험 제공']
    WHEN 'ENFJ' THEN ARRAY['깊은 정서적 연결', '파트너의 성장 지원', '갈등 해결 능력', '따뜻하고 배려하는 태도', '장기적 관계 지향']
    WHEN 'ENTP' THEN ARRAY['지적 자극 제공', '창의적인 문제 해결', '유머 감각', '새로운 경험 공유', '적응력과 유연성']
    WHEN 'ENTJ' THEN ARRAY['목표 지향적 관계', '리더십과 결단력', '효율적인 갈등 해결', '장기적 비전 공유', '파트너의 성장 지원']
    WHEN 'ESFP' THEN ARRAY['즐거움과 모험 제공', '현재에 충실한 관계', '따뜻한 정서적 표현', '갈등 해결에 실용적 접근', '사회적 연결 강화']
    WHEN 'ESFJ' THEN ARRAY['따뜻하고 배려하는 태도', '안정적인 관계 구축', '사회적 조화 유지', '실용적인 지원 제공', '전통과 가치 중시']
    WHEN 'ESTP' THEN ARRAY['즉흥적인 모험 공유', '현실적인 문제 해결', '적응력과 유연성', '직접적인 소통 방식', '활동적인 관계 유지']
    WHEN 'ESTJ' THEN ARRAY['안정적인 관계 구축', '책임감 있는 파트너십', '명확한 소통', '실용적인 문제 해결', '전통과 가치 중시']
  END,
  relationship_weaknesses = CASE type_code
    WHEN 'INFP' THEN ARRAY['현실적 문제 회피 경향', '지나친 이상화', '감정에 쉽게 상처받음', '갈등 회피', '우유부단함']
    WHEN 'INFJ' THEN ARRAY['완벽주의적 기대', '지나친 자기희생', '감정 억제', '비현실적 기대', '과도한 분석']
    WHEN 'INTP' THEN ARRAY['감정 표현 어려움', '지나친 분석', '실용적 문제 간과', '독립성 고집', '관계 우선순위 낮춤']
    WHEN 'INTJ' THEN ARRAY['감정 표현 부족', '통제 욕구', '비판적 태도', '독립성 고집', '융통성 부족']
    WHEN 'ISFP' THEN ARRAY['장기 계획 어려움', '갈등 회피', '감정에 쉽게 상처받음', '의사소통 부족', '우유부단함']
    WHEN 'ISFJ' THEN ARRAY['자기주장 부족', '지나친 자기희생', '변화 저항', '비판에 민감', '과도한 걱정']
    WHEN 'ISTP' THEN ARRAY['감정 표현 어려움', '장기 계획 부족', '갑작스러운 독립성 추구', '관계 우선순위 낮춤', '약속에 대한 부담']
    WHEN 'ISTJ' THEN ARRAY['감정 표현 부족', '융통성 부족', '변화 저항', '비판적 태도', '지나친 실용성']
    WHEN 'ENFP' THEN ARRAY['집중력 부족', '현실적 문제 간과', '과도한 이상화', '갈등 회피', '변덕스러움']
    WHEN 'ENFJ' THEN ARRAY['지나친 자기희생', '인정 욕구', '갈등 회피', '통제 욕구', '완벽주의적 기대']
    WHEN 'ENTP' THEN ARRAY['감정적 연결 어려움', '논쟁적 태도', '집중력 부족', '약속에 대한 부담', '변덕스러움']
    WHEN 'ENTJ' THEN ARRAY['감정 무시', '지배적 태도', '비판적 성향', '통제 욕구', '일과 관계 균형 부족']
    WHEN 'ESFP' THEN ARRAY['장기 계획 부족', '깊은 대화 회피', '책임감 부족', '갈등 회피', '변덕스러움']
    WHEN 'ESFJ' THEN ARRAY['지나친 의존성', '비판에 민감', '자기주장 부족', '갈등 회피', '지나친 자기희생']
    WHEN 'ESTP' THEN ARRAY['감정적 연결 어려움', '장기 계획 부족', '약속에 대한 부담', '위험 추구', '깊은 대화 회피']
    WHEN 'ESTJ' THEN ARRAY['감정 표현 부족', '지배적 태도', '융통성 부족', '비판적 성향', '통제 욕구']
  END
WHERE type_code IN ('INFP', 'INFJ', 'INTP', 'INTJ', 'ISFP', 'ISFJ', 'ISTP', 'ISTJ', 'ENFP', 'ENFJ', 'ENTP', 'ENTJ', 'ESFP', 'ESFJ', 'ESTP', 'ESTJ');

-- Update mbti_compatibility with additional fields
UPDATE public.mbti_compatibility
SET 
  compatibility_level = 
    CASE 
      WHEN compatibility_score >= 90 THEN '매우 높음'
      WHEN compatibility_score >= 70 THEN '높음'
      WHEN compatibility_score >= 50 THEN '중간'
      WHEN compatibility_score >= 30 THEN '낮음'
      ELSE '매우 낮음'
    END,
  date_ideas = ARRAY['미술관 방문', '함께 요리하기', '자연 속 피크닉', '보드게임 카페', '영화 관람']
WHERE type1 < type2;

-- Add sample questions with new fields
UPDATE public.mbti_questions
SET
  category = '연애',
  weight = 2,
  version = '1.0',
  active = TRUE
WHERE dimension = 'E-I';

UPDATE public.mbti_questions
SET
  category = '일상',
  weight = 1,
  version = '1.0',
  active = TRUE
WHERE dimension = 'S-N';

UPDATE public.mbti_questions
SET
  category = '관계',
  weight = 2,
  version = '1.0',
  active = TRUE
WHERE dimension = 'T-F';

UPDATE public.mbti_questions
SET
  category = '계획',
  weight = 1,
  version = '1.0',
  active = TRUE
WHERE dimension = 'J-P';
