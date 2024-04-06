import React from "react"

const Testimonials = () => {
  return (
    <div className="my-5">
      <h2 className="font-poppins text-center text-base font-semibold text-themeGreen">
        Testimonials
      </h2>
      <h1 className="font-manrope mb-16 text-center text-6xl font-bold text-white">
        What our users say
      </h1>

      {/* Testimonials Carasoul */}
      <div className="relative flex w-full items-center justify-center">
        <div className=" grid w-full grid-cols-3 gap-4">
          <TestimonialCard
            name="John Doe"
            title="CEO"
            testimony="I can't believe how easy it was to create an amazing ReadME with makeread.me. Highly
        recommended to all developers!"
          />
          <TestimonialCard
            name="John Doe"
            title="CEO"
            testimony="I can't believe how easy it was to create an amazing ReadME with makeread.me. Highly
        recommended to all developers!"
          />
          <TestimonialCard
            name="John Doe"
            title="CEO"
            testimony="I can't believe how easy it was to create an amazing ReadME with makeread.me. Highly
        recommended to all developers!"
          />
        </div>
      </div>

      {/* Testimonials Carasoul - Controls */}
      <div className="my-[50px] flex items-center justify-center space-x-4">
        <div className="size-[10px] rounded-full bg-themeGreen"></div>
        <div className="size-[10px] rounded-full bg-[#56555F]"></div>
        <div className="size-[10px] rounded-full bg-[#56555F]"></div>
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
    <div className="font-poppins relative w-[507px] overflow-hidden rounded-[30px] border-DEFAULT border-[#454545] bg-white bg-opacity-[0.08] px-8 py-16 text-center">
      <img
        className="pointer-events-none absolute bottom-0 right-0 select-none"
        src="icons/home/testimonialUnion.svg"
      />

      <h1 className="font-poppins mb-[10px] text-base font-bold text-white">
        {name}
      </h1>
      <h2 className="mb-[15px] text-base font-normal text-[#7E8A9F]">
        {title}
      </h2>
      <p className="font-inter text-xl font-normal leading-[160%] text-white">
        {testimony}
      </p>
    </div>
  )
}

export default Testimonials
