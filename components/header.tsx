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
    <div className="w-full bg-white shadow-sm">
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
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
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </div>
              <Link href="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Instant Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
