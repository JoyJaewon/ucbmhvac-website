"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Camera, Home, Building2, Snowflake, Split, Flame, HelpCircle } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    propertyType: "",
    systemType: "",
    propertySize: "",
    locationType: "",
    timeline: "",
  })
  const [showQuote, setShowQuote] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowQuote(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Get Your Instant Quote
          </h1>
          <p className="text-gray-600 text-lg">Complete the form below for a personalized installation quote</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg mb-12 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">What You Can Expect From UCBM HVAC</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="space-y-4 text-gray-700">
                <p>
                  We believe in transparency. While repair jobs require on-site diagnostics before quoting—
                  installations are different.
                </p>
                <p>
                  For HVAC installations, we can provide you with a guaranteed instant quote based on a few quick questions.
                  No surprises. No hidden costs. That's our promise.
                </p>
                <p>
                  We've completed 500+ installations across DFW with honest pricing and no fine print.
                  Let us show you what stress-free HVAC service looks like.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/bear1.png" 
                alt="UCBM HVAC Bear" 
                width={300} 
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>

        {!showQuote ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl">Installation Quote Request</CardTitle>
                <CardDescription>
                  Step {step} of 5
                  <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / 5) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className="bg-blue-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium pt-4">What type of property is this for?</h2>
                      <RadioGroup
                        value={formData.propertyType}
                        onValueChange={(value) => handleRadioChange("propertyType", value)}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="residential" id="residential" />
                          <Label htmlFor="residential" className="flex-1 cursor-pointer flex items-center gap-2">
                            <Home className="h-5 w-5 text-gray-600" />
                            Residential
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="commercial" id="commercial" />
                          <Label htmlFor="commercial" className="flex-1 cursor-pointer flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-gray-600" />
                            Commercial
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium pt-4">Which system would you like to install?</h2>
                      <RadioGroup
                        value={formData.systemType}
                        onValueChange={(value) => handleRadioChange("systemType", value)}
                        className="grid grid-cols-1 gap-4"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="central-ac" id="central-ac" />
                          <Label htmlFor="central-ac" className="flex-1 cursor-pointer flex items-center gap-2">
                            <Snowflake className="h-5 w-5 text-gray-600" />
                            Central A/C
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="mini-split" id="mini-split" />
                          <Label htmlFor="mini-split" className="flex-1 cursor-pointer flex items-center gap-2">
                            <Split className="h-5 w-5 text-gray-600" />
                            Mini-Split System
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="furnace" id="furnace" />
                          <Label htmlFor="furnace" className="flex-1 cursor-pointer flex items-center gap-2">
                            <Flame className="h-5 w-5 text-gray-600" />
                            Furnace (for heating)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="not-sure" id="not-sure" />
                          <Label htmlFor="not-sure" className="flex-1 cursor-pointer flex items-center gap-2">
                            <HelpCircle className="h-5 w-5 text-gray-600" />
                            Not sure yet
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium pt-4">How large is your space?</h2>
                      <RadioGroup
                        value={formData.propertySize}
                        onValueChange={(value) => handleRadioChange("propertySize", value)}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="less-1000" id="less-1000" />
                          <Label htmlFor="less-1000" className="flex-1 cursor-pointer">
                            Less than 1,000 sq ft
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="1000-2000" id="1000-2000" />
                          <Label htmlFor="1000-2000" className="flex-1 cursor-pointer">
                            1,000 – 2,000 sq ft
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="2000-3000" id="2000-3000" />
                          <Label htmlFor="2000-3000" className="flex-1 cursor-pointer">
                            2,000 – 3,000 sq ft
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="3000-plus" id="3000-plus" />
                          <Label htmlFor="3000-plus" className="flex-1 cursor-pointer">
                            3,000+ sq ft
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium pt-4">Where is the system being installed? (Optional)</h2>
                      <RadioGroup
                        value={formData.locationType}
                        onValueChange={(value) => handleRadioChange("locationType", value)}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="single-family" id="single-family" />
                          <Label htmlFor="single-family" className="flex-1 cursor-pointer">
                            Single-family home
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="apartment" id="apartment" />
                          <Label htmlFor="apartment" className="flex-1 cursor-pointer">
                            Apartment / Condo
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="retail" id="retail" />
                          <Label htmlFor="retail" className="flex-1 cursor-pointer">
                            Retail / Storefront
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="warehouse" id="warehouse" />
                          <Label htmlFor="warehouse" className="flex-1 cursor-pointer">
                            Warehouse / Industrial
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium pt-4">When do you need the installation?</h2>
                      <RadioGroup
                        value={formData.timeline}
                        onValueChange={(value) => handleRadioChange("timeline", value)}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="asap" id="asap" />
                          <Label htmlFor="asap" className="flex-1 cursor-pointer">
                            ASAP (Emergency)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="within-week" id="within-week" />
                          <Label htmlFor="within-week" className="flex-1 cursor-pointer">
                            Within 1 week
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="within-month" id="within-month" />
                          <Label htmlFor="within-month" className="flex-1 cursor-pointer">
                            Within a month
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                          <RadioGroupItem value="planning" id="planning" />
                          <Label htmlFor="planning" className="flex-1 cursor-pointer">
                            Just planning for now
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 && (
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                )}
                {step < 5 ? (
                  <Button className="ml-auto" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button className="ml-auto" onClick={handleSubmit}>
                    Get Quote
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Here's your personalized quote!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$3,000 – $5,000</div>
                <p className="text-sm text-gray-500">
                  Final pricing may vary slightly based on on-site conditions.
                  <br />
                  No hidden fees. No surprise charges.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 py-6">Send Full Quote via Email</Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 py-6">
                  Talk to an Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-8 md:p-12">
              <h2 className="text-xl font-medium text-gray-900 mb-3">Not Sure What System You Need?</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Take a picture of your current HVAC system and send it to us —<br />
                We'll send you a personalized quote within 1 hour.
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <Camera className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Text us your photo at <span className="font-medium text-gray-900">817-675-1031</span></span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <span className="text-sm text-blue-600">or</span>
                  </div>
                  <span className="text-sm">Email us at <span className="font-medium text-gray-900">Junkim@ucbmhvac.com</span></span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-gray-50 p-8 md:p-12 border-t md:border-t-0 md:border-l border-gray-100">
              <h3 className="text-base font-medium text-gray-500 uppercase tracking-wider mb-4">Guaranteed</h3>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-600">No hidden costs</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-600">No extra fees after installation</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-gray-600">100% transparent pricing</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
