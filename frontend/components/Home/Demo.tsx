import Image from "next/image"

import { siteConfig } from "@/config/site"

const Demo = () => {
  return (
    <div className="my-24 flex w-full items-center justify-center">
      <Image
        className="size-full"
        width={1920}
        height={1080}
        src={siteConfig.homePage.demo}
        alt="Demo"
      />
    </div>
  )
}

export default Demo
