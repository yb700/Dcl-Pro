"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Hlogo from "@/public/Logos/HeaderLogo.png"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="flex flex-col justify-between px-8 lg:flex-row lg:px-36 py-5 absolute w-full items-center z-10">
      <Link href="/" className="w-40 lg:w-64 relative h-16 lg:h-24">
        <Image src={Hlogo} alt="DCL-PRO Services Logo" fill className="object-contain" priority />
      </Link>
      <nav className="flex gap-5 text-lg lg:text-2xl">
        <Link
          href="/"
          className={cn(
            "text-gray-800 hover:text-primary transition-colors",
            pathname === "/" && "font-bold text-primary",
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "text-gray-800 hover:text-primary transition-colors",
            pathname === "/about" && "font-bold text-primary",
          )}
        >
          About
        </Link>
        <Link
          href="/services"
          className={cn(
            "text-gray-800 hover:text-primary transition-colors",
            pathname === "/services" && "font-bold text-primary",
          )}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={cn(
            "text-gray-800 hover:text-primary transition-colors",
            pathname === "/contact" && "font-bold text-primary",
          )}
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

