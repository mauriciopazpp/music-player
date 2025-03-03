import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        })
      );
    }
    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
