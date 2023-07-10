"use client"

import { FC } from "react"
import { PiMagnifyingGlassBold } from "react-icons/pi"

import { Input } from "@/components/ui/Input"

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  return (
    <>
      <p className="text-textGray text-[0.9375rem] font-medium mb-[10px]">
        Search / Filter
      </p>
      <div className="relative">
        <Input placeholder="Name" />
        <PiMagnifyingGlassBold className="w-4 h-4 absolute right-0 -translate-x-1/2 top-0 translate-y-[55%] text-themeGreen" />
      </div>
    </>
  )
}

export default SearchBar
