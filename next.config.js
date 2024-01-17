/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'sameorigin'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Permissions-Policy',
            value: 'gyroscope=self'
          },

          {
            key: 'X-XSS-Protection',
            value: '0'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            // eslint-disable-next-line quotes
            value: `script-src * 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com; img-src * data:;default-src *;`
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; preload; includeSubDomains'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
