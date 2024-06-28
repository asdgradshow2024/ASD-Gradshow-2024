import mdx from '@next/mdx'

const withMDX = mdx()

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx']
};

export default withMDX(nextConfig)
