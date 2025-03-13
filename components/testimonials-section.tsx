import { Star } from "lucide-react"

type TestimonialProps = {
  name: string
  rating: number
  text: string
  featured?: boolean
}

function Testimonial({ name, rating, text, featured = false }: TestimonialProps) {
  return (
    <div
      className={`flex flex-col ${featured
        ? "w-full md:w-1/2 mx-4 md:mx-8 p-5 bg-gray-100 rounded-lg gap-5 justify-center"
        : "w-full md:w-1/3 bg-gray-100 p-5 rounded-lg gap-5"
        } ${featured ? "h-auto md:h-56" : "h-auto md:h-36"}`}
    >
      <span className="flex justify-between w-full">
        <h3 className={`${featured ? "text-xl lg:text-3xl" : "text-lg lg:text-2xl"} font-bold`}>{name}</h3>
        <span className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          ))}
        </span>
      </span>
      <p
        className={`${featured ? "text-lg lg:text-xl line-clamp-3" : "text-sm lg:text-base line-clamp-2"
          } text-ellipsis`}
      >
        {text}
      </p>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-16 my-16 lg:gap-24 lg:my-24 px-4">
      <h2 className="text-4xl lg:text-6xl font-bold text-primary">Testimonials</h2>
      <div className="w-full flex flex-col md:flex-row overflow-hidden md:flex-nowrap justify-center items-center gap-4">
        <Testimonial
          name="Sarah Johnson"
          rating={4}
          text="The care provided by DCL-PRO Services has been exceptional. Their staff is professional, compassionate, and truly cares about the wellbeing of my mother. I couldn't be more grateful for their support during this challenging time."
        />
        <Testimonial
          name="Khadija Abdi"
          rating={5}
          text="I cannot praise DCL-PRO enough for the exceptional care they provide for my mother. The caregivers are not only skilled but also compassionate, going above and beyond to ensure her comfort, dignity, and well-being. From assisting with daily tasks to offering companionship, their dedication shines through in everything they do.

          Communication with the agency is always seamless, and they keep us well-informed about her care plan. It’s clear they genuinely care about their clients, tailoring services to meet individual needs. Knowing my mother is in such capable hands gives our family immense peace of mind. I highly recommend DCL-PRO for their outstanding service!"
          featured
        />
        <Testimonial
          name="Emily Thompson"
          rating={4}
          text="DCL-PRO Services has provided outstanding support for my aunt. Their caregivers are well-trained, reliable, and genuinely caring. The management team is responsive and always willing to accommodate our changing needs."
        />
      </div>
    </div>
  )
}

