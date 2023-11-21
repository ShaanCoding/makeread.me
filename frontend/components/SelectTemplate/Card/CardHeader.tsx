import { ITemplate } from "@/api/generated"
import { StarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  CardDescription,
  CardTitle,
  CardHeader as UICardHeader,
} from "@/components/ui/card"
import SocialButton from "@/components/common/SocialButton"

const CardHeader: React.FC<
  Pick<ITemplate, "featured" | "title" | "author">
> = ({ featured, title, author }) => {
  return (
    <UICardHeader>
      <div className="xl:flex xl:items-start xl:justify-between">
        <CardTitle className={`${featured && "pb-2 xl:pb-0"}`}>
          {title}
        </CardTitle>
        {featured && (
          <Badge>
            <div className="flex items-center justify-center">
              <StarIcon className="mr-2 size-4" />
              Featured
            </div>
          </Badge>
        )}
      </div>
      <CardDescription>Created By {author.name}</CardDescription>
      <SocialButton author={author} />
    </UICardHeader>
  )
}

export default CardHeader
