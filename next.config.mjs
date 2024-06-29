import mdx from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx']
};

const withMdx = mdx()

export default withMdx(nextConfig)
