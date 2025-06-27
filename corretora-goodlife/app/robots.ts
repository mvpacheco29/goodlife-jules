// app/robots.ts
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow: '/private/', // Exemplo de como desabilitar rotas específicas
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    // host: BASE_URL, // Opcional, alguns crawlers ainda usam, mas sitemap é preferível
  };
}
