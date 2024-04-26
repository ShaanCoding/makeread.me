import { Controller } from "react-hook-form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ISelectFieldProps } from "./types"

const SelectField: React.FC<ISelectFieldProps> = ({ variables, control }) => {
  return (
    <Controller
      control={control}
      name={variables.name}
      defaultValue={variables.defaultValue as string}
      render={({ field }) => (
        <div className="w-full pb-4">
          <h4 className="pb-2 font-semibold">{variables.label}</h4>
          <Select
            {...field}
            name={variables.name}
            onValueChange={(value) => {
              field.onChange(value)
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={field.name} />
            </SelectTrigger>
            <SelectContent>
              {variables?.selectList &&
                variables.selectList.map((option, index) => (
                  <SelectItem value={option.value} key={index}>
                    {option.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      )}
    />
  )
}

export default SelectField
