import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/about", destination: "/about.html" },
        { source: "/about-us", destination: "/about.html" },
        { source: "/programs", destination: "/programs.html" },
        { source: "/academic-programs", destination: "/programs.html" },
        { source: "/teachers", destination: "/teachers.html" },
        { source: "/faculty", destination: "/teachers.html" },
        { source: "/blogs", destination: "/blogs.html" },
        { source: "/student-life", destination: "/blogs.html" },
        { source: "/facilities", destination: "/about.html" },
        { source: "/contact", destination: "/contact.html" },
        { source: "/contact-us", destination: "/contact.html" },
        { source: "/admission", destination: "/admission.html" },
        { source: "/admissions", destination: "/admission.html" },
        { source: "/pricing", destination: "/pricing.html" },
        { source: "/fee-structure", destination: "/pricing.html" },
        { source: "/programs/:slug*", destination: "/programs/:slug*.html" },
        { source: "/blogs/:slug*", destination: "/blogs/:slug*.html" },
      ],
      afterFiles: [],
      fallback: [
        { source: "/:path*", destination: "/:path*.html" },
      ],
    };
  },
};

export default nextConfig;
