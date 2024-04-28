import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { IFullTemplate, IFunction, readMeGenerator } from "@/api/generated"
import { useQuery } from "@tanstack/react-query"

import { Input } from "@/components/ui/input"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multiselect"

import MappedBlocks from "./MappedBlocks"

interface IOption {
  label: string
  value: string
}

const GeneratorSideBar: React.FC<{
  templateId: string
  templateBlocks: IFunction[]
  setTemplateBlocks: Dispatch<SetStateAction<IFunction[]>>
}> = ({ templateId, templateBlocks, setTemplateBlocks }) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [multiSelectValue, setMultiSelectValue] = useState<string[]>([
    templateId,
  ])
  const [multiSelectList, setMultiSelectList] = useState<IOption[]>([])

  // Make it so that it changes on text change
  const sidebarResults = useQuery({
    queryKey: ["getV1SidebarOptions", inputValue, multiSelectValue],
    queryFn: async () => {
      let request = await new readMeGenerator().template.getV1TemplateSidebar(
        "undefined",
        inputValue,
        multiSelectValue
      )

      return request.responseObject as IFullTemplate[]
    },
    staleTime: 5 * 1000,
  })

  const sidebarOptions = useQuery({
    queryKey: ["getV1SidebarOptionsInitial"],
    queryFn: async () => {
      let request =
        await new readMeGenerator().template.getV1TemplateSideBarOptions(
          "undefined"
        )

      return request.responseObject as IOption[]
    },
    staleTime: 5 * 1000,
  })

  useEffect(() => {
    if (sidebarOptions.status === "success") {
      setMultiSelectList(sidebarOptions.data!)
    }
  }, [sidebarOptions.status, sidebarOptions.data])

  return (
    <div className="bg-muted/40 hidden border-r md:block">
      <nav className="mt-6 grid gap-6 items-start px-2 text-sm font-medium lg:px-4">
        <Input
          placeholder="Search blocks"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <MultiSelectorComponent
          values={multiSelectValue}
          onValuesChange={setMultiSelectValue}
          options={multiSelectList}
        />
        <MappedBlocks
          blocks={sidebarResults.data ?? []}
          templateBlocks={templateBlocks}
          setTemplateBlocks={setTemplateBlocks}
        />
      </nav>

      {/* Upgrade to pro prompt */}
      {/* <UpgradePrompt /> */}
    </div>
  )
}

const MultiSelectorComponent: React.FC<{
  values: string[]
  onValuesChange: Dispatch<SetStateAction<string[]>>
  options: IOption[]
}> = ({ values, onValuesChange, options }) => {
  return (
    <MultiSelector values={values} onValuesChange={onValuesChange} loop={false}>
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select your template" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {options.map((option: IOption, i: number) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  )
}

export default GeneratorSideBar
