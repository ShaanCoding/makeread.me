import ReactMarkdownStyled from "./ReactMarkdownStyled"

const Preview = ({ output }: { output: string }) => {
  return (
    <div className="gap-6 p-6 xl:size-full">
      <div className="flex-col rounded-lg border border-dashed p-6 shadow-sm xl:size-full">
        <ReactMarkdownStyled output={output} />
      </div>
    </div>
  )
}

export default Preview
