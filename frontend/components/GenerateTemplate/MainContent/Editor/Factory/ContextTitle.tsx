import { Info } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const ContextTitle = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <span className="mb-2 flex flex-row items-center gap-x-2">
      <h4 className="font-semibold">{title}</h4>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Info className="size-5" />
          </TooltipTrigger>
          <TooltipContent>
            <p>{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  )
}

export default ContextTitle
