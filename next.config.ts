import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/31675web',
  assetPrefix: '/31675web',
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;