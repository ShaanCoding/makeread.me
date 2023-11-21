"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { IFunction, readMeGenerator } from "@/api/generated"

import GeneratorMainContent from "@/components/GenerateTemplate/MainContent/MainContent"
import GeneratorSideBar from "@/components/GenerateTemplate/Sidebar/GeneratorSidebar"

export default function ReadMEGeneratorPage() {
  const router = useParams()
  const templateId: string = router.id?.[0] as string

  const [templateBlocks, setTemplateBlocks] = useState<IFunction[]>([])

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <GeneratorSideBar
        templateId="readme-one"
        templateBlocks={templateBlocks}
        setTemplateBlocks={setTemplateBlocks}
      />

      {/* Main Content */}
      <GeneratorMainContent
        templateId="readme-one"
        templateBlocks={templateBlocks}
        setTemplateBlocks={setTemplateBlocks}
      />
    </div>
  )
}
