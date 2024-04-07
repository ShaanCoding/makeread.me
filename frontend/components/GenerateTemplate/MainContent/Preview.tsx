const Preview = ({ output }: { output: string }) => {
  return (
    <div className="lg:size-full gap-6 p-6">
      <div
        className="p-6 lg:size-full flex-col rounded-lg border border-dashed shadow-sm"
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
    </div>
  )
}

export default Preview
