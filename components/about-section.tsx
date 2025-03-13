import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <div className="flex flex-col justify-center items-center my-16 lg:my-24 gap-5 px-4">
      <h2 className="text-4xl lg:text-6xl font-bold text-primary text-center">About Us</h2>
      <div className="flex flex-col gap-5 px-4 lg:px-36 text-center lg:text-left max-w-6xl">
        <p className="text-lg lg:text-2xl font-light">
          <span className="text-2xl lg:text-3xl font-bold text-secondary">At DCL PRO,</span> we understand that
          emotional and moral support for our clients and their family can be just as important. It is ingrained in the
          support we provide to continue to liaise with concerned family and friends, urging our staff to build those
          relationships, as we understand how nerve-racking it is having a stranger in your home.
        </p>
        <p className="text-lg lg:text-2xl font-light">
          Our vision at DCL-PRO Services is to offer new beginnings and meaningful opportunities to our clients, built
          on innovation, skills, and values of{" "}
          <span className="text-xl lg:text-3xl text-secondary">compassion, honesty, and patience.</span> We are devoted
          to providing care that focuses on our client's individual needs.
        </p>
        <p className="w-full lg:w-3/4 text-lg lg:text-2xl font-light">
          Choosing the right service provider for a family member, loved one, or yourself is a big decision. At DCL-PRO
          Services, you are involved in all the decision-making, including the agreement of a personalized care plan to
          meet the exact needs of the client.
        </p>
        <div className="flex justify-center lg:justify-start mt-4">
          <Button asChild size="lg">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

