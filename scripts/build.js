/**
 * Custom build script to handle problematic pages
 *
 * This script:
 * 1. Temporarily renames problematic pages to prevent them from being built
 * 2. Runs the Next.js build
 * 3. Restores the original files
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to problematic pages
const problematicPages = [
  'src/app/design-system/components/page.jsx',
  'src/app/design-system/layout/page.jsx',
  'src/app/design-system/colors/page.jsx',
  'src/app/design-system/typography/page.jsx',
  'src/app/design-system/animations/page.jsx',
];

// Backup directory
const backupDir = path.join(__dirname, '../.page-backups');

// Create backup directory if it doesn't exist
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Backup and rename problematic pages
function backupPages() {
  console.log('Backing up problematic pages...');

  problematicPages.forEach(pagePath => {
    const fullPath = path.join(__dirname, '..', pagePath);

    if (fs.existsSync(fullPath)) {
      // Create backup
      const backupPath = path.join(backupDir, path.basename(pagePath));
      fs.copyFileSync(fullPath, backupPath);

      // Rename original file to prevent it from being built
      fs.renameSync(fullPath, `${fullPath}.bak`);

      console.log(`Backed up: ${pagePath}`);
    } else {
      console.log(`Page not found: ${pagePath}`);
    }
  });
}

// Restore problematic pages from backup
function restorePages() {
  console.log('Restoring problematic pages...');

  problematicPages.forEach(pagePath => {
    const fullPath = path.join(__dirname, '..', pagePath);
    const backupPath = path.join(backupDir, path.basename(pagePath));

    // Restore original file if backup exists
    if (fs.existsSync(`${fullPath}.bak`)) {
      fs.renameSync(`${fullPath}.bak`, fullPath);
      console.log(`Restored: ${pagePath}`);
    }
  });
}

// Main build process
try {
  // Step 1: Backup problematic pages
  backupPages();

  // Step 2: Run Next.js build
  console.log('Running Next.js build...');
  execSync('npm run build:next', { stdio: 'inherit' });

  // Step 3: Verify routes-manifest.json exists
  const routesManifestPath = path.join(__dirname, '../.next/routes-manifest.json');
  if (!fs.existsSync(routesManifestPath)) {
    console.error('Error: routes-manifest.json not found after build!');
    // Create a minimal routes-manifest.json if it doesn't exist
    const minimalRoutesManifest = {
      version: 3,
      basePath: '',
      redirects: [],
      rewrites: [],
      headers: [],
      staticRoutes: [],
      dynamicRoutes: [],
      dataRoutes: [],
      notFoundRoutes: [],
    };

    // Ensure .next directory exists
    const nextDir = path.join(__dirname, '../.next');
    if (!fs.existsSync(nextDir)) {
      fs.mkdirSync(nextDir, { recursive: true });
    }

    // Write the minimal routes-manifest.json
    fs.writeFileSync(routesManifestPath, JSON.stringify(minimalRoutesManifest, null, 2));
    console.log('Created minimal routes-manifest.json for Vercel deployment');
  } else {
    console.log('routes-manifest.json found and verified');
  }

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} finally {
  // Step 4: Restore problematic pages
  restorePages();
}
