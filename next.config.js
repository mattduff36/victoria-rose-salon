/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  reactStrictMode: true,
  // Add cache control headers
  async headers() {
    return [
      {
        source: '/((?!admin|api/admin).*)',
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
