"use client"

import * as React from "react"
import { LuCheck } from "react-icons/lu"
import ChevronDown from "public/icons/chevron-down.svg"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"

type Category = {
  value: string
  label: string
}
const categories: Category[] = [
  {
    value: "read-me",
    label: "Read ME",
  },
  {
    value: "code-of-conduct",
    label: "Code of conduct",
  },

]

export function CategorySelector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<Category | null>(null)

  return (
    <>
      <p className="text-textGray text-[0.9375rem] font-medium mb-[10px]">Block Category</p>
      <Popover open={open} onOpenChange={setOpen} >
        <PopoverTrigger asChild className="mb-[15.5px]">
          <Button
            role="combobox"
            aria-expanded={open}
            className="text-[0.8125rem] font-medium  justify-between bg-tertiary w-full px-[15px] py-[12px] tracking-secondary"
          >
            {value ? value.label
              : "Drews Template"}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[245px] p-0">
          <Command>
            <CommandInput placeholder="Search category..." />
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  onSelect={()=>{
                    setValue(category)
                    setOpen(false)
                  }}
                >
                 
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}