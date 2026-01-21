/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/aevum/home',
        destination: 'https://aevum-mu.vercel.app/index.html',
      },
      {
        source: '/aevum/home/:path*',
        destination: 'https://aevum-mu.vercel.app/:path*',
      },
      // Proxy assets for the external Aevum app (Vite build output)
      {
        source: '/assets/:path*',
        destination: 'https://aevum-mu.vercel.app/assets/:path*',
      },
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
