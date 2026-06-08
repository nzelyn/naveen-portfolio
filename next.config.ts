import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.credly.com',
      },
      {
        protocol: 'https',
        hostname: 'www.credly.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
