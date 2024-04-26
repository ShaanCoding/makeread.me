"use client"

import { useEffect, useState } from "react"
import { ITemplate, readMeGenerator } from "@/api/generated"

import Card from "@/components/SelectTemplate/Card"

const TopThreeTemplates = () => {
  const [template, setTemplates] = useState<ITemplate[]>([])

  useEffect(() => {
    ;(async () => {
      const templateService: any[] | undefined = await (
        await new readMeGenerator().template.getTemplate()
      ).responseObject

      if (!templateService) {
        return
      }

      setTemplates(templateService.slice(0, 3))
    })()
  }, [])

  return (
    <div>
      <div className="mb-12 text-center">
        <h2 className="text-themeGreen font-semibold">Try them out!</h2>
        <h1 className="text-6xl font-bold text-white">Featured Templates</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-6 lg:grid-cols-3">
        {template.map((template: ITemplate, index: number) => (
          <Card {...template} key={index} />
        ))}
      </div>
    </div>
  )
}

export default TopThreeTemplates
