#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import boxen from 'boxen';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Function to check if a file or directory exists
function checkExists(filePath, type = 'file', required = true) {
  const fullPath = path.join(rootDir, filePath);
  const exists = fs.existsSync(fullPath);
  
  const isDirectory = exists ? fs.statSync(fullPath).isDirectory() : false;
  const isCorrectType = type === 'dir' ? isDirectory : !isDirectory;
  
  const status = exists && isCorrectType;
  
  console.log(
    `${status ? chalk.green('✓') : required ? chalk.red('✗') : chalk.yellow('!')} ` +
    `${chalk.bold(filePath)} ${type === 'dir' ? '(directory)' : '(file)'}: ` +
    `${status ? chalk.green('OK') : required ? chalk.red('MISSING') : chalk.yellow('OPTIONAL')}`
  );
  
  return status;
}

// Function to check package.json for required dependencies
function checkDependencies(dependencies) {
  const packageJsonPath = path.join(rootDir, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.log(`${chalk.red('✗')} ${chalk.bold('package.json')}: ${chalk.red('MISSING')}`);
    return false;
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
  
  let allFound = true;
  
  for (const dep of dependencies) {
    const found = !!allDeps[dep];
    console.log(
      `${found ? chalk.green('✓') : chalk.red('✗')} ` +
      `Dependency ${chalk.bold(dep)}: ` +
      `${found ? chalk.green('OK') : chalk.red('MISSING')}`
    );
    
    if (!found) allFound = false;
  }
  
  return allFound;
}

// Function to check if scripts are defined in package.json
function checkScripts(scripts) {
  const packageJsonPath = path.join(rootDir, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.log(`${chalk.red('✗')} ${chalk.bold('package.json')}: ${chalk.red('MISSING')}`);
    return false;
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  let allFound = true;
  
  for (const script of scripts) {
    const found = !!packageJson.scripts[script];
    console.log(
      `${found ? chalk.green('✓') : chalk.red('✗')} ` +
      `Script ${chalk.bold(script)}: ` +
      `${found ? chalk.green('OK') : chalk.red('MISSING')}`
    );
    
    if (!found) allFound = false;
  }
  
  return allFound;
}

// Main verification function
function verifySetup() {
  console.log(boxen(chalk.bold('Verifying Project Setup'), { padding: 1, margin: 1, borderColor: 'blue' }));
  
  // Check required directories
  console.log(chalk.bold('\nChecking required directories:'));
  const dirChecks = [
    checkExists('src', 'dir'),
    checkExists('src/app', 'dir'),
    checkExists('src/app/components', 'dir'),
    checkExists('config', 'dir'),
    checkExists('test', 'dir'),
    checkExists('docs', 'dir'),
    checkExists('public', 'dir'),
  ];
  
  // Check required files
  console.log(chalk.bold('\nChecking required files:'));
  const fileChecks = [
    checkExists('package.json'),
    checkExists('next.config.js'),
    checkExists('.env.example'),
    checkExists('jest.config.js'),
    checkExists('.eslintrc.js'),
    checkExists('.prettierrc'),
    checkExists('jsconfig.json'),
    checkExists('src/app/layout.js'),
    checkExists('src/app/page.js'),
    checkExists('src/app/globals.css'),
  ];
  
  // Check required dependencies
  console.log(chalk.bold('\nChecking required dependencies:'));
  const depChecks = checkDependencies([
    'next',
    'react',
    'react-dom',
    '@mui/material',
    '@emotion/react',
    '@emotion/styled',
    '@tanstack/react-query',
    '@supabase/supabase-js',
    'jest',
    'eslint',
    'prettier',
  ]);
  
  // Check required scripts
  console.log(chalk.bold('\nChecking required scripts:'));
  const scriptChecks = checkScripts([
    'dev',
    'build',
    'start',
    'lint',
    'test',
  ]);
  
  // Calculate overall status
  const allDirChecks = dirChecks.every(check => check);
  const allFileChecks = fileChecks.every(check => check);
  const allChecks = allDirChecks && allFileChecks && depChecks && scriptChecks;
  
  // Display summary
  console.log(boxen(
    chalk.bold('Verification Summary') + '\n\n' +
    `Directories: ${allDirChecks ? chalk.green('PASS') : chalk.red('FAIL')}\n` +
    `Files: ${allFileChecks ? chalk.green('PASS') : chalk.red('FAIL')}\n` +
    `Dependencies: ${depChecks ? chalk.green('PASS') : chalk.red('FAIL')}\n` +
    `Scripts: ${scriptChecks ? chalk.green('PASS') : chalk.red('FAIL')}\n\n` +
    `Overall: ${allChecks ? chalk.green('PASS') : chalk.red('FAIL')}`,
    { padding: 1, margin: 1, borderColor: allChecks ? 'green' : 'red' }
  ));
  
  return allChecks;
}

// Run the verification
const success = verifySetup();

// Exit with appropriate code
process.exit(success ? 0 : 1);
