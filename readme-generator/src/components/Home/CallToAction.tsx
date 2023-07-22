import React from "react"
import Image from "next/image"
import Link from "next/link"

const CallToAction = () => {
  return (
    <div className="py-[100px] relative">
      <div className="absolute top-0 left-[72px] bottom-0 flex flex-col justify-center items-start">
        <h1 className="text-white font-poppins text-6xl font-bold leading-[120%] mb-[50px]">
          Ready to create professional-quality ReadMEs for your projects?
        </h1>
        <Link href={"/generator"}>
          <button className="bg-white text-themeGreen font-poppins font-semibold py-4 px-6 rounded-[10px] hover:opacity-90">
            Begin Your ReadME Journey
          </button>
        </Link>
      </div>
      <div className="w-full h-auto">
        <img
          src="/icons/home/callToAction.svg"
          alt="Call To Action - Background"
        />
      </div>
    </div>
  )
}

export default CallToAction
