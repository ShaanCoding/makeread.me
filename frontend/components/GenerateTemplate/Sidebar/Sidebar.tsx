import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { IFullTemplate, IFunction, readMeGenerator } from "@/api/generated"

import MappedBlocks from "./MappedBlocks"

const GeneratorSideBar: React.FC<{
  templateId: string
  templateBlocks: IFunction[]
  setTemplateBlocks: Dispatch<SetStateAction<IFunction[]>>
}> = ({ templateId, templateBlocks, setTemplateBlocks }) => {
  const [blocks, setBlocks] = useState<IFullTemplate[]>([])

  useEffect(() => {
    ;(async () => {
      let request = await new readMeGenerator().template.getTemplateSidebar(
        templateId
      )

      if (request.success && request.responseObject) {
        const data: IFullTemplate[] = request.responseObject as IFullTemplate[]
        setBlocks(data)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-muted/40 hidden border-r md:block">
      <nav className="mt-6 grid gap-6 items-start px-2 text-sm font-medium lg:px-4">
        <MappedBlocks
          blocks={blocks}
          templateBlocks={templateBlocks}
          setTemplateBlocks={setTemplateBlocks}
        />
      </nav>

      {/* Upgrade to pro prompt */}
      {/* <UpgradePrompt /> */}
    </div>
  )
}

export default GeneratorSideBar
