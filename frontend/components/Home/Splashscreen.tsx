import Link from "next/link"

import { Button } from "../ui/button"

const Splashscreen = () => {
  return (
    <div className="my-10 flex w-full items-center justify-between">
      <div className="w-full">
        <h2 className="font-poppins mb-1 text-xl font-semibold text-white">
          Welcome to makeread.me
        </h2>
        <h1 className="font-poppins mb-6 text-8xl font-bold leading-[120%] text-white">
          Empowering Project Documentation!
        </h1>
        <p className="font-poppins mb-10 text-base font-normal leading-[175%] text-white">
          Elevate your project presentations with captivating ReadME files. Our
          intuitive ReadME Generator makes creating professional documentation a
          breeze, whether you're a beginner or an experienced developer. Choose
          from our extensive collection of customizable templates and streamline
          your workflow. Experience the simplicity and effectiveness of
          makeread.me - the ultimate tool to enhance your projects.
        </p>

        <Link href="/select-template">
          <Button className="py-6">Start Generating ReadMEs Now!</Button>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center">
        <img className="h-[496px] w-auto" src="/icons/hero.svg" alt="Hero" />
      </div>
    </div>
  )
}

export default Splashscreen
