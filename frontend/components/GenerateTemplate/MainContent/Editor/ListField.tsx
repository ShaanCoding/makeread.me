import { Button } from "@/components/ui/button"
import { useFieldArray } from "react-hook-form"
import InputGenerator from "./InputGenerator"
import { IListFieldProps } from "./types"

const ListField: React.FC<IListFieldProps> = ({ variables, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: variables.name,
  })

  return (
    <div className="pb-4">
      <h4 className="pb-2 font-semibold">{variables.label}</h4>

      <div className="">
        {fields.map((field, index) => (
          <div className="flex w-full gap-4" key={field.id}>
            {variables.listSchema &&
              variables.listSchema.map((schema, subIndex) => {
                let defaultValue: any =
                  variables.defaultValue?.[
                    index as keyof typeof variables.defaultValue
                  ]?.[schema.name] ?? ""

                return (
                  <InputGenerator
                    variables={{
                      name: `${variables.name}[${index}].${schema.name}`,
                      defaultValue: defaultValue as string | boolean | string[],
                      _type: schema._type,
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
