"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { IFunction } from "@/api/generated"

import MainContent from "@/components/GenerateTemplate/MainContent/MainContent"
import GeneratorSideBar from "@/components/GenerateTemplate/Sidebar/Sidebar"

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
      <MainContent
        templateId="readme-one"
        templateBlocks={templateBlocks}
        setTemplateBlocks={setTemplateBlocks}
      />
    </div>
  )
}
