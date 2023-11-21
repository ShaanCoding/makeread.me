const Preview = ({ output }: { output: string }) => {
  return (
    <div className="size-full gap-6 p-6">
      <div
        className="size-full  flex-col rounded-lg border border-dashed shadow-sm"
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
    </div>
  )
}

export default Preview
