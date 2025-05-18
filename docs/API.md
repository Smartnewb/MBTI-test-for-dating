# API 문서

이 문서는 달빛 연애 연구소 프로젝트에서 사용하는 API에 대한 설명입니다.

## Supabase API

### 인증 API

#### 회원가입

```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
});
```

#### 로그인

```javascript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'example@email.com',
  password: 'example-password',
});
```

#### 로그아웃

```javascript
const { error } = await supabase.auth.signOut();
```

#### 현재 사용자 정보 가져오기

```javascript
const { data: { user } } = await supabase.auth.getUser();
```

### 데이터 API

#### MBTI 질문 가져오기

```javascript
const { data, error } = await supabase
  .from('questions')
  .select('*')
  .order('id', { ascending: true });
```

#### 사용자 응답 저장하기

```javascript
const { data, error } = await supabase
  .from('user_responses')
  .insert([
    { 
      user_id: user.id,
      question_id: 1,
      answer: 'A'
    }
  ]);
```

#### MBTI 결과 가져오기

```javascript
const { data, error } = await supabase
  .from('mbti_types')
  .select('*')
  .eq('type', 'INFP')
  .single();
```

#### MBTI 궁합 정보 가져오기

```javascript
const { data, error } = await supabase
  .from('compatibility')
  .select('*')
  .eq('type1', 'INFP')
  .eq('type2', 'ENFJ')
  .single();
```

## 데이터 모델

### Questions 테이블

| 필드 | 타입 | 설명 |
|------|------|------|
| id | integer | 질문 ID |
| question | text | 질문 내용 |
| option_a | text | A 선택지 |
| option_b | text | B 선택지 |
| dimension | text | MBTI 차원 (E/I, S/N, T/F, J/P) |

### UserResponses 테이블

| 필드 | 타입 | 설명 |
|------|------|------|
| id | uuid | 응답 ID |
| user_id | uuid | 사용자 ID |
| question_id | integer | 질문 ID |
| answer | text | 사용자 응답 (A 또는 B) |
| created_at | timestamp | 생성 시간 |

### MBTITypes 테이블

| 필드 | 타입 | 설명 |
|------|------|------|
| id | integer | 유형 ID |
| type | text | MBTI 유형 (INFP, ENFJ 등) |
| description | text | 유형 설명 |
| strengths | text | 연애 장점 |
| weaknesses | text | 연애 단점 |
| dating_style | text | 연애 스타일 |

### Compatibility 테이블

| 필드 | 타입 | 설명 |
|------|------|------|
| id | integer | 궁합 ID |
| type1 | text | MBTI 유형 1 |
| type2 | text | MBTI 유형 2 |
| compatibility_score | integer | 궁합 점수 (1-10) |
| description | text | 궁합 설명 |

## 에러 처리

모든 API 호출은 `error` 객체를 반환할 수 있습니다. 에러 처리 예시:

```javascript
const { data, error } = await supabase.from('questions').select('*');

if (error) {
  console.error('Error fetching questions:', error.message);
  // 에러 처리 로직
} else {
  // 성공 로직
  console.log('Questions:', data);
}
```
