import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const Splashscreen = () => {
  return (
    <div className="my-12 flex w-full items-center justify-between">
      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-12">
        <div className="pb-12 lg:pb-0 lg:flex lg:w-1/3 xl:w-1/2 lg:flex lg:items-start lg:justify-end">
          <img
            className="w-full lg:h-[496px] lg:w-auto"
            src="/icons/hero.svg"
            alt="Hero"
          />
        </div>
        <div className="lg:w-2/3 xl:w-1/2">
          <h2 className="pb-2 text-xl font-semibold">
            {siteConfig.homePage.splashScreen.subtitle}
          </h2>
          <h1 className="pb-6 text-4xl font-bold md:text-6xl 2xl:text-8xl text-white">
            {siteConfig.homePage.splashScreen.title}
          </h1>
          <p className="mb-6">{siteConfig.homePage.splashScreen.description}</p>
          <Link href={siteConfig.homePage.splashScreen.cta.href}>
            <Button className="py-6">
              {siteConfig.homePage.splashScreen.cta.title}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Splashscreen
