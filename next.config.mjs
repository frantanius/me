import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['lucide-react'],
  experimental: {
    webpackBuildWorker: true,
    serverActions: {
      enabled: true,
    },
  },
  redirects() {
    return [
      {
        source: '/about',
        destination: '/about/about.ts',
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
