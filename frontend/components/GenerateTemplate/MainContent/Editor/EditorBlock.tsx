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
  isTransitionUp,
  isTransitionDown,
  block,
  moveBlockUp,
  moveBlockDown,
  deleteBlock,
  control,
}: {
  isTransitionUp: boolean
  isTransitionDown: boolean
  block: IFunction
  moveBlockUp: () => void
  moveBlockDown: () => void
  deleteBlock: () => void
  control: Control<FieldValues, any>
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(true)

  function getHeight() {
    const card = document
      .getElementById("editor-block")
      ?.getBoundingClientRect()
    const cardHeight = card?.height ?? 0
    return cardHeight + 24
  }
  return (
    <Card
      id="editor-block"
      className={`group px-3 py-1 p-0 transition-transform duration-300 transform ${
        !isTransitionDown &&
        !isTransitionUp &&
        isMinimized &&
        "hover:scale-[1.02]"
      }
      `}
      style={
        isTransitionDown
          ? { transform: `translateY(${getHeight().toString()}px)` }
          : isTransitionUp
          ? { transform: `translateY(-${getHeight().toString()}px)` }
          : {}
      }
    >
      <CardHeader>
        <div>
          <CardTitle>{block.name}</CardTitle>
          <CardDescription>{block.description}</CardDescription>
        </div>
        <div className="invisible group-hover:visible flex flex-wrap items-center justify-start gap-1">
          <Button
            variant={"outline"}
            size={"sx"}
            onClick={() => {
              moveBlockUp()
              setIsMinimized(true)
            }}
          >
            <ChevronUpIcon className="mr-1 w-5" />
            Up
          </Button>
          <Button
            variant={"outline"}
            size={"sx"}
            onClick={() => {
              moveBlockDown()
              setIsMinimized(true)
            }}
          >
            <ChevronDownIcon className="mr-1 w-5" />
            Down
          </Button>
          <Button
            variant={"outline"}
            size={"sx"}
            className="text-red-500"
            onClick={() => deleteBlock()}
          >
            <Trash2Icon className="mr-1 w-5" />
            Delete
          </Button>
          <Button
            variant={"outline"}
            size={"sx"}
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? (
              <>
                <PlusIcon className="mr-1 w-5" />
                Show
              </>
            ) : (
              <>
                <MinusIcon className="mr-1 w-5" />
                Hide
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className={`${isMinimized ? "hidden" : ""}`}>
        {block.variables.map((variables: any, index: number) => {
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
