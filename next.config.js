/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true,
    ppr: 'incremental',
  },
};

module.exports = nextConfig;
