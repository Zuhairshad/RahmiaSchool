import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Read with fs at runtime by the admission PDF builder (lib/admission-pdf.ts).
  outputFileTracingIncludes: {
    "/api/admission": ["./lib/fonts/**/*", "./public/assets/images/rahmia-logo.jpeg"],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
