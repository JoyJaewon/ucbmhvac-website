import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const phoneNumber = "817-675-1031" // 실제 전화번호로 업데이트

  return (
    <section className="py-16 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Home's Comfort?</h2>
          <p className="text-lg mb-8">
            Contact us today for a free consultation and quote. Our team of experts is ready to help you with all your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`tel:${phoneNumber}`} passHref>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Now: {phoneNumber}
              </Button>
            </Link>
            <Link href="/quote" passHref>
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white w-full sm:w-auto border-2 border-white">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 