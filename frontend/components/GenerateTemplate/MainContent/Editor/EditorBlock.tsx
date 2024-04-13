import { IFunction, IVariable } from "@/api/generated"
import { ChevronDownIcon, ChevronUpIcon, Trash2Icon } from "lucide-react"
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
  useFieldArray,
} from "react-hook-form"

import { AutosizeTextarea } from "@/components/ui/autosize-textarea"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const EditorBlock = ({
  block,
  moveBlockUp,
  moveBlockDown,
  deleteBlock,
  control,
}: {
  block: IFunction
  moveBlockUp: () => void
  moveBlockDown: () => void
  deleteBlock: () => void
  control: Control<FieldValues, any>
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="mb-2 lg:mb-0">
            <CardTitle>{block.name}</CardTitle>
            <CardDescription>{block.description}</CardDescription>
          </div>
          <div className="flex items-center justify-start gap-6">
            <Button
              variant={"outline"}
              onClick={() => {
                moveBlockUp()
              }}
            >
              <ChevronUpIcon className="mr-2" />
              Up
            </Button>
            <Button variant={"outline"} onClick={() => moveBlockDown()}>
              <ChevronDownIcon className="mr-2" />
              Down
            </Button>
            <Button
              variant={"outline"}
              className="text-red-500"
              onClick={() => deleteBlock()}
            >
              <Trash2Icon className="mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {block.variables.map((variables: IVariable, index: number) => {
          return (
            <InputGenerator
              key={variables.name}
              variables={variables}
              control={control}
            />
          )
        })}
      </CardContent>
    </Card>
  )
}

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
      return (
        <Controller
          control={control}
          name={variables.name}
          defaultValue={variables.defaultValue as string}
          render={({ field }) => (
            <div className="pb-4 w-full">
              <h4 className="font-semibold pb-2">{variables.label}</h4>
              <Input {...field} name={variables.name} />
            </div>
          )}
        />
      )

    case "textArea":
      return (
        <Controller
          control={control}
          name={variables.name}
          defaultValue={variables.defaultValue as string}
          render={({ field }) => (
            <div className="pb-4 w-full">
              <h4 className="font-semibold pb-2">{variables.label}</h4>
              <AutosizeTextarea {...field} name={variables.name} />
            </div>
          )}
        />
      )

    case "boolean":
      return (
        <Controller
          control={control}
          name={variables.name}
          defaultValue={variables.defaultValue as boolean}
          render={({ field }) => (
            <div className="flex items-center justify-start pb-4 w-full">
              <h4 className="pr-2 font-semibold">{variables.label}</h4>
              <input type="checkbox" {...field} />
            </div>
          )}
        />
      )

    case "list":
      {
        /* TODO: Add implementation */
      }
      return <ListField variables={variables} control={control} />
    default:
      return <h1>{variables._type}</h1>
  }
}

export default EditorBlock

interface IListFieldProps {
  variables: IVariable
  control: Control
}

const ListField: React.FC<IListFieldProps> = ({ variables, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: variables.name,
  })

  return (
    <div className="pb-4">
      <h4 className="font-semibold pb-2">{variables.label} - LIST</h4>

      <div className="">
        {fields.map((field, index) => (
          <div className="flex gap-4 w-full" key={field.id}>
            {variables?.listSchema.map((schema, subIndex) => (
              <InputGenerator
                variables={{
                  name: `${variables.name}[${index}].${schema.name}`,
                  defaultValue:
                    variables.defaultValue?.[index]?.[schema.name] ?? "",
                  _type: schema._type,
                  label: schema.label,
                }}
                control={control}
                key={`${index}-${subIndex}`}
              />
            ))}
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
