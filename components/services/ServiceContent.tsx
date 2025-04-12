import { CheckCircle } from "lucide-react"

interface ServiceContentProps {
  icon: React.ReactNode
  title: string
  tagline: string
  description: string
  badges: string[]
  services: string[]
}

export default function ServiceContent({
  icon,
  title,
  tagline,
  description,
  badges,
  services
}: ServiceContentProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center">
            {icon}
            <span className="ml-3">{title}</span>
          </h2>
          <div className="text-xl text-gray-600 mb-4 font-light italic">"{tagline}"</div>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-3">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Services Include:</h3>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 