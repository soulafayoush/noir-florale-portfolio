import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: [
    "preview-chat-8e73c53d-658d-4003-a5a3-0cdbf3649930.space-z.ai",
  ],
};

export default nextConfig;
