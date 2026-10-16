import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const isVercelPreview = process.env.VERCEL_ENV === "preview";

// Preview deployments load Vercel's toolbar (comments, feedback) from these hosts.
const toolbar = (sources: string) => (isVercelPreview ? ` ${sources}` : "");

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${toolbar("https://vercel.live")}`,
  `style-src 'self' 'unsafe-inline'${toolbar("https://vercel.live")}`,
  `img-src 'self' data: blob:${toolbar("https://vercel.live https://vercel.com")}`,
  `font-src 'self'${toolbar("https://vercel.live https://assets.vercel.com")}`,
  `connect-src 'self'${toolbar("https://vercel.live wss://ws-us3.pusher.com")}`,
  `frame-src ${isVercelPreview ? "https://vercel.live" : "'none'"}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // The dev server needs eval for React Refresh, so the CSP only ships in production builds.
  ...(isProduction ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }] : []),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
