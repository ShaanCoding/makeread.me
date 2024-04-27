import Image from "next/image"

import { siteConfig } from "@/config/site"

const Demo = () => {
  return (
    <div className="my-24 w-full relative">
      <div className="mb-12 text-center">
        <h2 className="text-themeGreen font-semibold">How the app works</h2>
        <h1 className="text-6xl font-bold text-white">Preview</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <Image
          className="h-full lg:w-3/4"
          width={1920}
          height={1080}
          src={siteConfig.homePage.demo}
          alt="Demo"
        />
      </div>
      <div
        className="bg-themeGreen absolute
          left-[50%] top-[75%] z-[-1] size-[75%] translate-x-[-50%] translate-y-[-50%] rounded-[780px] opacity-80 blur-[350px]"
      ></div>
    </div>
  )
}

export default Demo
