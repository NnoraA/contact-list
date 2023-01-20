/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:slug*',
        destination: 'http://localhost:3001/:slug*', 
      },
    ]
  },
}

module.exports = nextConfig
