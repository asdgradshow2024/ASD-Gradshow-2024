/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
  typescript: {
    ignoreBuildErrors: true
  },
  trailingSlash: true
};

export default nextConfig;
