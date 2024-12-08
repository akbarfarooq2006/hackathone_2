import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings/errors during Vercel builds
  },
  /* Add other Next.js configurations here */
};

export default nextConfig;
