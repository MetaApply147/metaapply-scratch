import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-backend.azurewebsites.net",
        pathname: '/uploads/**',

      },
    ],
  },
};

export default nextConfig;