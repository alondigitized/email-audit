import type { NextConfig } from "next";

// S9: security headers applied to every response.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Content-Security-Policy intentionally omitted. Vercel Toolbar in preview
  // deploys injects its own CSP that ANDs with ours, which blocked Next.js's
  // hydration scripts and the ResponsiveContainer-based charts. Proper fix
  // is nonce-based CSP via Proxy — tracked as the CSP-hardening backlog task.
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  // agentmail ships a dynamic `import("@x402/fetch")` for an optional
  // payment-gated flow we don't use. Turbopack tries to statically resolve
  // it anyway. Marking it external tells the bundler to leave the require
  // alone at runtime — the dynamic branch is never reached in practice.
  serverExternalPackages: ["agentmail"],
};

export default nextConfig;
