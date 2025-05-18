'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../utils/supabase';

// Supabase 컨텍스트 생성
const SupabaseContext = createContext();

/**
 * Supabase 컨텍스트 제공자
 * 
 * Supabase 인증 상태 및 세션 관리를 위한 컨텍스트 제공자입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 자식 컴포넌트
 */
export function SupabaseProvider({ children }) {
  // 사용자 상태
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionId, setSessionId] = useState(null);
  
  // 컴포넌트 마운트 시 사용자 상태 확인
  useEffect(() => {
    // 현재 세션 가져오기
    const getSession = async () => {
      try {
        setLoading(true);
        
        // 현재 세션 가져오기
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          throw error;
        }
        
        // 사용자 설정
        setUser(session?.user || null);
        
        // 세션 ID 설정 (인증된 사용자가 아닌 경우 로컬 스토리지에서 가져오거나 새로 생성)
        if (!session?.user) {
          let localSessionId = localStorage.getItem('sessionId');
          
          if (!localSessionId) {
            localSessionId = uuidv4();
            localStorage.setItem('sessionId', localSessionId);
          }
          
          setSessionId(localSessionId);
        }
      } catch (error) {
        console.error('Failed to get session:', error);
      } finally {
        setLoading(false);
      }
    };
    
    // 초기 세션 가져오기
    getSession();
    
    // 인증 상태 변경 구독
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );
    
    // 컴포넌트 언마운트 시 구독 해제
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  /**
   * 이메일/비밀번호로 회원가입
   * @param {string} email - 이메일
   * @param {string} password - 비밀번호
   * @returns {Promise<Object>} 회원가입 결과
   */
  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      return { success: true, data };
    } catch (error) {
      console.error('Error signing up:', error);
      return { success: false, error };
    }
  };
  
  /**
   * 이메일/비밀번호로 로그인
   * @param {string} email - 이메일
   * @param {string} password - 비밀번호
   * @returns {Promise<Object>} 로그인 결과
   */
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      return { success: true, data };
    } catch (error) {
      console.error('Error signing in:', error);
      return { success: false, error };
    }
  };
  
  /**
   * 로그아웃
   * @returns {Promise<Object>} 로그아웃 결과
   */
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error signing out:', error);
      return { success: false, error };
    }
  };
  
  /**
   * 비밀번호 재설정 이메일 전송
   * @param {string} email - 이메일
   * @returns {Promise<Object>} 비밀번호 재설정 결과
   */
  const resetPassword = async (email) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) {
        throw error;
      }
      
      return { success: true, data };
    } catch (error) {
      console.error('Error resetting password:', error);
      return { success: false, error };
    }
  };
  
  /**
   * 비밀번호 업데이트
   * @param {string} password - 새 비밀번호
   * @returns {Promise<Object>} 비밀번호 업데이트 결과
   */
  const updatePassword = async (password) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password,
      });
      
      if (error) {
        throw error;
      }
      
      return { success: true, data };
    } catch (error) {
      console.error('Error updating password:', error);
      return { success: false, error };
    }
  };
  
  // 컨텍스트 값
  const value = {
    user,
    loading,
    sessionId,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
  };
  
  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
}

/**
 * Supabase 컨텍스트 사용 훅
 * @returns {Object} Supabase 컨텍스트 값
 */
export function useSupabase() {
  const context = useContext(SupabaseContext);
  
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  
  return context;
}

export default SupabaseContext;
