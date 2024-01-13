import { MetadataRoute } from 'next';
import { domain } from '~/lib/user_details';
import { getWritings } from '~/lib/writings';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const writing = getWritings().map((writing) => ({
    url: `https://${domain}/writing/${writing.slug}`,
    lastModified: writing.metadata.publishedAt
  }));

  const links = ['', '/writing'];

  let routes = links.map((route) => ({
    url: `https://${domain}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...writing];
}
