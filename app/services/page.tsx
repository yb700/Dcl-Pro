import Image from "next/image"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type ServiceCardProps = {
  title: string
  description: string
  icon: string
  features: string[]
}

function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative w-16 h-16">
          <Image src={icon || "/placeholder.svg"} alt={`${title} Icon`} fill className="object-contain" />
        </div>
        <div>
          <CardTitle className="text-2xl text-primary">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-16 py-32 px-4">
      <h1 className="text-4xl lg:text-6xl text-primary font-bold">Our Services</h1>

      <div className="max-w-6xl w-full">
        <p className="text-xl text-center mb-12">
          At DCL-PRO Services, we provide a range of personalized care services designed to meet the unique needs of
          each client. Our dedicated team of professionals is committed to delivering high-quality care with compassion
          and respect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Personal Care"
            description="Assistance with daily living activities"
            icon="/images/medicine.svg"
            features={[
              "Bathing and personal hygiene assistance",
              "Dressing and grooming support",
              "Medication reminders and management",
              "Mobility assistance and transfers",
              "Continence care and support",
            ]}
          />

          <ServiceCard
            title="Domestic Care"
            description="Support with household management"
            icon="/images/stand-out.svg"
            features={[
              "Light housekeeping and cleaning",
              "Laundry and ironing services",
              "Meal planning and preparation",
              "Shopping and errands assistance",
              "Home organization and maintenance",
            ]}
          />

          <ServiceCard
            title="Specialized Care"
            description="Expert care for specific conditions"
            icon="/images/sweet-home.svg"
            features={[
              "Dementia and Alzheimer's care",
              "Post-hospital recovery support",
              "Palliative and end-of-life care",
              "Disability support services",
              "Respite care for family caregivers",
            ]}
          />

          <ServiceCard
            title="Companionship"
            description="Social and emotional support"
            icon="/placeholder.svg?height=100&width=100"
            features={[
              "Friendly conversation and company",
              "Accompaniment to social events",
              "Support with hobbies and interests",
              "Assistance with correspondence",
              "Emotional support and reassurance",
            ]}
          />

          <ServiceCard
            title="Live-in Care"
            description="24/7 support in your home"
            icon="/placeholder.svg?height=100&width=100"
            features={[
              "Round-the-clock care and support",
              "Personalized care plans",
              "Household management assistance",
              "Companionship and social support",
              "Peace of mind for family members",
            ]}
          />

          <ServiceCard
            title="Care Management"
            description="Coordinated care planning"
            icon="/placeholder.svg?height=100&width=100"
            features={[
              "Comprehensive needs assessment",
              "Personalized care plan development",
              "Regular care plan reviews",
              "Coordination with healthcare professionals",
              "Family liaison and communication",
            ]}
          />
        </div>
      </div>
    </div>
  )
}

