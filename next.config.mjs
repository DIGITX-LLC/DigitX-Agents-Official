/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "digitxevents.com",
      },
      {
        protocol: "https",
        hostname: "digitx-storage.blr1.cdn.digitaloceanspaces.com",
      },
    ],
    // Add timeout and retry configuration for image optimization
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: process.env.NODE_ENV === 'development',
    minimumCacheTTL: 60,
    formats: ['image/webp'],
  },
  // Enable experimental features for better geo-location support
  experimental: {
    // Add valid experimental features here if needed
  },
  // Ensure source maps are properly generated in development
  productionBrowserSourceMaps: false,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
};

export default nextConfig;
