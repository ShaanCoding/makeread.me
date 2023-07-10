"use client"

import { FC, useState } from "react"

import Block, { IBlockProps, IBlocks } from "@/components/Blocks/Block"
import BlocksPage from "@/components/Blocks/BlocksPage"
import PreviewPage from "@/components/Blocks/PreviewPage"
import RawPage from "@/components/Blocks/RawPage"
import Tabs from "@/components/Blocks/Tabs"

interface pageProps {
  params: {
    id: string
  }
}

const Page: FC<pageProps> = ({ params }) => {
  const [blocks, setBlocks] = useState<IBlocks[]>([
    { title: "Hello", subtitle: "World" },
    { title: "Hello 2", subtitle: "World 2" },
    { title: "Hello 3", subtitle: "World 3" },
  ])

  return (
    <main>
      <div className="gap-[21px] flex flex-wrap justify-center px-[37px] pt-[25px]">
        {/* <h2>Hello World {params.id}</h2> */}

        {/* Block, Preview, Raw Tabs */}
        <Tabs
          pages={[
            {
              page: "Block",
              pageDocument: <BlocksPage />,
            },
            {
              page: "Preview",
              pageDocument: <PreviewPage />,
            },
            {
              page: "Raw",
              pageDocument: <RawPage />,
            },
          ]}
        />

        {blocks.map((block, index) => {
          return (
            <Block
              title={block.title}
              subtitle={block.subtitle}
              blocks={blocks}
              setBlocks={setBlocks}
              key={index}
              index={index}
              resetBlocks={() => {
                alert("Resetting Blocks")
              }}
            >
              <div className="w-full rounded-2xl bg-tertiary p-4">
                <p className="text-textGray font-poppins size-[13px] font-normal mb-4">
                  # Project Title
                </p>
                <p className="text-textGray font-poppins size-[13px] font-normal mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eget blandit diam, ac pellentesque diam. Aliquam pellentesque
                  augue vitae lacinia molestie. Morbi ac arcu eu neque tempor
                  gravida nec at nunc. Phasellus efficitur lectus in nulla
                  varius, eget rutrum elit venenatis. Duis ac feugiat lorem, sed
                  viverra mauris. Sed pellentesque at orci pharetra vehicula.
                  Nam eu sem accumsan nunc fringilla luctus eget quis felis.
                  Proin vestibulum sem magna, congue dignissim neque lobortis
                  eget. Maecenas volutpat, tellus ut euismod tristique, mauris
                  ligula aliquam orci, eget accumsan ligula lacus lobortis quam.
                  Vivamus gravida ultricies odio. Nam nulla tellus, gravida ut
                  commodo nec, faucibus ut elit. Etiam sed felis tincidunt,
                  pharetra tortor et, condimentum neque.
                </p>
              </div>
            </Block>
          )
        })}
      </div>
    </main>
  )
}

export default Page
