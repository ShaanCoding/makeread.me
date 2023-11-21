import { ITemplate } from "@/api/generated"

import { Badge } from "@/components/ui/badge"
import { CardTitle } from "@/components/ui/card"

const CardTags: React.FC<Pick<ITemplate, "tags">> = ({ tags }) => {
  return (
    <>
      <CardTitle className="pb-2">Tags</CardTitle>
      <div className="flex flex-wrap gap-2 pb-2">
        {tags.map((tag, index) => (
          <Badge key={index}>{tag.name}</Badge>
        ))}
      </div>
    </>
  )
}

export default CardTags
