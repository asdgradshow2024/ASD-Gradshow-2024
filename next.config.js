/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  typescript: {
    ignoreBuildErrors: true
  }
};

const withMdx = require('@next/mdx')();
const config = withMdx(nextConfig);

module.exports = config;
