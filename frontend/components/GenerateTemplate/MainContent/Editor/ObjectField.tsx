import InputGenerator from "./InputGenerator"
import { IListFieldProps } from "./types"

const ObjectField: React.FC<IListFieldProps> = ({ variables, control }) => {
  return (
    <div className="pb-4">
      <h4 className="pb-2 font-semibold">{variables.label}</h4>

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
                  defaultValue: defaultValue as string | boolean | string[],
                  _type: schema._type,
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
