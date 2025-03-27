import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dev-blogs.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://dev-blogs.com/agency',
      lastModified: new Date(),
    },
    {
      url: 'https://dev-blogs.com/post/the-future-of-web3',
      lastModified: new Date(),
    },
    {
      url: 'https://dev-blogs.com/post/the-rise-of-artificial-intelligence',
      lastModified: new Date(),
    },
    {
      url: 'https://dev-blogs.com/post/single-page-applications-spas',
      lastModified: new Date(),
    },
    // Add more routes as needed
  ]
}
