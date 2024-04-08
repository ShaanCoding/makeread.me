import Link from "next/link"

import { Button } from "../ui/button"

const Splashscreen = () => {
  return (
    <div className="my-12 flex w-full items-center justify-between">
      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-12">
        <div className="pb-12 lg:pb-0 lg:flex lg:w-1/3 xl:w-1/2 lg:flex lg:items-start lg:justify-end">
          <img className="h-[496px] w-auto" src="/icons/hero.svg" alt="Hero" />
        </div>
        <div className="lg:w-2/3 xl:w-1/2">
          <h2 className="pb-2 text-xl font-semibold">Welcome to makeread.me</h2>
          <h1 className="pb-6 text-4xl font-bold md:text-6xl 2xl:text-8xl text-white">
            Empowering Project Documentation
          </h1>
          <p className="mb-6">
            Elevate your project presentations with captivating ReadME files.
            Our intuitive ReadME Generator makes creating professional
            documentation a breeze, whether you&apos;re a beginner or an
            experienced developer. Choose from our extensive collection of
            customizable templates and streamline your workflow. Experience the
            simplicity and effectiveness of makeread.me - the ultimate tool to
            enhance your projects.
          </p>

          <Link href="/select-template">
            <Button className="py-6">Start Generating ReadMEs Now!</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Splashscreen
