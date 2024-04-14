import { useState } from "react"
import { IFunction, IVariable } from "@/api/generated"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react"
import {
  Control,
  Controller,
  FieldValues,
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
import { Input } from "@/components/ui/input"

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
  const [isMinimized, setIsMinimized] = useState<boolean>(true)

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
            <Button
              variant={"outline"}
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? (
                <>
                  <PlusIcon className="mr-2" />
                  Show
                </>
              ) : (
                <>
                  <MinusIcon className="mr-2" />
                  Hide
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className={`${isMinimized ? "hidden" : ""}`}>
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
      return <InputField variables={variables} control={control} />

    case "textArea":
      return <TextField variables={variables} control={control} />

    case "boolean":
      return <BooleanField variables={variables} control={control} />

    case "list":
      return <ListField variables={variables} control={control} />
    case "object":
      return <ObjectField variables={variables} control={control} />
    default:
      return (
        <h1 className="font-semibold pb-2 text-red-600">
          Non-Supported Type: {variables._type}
        </h1>
      )
  }
}

export default EditorBlock

interface IListFieldProps {
  variables: IVariable
  control: Control
}

const InputField: React.FC<IListFieldProps> = ({ variables, control }) => {
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
}

const TextField: React.FC<IListFieldProps> = ({ variables, control }) => {
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
}

const BooleanField: React.FC<IListFieldProps> = ({ variables, control }) => {
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
}

const ObjectField: React.FC<IListFieldProps> = ({ variables, control }) => {
  return (
    <div className="pb-4">
      <h4 className="font-semibold pb-2">{variables.label}</h4>

      <div className="flex gap-4 w-full">
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

const ListField: React.FC<IListFieldProps> = ({ variables, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: variables.name,
  })

  return (
    <div className="pb-4">
      <h4 className="font-semibold pb-2">{variables.label}</h4>

      <div className="">
        {fields.map((field, index) => (
          <div className="flex gap-4 w-full" key={field.id}>
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
