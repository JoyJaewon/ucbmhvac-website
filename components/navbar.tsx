"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [activePath, setActivePath] = useState("/")

  // pathname이 변경될 때마다 activePath 업데이트
  useEffect(() => {
    if (pathname) {
      setActivePath(pathname)
    }
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // 경로 비교 함수를 개선합니다
  const isActive = (path: string) => {
    // 홈페이지는 정확히 "/" 일 때만 active
    if (path === "/") {
      return activePath === "/"
    }
    // 다른 페이지는 경로로 시작하는지 확인 (하위 경로도 포함)
    return activePath?.startsWith(path) ?? false
  }

  // 링크 클릭시 activePath를 미리 설정
  const handleLinkClick = (path: string) => {
    setActivePath(path)
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/95 md:bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" onClick={() => handleLinkClick("/")} className="flex items-center">
              <Image src="/ucbm-logo.png" alt="UCBM HVAC Logo" width={120} height={40} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                onClick={() => handleLinkClick("/")}
                className={`relative transition-colors duration-200 ${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </Link>
              <Link 
                href="/services" 
                onClick={() => handleLinkClick("/services")}
                className={`relative transition-colors duration-200 ${isActive('/services') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Services
                {isActive('/services') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </Link>
              <Link 
                href="/special-offers" 
                onClick={() => handleLinkClick("/special-offers")}
                className={`relative transition-colors duration-200 ${isActive('/special-offers') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Special Offers
                {isActive('/special-offers') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </Link>
              <Link 
                href="/about" 
                onClick={() => handleLinkClick("/about")}
                className={`relative transition-colors duration-200 ${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                About
                {isActive('/about') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </Link>
              <Link 
                href="/contact" 
                onClick={() => handleLinkClick("/contact")}
                className={`relative transition-colors duration-200 ${isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Contact
                {isActive('/contact') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-[9999] md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center h-16 px-4 border-b">
              <Link 
                href="/" 
                onClick={() => handleLinkClick("/")}
                className="flex items-center"
              >
                <Image src="/ucbm-logo.png" alt="UCBM HVAC Logo" width={120} height={40} />
              </Link>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-4 space-y-4">
              <Link
                href="/"
                onClick={() => handleLinkClick("/")}
                className={`text-lg md:text-2xl font-medium flex items-center ${isActive('/') ? 'text-blue-600' : 'text-gray-900 hover:text-gray-600'}`}
              >
                Home
                {isActive('/') && (
                  <span className="ml-2 w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </Link>
              <Link
                href="/services"
                onClick={() => handleLinkClick("/services")}
                className={`text-lg md:text-2xl font-medium flex items-center ${isActive('/services') ? 'text-blue-600' : 'text-gray-900 hover:text-gray-600'}`}
              >
                Services
                {isActive('/services') && (
                  <span className="ml-2 w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </Link>
              <Link
                href="/special-offers"
                onClick={() => handleLinkClick("/special-offers")}
                className={`text-lg md:text-2xl font-medium flex items-center ${isActive('/special-offers') ? 'text-blue-600' : 'text-gray-900 hover:text-gray-600'}`}
              >
                Special Offers
                {isActive('/special-offers') && (
                  <span className="ml-2 w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </Link>
              <Link
                href="/about"
                onClick={() => handleLinkClick("/about")}
                className={`text-lg md:text-2xl font-medium flex items-center ${isActive('/about') ? 'text-blue-600' : 'text-gray-900 hover:text-gray-600'}`}
              >
                About
                {isActive('/about') && (
                  <span className="ml-2 w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </Link>
              <Link
                href="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={`text-lg md:text-2xl font-medium flex items-center ${isActive('/contact') ? 'text-blue-600' : 'text-gray-900 hover:text-gray-600'}`}
              >
                Contact
                {isActive('/contact') && (
                  <span className="ml-2 w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 