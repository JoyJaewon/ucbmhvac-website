import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About UCBM HVAC Inc</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your trusted partner for all heating, ventilation, and air conditioning needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded with a commitment to excellence, UCBM HVAC Inc has been serving residential and commercial customers
            for over 10 years. Our journey began with a simple mission: to provide reliable, high-quality HVAC services
            at fair prices.
          </p>
          <p className="text-gray-600 mb-4">
            What started as a small family business has grown into a trusted name in the industry, thanks to our
            dedication to customer satisfaction and technical expertise. Today, we're proud to be one of the leading
            HVAC service providers in the region.
          </p>
          <p className="text-gray-600">
            Our team of certified technicians brings years of experience and a passion for quality workmanship to every
            project, whether it's a simple repair or a complete system installation.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/hvac-checkup.png"
            alt="UCBM HVAC Team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We believe in honest communication, transparent pricing, and doing what's right for our customers, even
              when it's not the most profitable option.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our business, from customer service to technical expertise,
              ensuring that each job is done right the first time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Reliability</h3>
            <p className="text-gray-600">
              Our customers can count on us to be there when we say we will, to provide accurate estimates, and to stand
              behind our work with solid warranties.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of technical expertise and safety
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">EPA Certified</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">NATE Certified</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Licensed Contractors</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">Fully Insured</h3>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white p-8 rounded-lg mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to experience the UCBM difference?</h2>
            <p className="mb-6">
              Whether you need installation, repair, or maintenance, our team is ready to provide you with exceptional
              service and solutions tailored to your needs.
            </p>
            <Link href="/quote">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Get Your Free Quote</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-700 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Installations Completed</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p>Years of Experience</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Satisfaction Guarantee</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p>Emergency Service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Our Service Area</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We proudly serve residential and commercial customers throughout the greater metropolitan area and surrounding
          communities.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <Image
              src="/DFW-MAP.jpg"
              alt="UCB HVAC Service Area"
              width={800}
              height={450}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
