"use client"

import { useEffect, useState } from "react"
import { ITemplate, readMeGenerator } from "@/api/generated"

import Card from "@/components/SelectTemplate/Card"

export default function IndexPage() {
  const [template, setTemplates] = useState<ITemplate[]>([])

  useEffect(() => {
    ;(async () => {
      const templateService: any[] | undefined = await (
        await new readMeGenerator().template.getTemplate()
      ).responseObject

      if (!templateService) {
        return
      }

      setTemplates(templateService)
    })()
  }, [])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {template.map((template: ITemplate, index: number) => (
          <Card {...template} key={index} />
        ))}
      </div>
    </section>
  )
}
