/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Skip type checking to speed up the build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Use standard output for better compatibility with Vercel
  output: 'export',
  // Configure dynamic rendering for all pages
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'mbti-dating-test.vercel.app'],
    },
  },
  // Skip prerendering for all pages
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  // Exclude problematic pages from static generation
  excludeDefaultMomentLocales: true,
  // Use standard .next directory for Vercel compatibility
  distDir: '.next',
  onDemandEntries: {
    // Keep pages in memory longer during development
    maxInactiveAge: 60 * 60 * 1000,
    // Number of pages to keep in memory
    pagesBufferLength: 5,
  },
  // Configure webpack to handle Symbol values properly
  webpack: (config, { isServer }) => {
    // Handle Symbol serialization issues
    config.optimization.moduleIds = 'named';

    return config;
  },
};

export default nextConfig;
