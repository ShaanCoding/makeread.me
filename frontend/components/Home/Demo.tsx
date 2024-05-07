"use client"

import Image from "next/image"

import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"

const Demo = () => {
  return (
    <div className="my-24 w-full relative">
      <div
        className="mb-12 text-center"
      >
        <h2 className="text-themeGreen font-semibold">How the app works</h2>
        <h1 className="text-6xl font-bold text-white">Preview</h1>
      </div>
      <motion.div className="w-full flex items-center justify-center"
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Image
          className="h-full lg:w-3/4 rounded-[36px] border-white/15 border-[6px] shadow-2xl shadow-black"
          width={1920}
          height={1080}
          src={siteConfig.homePage.demo}
          alt="Demo"
        />
      </motion.div>
      <div
        className="bg-themeGreen absolute
          left-[50%] top-[75%] z-[-1] size-[75%] translate-x-[-50%] translate-y-[-50%] rounded-[780px] opacity-80 blur-[350px]"
      ></div>
    </div>
  )
}

export default Demo
