/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Mobile optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Image optimizations - Lower quality for better performance
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200], // Reduced to 1080p max
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Reduced sizes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Handle Chrome DevTools requests
  async redirects() {
    return [
      {
        source: '/.well-known/appspecific/com.chrome.devtools.json',
        destination: '/api/devtools',
        permanent: false,
      },
    ];
  },
  
  async rewrites() {
    return [
      {
        source: '/api/devtools',
        destination: '/api/devtools-handler',
      },
    ];
  },
};

module.exports = nextConfig;