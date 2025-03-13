import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type ServiceCardProps = {
  icon: string
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 w-full lg:w-1/4 h-full p-6 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="relative w-16 h-16 lg:w-24 lg:h-24">
        <Image src={icon || "/placeholder.svg"} alt={`${title} Icon`} fill className="object-contain" />
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold">{title}</h3>
      <p className="text-lg lg:text-xl font-light">{description}</p>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <div className="flex flex-col justify-center my-16 lg:my-24 gap-8 px-4">
      <h2 className="text-4xl lg:text-6xl font-bold text-primary text-center">Services</h2>
      <div className="flex flex-col lg:flex-row lg:justify-center justify-center items-center gap-10 lg:gap-20 w-full py-10 px-4 lg:px-10">
        <ServiceCard
          icon="/images/medicine.svg"
          title="Personal Care"
          description="Tailored personal care services designed to meet individual needs, including assistance with daily living activities."
        />
        <ServiceCard
          icon="/images/stand-out.svg"
          title="Domestic Care"
          description="Comprehensive domestic support to help with household tasks and ensure a safe and comfortable living environment."
        />
        <ServiceCard
          icon="/images/sweet-home.svg"
          title="Specialized Care"
          description="Expert care services tailored to specific conditions or needs, providing the highest level of support and attention."
        />
      </div>
      <div className="flex justify-center mt-4">
        <Button asChild size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </div>
  )
}

