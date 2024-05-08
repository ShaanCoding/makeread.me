import { useEffect, useState } from "react"
import { IDefaultBlockInput, IFunction, IPageType, readMeGenerator } from "@/api/generated"

import CopyButton from "./CopyButton"
import DownloadButton from "./DownloadButton"
import Editor from "./Editor/Editor"
import Preview from "./Editor/Preview/Preview"
import { compileString } from "./generator"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { GridIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RawText from "./Editor/RawText/RawText"

// import { Tally1, Tally2, Tally3 } from "lucide-react"


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

  enum EditModesOne {
    EDIT = 'Edit',
    PREVIEW = 'Preview',
    RAW = 'Raw',
  }

  enum EditModeTwo {
    EDIT_PREVIEW = 'Edit & Preview',
    RAW = 'Raw',
  }

  enum EditModeThree {
    // Empty to hide the enum
  }

  const [numberOfViewsToShow, setNumberOfViewsToShow] = useState<number>(2)
  const [editMode, setEditMode] = useState<EditModesOne | EditModeTwo | EditModeThree>(EditModeTwo.EDIT_PREVIEW)

  const alternateNumberOfViewsToShow = () => {
    if (numberOfViewsToShow === 3) {
      setEditMode(EditModesOne.EDIT)
      setNumberOfViewsToShow(1)
    } else {
      if (numberOfViewsToShow === 1) setEditMode(EditModeTwo.EDIT_PREVIEW)
      setNumberOfViewsToShow(numberOfViewsToShow + 1)
    }
  }


  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
        {/* Sub-navbar */}

        <div className="flex items-center justify-between gap-6">
          {(() => {
            if (numberOfViewsToShow === 3) return <div></div>

            let EditMode;

            switch (numberOfViewsToShow) {
              case 1:
                EditMode = EditModesOne;
                break;
              case 2:
                EditMode = EditModeTwo;
                break;
              default:
                EditMode = EditModesOne;
                break;
            }

            return (
              <Tabs value={editMode as string}>
                <TabsList>
                  {Object.keys(EditMode).map((page: string, index: number) => (
                    <TabsTrigger
                      onClick={() => setEditMode((EditMode as any)[page])}
                      value={(EditMode as any)[page]}
                      key={index}>
                      {(EditMode as any)[page]}
                    </TabsTrigger >
                  ))}
                </TabsList>
                {/* TODO: Delete */}
                <TabsContent value="account">
                </TabsContent>
              </Tabs>
            )
          })()}


          <div className="flex gap-6 items-center justify-end">
            <Button variant={'outline'} onClick={alternateNumberOfViewsToShow}>
              Toggle View
              {numberOfViewsToShow === 1 && <GridIcon className="stroke-red-500 ml-2 size-4" />}
              {numberOfViewsToShow === 2 && <GridIcon className="stroke-green-500 ml-2 size-4" />}
              {numberOfViewsToShow === 3 && <GridIcon className="stroke-blue-500 ml-2 size-4" />}
            </Button>
            <CopyButton copiedText={output} />
            <DownloadButton downloadText={output} fileName={"README.md"} />
          </div>
        </div>

        {/* Content */}
        <div className={`rounded-lg border border-dashed shadow-sm
        grid gap-6 items-start justify-center
        ${numberOfViewsToShow === 1 && 'grid-cols-1'}
        ${(numberOfViewsToShow === 2 && editMode !== EditModesOne.RAW) && 'grid-cols-2'}
        ${numberOfViewsToShow === 3 && 'grid-cols-3'}`}>
          {/* <div className="rounded-lg border border-dashed shadow-sm xl:flex xl:flex-1 xl:items-start xl:justify-center"> */}
          {/* Place Content Here */}
          {(editMode === EditModesOne.EDIT || editMode === EditModeTwo.EDIT_PREVIEW || numberOfViewsToShow === 3) && (
            <Editor
              templateBlocks={templateBlocks}
              setTemplateBlocks={setTemplateBlocks}
              variables={variables}
              setVariables={setVariables}
            />
          )}

          {(editMode === EditModesOne.PREVIEW || editMode === EditModeTwo.EDIT_PREVIEW || numberOfViewsToShow === 3) && (
            <Preview output={output} />
          )}

          {(editMode === EditModesOne.RAW || numberOfViewsToShow === 3) && (
            <RawText output={output} />
          )}

        </div>
      </main >
    </div >
  )
}

export default MainContent
