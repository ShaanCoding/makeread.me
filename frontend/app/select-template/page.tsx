"use client"

import { useState } from "react"
import Link from "next/link"
import { IPageType, ITemplate } from "@/api/generated"
import { FilePlus2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import Card from "@/components/SelectTemplate/Card"
import SelectTemplateSideBar from "@/components/SelectTemplate/Sidebar/Sidebar"

export default function IndexPage() {
  const [template, setTemplates] = useState<ITemplate[]>([])
  const [pageType, setPageType] = useState<IPageType>(IPageType.NONE)

  function getTemplateId(template: ITemplate): string {
    return template.title + template.dateCreated
  }

  function getFavoriteTemplates(): string[] {
    const favoriteTemplatesJson = localStorage.getItem("favoriteTemplates")
    if (favoriteTemplatesJson) {
      return JSON.parse(favoriteTemplatesJson) as string[]
    } else {
      return []
    }
  }

  function isFavoriteTemplate(templateId: string): boolean {
    const favoriteTemplates = getFavoriteTemplates()
    return favoriteTemplates.includes(templateId)
  }

  function toggleFavoriteTemplate(templateId: string): void {
    const favoriteTemplates = getFavoriteTemplates()
    if (!favoriteTemplates.includes(templateId)) {
      console.log(template)
      favoriteTemplates.push(templateId)
      localStorage.setItem(
        "favoriteTemplates",
        JSON.stringify(favoriteTemplates)
      )
    } else {
      const newFavoriteTemplates = favoriteTemplates.filter(
        (id) => id !== templateId
      )
      localStorage.setItem(
        "favoriteTemplates",
        JSON.stringify(newFavoriteTemplates)
      )
    }
  }

  function getSortedTemplatesByFavorite() {
    return template.sort((a, b) =>
      isFavoriteTemplate(getTemplateId(a)) ===
      isFavoriteTemplate(getTemplateId(b))
        ? 0
        : isFavoriteTemplate(getTemplateId(a))
        ? -1
        : 1
    )
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SelectTemplateSideBar
        setTemplateBlocks={setTemplates}
        pageType={pageType}
      />

      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <div className="flex gap-6 xl:items-center xl:justify-center">
              <Link href="/generator">
                <Button variant="default">
                  <FilePlus2 className="mr-2 size-4" />
                  Create New Template
                </Button>
              </Link>
            </div>

            <div className="xl:flex xl:items-center xl:justify-center gap-6">
              <h4 className="text-lg font-semibold mb-2 xl:mb-0">Page Type</h4>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.keys(IPageType).map((page: string, index: number) => (
                  <Button
                    variant={`${
                      pageType === (IPageType as any)[page]
                        ? "default"
                        : "outline"
                    }`}
                    key={index}
                    onClick={() => setPageType((IPageType as any)[page])}
                  >
                    {(IPageType as any)[page]}
                  </Button>
                ))}
              </div>
            </div>
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
              {getSortedTemplatesByFavorite().map(
                (template: ITemplate, index: number) => (
                  <Card
                    {...template}
                    key={index}
                    isFavoriteTemplate={isFavoriteTemplate(
                      getTemplateId(template)
                    )}
                    toggleFavoriteTemplate={toggleFavoriteTemplate}
                  />
                )
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
