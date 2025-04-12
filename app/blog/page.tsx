import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "HVAC Tips & Insights | UCBM HVAC Blog",
  description: "Expert advice, maintenance tips, and industry insights to help you get the most from your HVAC system.",
  keywords: [
    "HVAC tips",
    "air conditioning advice",
    "heating system maintenance",
    "energy efficiency tips",
    "Dallas HVAC blog",
    "home comfort solutions"
  ],
  openGraph: {
    title: "HVAC Tips & Insights | UCBM HVAC Blog",
    description: "Expert advice, maintenance tips, and industry insights to help you get the most from your HVAC system.",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">HVAC Tips & Insights</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Expert advice, maintenance tips, and industry insights to help you get the most from your HVAC system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video relative">
                <Image 
                  src={index === 0 ? "/hvac-checkup.png" : post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <h2 className="text-xl font-bold">{post.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/quote"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  )
}
