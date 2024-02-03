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
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === "production"
  },
  eslint: {
    // Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production"
  },
  // Move metadataBase outside of the images configuration
  images: {
    metadataBase: 'https://www.manishtamang.xyz/', // Add this line with your actual deployed URL
  },
};

module.exports = nextConfig;
