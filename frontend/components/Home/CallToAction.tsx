import Image from "next/image"
import Link from "next/link"

import { Button } from "../ui/button"

const CallToAction = () => {
  return (
    <div className="relative w-full select-text py-[100px]">
      <div className="absolute inset-y-0 left-24 flex w-[1200px] flex-col items-start justify-center">
        <h1 className="mb-[50px] text-6xl font-bold leading-[120%] text-white">
          Ready to create professional-quality ReadMEs for your projects?
        </h1>

        <Link href="/select-template">
          <Button className="text-themeGreen py-6">
            Start Generating ReadMEs Now!
          </Button>
        </Link>
      </div>
      <div className="h-auto w-full">
        <Image
          className="pointer-events-none h-auto w-full select-none"
          src="/icons/home/CallToAction.svg"
          width={100}
          height={100}
          alt="Call To Action - Background"
        />
      </div>
    </div>
  )
}

export default CallToAction
