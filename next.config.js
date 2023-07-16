/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    domains: [
      "localhost",
      "encrypted-tbn0.gstatic.com",
      "natureconservancy-h.assetsadobe.com",
    ],
  },
 
};

module.exports = nextConfig;
