import { useState } from "react"
import { ITemplate } from "@/api/generated"
import { Heart, StarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  CardDescription,
  CardTitle,
  CardHeader as UICardHeader,
} from "@/components/ui/card"
import SocialButton from "@/components/common/SocialButton"

const CardHeader: React.FC<
  Pick<ITemplate, "featured" | "title" | "author"> & {
    isFavoriteTemplate: boolean
    handleFavoriteTemplate: () => void
  }
> = ({
  featured,
  title,
  author,
  isFavoriteTemplate,
  handleFavoriteTemplate,
}) => {
  const [isFavorite, setIsFavorite] = useState(isFavoriteTemplate)
  return (
    <UICardHeader>
      <div>
        <div className="flex justify-between">
          <CardTitle className={`flex-1 ${featured && "pb-2"}`}>
            {title}
          </CardTitle>
          <Heart
            className={`size-5 hover:cursor-pointer ${
              isFavorite ? "fill-red-500" : "hover:animate-pulse"
            }`}
            onClick={() => {
              handleFavoriteTemplate()
              setIsFavorite(!isFavorite)
            }}
          />
        </div>
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
