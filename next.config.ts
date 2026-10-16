import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Read with fs at runtime by the admission PDF builder (lib/admission-pdf.ts).
  outputFileTracingIncludes: {
    "/api/admission": ["./lib/fonts/**/*", "./public/assets/images/rahmia-logo.jpeg"],
  },
  images: {
    // AVIF first, WebP fallback. Every image is served at quality 90 (Next's
    // default is 75) so photos stay crisp while still shrinking dramatically.
    formats: ["image/avif", "image/webp"],
    qualities: [90],
    // Images in /public never change in place, so cache optimized copies for 30 days.
    minimumCacheTTL: 2592000,
  },
  turbopack: {
    root: process.cwd(),
  },
  // The blog only has the template's placeholder posts, so /blogs and every post
  // under it send visitors home until the school has real posts. Temporary (307),
  // not permanent: browsers and Google would remember a permanent redirect, and
  // the blog may come back. Delete this rule to bring the blog back.
  redirects() {
    return [{ source: "/blogs/:slug*", destination: "/", permanent: false }];
  },
};

export default nextConfig;
