/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/backlog-games',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
