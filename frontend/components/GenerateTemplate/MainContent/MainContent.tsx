import { useEffect, useState } from "react"
import { IDefaultBlockInput, IFunction, readMeGenerator } from "@/api/generated"

import CopyButton from "./CopyButton"
import DownloadButton from "./DownloadButton"
import Editor from "./Editor/Editor"
import Preview from "./Preview"
import { compileString } from "./generator"
import { useQuery } from "@tanstack/react-query"

const MainContent: React.FC<{
  templateId: string
  templateBlocks: IFunction[]
  setTemplateBlocks: React.Dispatch<React.SetStateAction<IFunction[]>>
}> = ({ templateId, templateBlocks, setTemplateBlocks }) => {
  const [macros, setMacros] = useState<string>("")
  const [variables, setVariables] = useState<Record<string, any>>({})
  const [output, setOutput] = useState<string>("")

  const populateTemplateData = useQuery({
    queryKey: ["getV1TemplateTemplateDefaultBlocks", templateId],
    queryFn: async () => {
      let index = await new readMeGenerator().template.getV1TemplateTemplateDefaultBlocks(
        templateId
      )

      return index.responseObject as IFunction[]
    },
  })

  useEffect(() => {
    if (populateTemplateData.status === "success") {
      setTemplateBlocks(populateTemplateData.data!)
    }
  }, [populateTemplateData.data, populateTemplateData.status])

  const populateMacrosData = useQuery({
    queryKey: ["postV1TemplateTemplateMacros", templateBlocks],
    queryFn: async () => {
      const blocksMapped: IDefaultBlockInput[] = templateBlocks.map(
        (block: IFunction) => ({
          function: block.function,
          folder: block.folder,
        })
      )

      let request = await new readMeGenerator().template.postV1TemplateTemplateMacros(blocksMapped)

      return request.responseObject as string
    },
    enabled: populateTemplateData.data && populateTemplateData.status === "success",
  })

  useEffect(() => {
    if (populateMacrosData.status === "success") {
      setMacros(populateMacrosData.data!)
    }
  }, [populateMacrosData.data, populateMacrosData.status])

  const generateOutput = () => {
    if (macros && templateBlocks && variables) {
      const data = compileString(macros, templateBlocks, variables)
      setOutput(data)
    }
  }

  useEffect(() => {
    const doesFunctionsExist = templateBlocks.every((block) => {
      return macros.includes(block.function)
    })

    if (populateTemplateData.isLoading === false && populateMacrosData.isLoading === false && doesFunctionsExist) {
      generateOutput()
    }
  }, [variables, templateBlocks, macros])

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
        {/* Sub-navbar */}
        <div className="flex items-center justify-end gap-6">
          <CopyButton copiedText={output} />
          <DownloadButton downloadText={output} fileName={"README.md"} />
        </div>

        {/* Content */}
        <div className="rounded-lg border border-dashed shadow-sm xl:flex xl:flex-1 xl:items-start xl:justify-center">
          {/* Place Content Here */}
          <Editor
            templateBlocks={templateBlocks}
            setTemplateBlocks={setTemplateBlocks}
            variables={variables}
            setVariables={setVariables}
          />

          <Preview output={output} />
        </div>
      </main>
    </div>
  )
}

export default MainContent
