import { Controller } from "react-hook-form"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import ContextTitle from "./ContextTitle"
import { IRadioFieldProps } from "./types"

const RadioField: React.FC<IRadioFieldProps> = ({ variables, control }) => {
  return (
    <Controller
      control={control}
      name={variables.name}
      defaultValue={variables.defaultValue as string}
      render={({ field }) => (
        <div className="w-full pb-4">
          <ContextTitle
            title={variables.label}
            description={variables.description}
          />

          <RadioGroup
            {...field}
            name={variables.name}
            onValueChange={field.onChange}
          >
            {variables.radioList.map((option, index: number) => {
              return (
                <div className="flex items-center space-x-2" key={index}>
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              )
            })}
          </RadioGroup>
        </div>
      )}
    />
  )
}

export default RadioField
