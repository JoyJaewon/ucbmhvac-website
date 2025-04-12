"use client"

import { Button } from "@/components/ui/button"

export default function PageHeader() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Services
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
              "Trust your comfort to licensed HVAC specialists with 100+ successful installations"
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              We are a certified, fully licensed HVAC team serving both residential and commercial properties across the
              <span className="font-semibold text-blue-600"> DFW area</span>. From 7-Eleven stores to cell phone retail branches, we've handled it all — reliably,
              professionally, and affordably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium">
                Get your free quote today
              </Button>
              <p className="text-sm text-gray-500">No pressure, no hidden fees.</p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.6007203085!2d-97.13401119999999!3d32.8205865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c5952b%3A0x1eaa25ce2f9f5a40!2sDallas-Fort%20Worth%20Metplex!5e0!3m2!1sen!2sus!4v1712900000000!5m2!1sen!2sus&z=8"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
              <div className="text-center p-6 bg-white/90 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Service Area</h3>
                <p className="text-gray-700">Serving Dallas, Fort Worth, Denton, Arlington & surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 