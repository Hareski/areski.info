/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
  }
   
  module.exports = nextConfig

  module.exports = {
    async rewrites() {
      return [
        {
          source: '/assets/:match*',
          destination: 'https://www.datocms-assets.com/:match*',
        },
      ]
    },
  }