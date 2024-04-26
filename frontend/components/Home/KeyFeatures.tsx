import React from "react"
import Image from "next/image"

import { siteConfig } from "@/config/site"

const KeyFeatures = () => {
  return (
    <div className="my-5 relative">
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-themeGreen font-semibold">Features</h2>
          <h1 className="text-6xl font-bold text-white">Key Features</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.homePage.keyFeatures.map(
            (feature: IFeatureGridElement, index: number) => {
              return (
                <FeatureGridElement
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                  key={index}
                />
              )
            }
          )}
        </div>
      </div>
      <div
        className="bg-themeGreen absolute
          left-[50%] top-[50%] z-[-1] size-[75%] translate-x-[-50%] translate-y-[-50%] rounded-[780px] opacity-45 blur-[350px]"
      ></div>
    </div>
  )
}

interface IFeatureGridElement {
  image: string
  title: string
  description: string
}

const FeatureGridElement: React.FC<IFeatureGridElement> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="rounded-[30px] bg-white bg-opacity-[0.08] p-8">
      <div>
        <Image
          className="mb-4 h-auto w-[60px]"
          src={image}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <h3 className="font-poppins text-homeBlue mb-4 text-base font-semibold">
        {title}
      </h3>
      <p className="tex-twhite font-poppins mb-4 text-sm font-light leading-[175%]">
        {description}
      </p>
    </div>
  )
}

export default KeyFeatures
