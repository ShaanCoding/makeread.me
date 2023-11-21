const socialMediaLists: ISocialMedia[] = [
  {
    name: "Github",
    url: "https://github.com/ShaanCoding/",
    icon: "/icons/home/social/github.svg",
  },
  {
    name: "LinkedIn",
    icon: "/icons/home/social/linkedin.svg",
    url: "https://www.linkedin.com/in/shaancoding/",
  },
  {
    name: "Twitter",
    icon: "/icons/home/social/twitter.svg",
    url: "https://twitter.com/ShaanCoding",
  },
]

const quickLinks: IQuickLinks[] = [
  {
    name: "Editor Page",
    url: "/editor",
  },
  {
    name: "List of Templates",
    url: "/templates",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
  {
    name: "Technical Writing Tips",
    url: "/tips",
  },
]

const Footer = () => {
  return (
    <div
      className="
    mt-20 w-full rounded-t-[30px]
    bg-gradient-to-t from-[#16474A] to-[#16474A40] px-[90px] pt-20"
    >
      <div className="mb-[78px] flex w-full items-center justify-between">
        <div className="w-1/3">
          <h1 className="font-poppins mb-[30px] text-xl font-bold text-white">
            ReadMe Generator
          </h1>
          <p className="font-inter leading[213%] text-base font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum orci sapien. Fusce sed lacus eget orci tempus tincidunt.
            Nullam orci quam sollicitudin sit amet.
          </p>
        </div>

        <div className="flex w-2/3 items-center justify-end">
          <div className="mr-[200px]">
            <h1 className="font-poppins mb-5 text-lg font-[500] uppercase tracking-[0.4px] text-white">
              Quick Links
            </h1>

            <ul className="list-inside list-disc">
              {quickLinks.map((quickLink, index) => (
                <QuickLinks key={index} {...quickLink} />
              ))}
            </ul>
          </div>

          <div className="">
            <h1 className="font-poppins mb-5 text-lg font-[500] uppercase tracking-[0.4px] text-white">
              Social Media
            </h1>

            <div className="flex flex-col">
              {socialMediaLists.map((socialMedia, index) => (
                <SocialMedia key={index} {...socialMedia} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        className="font-manrope mb-5 border-t-DEFAULT border-[#404C52] pt-5
      text-center text-base font-normal text-white
      "
      >
        © ShaanCoding 2023 - {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  )
}

interface IQuickLinks {
  name: string
  url: string
}

const QuickLinks: React.FC<IQuickLinks> = ({ name, url }) => {
  return (
    <li
      className="font-poppins mb-3 text-base font-normal text-white hover:cursor-pointer hover:opacity-90"
      // onClick={() => {
      // navigate(url)
      // }}
    >
      {name}
    </li>
  )
}

interface ISocialMedia {
  icon: string
  name: string
  url: string
}

const SocialMedia: React.FC<ISocialMedia> = ({ icon, name, url }) => {
  return (
    <div
      // onClick={() => {
      // navigate(url)
      // }}
      className="hover:cursor-pointer hover:opacity-90"
    >
      <div className="mb-3 flex items-center space-x-4">
        <img className="size-[30px]" src={icon} alt={name} />
        <p className="font-poppins text-base font-normal text-white">{name}</p>
      </div>
    </div>
  )
}

export default Footer
