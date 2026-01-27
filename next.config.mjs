/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      // Auth & Debug Routes -> /api/ (Backend)
      {
        source: '/aevum/login',
        destination: 'https://aevum-mu.vercel.app/api/login',
      },
      {
        source: '/aevum/callback',
        destination: 'https://aevum-mu.vercel.app/api/callback',
      },
      {
        source: '/aevum/debug-session',
        destination: 'https://aevum-mu.vercel.app/api/debug-session',
      },

      // API Routes -> /api/ (Backend)
      {
        source: '/aevum/busy',
        destination: 'https://aevum-mu.vercel.app/api/busy',
      },
      {
        source: '/aevum/tasks',
        destination: 'https://aevum-mu.vercel.app/api/tasks',
      },
      {
        source: '/aevum/calendars',
        destination: 'https://aevum-mu.vercel.app/api/calendars',
      },
      {
        source: '/aevum/optimize',
        destination: 'https://aevum-mu.vercel.app/api/optimize',
      },
      {
        source: '/aevum/ai/:path*',
        destination: 'https://aevum-mu.vercel.app/api/ai/:path*',
      },
      {
        source: '/aevum/architect/:path*',
        destination: 'https://aevum-mu.vercel.app/api/architect/:path*',
      },

      // Frontend Routes -> /aevum/ (React App)
      {
        source: '/aevum/home/:path*',
        destination: 'https://aevum-mu.vercel.app/aevum/:path*',
      },
      {
        source: '/aevum/home',
        destination: 'https://aevum-mu.vercel.app/aevum/',
      }
    ]
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ygpm1s00rgvhtbns.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
      // Proxy rewrite for Aevum external project
    ],
  },
}

export default nextConfig
