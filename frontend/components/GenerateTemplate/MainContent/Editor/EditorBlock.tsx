import { useState } from "react"
import { IFunction, IVariable } from "@/api/generated"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react"
import { Control, FieldValues } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import InputGenerator from "./Factory/InputGenerator"

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
        <div className="mb-2 xl:mb-4">
          <CardTitle>{block.name}</CardTitle>
          <CardDescription>{block.description}</CardDescription>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-6">
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

export default EditorBlock
