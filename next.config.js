/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {},
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  },
};

module.exports = {
  ...nextConfig,
  images: {
    ...nextConfig.images,
    domains: ['cdn.sanity.io'], // Add this line with your actual domain
  },
  // Additional configuration options, if needed
  // metadataBase: 'https://your-deployed-url.com', // This line is not necessary
};
