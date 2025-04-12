import { BlogPost } from "@/types/blog"

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "When to Replace Your AC Filter (Dallas Guide)",
    excerpt: "Learn when to replace your AC filter in Dallas's hot summers. Our guide covers filter types, replacement frequency, and signs of a dirty filter.",
    content: `
      <h2>When to Replace Your AC Filter in Dallas</h2>
      <p>As a Dallas homeowner, you know how crucial your AC system is during our hot Texas summers. One of the most important maintenance tasks is regularly replacing your AC filter. But how often should you do it?</p>

      <h3>Recommended Replacement Schedule</h3>
      <ul>
        <li>1-inch filters: Every 1-2 months</li>
        <li>4-inch filters: Every 3-4 months</li>
        <li>5-inch filters: Every 6 months</li>
      </ul>

      <h3>Signs Your Filter Needs Replacement</h3>
      <ul>
        <li>Reduced airflow from vents</li>
        <li>Higher energy bills</li>
        <li>Dust buildup in your home</li>
        <li>AC system running longer than usual</li>
      </ul>

      <h3>Best Filter Types for Dallas Homes</h3>
      <p>For our Dallas climate, we recommend:</p>
      <ul>
        <li>MERV 8-11 for most homes</li>
        <li>HEPA filters for allergy sufferers</li>
        <li>Washable filters for eco-friendly options</li>
      </ul>
    `,
    image: "/images/blog/ac-filter.jpg",
    date: "2024-04-12",
    readTime: "5 min read",
    slug: "when-to-replace-ac-filter-dallas",
    metadata: {
      title: "When to Replace Your AC Filter in Dallas | UCB HVAC",
      description: "Learn when to replace your AC filter in Dallas's hot summers. Our guide covers filter types, replacement frequency, and signs of a dirty filter.",
      keywords: ["replace AC filter", "when to change air filter", "Dallas HVAC", "AC maintenance Dallas", "air filter replacement"]
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "When to Replace Your AC Filter (Dallas Guide)",
      "datePublished": "2024-04-12",
      "description": "Learn when to replace your AC filter in Dallas's hot summers. Our guide covers filter types, replacement frequency, and signs of a dirty filter.",
      "keywords": "replace AC filter, when to change air filter, Dallas HVAC, AC maintenance Dallas, air filter replacement",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ucbmhvac.com/blog/when-to-replace-ac-filter-dallas"
      },
      "author": {
        "@type": "Organization",
        "name": "UCB HVAC"
      },
      "publisher": {
        "@type": "Organization",
        "name": "UCB HVAC",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ucbmhvac.com/logo.png"
        }
      }
    }
  },
  // 다른 블로그 포스트들도 같은 형식으로 추가
] 