import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

/**
 * 세션 초기화 API 라우트
 * 
 * 이 라우트는 새 세션이 생성될 때 호출되며, 세션 데이터를 Supabase에 저장합니다.
 */
export async function GET(request) {
  try {
    // 세션 ID 가져오기
    const sessionId = request.headers.get('x-session-id');
    
    if (!sessionId) {
      return NextResponse.json(
        { error: '세션 ID가 없습니다.' },
        { status: 400 }
      );
    }
    
    // 리디렉션 경로 가져오기
    const { searchParams } = new URL(request.url);
    const redirectPath = searchParams.get('redirect') || '/';
    
    // 세션 데이터 Supabase에 저장
    const { error } = await supabase
      .from('sessions')
      .upsert([
        {
          id: sessionId,
          created_at: new Date().toISOString(),
          last_active: new Date().toISOString(),
          data: {}
        }
      ], { onConflict: 'id' });
    
    if (error) {
      console.error('Error initializing session:', error);
      // 세션 저장 실패해도 계속 진행 (로컬 스토리지로 폴백)
    }
    
    // 원래 요청한 경로로 리디렉션
    return NextResponse.redirect(new URL(redirectPath, request.url));
  } catch (error) {
    console.error('Session initialization error:', error);
    return NextResponse.json(
      { error: '세션 초기화 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

/**
 * 세션 업데이트 API 라우트
 * 
 * 이 라우트는 세션 데이터를 업데이트합니다.
 */
export async function POST(request) {
  try {
    // 세션 ID 가져오기
    const sessionId = request.headers.get('x-session-id');
    
    if (!sessionId) {
      return NextResponse.json(
        { error: '세션 ID가 없습니다.' },
        { status: 400 }
      );
    }
    
    // 요청 본문 파싱
    const body = await request.json();
    
    // 세션 데이터 업데이트
    const { error } = await supabase
      .from('sessions')
      .update({
        last_active: new Date().toISOString(),
        data: body.data || {}
      })
      .eq('id', sessionId);
    
    if (error) {
      console.error('Error updating session:', error);
      return NextResponse.json(
        { error: '세션 업데이트 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Session update error:', error);
    return NextResponse.json(
      { error: '세션 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
