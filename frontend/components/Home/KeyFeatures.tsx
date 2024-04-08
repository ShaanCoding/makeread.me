import React from "react"
import Image from "next/image"

const keyFeatureMap: IFeatureGridElement[] = [
  {
    image: "/icons/home/templateReadMEGeneration.svg",
    title: "Template-based ReadME Generation",
    description:
      "Layout: Organize key features into a grid or a list format, with icons or images representing each feature. Use short, descriptive headings, followed by a brief explanation of each feature.",
  },
  {
    image: "/icons/home/customizableTemplates.svg",
    title: "Customizable Templates",
    description:
      "Choose from a wide range of beautifully designed templates that can be easily customized and mixed-and-matched to suit your project's needs.",
  },
  {
    image: "/icons/home/intuitiveUserInterface.svg",
    title: "Intuitive User Interface",
    description:
      "Our user-friendly interface allows you to effortlessly customize and generate your ReadME, streamlining the entire process.",
  },
  {
    image: "/icons/home/shieldsBadgeIntegration.svg",
    title: "Shields.io Badge Integration",
    description:
      "Enhance your project presentation with seamless integration of badges from Shields.io, adding both visual appeal and valuable information to your ReadME.",
  },
  {
    image: "/icons/home/extensiveCustomizationOptions.svg",
    title: "Extensive Customization Options",
    description:
      "Tailor your ReadME's appearance and functionality with a variety of customization options, such as light and dark mode, copy and download buttons, and more.",
  },
  {
    image: "/icons/home/realTimePreview.svg",
    title: "Real-Time Preview",
    description:
      "Instantly see the changes you make to your ReadME through our real-time preview feature, allowing you to refine your content as you go.",
  },
  {
    image: "/icons/home/exportAndShareFunctionality.svg",
    title: "Export and Share Functionality",
    description:
      "Download your ReadME as a '.md' file or copy it to your clipboard to easily share your project's documentation.",
  },
  {
    image: "/icons/home/gptFunctionality.svg",
    title: "GPT-3 Integration (if available)",
    description:
      "Leverage advanced AI-powered writing assistance to further enhance the content of your ReadME.",
  },
  {
    image: "/icons/home/richSetOfTemplates.svg",
    title: "Rich Set of Contributing Templates",
    description:
      "Utilize a wide selection of ReadME templates created and shared by our passionate and experienced community members.",
  },
]

const KeyFeatures = () => {
  return (
    <div className="my-5">
      <div className="mb-12 text-center">
        <h2 className="text-themeGreen font-semibold">Features</h2>
        <h1 className="text-6xl font-bold text-white">Key Features</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {keyFeatureMap.map((feature: IFeatureGridElement, index: number) => {
          return (
            <FeatureGridElement
              image={feature.image}
              title={feature.title}
              description={feature.description}
              key={index}
            />
          )
        })}
      </div>
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
