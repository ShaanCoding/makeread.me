import { Controller } from "react-hook-form"

import { AutosizeTextarea } from "@/components/ui/autosize-textarea"

import { ITextFieldProps } from "./types"

const TextField: React.FC<ITextFieldProps> = ({ variables, control }) => {
  return (
    <Controller
      control={control}
      name={variables.name}
      defaultValue={variables.defaultValue as string}
      render={({ field }) => (
        <div className="w-full pb-4">
          <h4 className="pb-2 font-semibold">{variables.label}</h4>
          <AutosizeTextarea {...field} name={variables.name} />
        </div>
      )}
    />
  )
}

export default TextField
