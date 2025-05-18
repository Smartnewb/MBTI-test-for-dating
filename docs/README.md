# 달빛 연애 연구소 - MBTI 연애 테스트

## 프로젝트 개요

달빛 연애 연구소는 MBTI를 기반으로 한 연애 스타일 분석 및 이상형 매칭 서비스입니다. 사용자는 24개의 질문에 답하여 자신의 MBTI 유형을 파악하고, 그에 따른 연애 스타일과 가장 잘 맞는 이상형을 추천받을 수 있습니다.

## 기술 스택

- **프론트엔드**: Next.js (App Router), Material UI, Tanstack Query
- **백엔드**: Supabase (인증, 데이터베이스, 스토리지)
- **상태 관리**: React Context API
- **배포**: Vercel

## 주요 기능

1. **MBTI 테스트**: 24개의 연애 관련 질문을 통해 사용자의 MBTI 유형을 분석
2. **연애 스타일 분석**: MBTI 유형에 따른 연애 성향 및 특징 제공
3. **이상형 매칭**: 가장 궁합이 좋은 MBTI 유형 추천
4. **결과 공유**: SNS를 통한 테스트 결과 공유 기능

## 디렉토리 구조

```
/
├── src/                  # 소스 코드
│   ├── app/              # Next.js App Router 구조
│   │   ├── components/   # 공통 컴포넌트
│   │   ├── hooks/        # 커스텀 훅
│   │   ├── contexts/     # Context API
│   │   ├── utils/        # 유틸리티 함수
│   │   ├── test/         # 테스트 페이지
│   │   ├── result/       # 결과 페이지
│   │   ├── layout.js     # 루트 레이아웃
│   │   └── page.js       # 홈페이지
│   └── styles/           # 스타일 관련 파일
├── public/               # 정적 파일
│   └── images/           # 이미지 파일
├── config/               # 설정 파일
├── test/                 # 테스트 파일
├── docs/                 # 문서
└── scripts/              # 스크립트
```

## 개발 가이드

### 환경 설정

1. 저장소 클론:
   ```bash
   git clone https://github.com/Smartnewb/MBTI-test-for-dating.git
   cd MBTI-test-for-dating
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 환경 변수 설정:
   `.env.example` 파일을 복사하여 `.env` 파일을 생성하고 필요한 값을 설정합니다.

4. 개발 서버 실행:
   ```bash
   npm run dev
   ```

### 테스트

```bash
npm test
```

### 빌드

```bash
npm run build
```

## 기여 가이드

1. 이슈 생성 또는 기존 이슈 선택
2. 브랜치 생성: `feature/기능명` 또는 `fix/버그명`
3. 코드 작성 및 테스트
4. Pull Request 생성

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다.
