import { IVariable } from "@/api/generated"
import { Control, useFieldArray } from "react-hook-form"

import CheckBoxField from "./CheckboxField"
import InputField from "./InputField"
import ListField from "./ListField"
import ObjectField from "./ObjectField"
import SelectField from "./SelectField"
import TextField from "./TextField"

const InputGenerator: React.FC<{
  variables: IVariable
  // register: UseFormRegister<any>
  control: Control<any>
}> = ({ variables, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: variables.name,
  })

  switch (variables._type) {
    case "input":
      return <InputField variables={variables} control={control} />

    case "textArea":
      return <TextField variables={variables} control={control} />

    case "checkBox":
      return <CheckBoxField variables={variables} control={control} />

    case "list":
      return <ListField variables={variables} control={control} />
    case "object":
      return <ObjectField variables={variables} control={control} />
    case "select":
      return <SelectField variables={variables} control={control} />
    default:
      return (
        <h1 className="pb-2 font-semibold text-red-600">
          Non-Supported Type: {variables._type}
        </h1>
      )
  }
}

export default InputGenerator
