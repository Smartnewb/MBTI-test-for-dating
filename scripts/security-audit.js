#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import boxen from 'boxen';
import ora from 'ora';

// 현재 파일 경로 가져오기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// npm audit 실행
const runNpmAudit = () => {
  const spinner = ora('npm 패키지 보안 감사 실행 중...').start();
  
  try {
    const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
    const auditResult = JSON.parse(auditOutput);
    
    const vulnerabilities = auditResult.vulnerabilities || {};
    const totalVulnerabilities = Object.values(vulnerabilities).reduce((acc, curr) => acc + curr.length, 0);
    
    if (totalVulnerabilities === 0) {
      spinner.succeed('npm 패키지 보안 감사 완료: 취약점이 발견되지 않았습니다.');
      return true;
    } else {
      spinner.warn(`npm 패키지 보안 감사 완료: ${totalVulnerabilities}개의 취약점이 발견되었습니다.`);
      
      // 취약점 정보 출력
      console.log(chalk.yellow('\n취약점 요약:'));
      
      for (const [severity, vulns] of Object.entries(vulnerabilities)) {
        if (vulns.length > 0) {
          console.log(chalk.yellow(`- ${severity}: ${vulns.length}개`));
        }
      }
      
      console.log(chalk.cyan('\n취약점을 해결하려면 다음 명령어를 실행하세요:'));
      console.log(chalk.cyan('npm audit fix'));
      
      return false;
    }
  } catch (error) {
    spinner.fail(`npm 패키지 보안 감사 실패: ${error.message}`);
    return false;
  }
};

// 환경 변수 검사
const checkEnvironmentVariables = () => {
  const spinner = ora('환경 변수 검사 중...').start();
  
  try {
    const envPath = path.join(rootDir, '.env');
    
    if (!fs.existsSync(envPath)) {
      spinner.warn('.env 파일이 없습니다.');
      return true;
    }
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envLines = envContent.split('\n');
    
    // 민감한 환경 변수 패턴
    const sensitivePatterns = [
      /password/i,
      /secret/i,
      /key/i,
      /token/i,
      /credential/i
    ];
    
    // .gitignore에 .env 파일이 포함되어 있는지 확인
    const gitignorePath = path.join(rootDir, '.gitignore');
    let isEnvIgnored = false;
    
    if (fs.existsSync(gitignorePath)) {
      const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
      isEnvIgnored = gitignoreContent.split('\n').some(line => 
        line.trim() === '.env' || line.trim() === '*.env' || line.trim() === '.env*'
      );
    }
    
    if (!isEnvIgnored) {
      spinner.warn('.env 파일이 .gitignore에 포함되어 있지 않습니다. 민감한 정보가 노출될 수 있습니다.');
    } else {
      spinner.succeed('.env 파일이 .gitignore에 올바르게 포함되어 있습니다.');
    }
    
    // 민감한 환경 변수 검사
    const sensitiveVars = [];
    
    for (const line of envLines) {
      if (line.trim() === '' || line.startsWith('#')) continue;
      
      const [name] = line.split('=');
      
      if (sensitivePatterns.some(pattern => pattern.test(name))) {
        sensitiveVars.push(name);
      }
    }
    
    if (sensitiveVars.length > 0) {
      spinner.info(`민감한 환경 변수가 발견되었습니다: ${sensitiveVars.join(', ')}`);
      console.log(chalk.cyan('민감한 환경 변수가 .gitignore에 포함되어 있는지 확인하세요.'));
    }
    
    return true;
  } catch (error) {
    spinner.fail(`환경 변수 검사 실패: ${error.message}`);
    return false;
  }
};

// 보안 헤더 검사
const checkSecurityHeaders = () => {
  const spinner = ora('보안 헤더 검사 중...').start();
  
  try {
    const vercelConfigPath = path.join(rootDir, 'vercel.json');
    
    if (!fs.existsSync(vercelConfigPath)) {
      spinner.warn('vercel.json 파일이 없습니다. 보안 헤더를 설정하는 것을 권장합니다.');
      return true;
    }
    
    const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));
    
    // 필수 보안 헤더
    const requiredHeaders = [
      'X-Content-Type-Options',
      'X-Frame-Options',
      'X-XSS-Protection',
      'Referrer-Policy',
      'Content-Security-Policy'
    ];
    
    // 헤더 검사
    const headers = vercelConfig.headers || [];
    const configuredHeaders = new Set();
    
    for (const headerConfig of headers) {
      const headersList = headerConfig.headers || [];
      
      for (const header of headersList) {
        configuredHeaders.add(header.key);
      }
    }
    
    // 누락된 헤더 확인
    const missingHeaders = requiredHeaders.filter(header => !configuredHeaders.has(header));
    
    if (missingHeaders.length > 0) {
      spinner.warn(`다음 보안 헤더가 누락되었습니다: ${missingHeaders.join(', ')}`);
      console.log(chalk.cyan('vercel.json 파일에 누락된 보안 헤더를 추가하는 것을 권장합니다.'));
    } else {
      spinner.succeed('모든 필수 보안 헤더가 설정되어 있습니다.');
    }
    
    return true;
  } catch (error) {
    spinner.fail(`보안 헤더 검사 실패: ${error.message}`);
    return false;
  }
};

// 메인 함수
const main = async () => {
  console.log(boxen(chalk.bold.blue('보안 감사 스크립트'), { padding: 1, margin: 1, borderColor: 'blue' }));
  
  // npm audit 실행
  runNpmAudit();
  
  // 환경 변수 검사
  checkEnvironmentVariables();
  
  // 보안 헤더 검사
  checkSecurityHeaders();
  
  console.log(chalk.green('\n✅ 보안 감사가 완료되었습니다!'));
};

// 스크립트 실행
main().catch(error => {
  console.error(chalk.red(`오류 발생: ${error.message}`));
  process.exit(1);
});
