import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact UCBM HVAC Service Experts</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer 24/7 Emergency Service to all of our customers. You can always count on UCBM HVAC Service Experts to get to you fast and get the job done right the first time. We use state-of-the-art diagnostic equipment to find the source of your heating and air conditioning problems and fix them fast.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Our Contact Phone</h3>
                  <p className="text-gray-600">Cell: 817-675-1031</p>
                  <p className="text-gray-600">Office: 972-808-7685</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Our Contact Email</h3>
                  <p className="text-gray-600">Junkim@ucbmhvac.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Our Office Location</h3>
                  <p className="text-gray-600">3007 Skyway Cir N, Irving, TX 75038</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-gray-600">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Our Service Area</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <Image
                src="/DFW-Map.jpg"
                alt="UCB HVAC Location"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
