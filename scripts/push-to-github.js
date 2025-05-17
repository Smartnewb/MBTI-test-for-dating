// push-to-github.js
// 이 스크립트는 .env 파일에서 GitHub 토큰을 읽어와 GitHub 저장소에 푸시하는 작업을 수행합니다.

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// .env 파일 로드
dotenv.config();

// GitHub 토큰 가져오기
const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  console.error('GitHub 토큰이 .env 파일에 설정되어 있지 않습니다.');
  process.exit(1);
}

// GitHub 사용자 이름
const username = 'Smartnewb';
// 저장소 이름
const repoName = 'MBTI-test-for-dating';

try {
  // 현재 원격 저장소 제거 (이미 있는 경우)
  try {
    execSync('git remote remove origin');
    console.log('기존 원격 저장소를 제거했습니다.');
  } catch (error) {
    // 원격 저장소가 없는 경우 무시
    console.log('원격 저장소가 없거나 제거할 수 없습니다.');
  }

  // 토큰을 사용하여 원격 저장소 추가
  // URL 인코딩을 사용하여 특수 문자 처리
  const encodedToken = encodeURIComponent(githubToken);
  const remoteUrl = `https://${username}:${encodedToken}@github.com/${username}/${repoName}.git`;
  execSync(`git remote add origin ${remoteUrl}`);
  console.log('원격 저장소를 추가했습니다.');

  // master 브랜치를 원격 저장소에 푸시
  execSync('git push -u origin master');
  console.log('GitHub 저장소에 성공적으로 푸시했습니다!');
} catch (error) {
  console.error('GitHub 저장소에 푸시하는 중 오류가 발생했습니다:', error.message);
  process.exit(1);
}
