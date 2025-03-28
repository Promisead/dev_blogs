import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://blogs.dev-champions.tech/',
      lastModified: new Date(),
    },
    {
      url: 'https://jobs.dev-champions.tech',
      lastModified: new Date(),
    },
    {
      url: 'https://dev-champions.tech',
      lastModified: new Date(),
    },
    {
      url: 'https://blogs.dev-champions.tech',
      lastModified: new Date(),
    },
    {
      url: 'https://blogs.dev-champions.tech/agency',
      lastModified: new Date(),
    },
    {
      url: 'https://blogs.dev-champions.tech/post/the-future-of-web3',
      lastModified: new Date(),
    },
    {
      url: 'https://blogs.dev-champions.tech/post/the-rise-of-artificial-intelligence',
      lastModified: new Date(),
    },
    {
      url: 'https://blogs.dev-champions.tech/post/single-page-applications-spas',
      lastModified: new Date(),
    },
    // Add more routes as needed
  ]
}
