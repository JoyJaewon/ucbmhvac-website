import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

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
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-16 items-start"
    >
      <div className="space-y-8">
        <div className="space-y-6">
          <motion.h2 
            initial={{ y: -20 }} 
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold text-gray-900 mb-3 flex items-center"
          >
            <span className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mr-4">
              {icon}
            </span>
            <span>{title}</span>
          </motion.h2>
          <div className="text-xl text-gray-700 font-medium">"{tagline}"</div>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ x: 50 }} 
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100"
      >
        <h3 className="text-2xl font-semibold mb-8 text-gray-900 pb-4 border-b border-gray-100">Our Services Include:</h3>
        <ul className="space-y-6">
          {services.map((service, index) => (
            <motion.li 
              key={index} 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="flex items-start"
            >
              <CheckCircle className="w-6 h-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-lg">{service}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
} 