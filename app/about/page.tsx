import Image from "next/image"
import Hlogo from "@/public/Logos/HeaderLogo.png"
import Aphoto from "@/public/Photos/photoFour.jpg"

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-16 py-32 px-4">
      <h1 className="text-4xl lg:text-6xl text-primary font-bold">About Us</h1>

      <div className="flex flex-col justify-center items-center w-full max-w-6xl gap-16 lg:flex-row">
        <div className="w-full lg:w-1/2 justify-end flex">
          <div className="relative w-full h-64 lg:h-80">
            <Image src={Hlogo} alt="DCL-PRO Services Logo" fill className="object-contain" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start text-muted-foreground gap-4 text-lg lg:text-xl">
          <h2 className="text-3xl lg:text-5xl text-secondary font-bold">Our Story</h2>
          <p>
            DCL-PRO Services is a family friendly Domiciliary Care Agency, where our clients receive a high quality and
            personalized services of care just the way they want to have it delivered.
          </p>
          <p>
            DCL-PRO Services was set up as a company in 2018 and was later registered as a Domiciliary Care Agency in
            2019. We currently operate with the London borough of Ealing, Brent, Hammersmith & Fulham, Royal Borough of
            Kensington, Camden, Waltham Forest and Chelsea and Richmond. As we continue to grow and develop we plan to
            expand our services within other boroughs.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-6xl gap-16 lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start text-muted-foreground gap-4 text-lg lg:text-xl order-2 lg:order-1">
          <h2 className="text-3xl lg:text-5xl text-secondary font-bold w-full">Our Aim</h2>
          <p>
            The aim of our service is provide personal care and related domestic services to meet the needs of service
            users in their own homes.
          </p>
          <p>
            This will be achieved by promoting a standard of excellence that embraces fundamental principles of Good
            Care Practice that is witnessed and evaluated through the practice, conduct and control of quality care in
            the domestic environment to provide personalized care in people's homes, based on their needs and choices.
          </p>
        </div>

        <div className="w-full lg:w-1/2 justify-start flex order-1 lg:order-2">
          <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden">
            <Image
              src={Aphoto}
              alt="Care provider staff with client"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-3xl text-muted-foreground text-center gap-6 text-lg lg:text-xl px-4">
        <h2 className="text-3xl lg:text-5xl text-secondary font-bold w-full">Our Vision, Objectives, Philosophy</h2>
        <p>
          Our vision is to offer new beginnings and meaningful opportunities to our clients built on innovation, skills
          and values of compassion, honesty and patience. We are devoted to providing care which focuses on our client's
          individual needs.
        </p>
        <p>
          Our objective is to work in partnership with everyone involved in the care of our clients; this includes
          family members or guardians, the social services team, healthcare professional and any other
          multi-disciplinary agency.
        </p>
        <p>
          Our philosophy is to put the Client, at the heart of everything we do, and to act in their best interests
          always. Our policies and procedures reflect this. We are devoted to providing care which focuses on our
          client's individual needs.
        </p>
      </div>
    </div>
  )
}

