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
      // TEMPORARILY DISABLED TO TEST 401 ERROR
      // {
      //   protocol: "https",
      //   hostname: "digitx-storage.blr1.cdn.digitaloceanspaces.com",
      // },
    ],
    // Disable image optimization in development to avoid 504 errors
    unoptimized: true,
    // Add timeout and retry configuration for image optimization
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    // Add device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
