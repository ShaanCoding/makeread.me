import { IFunction } from "@/api/generated"
import { ChevronDownIcon, ChevronUpIcon, Trash2Icon } from "lucide-react"
import { UseFormRegister } from "react-hook-form"

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

const EditorBlock = ({
  block,
  moveBlockUp,
  moveBlockDown,
  deleteBlock,
  register,
}: {
  block: IFunction
  moveBlockUp: () => void
  moveBlockDown: () => void
  deleteBlock: () => void
  register: UseFormRegister<any>
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
        {block.variables.map((variables: any) => {
          switch (variables._type) {
            case "text":
              return (
                <div className="pb-2">
                  <h4 className="font-semibold">{variables.label}</h4>
                  <Input
                    {...register(variables.name)}
                    name={variables.name}
                    defaultValue={variables.defaultValue}
                  />
                </div>
              )
            case "boolean":
              return (
                <div className="flex items-center justify-start pb-2">
                  <h4 className="pr-2 font-semibold">{variables.label}</h4>
                  <input
                    type="checkbox"
                    {...register(variables.name)}
                    name={variables.name}
                    defaultChecked={variables.defaultValue}
                  />
                </div>
              )
            default:
              break
          }
        })}
      </CardContent>
    </Card>
  )
}

export default EditorBlock
