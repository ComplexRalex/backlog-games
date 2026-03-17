/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/backlog-games',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
