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
};

export default nextConfig;
