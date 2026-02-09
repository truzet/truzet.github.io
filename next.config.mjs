/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '.',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;