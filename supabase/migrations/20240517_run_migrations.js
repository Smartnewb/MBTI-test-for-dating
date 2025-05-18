import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// 환경 변수 로드
dotenv.config();

// Supabase 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL 또는 서비스 롤 키가 설정되지 않았습니다.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 마이그레이션 파일 목록
const migrationFiles = [
  '20240517_create_mbti_tables.sql',
  '20240517_create_sessions_table.sql',
  '20240517_create_additional_indexes.sql',
  '20240517_create_database_views.sql',
  '20240517_seed_mbti_data.sql'
];

// 마이그레이션 실행
async function runMigrations() {
  console.log('마이그레이션 시작...');

  for (const file of migrationFiles) {
    try {
      console.log(`마이그레이션 파일 실행 중: ${file}`);
      
      // SQL 파일 읽기
      const filePath = path.join(__dirname, file);
      const sql = fs.readFileSync(filePath, 'utf8');
      
      // SQL 실행
      const { error } = await supabase.rpc('exec_sql', { sql });
      
      if (error) {
        console.error(`마이그레이션 오류 (${file}):`, error);
      } else {
        console.log(`마이그레이션 성공: ${file}`);
      }
    } catch (err) {
      console.error(`마이그레이션 파일 처리 중 오류 (${file}):`, err);
    }
  }

  console.log('마이그레이션 완료');
}

// 마이그레이션 실행
runMigrations().catch(err => {
  console.error('마이그레이션 실행 중 오류:', err);
  process.exit(1);
});
