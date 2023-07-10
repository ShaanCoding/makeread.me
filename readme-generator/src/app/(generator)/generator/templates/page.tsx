import { FC } from "react"

import TemplateCard from "@/components/TemplateCard"
import { ITemplate } from "@/data/templates"
import { useGetTemplates } from "@/hooks/useGetTemplates"

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const data = useGetTemplates();

  return (
    <main>
      <div className="gap-[21px] flex flex-wrap justify-center pr-[37px] pt-[25px]">
        {data.map((item, index) => (
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
            featured={item.featured}
          />
        ))}
      </div>
    </main>
  )
}

export default Page
