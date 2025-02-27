/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": new URL(".", import.meta.url).pathname, // Ensure @ maps to project root
    };
    return config;
  },
};

export default nextConfig;
