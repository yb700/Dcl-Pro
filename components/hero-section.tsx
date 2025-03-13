import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import backgroundImage from "@/public/Photos/photoTwo.jpg"

export default function HeroSection() {
  return (
    <div>
      <div className="absolute top-0 right-0 rounded-bl-4xl w-screen lg:w-1/2 h-screen object-cover -z-10 opacity-50">
        <Image src={backgroundImage} height={500} width={500} alt="Background Image" className="hidden lg:flex w-full h-full object-cover rounded-bl-4xl" />
      </div>

      <div className="container w-full lg:h-screen flex items-center justify-start px-8 lg:px-32 pt-32">
        <div className="w-full lg:w-4/5 flex flex-col gap-5">
          <h1 className="text-4xl lg:text-8xl font-bold text-primary">Elevating Home Care Experiences In The UK</h1>
          <h2 className="text-2xl lg:text-6xl font-semibold text-secondary">High Quality Care</h2>
          <p className="text-lg lg:text-3xl font-medium text-muted-foreground w-full lg:w-4/5">At <span className="text-dclblue">DCL-PRO Services</span>, our clients receive a high quality and personalized service of care, delivered just the way they want it.</p>
          <div className="flex gap-5">
            <Button>Contact Us</Button>
            <Button>Services</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

