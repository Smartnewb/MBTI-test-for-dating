// setup-git-credentials.js
// 이 스크립트는 Git 자격 증명 도우미를 설정하여 GitHub 토큰을 저장합니다.

import { execSync } from 'child_process';
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

try {
  // Git 사용자 정보 설정
  execSync('git config --global user.name "Smartnewb"');
  execSync('git config --global user.email "smartnewb@github.com"');
  console.log('Git 사용자 정보가 설정되었습니다.');

  // Git 자격 증명 도우미 설정 (Windows)
  execSync('git config --global credential.helper wincred');
  console.log('Git 자격 증명 도우미가 설정되었습니다.');

  // 자격 증명 저장 (Windows)
  const command = `echo url=https://github.com
protocol=https
username=${username}
password=${githubToken}
`;
  
  // 자격 증명 저장 명령 실행
  execSync('git credential approve', { input: command });
  console.log('GitHub 자격 증명이 저장되었습니다.');
  
  console.log('이제 git push 명령을 사용하여 GitHub에 푸시할 수 있습니다.');
} catch (error) {
  console.error('Git 자격 증명 설정 중 오류가 발생했습니다:', error.message);
  process.exit(1);
}
