"use client"

import { useState } from "react"
import Link from "next/link"
import { IPageType, ITemplate } from "@/openAPI/generated"
import { FilePlus2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Card from "@/components/SelectTemplate/Card"
import SelectTemplateSideBar from "@/components/SelectTemplate/Sidebar/Sidebar"

export default function IndexPage() {
  const [template, setTemplates] = useState<ITemplate[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const [pageType, setPageType] = useState<IPageType>(IPageType.NONE)
  const [multiSelectValue, setMultiSelectValue] = useState<string[]>([])

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SelectTemplateSideBar
        setTemplateBlocks={setTemplates}
        pageType={pageType}
        multiSelectValue={multiSelectValue}
        setMultiSelectValue={setMultiSelectValue}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      />

      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex gap-6 xl:items-center xl:justify-center">
              <Link href="/generator">
                <Button variant="default">
                  <FilePlus2 className="mr-2 size-4 text-nowrap" />
                  Create New Template
                </Button>
              </Link>
            </div>

            <div className="gap-6 xl:flex xl:items-center xl:justify-center">
              {Object.keys(IPageType) && (
                <Tabs defaultValue={pageType}>
                  <TabsList>
                    {Object.keys(IPageType).map(
                      (page: string, index: number) => (
                        <TabsTrigger
                          onClick={() => setPageType((IPageType as any)[page])}
                          value={(IPageType as any)[page]}
                          key={index}
                        >
                          {(IPageType as any)[page]}
                        </TabsTrigger>
                      )
                    )}
                  </TabsList>
                </Tabs>
              )}
            </div>
          </div>

          <CardGridState
            multiSelectValue={multiSelectValue}
            setMultiSelectValue={setMultiSelectValue}
            isLoading={isLoading}
            isError={isError}
            template={template}
          />
        </main>
      </div>
    </div>
  )
}

const CardGridState = ({
  multiSelectValue,
  setMultiSelectValue,
  isLoading,
  isError,
  template,
}: {
  multiSelectValue: string[]
  setMultiSelectValue: (value: string[]) => void
  isLoading: boolean
  isError: boolean
  template: ITemplate[]
}) => {
  const addCategoryToSidebar = (value: string) => {
    setMultiSelectValue([...multiSelectValue, value])
  }

  if (isLoading) {
    return (
      <div className="flex size-full flex-col items-center justify-center">
        <Spinner size="large" className="m-6" />
        <h4 className="text-xl font-semibold">Loading blocks...</h4>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex size-full items-center justify-center">
        <h4 className="text-xl font-semibold">
          Error loading blocks. Please try again later.
        </h4>
      </div>
    )
  }

  if (!isLoading && template.length === 0) {
    return (
      <div className="flex size-full items-center justify-center">
        <h4 className="text-xl font-semibold">No blocks found</h4>
      </div>
    )
  }

  return (
    <>
      {template.length !== 0 && (
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {template.map((template: ITemplate, index: number) => (
            <Card
              cardData={template}
              key={index}
              addCategoryToSidebar={addCategoryToSidebar}
            />
          ))}
        </div>
      )}
    </>
  )
}
