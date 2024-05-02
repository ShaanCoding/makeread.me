"use client"

import { IFullTemplate, ITemplate, readMeGenerator } from "@/api/generated"
import { useQuery } from "@tanstack/react-query"

import Card from "@/components/SelectTemplate/Card"

const TopThreeTemplates = () => {
  const templateMaps = useQuery({
    queryKey: ["getV1Template"],
    queryFn: async () => {
      let request = await new readMeGenerator().template.getV1TemplateAll()

      return request.responseObject?.slice(0, 3) as IFullTemplate[]
    },
    staleTime: 5 * 1000,
  })

  if (templateMaps.data && templateMaps.isSuccess) {
    return (
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-themeGreen font-semibold">Try them out!</h2>
          <h1 className="text-6xl font-bold text-white">Featured Templates</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-6 lg:grid-cols-3">
          {templateMaps.data?.map((template: ITemplate, index: number) => (
            <Card {...template} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default TopThreeTemplates
