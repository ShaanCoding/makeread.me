import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const CallToAction = () => {
  return (
    <div className="relative w-full select-text my-12">
      <div className="sm:left-12 lg:left-24 absolute inset-y-0 flex flex-col sm:w-3/5 justify-center items-start">
        <h1 className="mb-6 lg:mb-12 text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-6xl font-bold text-white">
          {siteConfig.homePage.callToAction.title}
        </h1>

        <Link href={siteConfig.homePage.callToAction.url.href}>
          <Button>{siteConfig.homePage.callToAction.url.title}</Button>
        </Link>
      </div>

      <div className="hidden sm:block h-auto w-full">
        <Image
          className="pointer-events-none h-auto w-full select-none"
          src="/icons/home/CallToAction.svg"
          width={100}
          height={100}
          layout="responsive"
          alt="Call To Action - Background"
        />
      </div>
    </div>
  )
}

export default CallToAction
