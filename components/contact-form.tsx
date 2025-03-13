"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitContactForm } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm(formData)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full lg:w-1/2">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-700 font-semibold">
          Full Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 font-semibold">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-gray-700 font-semibold">
          Telephone Number
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="07000 000000"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="space-y-2 relative">
        <Label htmlFor="message" className="text-gray-700 font-semibold">
          Your Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="border border-gray-300 p-3 rounded-lg resize-none h-40 focus:ring-2 focus:ring-primary"
          required
        />
        <Button
          type="submit"
          className="absolute bottom-3 right-3 bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  )
}

