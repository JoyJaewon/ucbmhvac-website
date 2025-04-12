"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Snowflake, Flame, Wind, Building } from "lucide-react"
import ServiceContent from "@/components/services/ServiceContent"
import { useEffect } from "react"

export default function ServiceTabs() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const tab = document.querySelector(`[data-value="${hash}"]`) as HTMLButtonElement
      if (tab) {
        tab.click()
      }
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <Tabs defaultValue="cooling" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-50 p-1 rounded-lg">
          <TabsTrigger 
            value="cooling" 
            data-value="cooling"
            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            <Snowflake className="h-4 w-4" />
            <span className="hidden sm:inline">Cooling</span>
          </TabsTrigger>
          <TabsTrigger 
            value="heating" 
            data-value="heating"
            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            <Flame className="h-4 w-4" />
            <span className="hidden sm:inline">Heating</span>
          </TabsTrigger>
          <TabsTrigger 
            value="air-duct" 
            data-value="air-duct"
            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            <Wind className="h-4 w-4" />
            <span className="hidden sm:inline">Air Duct</span>
          </TabsTrigger>
          <TabsTrigger 
            value="new-construction" 
            data-value="new-construction"
            className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
          >
            <Building className="h-4 w-4" />
            <span className="hidden sm:inline">New Construction</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cooling" className="mt-8">
          <ServiceContent
            icon={<Snowflake className="w-6 h-6 text-blue-600" />}
            title="Cooling Services"
            tagline="This is what we do best."
            description="Keep your space cool with precision. We specialize in central A/C installation, repair, and mini-split systems for both homes and businesses. Whether it's replacing an outdated system or setting up a brand-new one, we do it right — the first time."
            badges={[
              "🧰 Handled over 100+ installations across Texas",
              "🔧 Licensed Contractors | EPA Certified"
            ]}
            services={[
              "Central A/C Installation & Replacement",
              "Mini-Split Cooling Units",
              "Emergency A/C Repair",
              "Seasonal Tune-Ups & Maintenance"
            ]}
          />
        </TabsContent>

        <TabsContent value="heating" className="mt-8">
          <ServiceContent
            icon={<Flame className="w-6 h-6 text-blue-600" />}
            title="Heating Services"
            tagline="Stay warm when it matters most."
            description="Reliable heating systems for winter comfort. We install and repair furnaces, heat pumps, and commercial package units tailored to your space."
            badges={[
              "🌡️ Efficient, energy-saving options available"
            ]}
            services={[
              "Heating System Installation",
              "Furnace & Heat Pump Repair",
              "Heating Replacement",
              "Commercial Heating Systems"
            ]}
          />
        </TabsContent>

        <TabsContent value="air-duct" className="mt-8">
          <ServiceContent
            icon={<Wind className="w-6 h-6 text-blue-600" />}
            title="Air Duct Services"
            tagline="Airflow done right."
            description="Proper ductwork means better comfort and lower bills. We repair, replace, and install air ducts to maximize efficiency and ensure balanced airflow in every room."
            badges={[
              "💨 Boost airflow. Improve air quality."
            ]}
            services={[
              "Air Duct Installation",
              "Duct Repair & Replacement",
              "Spiral Duct Installation (for commercial use)"
            ]}
          />
        </TabsContent>

        <TabsContent value="new-construction" className="mt-8">
          <ServiceContent
            icon={<Building className="w-6 h-6 text-blue-600" />}
            title="New Construction HVAC"
            tagline="Start strong with a system that lasts."
            description="Planning a new build? We'll work with you from design to installation to ensure your HVAC system is done right from day one."
            badges={[
              "🏗️ Builders welcome. We work on schedule and on budget."
            ]}
            services={[
              "Custom HVAC Design",
              "System Installation for New Homes & Buildings",
              "Commercial Package HVAC Units"
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
} 