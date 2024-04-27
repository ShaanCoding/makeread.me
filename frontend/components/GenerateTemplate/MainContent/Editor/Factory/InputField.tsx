import { Controller } from "react-hook-form"

import { Input } from "@/components/ui/input"

import { IInputFieldProps } from "./types"

const InputField: React.FC<IInputFieldProps> = ({ variables, control }) => {
  return (
    <Controller
      control={control}
      name={variables.name}
      defaultValue={variables.defaultValue as string}
      render={({ field }) => (
        <div className="w-full pb-4">
          <h4 className="pb-2 font-semibold">{variables.label}</h4>
          <Input {...field} name={variables.name} />
        </div>
      )}
    />
  )
}

export default InputField
