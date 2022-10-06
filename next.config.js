/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'http://www.portaldota.com.br',
      'http://www.portaldota.com.br/images',
      'www.portaldota.com.br',
    ],
  },
};

module.exports = nextConfig;
