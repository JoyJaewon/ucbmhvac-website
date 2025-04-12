import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700">Return Home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  )
}
