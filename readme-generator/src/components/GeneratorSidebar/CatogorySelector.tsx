"use client"

import * as React from "react"
import ChevronDown from "public/icons/chevron-down.svg"
import qs from "query-string"
import { AiOutlineCloseCircle } from "react-icons/ai"
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
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Category, categories } from "@/constants"


export function CategorySelector() {
  const [open, setOpen] = React.useState(false)
  const [category, setCategory] = React.useState<Category | null>(null)
  const path = usePathname()
  const params = useSearchParams()
  const router = useRouter()

  React.useEffect(() => {
    if (!category) {
      router.push(path);
      return;
    }
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const url = qs.stringifyUrl(
      {
        url: path,
        query: {
          ...currentQuery,
          category: category.value,
        },
      },
      { skipNull: true }
    )

    router.push(url)

  }, [category]);
  return (
    <>
      <p className="text-textGray text-[0.9375rem] font-medium mb-[10px]">
        Block Category
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="mb-[15.5px]">
          <Button
            role="combobox"
            aria-expanded={open}
            className="text-[0.8125rem] font-medium  justify-between bg-tertiary w-full px-[15px] py-[12px] tracking-secondary"
          >
            {category ? category.label : "Drews Template"}
            {category ? <button onClick={() => setCategory(null)}>
              <AiOutlineCloseCircle className="w-5 h-5 text-red-500" />
            </button> : <ChevronDown />

            }
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
                  onSelect={() => {
                    setCategory(category)
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
