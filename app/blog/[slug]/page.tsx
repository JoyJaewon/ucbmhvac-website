import { Metadata } from "next"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    slug: "when-to-replace-ac-filter-dallas",
    title: "When to Replace Your AC Filter (Dallas Guide)",
    description: "Learn when and how often to replace your AC filter in Dallas, including factors that affect replacement frequency and signs that your filter needs changing.",
    content: "ACFilterReplacement",
    date: "2024-04-12",
    readTime: "5 min read",
    image: "/hvac-checkup.png"
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = await params.slug
  const post = blogPosts.find((post) => post.slug === slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found."
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["UCBM HVAC"],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const slug = await params.slug
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const Content = require(`@/components/blog/${post.content}`).default

  return (
    <main className="container mx-auto px-4 py-8">
      <Content />
    </main>
  )
} 