import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const offers = [
  {
    id: 1,
    title: "Spring AC Tune-Up Special",
    description: "Get your air conditioning system ready for summer with our comprehensive tune-up service.",
    originalPrice: "$149",
    salePrice: "$99",
    savings: "Save $50",
    features: [
      "Complete system inspection",
      "Clean condenser coils",
      "Check refrigerant levels",
      "Inspect electrical components",
      "Replace standard air filter",
    ],
    validUntil: "May 31, 2025",
    image: "/ac-tune-up.png",
  },
  {
    id: 2,
    title: "New AC Installation",
    description: "Upgrade to an energy-efficient air conditioning system and start saving on your utility bills.",
    originalPrice: "$3,999",
    salePrice: "$3,499",
    savings: "Save $500",
    features: [
      "Free in-home consultation",
      "Professional installation",
      "Removal of old system",
      "1-year labor warranty",
      "5-year parts warranty",
    ],
    validUntil: "June 30, 2025",
    image: "/residential-hvac-install.png",
  },
  {
    id: 3,
    title: "Duct Cleaning Special",
    description: "Improve your indoor air quality with our professional duct cleaning service.",
    originalPrice: "$399",
    salePrice: "$299",
    savings: "Save $100",
    features: [
      "Complete duct system cleaning",
      "Sanitization treatment",
      "Before & after inspection",
      "Improved air quality",
      "Enhanced system efficiency",
    ],
    validUntil: "July 15, 2025",
    image: "/modern-climate-control.png",
  },
]

export default function SpecialOfferPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take advantage of our limited-time promotions and save on professional HVAC services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {offer.savings}
              </div>
            </div>
            <CardHeader>
              <CardTitle>{offer.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{offer.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">{offer.salePrice}</span>
                <span className="text-gray-500 line-through">{offer.originalPrice}</span>
              </div>
              <ul className="space-y-2">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">Valid until: {offer.validUntil}</p>
            </CardContent>
            <CardFooter>
              <Link href="/quote" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get This Offer</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Customer Success Stories</h2>
          <p className="text-gray-600">See what our customers have to say about our special offers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/placeholder.svg?key=19n5i" alt="Customer" width={60} height={60} className="rounded-full" />
              <div>
                <h3 className="font-medium">Robert Johnson</h3>
                <p className="text-sm text-gray-500">Dallas, TX</p>
              </div>
            </div>
            <p className="text-gray-600">
              "I took advantage of the AC tune-up special and couldn't be happier. The technician was professional and
              thorough. My system is running more efficiently than ever, and I'm already seeing savings on my energy
              bill!"
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/placeholder.svg?key=rb69d" alt="Customer" width={60} height={60} className="rounded-full" />
              <div>
                <h3 className="font-medium">Jennifer Williams</h3>
                <p className="text-sm text-gray-500">Houston, TX</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The new AC installation offer saved us a significant amount of money. The team was professional from
              consultation to installation. Our new system is whisper-quiet and keeps our home perfectly comfortable."
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm text-left">
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Offers cannot be combined with other promotions or discounts.</li>
            <li>• Pricing valid for residential customers only.</li>
            <li>• Additional charges may apply for homes over 3,000 square feet.</li>
            <li>• Offers valid until the specified date or while supplies last.</li>
            <li>• UCBM HVAC Inc reserves the right to modify or cancel promotions at any time.</li>
            <li>• Please contact our office for complete details and to schedule service.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/quote">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">Get Your Quote Today</Button>
        </Link>
      </div>
    </div>
  )
} 