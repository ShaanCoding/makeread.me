"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"
import { motion } from "framer-motion"

const CallToAction = () => {
  return (
    <motion.div className="relative w-full select-text my-12"
      initial={{ x: -200, opacity: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
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
        <div
          className="bg-themeGreen absolute
          left-[100%] top-[100%] z-[-2] size-[75%] translate-x-[-100%] translate-y-[-100%] rounded-[780px] opacity-80 blur-[350px]"
        ></div>
      </div>
    </motion.div>
  )
}

export default CallToAction
