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
  // The blog was removed (it only had the template's placeholder posts). Old
  // /blogs links, bookmarked or found on Google, land on the home page instead of
  // a 404. Temporary (307) so a future blog could reuse /blogs without browsers
  // remembering this redirect.
  redirects() {
    return [{ source: "/blogs/:slug*", destination: "/", permanent: false }];
  },
};

export default nextConfig;
