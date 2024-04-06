import { useEffect, useState } from "react"
import { IFunction, readMeGenerator } from "@/api/generated"

import { Button } from "@/components/ui/button"

import Editor from "./Editor"
import Preview from "./Preview"
import { compileString } from "./generator"

const GeneratorMainContent: React.FC<{
  templateId: string
  templateBlocks: IFunction[]
  setTemplateBlocks: React.Dispatch<React.SetStateAction<IFunction[]>>
}> = ({ templateId, templateBlocks, setTemplateBlocks }) => {
  const [viewMode, setViewMode] = useState<"editor" | "preview">("editor")

  const [macros, setMacros] = useState<string>("")
  const [variables, setVariables] = useState<Record<string, any>>({})
  const [output, setOutput] = useState<string>("")

  const PopulateTemplateData = async () => {
    // For now lets hardcode the templateId -> Should grab from the URL

    let index = await new readMeGenerator().template.getTemplateIndex(
      templateId
    )

    if (index.success && index.responseObject) {
      const data: IFunction[] = index.responseObject
      setTemplateBlocks(data)
    }
  }

  const PopulateMacrosData = async () => {
    const request = await new readMeGenerator().template.getTemplateMacros(
      templateId
    )

    if (request.success && request.responseObject) {
      const data: string = request.responseObject
      setMacros(data)
    }
  }

  useEffect(() => {
    PopulateTemplateData()
    PopulateMacrosData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const generateOutput = () => {
    const data = compileString(macros, templateBlocks, variables)
    setOutput(data)
  }

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {/* Sub-navbar */}
        <div className="flex items-center justify-start gap-6">
          <Button onClick={() => setViewMode("editor")}>Edit Template</Button>
          <Button onClick={() => setViewMode("preview")}>Preview</Button>
          <Button>Copy To Clipboard</Button>
          <Button>Download Markdown File</Button>

          {/* Temp Button */}
          <Button onClick={generateOutput}>Generate</Button>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-start justify-center rounded-lg border border-dashed shadow-sm">
          {/* Place Content Here */}
          {/* {viewMode === "editor" && ( */}
          <Editor
            templateBlocks={templateBlocks}
            setTemplateBlocks={setTemplateBlocks}
            variables={variables}
            setVariables={setVariables}
          />
          {/* )} */}

          {/* {viewMode === "preview" &&  */}
          <Preview output={output} />
        </div>
      </main>
    </div>
  )
}

export default GeneratorMainContent
