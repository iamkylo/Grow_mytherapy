import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Ensure server runs properly
  experimental: {
    // Add any experimental features if needed
  },
};

export default nextConfig;
