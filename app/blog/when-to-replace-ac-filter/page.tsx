import Image from "next/image"
import Link from "next/link"

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-6">When to Replace Your AC Filter</h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <span>April 5, 2025</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>

          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?key=v9ohd"
              alt="AC Filter Replacement"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Your air conditioning filter plays a crucial role in maintaining your system's efficiency and your home's air quality. 
              But how do you know when it's time to replace it?
            </p>

            <h2>Signs Your AC Filter Needs Replacement</h2>
            <ul>
              <li>Reduced airflow from your vents</li>
              <li>Increased energy bills</li>
              <li>Dust accumulation around your home</li>
              <li>Allergy symptoms worsening</li>
              <li>Visible dirt and debris on the filter</li>
            </ul>

            <h2>How Often Should You Replace Your Filter?</h2>
            <p>
              The general rule of thumb is to replace your AC filter every 1-3 months. However, several factors can affect this timeline:
            </p>
            <ul>
              <li>Type of filter (fiberglass, pleated, HEPA)</li>
              <li>Number of pets in your home</li>
              <li>Local air quality</li>
              <li>Frequency of system use</li>
            </ul>

            <h2>Benefits of Regular Filter Replacement</h2>
            <ul>
              <li>Improved indoor air quality</li>
              <li>Lower energy costs</li>
              <li>Extended system lifespan</li>
              <li>Better cooling performance</li>
              <li>Reduced maintenance needs</li>
            </ul>

            <h2>How to Replace Your AC Filter</h2>
            <ol>
              <li>Turn off your HVAC system</li>
              <li>Locate the filter compartment</li>
              <li>Remove the old filter</li>
              <li>Note the airflow direction arrow on the new filter</li>
              <li>Insert the new filter with the arrow pointing toward the blower</li>
              <li>Close the compartment and turn the system back on</li>
            </ol>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Need Professional Help?</h3>
              <p>
                If you're unsure about your filter type or replacement process, our HVAC experts are here to help. 
                Contact us today for professional advice and service.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
} 