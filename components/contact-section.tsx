"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitContactForm } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm({ name, email, phone })
      toast({
        title: "Success!",
        description: "We've received your contact information. We'll be in touch soon!",
      })
      setName("")
      setEmail("")
      setPhone("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col justify-center my-16 lg:my-24 gap-8 items-center w-full px-4">
      <h2 className="text-4xl lg:text-6xl font-bold text-primary text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-2xl justify-center items-center">
        <div className="flex flex-col md:flex-row w-full gap-5">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-100 px-4 py-3 rounded-xl text-lg font-medium"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 px-4 py-3 rounded-xl text-lg font-medium"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-5">
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-gray-100 px-4 py-3 rounded-xl text-lg font-medium flex-grow"
            placeholder="07*** ******"
            required
          />
          <Button
            type="submit"
            className="bg-primary rounded-xl text-xl text-white font-semibold py-6 px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  )
}

