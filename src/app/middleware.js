import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// 세션 쿠키 이름
const SESSION_COOKIE_NAME = 'mbti_test_session';

// 세션 만료 시간 (24시간)
const SESSION_EXPIRY_HOURS = 24;

/**
 * 세션 미들웨어
 * 
 * 이 미들웨어는 익명 사용자를 위한 세션을 관리합니다.
 * 세션 ID를 생성하고 쿠키에 저장하며, 테스트 진행 상태를 추적합니다.
 */
export async function middleware(req) {
  const res = NextResponse.next();
  
  // 현재 세션 쿠키 가져오기
  let sessionId = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  let isNewSession = false;
  
  // 세션 ID가 없으면 새로 생성
  if (!sessionId) {
    sessionId = uuidv4();
    isNewSession = true;
  }
  
  // 세션 만료 시간 설정
  const expiryDate = new Date();
  expiryDate.setHours(expiryDate.getHours() + SESSION_EXPIRY_HOURS);
  
  // 세션 쿠키 설정
  res.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: sessionId,
    expires: expiryDate,
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  });
  
  // 요청 헤더에 세션 ID 추가
  res.headers.set('x-session-id', sessionId);
  
  // 새 세션인 경우 세션 초기화 경로로 리디렉션
  if (isNewSession && req.nextUrl.pathname !== '/api/session/init') {
    const initUrl = new URL('/api/session/init', req.url);
    initUrl.searchParams.set('redirect', req.nextUrl.pathname + req.nextUrl.search);
    return NextResponse.redirect(initUrl);
  }
  
  return res;
}

// 미들웨어가 적용될 경로 설정
export const config = {
  matcher: [
    /*
     * 다음 경로에 미들웨어 적용:
     * - /test, /test/question 등
     * - /result, /result/share 등
     * - /api/session으로 시작하는 모든 API 경로
     */
    '/test/:path*',
    '/result/:path*',
    '/api/session/:path*',
  ],
};
