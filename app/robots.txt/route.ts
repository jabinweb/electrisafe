export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Block admin area
Disallow: /admin
Disallow: /api

# Sitemaps
Sitemap: https://electrisafe.in/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
