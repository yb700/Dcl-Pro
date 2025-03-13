import Link from "next/link"
import Image from "next/image"
import Flogo from "@/public/Logos/HeaderLogo.png"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row px-10 py-8 bg-gray-100 text-gray-800">
      {/* Footer Left Column */}
      <div className="basis-1/3 flex flex-col gap-4">
        <div className="relative w-72 h-20">
          <Image src={Flogo} alt="DCL-PRO Services Logo" fill className="object-contain" />
        </div>
        <div className="flex gap-5">
          <nav className="text-lg flex flex-col gap-2">
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-400 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">
              Contact
            </Link>
          </nav>
          <nav className="text-lg flex flex-col gap-2">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Terms Of Service
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>

      {/* Footer Center Column */}
      <div className="flex flex-col basis-1/3 justify-end items-center mt-6 lg:mt-0">
        <p className="text-xs">@DCL-PRO Services. All Rights Reserved</p>
      </div>

      {/* Footer Right Column */}
      <div className="basis-1/3 flex flex-col justify-end items-end text-right gap-2 mt-6 lg:mt-0">
        <h3 className="font-bold text-2xl">Have Any Questions?</h3>
        <p>
          Our support team is here to help. If you have any questions about this service, please <br />
          <Link href="/contact" className="text-primary underline hover:text-primary/80 transition-colors">
            contact us
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

