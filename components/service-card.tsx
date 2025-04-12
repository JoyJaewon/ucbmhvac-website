import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow mb-8">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
