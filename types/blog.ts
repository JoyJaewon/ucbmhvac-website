export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: string
  slug: string
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
  jsonLd: {
    "@context": string
    "@type": string
    headline: string
    datePublished: string
    description: string
    keywords: string
    mainEntityOfPage: {
      "@type": string
      "@id": string
    }
    author: {
      "@type": string
      name: string
    }
    publisher: {
      "@type": string
      name: string
      logo: {
        "@type": string
        url: string
      }
    }
  }
} 