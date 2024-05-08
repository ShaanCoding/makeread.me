import React from "react"
import { DownloadIcon } from "lucide-react"
import { twMerge } from "tailwind-merge"

import { Button } from "@/components/ui/button"

const DownloadButton: React.FC<{
  downloadText: string
  fileName: string
  className?: string
  onClick?: () => void
}> = ({ downloadText, fileName, className, onClick }) => {
  return (
    <Button
      variant={"outline"}
      className={twMerge(className)}
      onClick={() => {
        const element = document.createElement("a")
        const file = new Blob([downloadText], { type: "text/plain" })
        element.href = URL.createObjectURL(file)
        element.download = `${fileName}`
        document.body.appendChild(element)
        element.click()

        if (onClick) onClick()
      }}
    >
      Download ReadME
      <DownloadIcon className="ml-2 size-4" />
    </Button>
  )
}

export default DownloadButton
