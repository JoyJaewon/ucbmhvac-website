import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Home's Comfort?</h2>
          <p className="text-lg mb-8">
            Contact us today for a free consultation and quote. Our team of experts is ready to help you with all your HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <PhoneCall className="mr-2 h-5 w-5" />
              Call Now: (214) 555-1234
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 