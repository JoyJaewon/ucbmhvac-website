"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white/95 md:bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/ucbm-logo.png"
                alt="UCBM HVAC Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600">
                Services
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/special-offers" className="text-gray-600 hover:text-gray-900">
                Special Offers
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/quote">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Instant Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 w-full bg-white shadow-lg z-[9999] md:hidden transform transition-transform duration-300 ease-in-out">
          <div className="px-4 py-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className="mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
                  Get Instant Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
