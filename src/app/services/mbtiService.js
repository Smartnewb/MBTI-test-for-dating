/**
 * MBTI 유형 관련 서비스
 * 
 * Supabase에서 MBTI 유형 정보를 가져오거나 로컬 데이터를 사용하는 서비스입니다.
 */

import supabase from '../utils/supabase';
import { MBTI_DESCRIPTIONS, MBTI_COMPATIBILITY } from '../utils/mbti';

/**
 * Supabase에서 MBTI 유형 정보 가져오기
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {Promise<Object>} MBTI 유형 정보
 */
export const fetchMbtiTypeInfo = async (mbtiType) => {
  try {
    const { data, error } = await supabase.getMbtiTypeInfo(mbtiType);
    
    if (error) {
      console.error(`Error fetching ${mbtiType} info from Supabase:`, error);
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${mbtiType} info:`, error);
    return null;
  }
};

/**
 * Supabase에서 모든 MBTI 유형 정보 가져오기
 * @returns {Promise<Array>} MBTI 유형 정보 배열
 */
export const fetchAllMbtiTypes = async () => {
  try {
    const { data, error } = await supabase.getAllMbtiTypes();
    
    if (error) {
      console.error('Error fetching all MBTI types from Supabase:', error);
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error('Failed to fetch all MBTI types:', error);
    return [];
  }
};

/**
 * Supabase에서 MBTI 궁합 정보 가져오기
 * @param {string} type1 - 첫 번째 MBTI 유형
 * @param {string} type2 - 두 번째 MBTI 유형
 * @returns {Promise<Object>} MBTI 궁합 정보
 */
export const fetchCompatibilityInfo = async (type1, type2) => {
  try {
    const { data, error } = await supabase.getCompatibilityInfo(type1, type2);
    
    if (error) {
      console.error(`Error fetching compatibility info for ${type1} and ${type2} from Supabase:`, error);
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error(`Failed to fetch compatibility info for ${type1} and ${type2}:`, error);
    return null;
  }
};

/**
 * 로컬 데이터에서 MBTI 유형 정보 가져오기
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {Object} MBTI 유형 정보
 */
export const getMbtiTypeInfo = (mbtiType) => {
  return MBTI_DESCRIPTIONS[mbtiType] || null;
};

/**
 * 로컬 데이터에서 이상형 MBTI 유형 가져오기
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {string} 이상형 MBTI 유형
 */
export const getIdealType = (mbtiType) => {
  const compatibility = MBTI_COMPATIBILITY[mbtiType];
  if (!compatibility || !compatibility.ideal || compatibility.ideal.length === 0) {
    return null;
  }
  
  // 이상형 중 랜덤으로 하나 선택
  const randomIndex = Math.floor(Math.random() * compatibility.ideal.length);
  return compatibility.ideal[randomIndex];
};

/**
 * 로컬 데이터에서 최악의 궁합 MBTI 유형 가져오기
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @returns {string} 최악의 궁합 MBTI 유형
 */
export const getWorstMatch = (mbtiType) => {
  const compatibility = MBTI_COMPATIBILITY[mbtiType];
  if (!compatibility || !compatibility.worst || compatibility.worst.length === 0) {
    return null;
  }
  
  // 최악의 궁합 중 랜덤으로 하나 선택
  const randomIndex = Math.floor(Math.random() * compatibility.worst.length);
  return compatibility.worst[randomIndex];
};

/**
 * MBTI 유형 정보 가져오기
 * 개발 환경에서는 로컬 데이터를 사용하고, 프로덕션 환경에서는 Supabase에서 데이터를 가져옵니다.
 * @param {string} mbtiType - MBTI 유형 (예: 'ENFJ')
 * @param {boolean} useLocal - 로컬 데이터 사용 여부
 * @returns {Promise<Object>} MBTI 유형 정보
 */
export const getMbtiInfo = async (mbtiType, useLocal = false) => {
  // 개발 환경이거나 useLocal이 true인 경우 로컬 데이터 사용
  if (process.env.NODE_ENV === 'development' || useLocal) {
    return getMbtiTypeInfo(mbtiType);
  }
  
  // 프로덕션 환경에서는 Supabase에서 데이터 가져오기
  return await fetchMbtiTypeInfo(mbtiType);
};

export default {
  fetchMbtiTypeInfo,
  fetchAllMbtiTypes,
  fetchCompatibilityInfo,
  getMbtiTypeInfo,
  getIdealType,
  getWorstMatch,
  getMbtiInfo
};
