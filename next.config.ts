import type { NextConfig } from "next";

const isProd: boolean = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/your-repository-name/' : '',
  basePath: isProd ? '/your-repository-name' : '',
  output: 'export',
};

export default nextConfig;
