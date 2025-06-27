import { MetadataRoute } from 'next';

// Certifique-se de que esta URL base seja a URL de produção do seu site.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  // Lista de todas as páginas estáticas e principais
  const staticPages = [
    { url: '/', changeFrequency: 'daily', priority: 1.0 },
    { url: '/sobre-nos', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/ajuda', changeFrequency: 'monthly', priority: 0.6 },
    { url: '/contato', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/seguros/vida', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/seguros/viagem', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/seguros/odontologico', changeFrequency: 'monthly', priority: 0.8 },
    // Adicione outras páginas estáticas aqui se necessário
    // Ex: { url: '/termos-de-uso', changeFrequency: 'yearly', priority: 0.3 },
    // Ex: { url: '/politica-de-privacidade', changeFrequency: 'yearly', priority: 0.3 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: lastModified, // Ou uma data específica se a página raramente muda
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'], // Cast para o tipo correto
    priority: page.priority,
  }));

  // Se você tivesse páginas dinâmicas (ex: blog posts), você as buscaria e adicionaria aqui.
  // Exemplo:
  // const blogPosts = await fetch('...').then(res => res.json());
  // const blogPostEntries = blogPosts.map(post => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }));
  // return [...sitemapEntries, ...blogPostEntries];

  return sitemapEntries;
}
