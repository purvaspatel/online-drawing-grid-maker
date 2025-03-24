import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'purvaspatel24.vercel.app',
      },
    ],
  },
  
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript errors in production
  },
};

export default nextConfig;
