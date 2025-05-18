/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  // Skip type checking to speed up the build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable static generation for all pages
  output: 'standalone',
  // Configure dynamic rendering for all pages
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'mbti-dating-test.vercel.app'],
    },
  },
  // Skip prerendering for all pages
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
