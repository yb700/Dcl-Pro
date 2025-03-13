"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/447000000000", "_blank")
  }

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-green-600 hover:bg-green-700 shadow-lg z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </Button>
  )
}

