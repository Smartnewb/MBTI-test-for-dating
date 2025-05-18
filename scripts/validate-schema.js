#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import chalk from 'chalk';
import boxen from 'boxen';
import ora from 'ora';

// 환경 변수 로드
dotenv.config();

// Supabase 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(chalk.red('Supabase URL 또는 API 키가 설정되지 않았습니다.'));
  console.error(
    chalk.yellow('환경 변수를 확인하세요: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY')
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 필요한 테이블 목록
const requiredTables = [
  'mbti_questions',
  'user_responses',
  'mbti_types',
  'mbti_compatibility',
  'test_results',
  'profiles',
  'sessions',
];

// 테이블 구조 검증
async function validateTableStructure(tableName) {
  try {
    // 테이블 존재 여부 확인
    const { data: tableExists, error: tableError } = await supabase.rpc('pg_query', {
      query: `
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = '${tableName}'
        );
      `,
    });

    if (tableError) {
      throw new Error(`테이블 존재 여부 확인 중 오류: ${tableError.message}`);
    }

    if (!tableExists || !tableExists[0] || !tableExists[0].exists) {
      return {
        exists: false,
        columns: [],
        constraints: [],
        indexes: [],
      };
    }

    // 컬럼 정보 가져오기
    const { data: columns, error: columnsError } = await supabase.rpc('pg_query', {
      query: `
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = '${tableName}'
        ORDER BY ordinal_position;
      `,
    });

    if (columnsError) {
      throw new Error(`컬럼 정보 가져오기 중 오류: ${columnsError.message}`);
    }

    // 제약 조건 정보 가져오기
    const { data: constraints, error: constraintsError } = await supabase.rpc('pg_query', {
      query: `
        SELECT con.conname as constraint_name, 
               con.contype as constraint_type,
               pg_get_constraintdef(con.oid) as constraint_definition
        FROM pg_constraint con
        JOIN pg_class rel ON rel.oid = con.conrelid
        JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
        WHERE nsp.nspname = 'public' AND rel.relname = '${tableName}';
      `,
    });

    if (constraintsError) {
      throw new Error(`제약 조건 정보 가져오기 중 오류: ${constraintsError.message}`);
    }

    // 인덱스 정보 가져오기
    const { data: indexes, error: indexesError } = await supabase.rpc('pg_query', {
      query: `
        SELECT indexname, indexdef
        FROM pg_indexes
        WHERE schemaname = 'public' AND tablename = '${tableName}';
      `,
    });

    if (indexesError) {
      throw new Error(`인덱스 정보 가져오기 중 오류: ${indexesError.message}`);
    }

    return {
      exists: true,
      columns: columns || [],
      constraints: constraints || [],
      indexes: indexes || [],
    };
  } catch (error) {
    console.error(chalk.red(`테이블 구조 검증 중 오류 (${tableName}): ${error.message}`));
    return {
      exists: false,
      error: error.message,
      columns: [],
      constraints: [],
      indexes: [],
    };
  }
}

// 테이블 데이터 검증
async function validateTableData(tableName) {
  try {
    const { data, error } = await supabase.rpc('pg_query', {
      query: `SELECT COUNT(*) FROM public.${tableName};`,
    });

    if (error) {
      throw new Error(`데이터 수 확인 중 오류: ${error.message}`);
    }

    return {
      count: data && data[0] ? parseInt(data[0].count, 10) : 0,
    };
  } catch (error) {
    console.error(chalk.red(`테이블 데이터 검증 중 오류 (${tableName}): ${error.message}`));
    return {
      count: 0,
      error: error.message,
    };
  }
}

// 관계 검증
async function validateRelationships() {
  try {
    const { data, error } = await supabase.rpc('pg_query', {
      query: `
        SELECT
          tc.table_schema, 
          tc.constraint_name, 
          tc.table_name, 
          kcu.column_name, 
          ccu.table_schema AS foreign_table_schema,
          ccu.table_name AS foreign_table_name,
          ccu.column_name AS foreign_column_name 
        FROM 
          information_schema.table_constraints AS tc 
          JOIN information_schema.key_column_usage AS kcu
            ON tc.constraint_name = kcu.constraint_name
            AND tc.table_schema = kcu.table_schema
          JOIN information_schema.constraint_column_usage AS ccu
            ON ccu.constraint_name = tc.constraint_name
            AND ccu.table_schema = tc.table_schema
        WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_schema = 'public';
      `,
    });

    if (error) {
      throw new Error(`관계 정보 가져오기 중 오류: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error(chalk.red(`관계 검증 중 오류: ${error.message}`));
    return [];
  }
}

// RLS 정책 검증
async function validateRLSPolicies() {
  try {
    const { data, error } = await supabase.rpc('pg_query', {
      query: `
        SELECT
          n.nspname AS schema,
          c.relname AS table,
          pol.polname AS policy,
          CASE pol.polpermissive WHEN 't' THEN 'PERMISSIVE' ELSE 'RESTRICTIVE' END AS permissive,
          CASE pol.polroles = '{0}' WHEN true THEN 'PUBLIC' ELSE array_to_string(ARRAY(SELECT rolname FROM pg_roles WHERE oid = ANY(pol.polroles)), ', ') END AS roles,
          CASE pol.polcmd
            WHEN 'r' THEN 'SELECT'
            WHEN 'a' THEN 'INSERT'
            WHEN 'w' THEN 'UPDATE'
            WHEN 'd' THEN 'DELETE'
            WHEN '*' THEN 'ALL'
          END AS command
        FROM pg_policy pol
        JOIN pg_class c ON c.oid = pol.polrelid
        JOIN pg_namespace n ON n.oid = c.relnamespace
        WHERE n.nspname = 'public'
        ORDER BY n.nspname, c.relname, pol.polname;
      `,
    });

    if (error) {
      throw new Error(`RLS 정책 정보 가져오기 중 오류: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error(chalk.red(`RLS 정책 검증 중 오류: ${error.message}`));
    return [];
  }
}

// 메인 검증 함수
async function validateSchema() {
  console.log(
    boxen(chalk.bold('MBTI Dating Test 데이터베이스 스키마 검증'), {
      padding: 1,
      margin: 1,
      borderColor: 'blue',
    })
  );

  // 테이블 구조 검증
  console.log(chalk.bold('\n테이블 구조 검증:'));

  let allTablesExist = true;
  const tableResults = {};

  for (const tableName of requiredTables) {
    const spinner = ora(`테이블 검증 중: ${tableName}`).start();

    const structureResult = await validateTableStructure(tableName);
    const dataResult = await validateTableData(tableName);

    tableResults[tableName] = {
      ...structureResult,
      data: dataResult,
    };

    if (structureResult.exists) {
      spinner.succeed(
        chalk.green(
          `테이블 ${tableName} 확인 완료: ${structureResult.columns.length}개 컬럼, ${dataResult.count}개 데이터`
        )
      );
    } else {
      spinner.fail(chalk.red(`테이블 ${tableName} 없음`));
      allTablesExist = false;
    }
  }

  // 관계 검증
  console.log(chalk.bold('\n테이블 관계 검증:'));
  const relationships = await validateRelationships();

  if (relationships.length > 0) {
    console.log(chalk.green(`${relationships.length}개의 외래 키 관계 확인됨`));

    for (const rel of relationships) {
      console.log(
        chalk.gray(
          `- ${rel.table_name}.${rel.column_name} → ${rel.foreign_table_name}.${rel.foreign_column_name}`
        )
      );
    }
  } else {
    console.log(chalk.yellow('외래 키 관계가 없습니다.'));
  }

  // RLS 정책 검증
  console.log(chalk.bold('\nRLS 정책 검증:'));
  const policies = await validateRLSPolicies();

  if (policies.length > 0) {
    console.log(chalk.green(`${policies.length}개의 RLS 정책 확인됨`));

    for (const policy of policies) {
      console.log(chalk.gray(`- ${policy.table}: ${policy.policy} (${policy.command})`));
    }
  } else {
    console.log(chalk.yellow('RLS 정책이 없습니다.'));
  }

  // 검증 결과 요약
  console.log(
    boxen(
      chalk.bold('검증 결과 요약') +
        '\n\n' +
        `테이블 존재 여부: ${allTablesExist ? chalk.green('모든 테이블 존재') : chalk.red('일부 테이블 누락')}\n` +
        `외래 키 관계: ${relationships.length > 0 ? chalk.green('확인됨') : chalk.yellow('없음')}\n` +
        `RLS 정책: ${policies.length > 0 ? chalk.green('확인됨') : chalk.yellow('없음')}\n\n` +
        `전체 결과: ${allTablesExist && relationships.length > 0 && policies.length > 0 ? chalk.green('검증 성공') : chalk.yellow('일부 문제 발견')}`,
      { padding: 1, margin: 1, borderColor: allTablesExist ? 'green' : 'yellow' }
    )
  );

  return allTablesExist;
}

// 검증 실행
validateSchema()
  .then(success => {
    process.exit(success ? 0 : 1);
  })
  .catch(err => {
    console.error(chalk.red(`스키마 검증 중 오류: ${err.message}`));
    process.exit(1);
  });
