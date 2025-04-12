"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    image: "/hvac-checkup.png",
    title: "Keeping you comfortable all year round",
    description: "Trust your comfort to licensed HVAC specialists with 10+ years of experience",
  },
  {
    image: "/ac-tune-up.png",
    title: "Expert HVAC Solutions",
    description: "Professional installation, repair, and maintenance services",
  },
  {
    image: "/modern-climate-control.png",
    title: "24/7 Emergency Service",
    description: "Fast response times for all your HVAC emergencies",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in whitespace-nowrap">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay whitespace-nowrap">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Fixed CTA Buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium">
                Get Instant Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-medium">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 