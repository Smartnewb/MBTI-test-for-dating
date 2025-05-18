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

// Sentry 설치 및 설정
const setupSentry = () => {
  console.log(boxen(chalk.bold.blue('Sentry 설치 및 설정'), { padding: 1, margin: 1, borderColor: 'blue' }));
  
  const spinner = ora('Sentry 패키지 설치 중...').start();
  
  try {
    // Sentry 패키지 설치
    execSync('npm install @sentry/nextjs', { stdio: 'ignore' });
    spinner.succeed('Sentry 패키지 설치 완료');
    
    // Sentry 설정 파일 생성
    spinner.text = 'Sentry 설정 파일 생성 중...';
    
    // sentry.client.config.js 생성
    const sentryClientConfig = `
// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
`;
    
    // sentry.server.config.js 생성
    const sentryServerConfig = `
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
`;
    
    // sentry.edge.config.js 생성
    const sentryEdgeConfig = `
// This file configures the initialization of Sentry for edge functions.
// The config you add here will be used whenever an edge function is invoked.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
`;
    
    // 파일 저장
    fs.writeFileSync(path.join(rootDir, 'sentry.client.config.js'), sentryClientConfig.trim());
    fs.writeFileSync(path.join(rootDir, 'sentry.server.config.js'), sentryServerConfig.trim());
    fs.writeFileSync(path.join(rootDir, 'sentry.edge.config.js'), sentryEdgeConfig.trim());
    
    spinner.succeed('Sentry 설정 파일 생성 완료');
    
    // .env.example 파일 업데이트
    spinner.text = '.env.example 파일 업데이트 중...';
    
    const envExamplePath = path.join(rootDir, '.env.example');
    if (fs.existsSync(envExamplePath)) {
      let envExample = fs.readFileSync(envExamplePath, 'utf8');
      
      if (!envExample.includes('NEXT_PUBLIC_SENTRY_DSN')) {
        envExample += '\n\n# Sentry Configuration\nNEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn\n';
        fs.writeFileSync(envExamplePath, envExample);
      }
    }
    
    spinner.succeed('.env.example 파일 업데이트 완료');
    
    // 안내 메시지 출력
    console.log(chalk.green('\n✅ Sentry 설정이 완료되었습니다!'));
    console.log(chalk.cyan('\n다음 단계:'));
    console.log(chalk.cyan('1. Sentry 계정을 생성하고 새 프로젝트를 만드세요.'));
    console.log(chalk.cyan('2. 프로젝트의 DSN을 복사하여 .env 파일에 NEXT_PUBLIC_SENTRY_DSN 환경 변수로 추가하세요.'));
    console.log(chalk.cyan('3. 애플리케이션을 다시 시작하여 Sentry 통합을 확인하세요.'));
    
    return true;
  } catch (error) {
    spinner.fail(`Sentry 설정 실패: ${error.message}`);
    return false;
  }
};

// 메인 함수
const main = async () => {
  // Sentry 설치 및 설정
  if (!setupSentry()) {
    console.error(chalk.red('Sentry 설정에 실패했습니다.'));
    process.exit(1);
  }
};

// 스크립트 실행
main().catch(error => {
  console.error(chalk.red(`오류 발생: ${error.message}`));
  process.exit(1);
});
