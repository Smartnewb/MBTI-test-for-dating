#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import chalk from 'chalk';
import boxen from 'boxen';

// Load environment variables
dotenv.config();

// Get Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if credentials are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(chalk.red('Error: Supabase credentials not found in environment variables.'));
  console.error(
    chalk.yellow(
      'Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your .env file.'
    )
  );
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test connection by fetching MBTI types
async function testConnection() {
  console.log(
    boxen(chalk.bold('Testing Supabase Connection'), { padding: 1, margin: 1, borderColor: 'blue' })
  );

  try {
    // Test query to fetch MBTI types
    console.log(chalk.yellow('Fetching MBTI types from database...'));
    const { data, error } = await supabase
      .from('mbti_types')
      .select('type_code, type_name')
      .limit(5);

    if (error) {
      throw error;
    }

    // Display results
    console.log(chalk.green('\nConnection successful!'));
    console.log(chalk.white('\nSample data from mbti_types table:'));
    console.table(data);

    console.log(
      boxen(
        chalk.bold('Connection Test Summary') +
          '\n\n' +
          `Status: ${chalk.green('CONNECTED')}\n` +
          `URL: ${chalk.cyan(supabaseUrl)}\n` +
          `Tables accessed: ${chalk.cyan('mbti_types')}\n` +
          `Records retrieved: ${chalk.cyan(data.length)}`,
        { padding: 1, margin: 1, borderColor: 'green' }
      )
    );

    return true;
  } catch (error) {
    console.error(chalk.red('\nConnection failed!'));
    console.error(chalk.red(`Error: ${error.message}`));

    console.log(
      boxen(
        chalk.bold('Connection Test Summary') +
          '\n\n' +
          `Status: ${chalk.red('FAILED')}\n` +
          `URL: ${chalk.cyan(supabaseUrl)}\n` +
          `Error: ${chalk.red(error.message)}`,
        { padding: 1, margin: 1, borderColor: 'red' }
      )
    );

    return false;
  }
}

// Run the test
const success = await testConnection();

// Exit with appropriate code
process.exit(success ? 0 : 1);
