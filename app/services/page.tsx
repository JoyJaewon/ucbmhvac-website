import PageHeader from "@/components/services/PageHeader"
import ServiceTabs from "@/components/services/ServiceTabs"
import WhyChooseUs from "@/components/services/WhyChooseUs"
import CallToAction from "@/components/services/CallToAction"

export default function ServicesPage() {
  return (
    <main>
      <PageHeader />
      <ServiceTabs />
      <WhyChooseUs />
      <CallToAction />
    </main>
  )
}
