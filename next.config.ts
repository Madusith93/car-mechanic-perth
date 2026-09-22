import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  //basePath: '/Carmechanic',
  assetPrefix: '/Carmechanic',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;