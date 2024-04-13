import { useEffect } from "react"
import { IFunction } from "@/api/generated"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"

import EditorBlock from "./EditorBlock"

const Editor = ({
  templateBlocks,
  setTemplateBlocks,
  setVariables,
}: {
  templateBlocks: IFunction[]
  setTemplateBlocks: React.Dispatch<React.SetStateAction<IFunction[]>>
  variables: Record<string, any>
  setVariables: React.Dispatch<React.SetStateAction<Record<string, any>>>
}) => {
  const methods = useForm()
  const { register, control, handleSubmit, watch } = methods

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log({
      ...data,
    })
    setVariables(data)
  }

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)())
    return () => subscription.unsubscribe()
  }, [handleSubmit, watch])

  const moveBlockUp = (index: number) => {
    if (index === 0) return
    const newBlocks = [...templateBlocks]
    const temp = newBlocks[index]
    newBlocks[index] = newBlocks[index - 1]
    newBlocks[index - 1] = temp
    setTemplateBlocks(newBlocks)
  }

  const moveBlockDown = (index: number) => {
    if (index === templateBlocks.length - 1) return
    const newBlocks = [...templateBlocks]
    const temp = newBlocks[index]
    newBlocks[index] = newBlocks[index + 1]
    newBlocks[index + 1] = temp
    setTemplateBlocks(newBlocks)
  }

  const deleteBlock = (index: number) => {
    const newBlocks = [...templateBlocks]
    newBlocks.splice(index, 1)
    setTemplateBlocks(newBlocks)
  }

  return (
    <div className="grid lg:size-full grid-cols-1 gap-6 p-6">
      <FormProvider {...methods}>
        <form
          onChange={handleSubmit(onSubmit)}
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-6 grid-cols-1"
        >
          {templateBlocks.map((block: IFunction, index: number) => (
            <EditorBlock
              block={block}
              moveBlockUp={() => moveBlockUp(index)}
              moveBlockDown={() => moveBlockDown(index)}
              deleteBlock={() => deleteBlock(index)}
              key={index}
              control={control}
            />
          ))}
        </form>
      </FormProvider>
    </div>
  )
}

export default Editor
