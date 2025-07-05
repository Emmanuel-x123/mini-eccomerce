import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['file.aiquickdraw.com', 'source.unsplash.com'],
  },
  // Add these settings for Edge Functions
  // experimental: {
  //   runtime: 'experimental-edge', // Only needed for Next.js <13.2
  // },
  // Optional: Force Node.js runtime for API routes if Edge fails
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }; // Fixes missing Node.js modules
    return config;
  },
};

export default nextConfig;