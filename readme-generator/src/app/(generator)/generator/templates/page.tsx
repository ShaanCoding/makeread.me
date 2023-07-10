import { FC } from "react"

import TemplateCard, { ITemplate } from "@/components/TemplateCard"

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const mock: ITemplate[] = [
    {
      createdAt: new Date("2023-07-10T00:00:00.000Z"),
      description: "The first readme in the version 2 revamp.",
      title: "Default One",
      authorUrl: "https://github.com/ShaanCoding",
      tags: ["Industry", "ReadME"],
      imageURL: "https://avatars.githubusercontent.com/u/22236218?v=4",

      contributors: [
        {
          name: "Shaan Khan",
          url: "lorem ipsum dolor",
          social: "github",
        },
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
      ],

      author: "Shaan Khan",
      href: "/",
    },
    {
      createdAt: new Date("2021-08-31T00:00:00.000Z"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit diam, ac pellentesque diam. Aliquam pellentesque augue vitae lacinia molestie. Morbi ac arcu eu neque tempor gravida nec at nunc.",
      title: "Name of template",
      authorUrl: "lorem ipsum dolor",
      tags: ["Industry", "ReadME", "Code of Conduct"],

      contributors: [
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
      ],

      author: "Furkan Emre Kozan",
      href: "/",
    },
    {
      createdAt: new Date("2021-08-31T00:00:00.000Z"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit diam, ac pellentesque diam. Aliquam pellentesque augue vitae lacinia molestie. Morbi ac arcu eu neque tempor gravida nec at nunc.",
      title: "Name of template",
      authorUrl: "lorem ipsum dolor",
      tags: ["Industry", "ReadME", "Code of Conduct"],

      contributors: [
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
      ],

      author: "Furkan Emre Kozan",
      href: "/",
    },
    {
      createdAt: new Date("2021-08-31T00:00:00.000Z"),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget blandit diam, ac pellentesque diam. Aliquam pellentesque augue vitae lacinia molestie. Morbi ac arcu eu neque tempor gravida nec at nunc.",
      title: "Name of template",
      authorUrl: "lorem ipsum dolor",
      tags: ["Industry", "ReadME", "Code of Conduct"],

      contributors: [
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
        {
          name: "Emre",
          url: "lorem ipsum dolor",
          social: "github",
        },
      ],
      author: "Furkan Emre Kozan",
      href: "/",
    },
  ]
  return (
    <main>
      <div className="gap-[21px] flex flex-wrap justify-center pr-[37px] pt-[25px]">
        {mock.map((item, index) => (
          <TemplateCard
            imageURL={item.imageURL}
            href={item.href}
            createdAt={item.createdAt}
            description={item.description}
            key={index}
            tags={item.tags}
            title={item.title}
            author={item.author}
            authorUrl={item.authorUrl}
            contributors={item.contributors}
          />
        ))}
      </div>
    </main>
  )
}

export default Page
