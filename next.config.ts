import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    disableStaticImages: true,  // Disable image optimization warning
    domains: ["cdn.sanity.io"]
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings/errors during Vercel builds
  },
  /* Add other Next.js configurations here */
};

export default nextConfig;
