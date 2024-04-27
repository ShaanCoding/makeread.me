import { Controller } from "react-hook-form"

import { Checkbox } from "@/components/ui/checkbox"

import ContextTitle from "./ContextTitle"
import { ICheckBoxFieldProps } from "./types"

const CheckBoxField: React.FC<ICheckBoxFieldProps> = ({
  variables,
  control,
}) => {
  return (
    <Controller
      control={control}
      name={variables.name}
      defaultValue={variables.defaultValue}
      render={({ field }) => (
        <div className="flex w-full items-center justify-start pb-4">
          <ContextTitle title={variables.label} description={variables.label} />
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
