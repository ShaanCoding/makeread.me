import { Controller } from "react-hook-form"

import { Input } from "@/components/ui/input"

import ContextTitle from "./ContextTitle"
import { IInputFieldProps } from "./types"

const InputField: React.FC<IInputFieldProps> = ({ variables, control }) => {
  return (
    <Controller
      control={control}
      name={variables.name}
      defaultValue={variables.defaultValue as string}
      render={({ field }) => (
        <div className="w-full pb-4">
          <ContextTitle title={variables.label} description={variables.label} />
          <Input {...field} name={variables.name} />
        </div>
      )}
    />
  )
}

export default InputField
