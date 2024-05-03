"use client"

import { useState } from "react"
import { IPageType, ITemplate } from "@/api/generated"

import { Button } from "@/components/ui/button"
import Card from "@/components/SelectTemplate/Card"
import SelectTemplateSideBar from "@/components/SelectTemplate/Sidebar/Sidebar"

export default function IndexPage() {
  const [template, setTemplates] = useState<ITemplate[]>([])
  const [pageType, setPageType] = useState<IPageType>(IPageType.NONE)

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SelectTemplateSideBar
        setTemplateBlocks={setTemplates}
        pageType={pageType}
      />

      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
          <div className="flex gap-6 justify-end">
            {Object.keys(IPageType).map((page: string, index: number) => (
              <Button
                variant={`${pageType === IPageType[page] ? "default" : "outline"
                  }`}
                key={index}
                onClick={() => setPageType(IPageType[page] as IPageType)}
              >
                {IPageType[page]}
              </Button>
            ))}
          </div>

          {template.length === 0 && (
            <div className="flex items-center justify-center size-full">
              <div className="py-3 text-center">
                <h4 className="text-xl font-semibold">No blocks found</h4>
              </div>
            </div>
          )}

          {template.length !== 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-6 lg:grid-cols-3">
              {template.map((template: ITemplate, index: number) => (
                <Card {...template} key={index} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
