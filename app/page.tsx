import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <WhatsAppButton />
    </>
  )
}

