/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['localhost'],
},
async redirects() {
  return [
    {
      source: '/',
      destination: '/contacts',
      permanent: true,
    },
  ]
},
}

module.exports = nextConfig
