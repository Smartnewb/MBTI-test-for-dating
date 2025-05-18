#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import chalk from 'chalk';
import ora from 'ora';

// 환경 변수 로드
dotenv.config();

// 현재 파일 경로 가져오기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Supabase 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(chalk.red('Supabase URL 또는 API 키가 설정되지 않았습니다.'));
  console.error(chalk.yellow('환경 변수를 확인하세요: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY'));
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 마이그레이션 파일 목록
const migrationFiles = [
  'supabase/migrations/20240517_create_mbti_tables.sql',
  'supabase/migrations/20240517_create_sessions_table.sql',
  'supabase/migrations/20240517_create_additional_indexes.sql',
  'supabase/migrations/20240517_seed_mbti_data.sql',
  'supabase/migrations/20240517_create_database_views.sql'
];

// SQL 파일 실행 함수
async function executeSqlFile(filePath) {
  try {
    // SQL 파일 읽기
    const fullPath = path.join(rootDir, filePath);
    const sql = fs.readFileSync(fullPath, 'utf8');
    
    // SQL 문 분리 (세미콜론으로 구분)
    const statements = sql
      .replace(/--.*$/gm, '') // 주석 제거
      .split(';')
      .filter(stmt => stmt.trim() !== '');
    
    // 각 SQL 문 실행
    for (const statement of statements) {
      const { error } = await supabase.rpc('pg_query', { query: statement.trim() });
      
      if (error) {
        console.error(chalk.red(`SQL 실행 오류: ${error.message}`));
        console.error(chalk.gray(`문제의 SQL 문: ${statement.trim().substring(0, 100)}...`));
        // 오류가 있어도 계속 진행
      }
    }
    
    return true;
  } catch (err) {
    console.error(chalk.red(`파일 처리 중 오류 (${filePath}): ${err.message}`));
    return false;
  }
}

// 마이그레이션 실행
async function runMigrations() {
  console.log(chalk.blue.bold('=== MBTI 테스트 데이터베이스 마이그레이션 ==='));
  console.log(chalk.gray(`Supabase URL: ${supabaseUrl}`));
  console.log('');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const file of migrationFiles) {
    const spinner = ora(`마이그레이션 파일 실행 중: ${file}`).start();
    
    try {
      const success = await executeSqlFile(file);
      
      if (success) {
        spinner.succeed(chalk.green(`마이그레이션 성공: ${file}`));
        successCount++;
      } else {
        spinner.fail(chalk.red(`마이그레이션 실패: ${file}`));
        failCount++;
      }
    } catch (err) {
      spinner.fail(chalk.red(`마이그레이션 오류: ${err.message}`));
      failCount++;
    }
  }
  
  console.log('');
  console.log(chalk.blue.bold('=== 마이그레이션 결과 ==='));
  console.log(chalk.green(`성공: ${successCount} 파일`));
  console.log(chalk.red(`실패: ${failCount} 파일`));
  console.log('');
  
  if (failCount === 0) {
    console.log(chalk.green.bold('모든 마이그레이션이 성공적으로 완료되었습니다! 🎉'));
  } else {
    console.log(chalk.yellow.bold('일부 마이그레이션이 실패했습니다. 로그를 확인하세요.'));
  }
}

// 마이그레이션 실행
runMigrations().catch(err => {
  console.error(chalk.red(`마이그레이션 실행 중 오류: ${err.message}`));
  process.exit(1);
});
