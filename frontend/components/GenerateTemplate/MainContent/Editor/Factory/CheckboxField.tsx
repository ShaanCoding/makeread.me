import { Controller } from "react-hook-form"

import { Checkbox } from "@/components/ui/checkbox"

import { IListFieldProps } from "./types"

const CheckBoxField: React.FC<IListFieldProps> = ({ variables, control }) => {
  return (
    <Controller
      control={control}
      name={variables.name}
      defaultValue={variables.defaultValue as boolean}
      render={({ field }) => (
        <div className="flex w-full items-center justify-start pb-4">
          <h4 className="pr-2 font-semibold">{variables.label}</h4>

          <Checkbox
            {...field}
            name={variables.name}
            checked={field.value}
            onCheckedChange={(isChecked) => field.onChange(isChecked)}
          />
        </div>
      )}
    />
  )
}

export default CheckBoxField
