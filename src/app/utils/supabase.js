import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anonymous Key is missing. Please check your environment variables.');
}

// 클라이언트 측에서 사용할 Supabase 클라이언트
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * 사용자 인증 관련 함수
 */

// 이메일/비밀번호로 회원가입
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

// 이메일/비밀번호로 로그인
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// 로그아웃
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// 현재 사용자 정보 가져오기
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
}

/**
 * 데이터베이스 관련 함수
 */

// 모든 MBTI 질문 가져오기
export async function getAllQuestions() {
  const { data, error } = await supabase
    .from('mbti_questions')
    .select('*')
    .order('id', { ascending: true });
  return { data, error };
}

// 특정 MBTI 차원의 질문만 가져오기
export async function getQuestionsByDimension(dimension) {
  const { data, error } = await supabase
    .from('mbti_questions')
    .select('*')
    .eq('dimension', dimension)
    .order('id', { ascending: true });
  return { data, error };
}

// 사용자 응답 저장하기 (인증된 사용자)
export async function saveUserResponse(userId, questionId, answer) {
  const { data, error } = await supabase
    .from('user_responses')
    .upsert([
      { user_id: userId, question_id: questionId, answer }
    ], { onConflict: ['user_id', 'question_id'] });
  return { data, error };
}

// 익명 사용자 응답 저장하기
export async function saveAnonymousResponse(sessionId, questionId, answer) {
  const { data, error } = await supabase
    .from('user_responses')
    .upsert([
      { session_id: sessionId, question_id: questionId, answer }
    ], { onConflict: ['session_id', 'question_id'] });
  return { data, error };
}

// 테스트 결과 저장하기
export async function saveTestResult(resultData) {
  const { data, error } = await supabase
    .from('test_results')
    .insert([resultData]);
  return { data, error };
}

// MBTI 유형 정보 가져오기
export async function getMbtiTypeInfo(mbtiType) {
  const { data, error } = await supabase
    .from('mbti_types')
    .select('*')
    .eq('type_code', mbtiType)
    .single();
  return { data, error };
}

// 모든 MBTI 유형 정보 가져오기
export async function getAllMbtiTypes() {
  const { data, error } = await supabase
    .from('mbti_types')
    .select('*')
    .order('type_code', { ascending: true });
  return { data, error };
}

// MBTI 궁합 정보 가져오기
export async function getCompatibilityInfo(type1, type2) {
  const { data, error } = await supabase
    .from('mbti_compatibility')
    .select('*')
    .or(`and(type1.eq.${type1},type2.eq.${type2}),and(type1.eq.${type2},type2.eq.${type1})`)
    .single();
  return { data, error };
}

// 특정 MBTI 유형의 모든 궁합 정보 가져오기
export async function getCompatibilityByType(mbtiType) {
  const { data, error } = await supabase
    .from('mbti_compatibility')
    .select('*')
    .or(`type1.eq.${mbtiType},type2.eq.${mbtiType}`);
  return { data, error };
}

// 사용자 프로필 가져오기
export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();
  return { data, error };
}

// 사용자 프로필 업데이트하기
export async function updateUserProfile(userId, profileData) {
  const { data, error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('user_id', userId);
  return { data, error };
}

export default supabase;
