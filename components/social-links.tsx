import Link from "next/link"
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 lg:mt-0">
      <div className="space-y-4">
        <h2 className="text-3xl lg:text-4xl text-secondary font-semibold">Connect With Us</h2>
        <p className="text-lg lg:text-xl">
          Reach out via our social media or give us a call.
          <br />
          We're always happy to hear from you.
        </p>
      </div>

      <div className="flex flex-col gap-3 text-black">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg py-4 px-5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Facebook className="h-6 w-6 text-[#1877F2]" />
          <span>Facebook</span>
        </Link>

        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg py-4 px-5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Instagram className="h-6 w-6 text-[#E4405F]" />
          <span>Instagram</span>
        </Link>

        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg py-4 px-5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Linkedin className="h-6 w-6 text-[#0A66C2]" />
          <span>LinkedIn</span>
        </Link>

        <Link
          href="https://wa.me/447000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg py-4 px-5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <MessageCircle className="h-6 w-6 text-[#25D366]" />
          <span>WhatsApp</span>
        </Link>
      </div>
    </div>
  )
}

