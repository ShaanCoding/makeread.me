import { IVariableInput, IVariableTextArea } from "@/api/generated"

import ContextTitle from "./ContextTitle"
import InputGenerator from "./InputGenerator"
import { IObjectFieldProps } from "./types"

const ObjectField: React.FC<IObjectFieldProps> = ({ variables, control }) => {
  return (
    <div className="pb-4">
      <ContextTitle title={variables.label} description={variables.label} />
      <div className="flex w-full gap-4">
        {variables.objectSchema &&
          variables.objectSchema.map((schema, index) => {
            let defaultValue: any =
              variables.defaultValue?.[
                schema.name as keyof typeof variables.defaultValue
              ] ?? ""

            return (
              <InputGenerator
                variables={{
                  name: `${variables.name}.${schema.name}`,
                  defaultValue: defaultValue,
                  _type: schema._type as
                    | IVariableInput._type
                    | IVariableTextArea._type,
                  label: schema.label,
                }}
                control={control}
                key={index}
              />
            )
          })}
      </div>
    </div>
  )
}

export default ObjectField
