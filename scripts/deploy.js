#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import boxen from 'boxen';
import ora from 'ora';
import dotenv from 'dotenv';

// 환경 변수 로드
dotenv.config();

// 현재 파일 경로 가져오기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// 배포 전 체크리스트
const preDeploymentChecks = () => {
  const spinner = ora('배포 전 체크리스트 실행 중...').start();
  
  try {
    // 필수 파일 확인
    const requiredFiles = [
      'package.json',
      'next.config.js',
      'vercel.json',
      '.env'
    ];
    
    for (const file of requiredFiles) {
      if (!fs.existsSync(path.join(rootDir, file))) {
        spinner.fail(`필수 파일이 없습니다: ${file}`);
        process.exit(1);
      }
    }
    
    // 환경 변수 확인
    const requiredEnvVars = [
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY'
    ];
    
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        spinner.fail(`필수 환경 변수가 설정되지 않았습니다: ${envVar}`);
        process.exit(1);
      }
    }
    
    // Git 상태 확인
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.trim() !== '') {
        spinner.warn('커밋되지 않은 변경사항이 있습니다. 배포 전에 커밋하는 것을 권장합니다.');
      }
    } catch (error) {
      spinner.warn('Git 상태를 확인할 수 없습니다.');
    }
    
    spinner.succeed('배포 전 체크리스트 완료');
    return true;
  } catch (error) {
    spinner.fail(`배포 전 체크리스트 실패: ${error.message}`);
    return false;
  }
};

// 빌드 실행
const runBuild = () => {
  const spinner = ora('프로젝트 빌드 중...').start();
  
  try {
    execSync('npm run build', { stdio: 'inherit' });
    spinner.succeed('빌드 완료');
    return true;
  } catch (error) {
    spinner.fail(`빌드 실패: ${error.message}`);
    return false;
  }
};

// Vercel 배포
const deployToVercel = () => {
  console.log(boxen(chalk.bold('Vercel 배포 시작'), { padding: 1, margin: 1, borderColor: 'blue' }));
  
  try {
    // Vercel CLI가 설치되어 있는지 확인
    try {
      execSync('vercel --version', { stdio: 'ignore' });
    } catch (error) {
      console.log(chalk.yellow('Vercel CLI가 설치되어 있지 않습니다. 설치 중...'));
      execSync('npm install -g vercel', { stdio: 'inherit' });
    }
    
    // 배포 실행
    console.log(chalk.cyan('Vercel에 배포 중...'));
    execSync('vercel --prod', { stdio: 'inherit' });
    
    console.log(chalk.green('\n✅ 배포가 완료되었습니다!'));
    return true;
  } catch (error) {
    console.error(chalk.red(`\n❌ 배포 실패: ${error.message}`));
    return false;
  }
};

// 메인 함수
const main = async () => {
  console.log(boxen(chalk.bold.blue('달빛 연애 연구소 배포 스크립트'), { padding: 1, margin: 1, borderColor: 'blue' }));
  
  // 배포 전 체크리스트
  if (!preDeploymentChecks()) {
    console.error(chalk.red('배포 전 체크리스트를 통과하지 못했습니다.'));
    process.exit(1);
  }
  
  // 빌드 실행
  if (!runBuild()) {
    console.error(chalk.red('빌드에 실패했습니다.'));
    process.exit(1);
  }
  
  // Vercel 배포
  if (!deployToVercel()) {
    console.error(chalk.red('Vercel 배포에 실패했습니다.'));
    process.exit(1);
  }
};

// 스크립트 실행
main().catch(error => {
  console.error(chalk.red(`오류 발생: ${error.message}`));
  process.exit(1);
});
