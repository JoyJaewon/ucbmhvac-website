import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/ucbm-logo.png"
                alt="UCBM HVAC Inc Logo"
                width={150}
                height={50}
              />
            </Link>
            <p className="text-gray-400 mb-4">Keeping you comfortable all year round</p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/ucbmhvac" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/special-offers" className="text-gray-400 hover:text-white">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#cooling" className="text-gray-400 hover:text-white">
                  Cooling
                </Link>
              </li>
              <li>
                <Link href="/services#heating" className="text-gray-400 hover:text-white">
                  Heating
                </Link>
              </li>
              <li>
                <Link href="/services#air-duct" className="text-gray-400 hover:text-white">
                  Air Duct
                </Link>
              </li>
              <li>
                <Link href="/services#new-construction" className="text-gray-400 hover:text-white">
                  New Construction
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span>817-675-1031</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span>Junkim@ucbmhvac.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span>3007 Skyway Cir N, Irving, TX 75038</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} UCBM HVAC Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
