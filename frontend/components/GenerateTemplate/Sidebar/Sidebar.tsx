import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react"
import { IFullTemplate, IFunction, readMeGenerator } from "@/api/generated"
import { useQuery } from "@tanstack/react-query"
import { useDebounce } from "use-debounce"

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
  const [debouncedInputValue] = useDebounce<string>(inputValue, 500)

  const selectorValue = useMemo(() => {
    return templateId !== "undefined" ? [templateId] : []
  }, [templateId])

  const [multiSelectValue, setMultiSelectValue] = useState<string[]>(selectorValue)
  const [multiSelectList, setMultiSelectList] = useState<IOption[]>([])

  const sidebarResults = useQuery({
    queryKey: ["getV1SidebarOptions", debouncedInputValue, multiSelectValue],
    queryFn: async () => {
      let request = await new readMeGenerator().sidebar.getV1SidebarTemplate(debouncedInputValue, multiSelectValue)

      return request.responseObject as IFullTemplate[]
    },
    staleTime: 5 * 1000,
  })

  const sidebarOptions = useQuery({
    queryKey: ["getV1SidebarOptionsInitial"],
    queryFn: async () => {
      let request =
        await new readMeGenerator().sidebar.getV1SidebarTemplateOptions()

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
    <div className="bg-muted/40 mb-4 hidden rounded-br-lg border md:block xl:mb-6">
      <nav className="mt-6 grid items-start gap-6 px-2 text-sm font-medium lg:px-4">
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

      {sidebarOptions.data?.length === 0 && (
        <div className="py-3 text-center">
          <h4 className="text-xl font-semibold">No blocks found</h4>
        </div>
      )}

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
