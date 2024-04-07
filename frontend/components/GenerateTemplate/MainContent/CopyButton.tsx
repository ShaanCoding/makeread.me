import React, { useState } from "react"
import { CheckIcon, ClipboardIcon } from "lucide-react"
import { twMerge } from "tailwind-merge"

import { Button } from "@/components/ui/button"

const CopyButton: React.FC<{ copiedText: string; className?: string }> = ({
  copiedText,
  className,
}) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <Button
      variant={"outline"}
      className={twMerge(className)}
      onClick={() => {
        navigator.clipboard.writeText(copiedText)
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      }}
    >
      {isCopied ? "Copied!" : "Copy To Clipboard"}
      {isCopied ? (
        <CheckIcon className="ml-2 h-4 w-4" />
      ) : (
        <ClipboardIcon className="ml-2 h-4 w-4" />
      )}
    </Button>
  )
}

export default CopyButton
