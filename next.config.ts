import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.yur1.xyz" }],
        destination: "https://yur1.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
