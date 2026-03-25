import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-backend.azurewebsites.net",
      },
    ],
  },
};

export default nextConfig;