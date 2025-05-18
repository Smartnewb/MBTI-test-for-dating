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

// Supabase 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(chalk.red('Supabase URL 또는 서비스 롤 키가 설정되지 않았습니다.'));
  console.error(
    chalk.yellow('환경 변수를 확인하세요: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY')
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 마이그레이션 파일 목록 (실행 순서 중요)
const migrationFiles = [
  // 기존 마이그레이션 파일
  '20240517_create_mbti_tables.sql',
  '20240517_create_sessions_table.sql',
  '20240517_create_additional_indexes.sql',

  // 새로운 마이그레이션 파일
  '20240518_update_mbti_questions.sql',
  '20240518_update_user_responses.sql',
  '20240518_update_mbti_types.sql',
  '20240518_update_mbti_compatibility.sql',
  '20240518_update_test_results.sql',
  '20240518_update_profiles.sql',

  // 데이터 시드 파일 (마지막에 실행)
  '20240517_seed_mbti_data.sql',
  '20240517_create_database_views.sql',
];

// 마이그레이션 실행
async function runMigrations() {
  console.log(chalk.blue.bold('MBTI Dating Test 데이터베이스 마이그레이션 시작...'));
  console.log(chalk.gray('Supabase URL:'), chalk.cyan(supabaseUrl));

  for (const file of migrationFiles) {
    const spinner = ora(`마이그레이션 파일 실행 중: ${chalk.yellow(file)}`).start();

    try {
      // SQL 파일 읽기
      const filePath = path.join(__dirname, file);

      if (!fs.existsSync(filePath)) {
        spinner.warn(chalk.yellow(`파일을 찾을 수 없습니다: ${file} - 건너뜁니다.`));
        continue;
      }

      const sql = fs.readFileSync(filePath, 'utf8');

      // SQL 실행
      const { error } = await supabase.rpc('exec_sql', { sql });

      if (error) {
        spinner.fail(chalk.red(`마이그레이션 오류 (${file}): ${error.message}`));
      } else {
        spinner.succeed(chalk.green(`마이그레이션 성공: ${file}`));
      }
    } catch (err) {
      spinner.fail(chalk.red(`마이그레이션 파일 처리 중 오류 (${file}): ${err.message}`));
    }
  }

  console.log(chalk.green.bold('마이그레이션 완료!'));
}

// 마이그레이션 실행
runMigrations().catch(err => {
  console.error(chalk.red('마이그레이션 실행 중 오류:'), err);
  process.exit(1);
});
