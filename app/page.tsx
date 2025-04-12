"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ReviewCard from "@/components/review-card"
import ContactForm from "@/components/contact-form"
import { Wrench, Fan, ClipboardCheck } from "lucide-react"
import HeroSlider from "@/components/HeroSlider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Thomas H",
    text: "Pleasant experience with UCBM HVAC! I was looking for a technically sounding A/C consultation and away unnecessary sales pitch you typically get from most of the HVAC companies. Jun delivered just that and more. I highly recommend Jun and UCBM for HVAC needs.",
  },
  {
    id: 2,
    name: "Debbie Park",
    text: "Best HVAC company! My AC wasn't working in the middle of summer and Jun easily fixed the issue. I haven't had an AC problem since then. Great service and super professional.",
  },
  {
    id: 3,
    name: "Ashley Corrine",
    text: "Professional and great fast service company ever! Better price, always good communication and fast answer even on the weekend 🙂",
  },
  {
    id: 4,
    name: "Paul Kim",
    text: "The best customer service.",
  },
]

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <main>
      <HeroSlider />

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Our Services</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">Professional HVAC solutions for your comfort</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={<Fan className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Installation"
              description="Expert installation of HVAC systems for residential and commercial properties."
              link="/services/cooling"
            />
            <ServiceCard
              icon={<Wrench className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Repair"
              description="Fast and reliable repair services for all types of HVAC systems."
              link="/services/heating"
            />
            <ServiceCard
              icon={<ClipboardCheck className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />}
              title="Maintenance"
              description="Regular maintenance to keep your HVAC system running efficiently."
              link="/services/air-duct"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">What Our Customers Say</h2>
            <p className="text-sm md:text-base text-gray-600">Hear from our satisfied customers</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="text-center mb-4 md:mb-6">
                <div className="flex justify-center mb-2 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{reviews[currentReview].name}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 text-center italic leading-relaxed">
                "{reviews[currentReview].text}"
              </p>
            </div>

            <div className="flex justify-center mt-6 md:mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevReview}
                className="rounded-full h-10 w-10 md:h-12 md:w-12 hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextReview}
                className="rounded-full h-10 w-10 md:h-12 md:w-12 hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Ready to improve your comfort? Contact us today!</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-700">Cell: 817-675-1031</p>
                        <p className="text-gray-700">Office: 972-808-7685</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a href="mailto:Junkim@ucbmhvac.com" className="text-blue-600 hover:text-blue-700">
                      Junkim@ucbmhvac.com
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Address</h3>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">3007 Skyway Cir N, Irving, TX 75038</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
