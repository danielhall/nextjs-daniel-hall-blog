import type { MetadataRoute } from 'next'
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] {
  slug,
  _updatedAt
} | order(_updatedAt desc)`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<Array<{ slug: { current: string }, _updatedAt: string }>>(POSTS_QUERY);

  const routes: MetadataRoute.Sitemap = [
    {
      url: 'https://danieljh.uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://danieljh.uk/experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://danieljh.uk/articles',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const articleRoutes = posts.map(post => ({
    url: `https://danieljh.uk/articles/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...articleRoutes];
}