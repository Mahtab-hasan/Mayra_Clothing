/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['i.imgur.com'],
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig