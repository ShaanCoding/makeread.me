"use client"

import { useMemo, useState } from "react"
import { useParams } from "next/navigation"

import MainContent from "@/components/GenerateTemplate/MainContent/MainContent"
import GeneratorSideBar from "@/components/GenerateTemplate/Sidebar/Sidebar"
import { IFunction } from "@/openAPI/generated"

export default function ReadMEGeneratorPage() {
  const router = useParams()
  const templateId: string = useMemo(() => {
    return (router.id?.[0] as string) ?? "undefined"
  }, [router.id])

  // These are the blocks that render on the main content page
  const [templateBlocks, setTemplateBlocks] = useState<IFunction[]>([])

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <GeneratorSideBar
        templateId={templateId}
        templateBlocks={templateBlocks}
        setTemplateBlocks={setTemplateBlocks}
      />

      {/* Main Content */}
      <MainContent
        templateId={templateId}
        templateBlocks={templateBlocks}
        setTemplateBlocks={setTemplateBlocks}
      />
    </div>
  )
}
