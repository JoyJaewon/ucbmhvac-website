import { Button } from "@/components/ui/button"
import { Shield, Award, CheckCircle, DollarSign, ClipboardCheck } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      title: "Certified HVAC Specialists",
      description: "Our team consists of fully trained and certified HVAC professionals."
    },
    {
      icon: <Award className="w-5 h-5 text-blue-600" />,
      title: "Licensed & Insured",
      description: "We're fully licensed and insured for your peace of mind."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      title: "EPA Certified",
      description: "We follow all environmental regulations and best practices."
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
      title: "Free, no-obligation quote",
      description: "Get a detailed estimate before any work begins."
    },
    {
      icon: <DollarSign className="w-5 h-5 text-blue-600" />,
      title: "Fair & transparent pricing",
      description: "No hidden fees or surprise charges."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 font-light">
            "Let a professional handle your comfort — at a price that makes sense."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-50 p-2 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Get your instant quote today and experience our top-notch HVAC services.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium">
            Get Instant Quote
          </Button>
        </div>
      </div>
    </section>
  )
} 