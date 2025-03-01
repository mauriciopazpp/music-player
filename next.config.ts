import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.theaudiodb.com/api/v1/json/2/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.theaudiodb.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'r2.theaudiodb.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
