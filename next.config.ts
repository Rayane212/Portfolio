import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "192.168.1.26:3000",
    "192.168.1.26"
  ]
};

export default nextConfig;
