/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com','api.lorem.space','vsport-tt.com']
  },
  /*env: {
    customKey: 'customValue'
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/hello',
        permanent : true,
      }
    ]
  }
  */
}

module.exports = nextConfig
