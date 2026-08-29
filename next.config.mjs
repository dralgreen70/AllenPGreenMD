/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com",
      },
    ],
  },
  async redirects() {
    return [
      // --- Legacy /journal → /blog (added 2026-06-08) ---

      // 1. Renamed slugs: explicit mappings, must precede the wildcard
      {
        source: "/journal/ambar-study-part-2",
        destination: "/blog/ambar-part-2-fda-comparison",
        permanent: true,
      },

      // 2. The index page
      { source: "/journal", destination: "/blog", permanent: true },

      // 3. Wildcard fallback: every /journal/<slug> where the slug stayed the same → /blog/<slug>
      { source: "/journal/:slug*", destination: "/blog/:slug*", permanent: true },

      // --- Placeholder /media folded into the book press kit (added 2026-08-28) ---
      { source: "/media", destination: "/media-kit", permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://*.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https: https://*.google-analytics.com https://*.googletagmanager.com",
              "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://*.google-analytics.com https://*.googletagmanager.com https://*.g.doubleclick.net",
              "frame-src 'self' https://www.youtube-nocookie.com",
            ].join("; "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
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
    ]
  },
}

export default nextConfig
