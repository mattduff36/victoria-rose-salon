/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com', 'lh3.googleusercontent.com'],
  },
  reactStrictMode: true,
  experimental: {
    middleware: false
  },
  // Add cache control headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=59'
          }
        ]
      }
    ]
  },
  // Add redirects
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
    ]
  },
  // Add trailing slashes to ensure consistent URLs
  trailingSlash: true,
}

module.exports = nextConfig
