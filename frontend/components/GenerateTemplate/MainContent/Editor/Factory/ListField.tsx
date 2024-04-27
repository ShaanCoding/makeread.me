import { useEffect } from "react"
import {
  IVariableCheckBox,
  IVariableInput,
  IVariableList,
  IVariableObject,
  IVariableSelect,
  IVariableTextArea,
} from "@/api/generated"
import { useFieldArray } from "react-hook-form"

import { Button } from "@/components/ui/button"

import InputGenerator from "./InputGenerator"
import { IListFieldProps } from "./types"

const ListField: React.FC<IListFieldProps> = ({ variables, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: variables.name,
  })

  useEffect(() => {
    remove() // Remove the default value (if there was any)
    if (variables.defaultValue && Array.isArray(variables.defaultValue)) {
      variables.defaultValue.forEach((value) => {
        append(value)
      })
    }
  }, [append, variables.defaultValue])

  return (
    <div className="pb-4">
      <h4 className="pb-2 font-semibold">{variables.label}</h4>

      <div className="">
        {fields.map((field, index) => (
          <div className="flex w-full gap-4" key={field.id}>
            {variables.listSchema &&
              variables.listSchema.map((schema, subIndex) => {
                let defaultValue: any =
                  (
                    variables.defaultValue?.[
                      index as keyof typeof variables.defaultValue
                    ] as Record<string, any>
                  )?.[schema.name] ?? ""

                return (
                  <InputGenerator
                    variables={{
                      name: `${variables.name}[${index}].${schema.name}`,
                      defaultValue: defaultValue,
                      _type: schema._type as
                        | IVariableTextArea._type
                        | IVariableInput._type,
                      label: schema.label,
                    }}
                    control={control}
                    key={`${index}-${subIndex}`}
                  />
                )
              })}
            <div className="mt-8">
              <Button variant={"outline"} onClick={() => remove(index)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant={"outline"}
        onClick={() => {
          append({})
        }}
      >
        Add
      </Button>
    </div>
  )
}

export default ListField
