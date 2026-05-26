import type { NextConfig } from "next";
import { execSync } from "node:child_process";

function getLastUpdatedDate(): string {
  try {
    const isoDate = execSync("git log -1 --format=%cI", {
      encoding: "utf-8",
    }).trim();

    const date = new Date(isoDate);
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return formatter.format(date);
  } catch {
    return new Date().getFullYear().toString();
  }
}

const LAST_UPDATED = getLastUpdatedDate();

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote", "next-intl"],

  env: {
    NEXT_PUBLIC_LAST_UPDATED: LAST_UPDATED,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  compress: true,
  bundlePagesRouterDependencies: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/blog/:slug",
          destination: "/blog/:slug",
        },
      ],
    };
  },

  async redirects() {
    return [];
  },

  trailingSlash: false,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },

};

export default nextConfig;
