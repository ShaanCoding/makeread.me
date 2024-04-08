import React from "react"
import Image from "next/image"

import { siteConfig } from "@/config/site"

const Testimonials = () => {
  return (
    <div className="my-6">
      <div className="text-center">
        <h2 className="text-themeGreen font-semibold">Testimonials</h2>
        <h1 className="mb-12 text-6xl font-bold text-white">
          What our users say
        </h1>
      </div>

      {/* Testimonials Carasoul */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteConfig.homePage.testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            testimony={testimonial.testimony}
          />
        ))}
      </div>
    </div>
  )
}

interface ITestimonialCard {
  name: string
  title: string
  testimony: string
}

const TestimonialCard: React.FC<ITestimonialCard> = ({
  name,
  title,
  testimony,
}) => {
  return (
    <div className="relative overflow-hidden rounded-[30px] bg-white bg-opacity-[0.08] px-8 py-16 text-center">
      <h1 className="mb-[10px] font-bold text-white">{name}</h1>
      <h2 className="mb-[15px] text-[#7E8A9F]">{title}</h2>
      <p className="text-xl leading-[160%] text-white">{testimony}</p>
      <Image
        className="pointer-events-none absolute bottom-0 right-0 select-none -z-10"
        src="icons/home/testimonialUnion.svg"
        width={1000}
        height={1000}
        alt=""
      />
    </div>
  )
}

export default Testimonials
