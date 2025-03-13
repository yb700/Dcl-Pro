import ContactForm from "@/components/contact-form"
import SocialLinks from "@/components/social-links"

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-36 py-32 gap-10">
      <h1 className="text-4xl lg:text-6xl text-primary font-bold text-center">Get In Touch</h1>

      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

