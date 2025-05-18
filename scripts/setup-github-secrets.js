#!/usr/bin/env node

/**
 * GitHub Secrets Setup Script
 * 
 * This script helps set up GitHub secrets for the CI/CD pipeline.
 * It guides the user through the process of adding the necessary secrets to the GitHub repository.
 */

import 'dotenv/config';
import { execSync } from 'child_process';
import chalk from 'chalk';
import boxen from 'boxen';
import ora from 'ora';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Check if GitHub CLI is installed
function checkGitHubCLI() {
  try {
    execSync('gh --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Check if user is authenticated with GitHub CLI
function checkGitHubAuth() {
  try {
    const status = execSync('gh auth status', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    return status.includes('Logged in to');
  } catch (error) {
    return false;
  }
}

// Get repository information
function getRepositoryInfo() {
  try {
    const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
    const match = remoteUrl.match(/github\.com[\/:]([^\/]+)\/([^\/\.]+)(?:\.git)?$/);
    
    if (match) {
      return {
        owner: match[1],
        repo: match[2].replace('.git', '')
      };
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

// Set GitHub secret using GitHub CLI
function setGitHubSecret(secretName, secretValue) {
  if (!secretValue) {
    console.log(chalk.yellow(`Warning: ${secretName} is not set in .env file`));
    return false;
  }
  
  const spinner = ora(`Setting ${secretName} secret...`).start();
  
  try {
    execSync(`gh secret set ${secretName} -b"${secretValue}"`, { stdio: 'ignore' });
    spinner.succeed(`Successfully set ${secretName} secret`);
    return true;
  } catch (error) {
    spinner.fail(`Failed to set ${secretName} secret: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  console.log(boxen(chalk.bold.blue('GitHub Secrets Setup'), { padding: 1, margin: 1, borderColor: 'blue' }));
  
  // Check GitHub CLI
  if (!checkGitHubCLI()) {
    console.error(chalk.red('GitHub CLI is not installed. Please install it first:'));
    console.log('https://cli.github.com/manual/installation');
    process.exit(1);
  }
  
  // Check GitHub authentication
  if (!checkGitHubAuth()) {
    console.error(chalk.red('You are not authenticated with GitHub CLI. Please run:'));
    console.log(chalk.cyan('gh auth login'));
    process.exit(1);
  }
  
  // Get repository information
  const repoInfo = getRepositoryInfo();
  if (!repoInfo) {
    console.error(chalk.red('Could not determine GitHub repository information.'));
    process.exit(1);
  }
  
  console.log(chalk.green(`Setting up secrets for ${repoInfo.owner}/${repoInfo.repo}`));
  
  // Set required secrets
  const requiredSecrets = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'VERCEL_TOKEN',
    'VERCEL_ORG_ID',
    'VERCEL_PROJECT_ID'
  ];
  
  let successCount = 0;
  
  for (const secretName of requiredSecrets) {
    const secretValue = process.env[secretName];
    if (setGitHubSecret(secretName, secretValue)) {
      successCount++;
    }
  }
  
  // Summary
  console.log('\n');
  if (successCount === requiredSecrets.length) {
    console.log(boxen(chalk.green.bold('All secrets have been successfully set up!'), { padding: 1, margin: 1, borderColor: 'green' }));
  } else {
    console.log(boxen(
      chalk.yellow.bold(`${successCount} out of ${requiredSecrets.length} secrets were set up successfully.`) +
      '\n\n' +
      chalk.white('You may need to manually set the remaining secrets in your GitHub repository settings.'),
      { padding: 1, margin: 1, borderColor: 'yellow' }
    ));
  }
}

// Run the script
main().catch(error => {
  console.error(chalk.red(`Error: ${error.message}`));
  process.exit(1);
});
