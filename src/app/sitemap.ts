import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ekobayu.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
    // {
    //   url: 'https://ekobayu.github.io/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8
    // },
    // {
    //   url: 'https://ekobayu.github.io/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5
    // }
  ]
}
