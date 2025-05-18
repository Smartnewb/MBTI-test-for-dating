import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

/**
 * 세션 데이터 가져오기 API 라우트
 * 
 * 이 라우트는 현재 세션의 데이터를 가져옵니다.
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
    
    // 세션 데이터 가져오기
    const { data, error } = await supabase
      .from('sessions')
      .select('data')
      .eq('id', sessionId)
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116: 결과가 없음
      console.error('Error fetching session data:', error);
      return NextResponse.json(
        { error: '세션 데이터를 가져오는 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
    
    // 세션이 없으면 빈 데이터 반환
    if (!data) {
      return NextResponse.json({ data: {} });
    }
    
    return NextResponse.json({ data: data.data || {} });
  } catch (error) {
    console.error('Session data fetch error:', error);
    return NextResponse.json(
      { error: '세션 데이터를 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

/**
 * 세션 데이터 업데이트 API 라우트
 * 
 * 이 라우트는 세션 데이터를 업데이트합니다.
 */
export async function PUT(request) {
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
    
    if (!body.data) {
      return NextResponse.json(
        { error: '업데이트할 데이터가 없습니다.' },
        { status: 400 }
      );
    }
    
    // 현재 세션 데이터 가져오기
    const { data: currentData, error: fetchError } = await supabase
      .from('sessions')
      .select('data')
      .eq('id', sessionId)
      .single();
    
    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Error fetching current session data:', fetchError);
      return NextResponse.json(
        { error: '현재 세션 데이터를 가져오는 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
    
    // 새 데이터와 기존 데이터 병합
    const mergedData = {
      ...(currentData?.data || {}),
      ...body.data
    };
    
    // 세션 데이터 업데이트
    const { error: updateError } = await supabase
      .from('sessions')
      .upsert([
        {
          id: sessionId,
          last_active: new Date().toISOString(),
          data: mergedData
        }
      ], { onConflict: 'id' });
    
    if (updateError) {
      console.error('Error updating session data:', updateError);
      return NextResponse.json(
        { error: '세션 데이터를 업데이트하는 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true, data: mergedData });
  } catch (error) {
    console.error('Session data update error:', error);
    return NextResponse.json(
      { error: '세션 데이터를 업데이트하는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

/**
 * 세션 데이터 삭제 API 라우트
 * 
 * 이 라우트는 세션 데이터를 삭제합니다.
 */
export async function DELETE(request) {
  try {
    // 세션 ID 가져오기
    const sessionId = request.headers.get('x-session-id');
    
    if (!sessionId) {
      return NextResponse.json(
        { error: '세션 ID가 없습니다.' },
        { status: 400 }
      );
    }
    
    // 세션 데이터 삭제
    const { error } = await supabase
      .from('sessions')
      .delete()
      .eq('id', sessionId);
    
    if (error) {
      console.error('Error deleting session data:', error);
      return NextResponse.json(
        { error: '세션 데이터를 삭제하는 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Session data delete error:', error);
    return NextResponse.json(
      { error: '세션 데이터를 삭제하는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
