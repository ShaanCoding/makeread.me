import Link from "next/link"
import { ITemplate } from "@/api/generated"

import { Button } from "../../ui/button"
import {
  CardContent,
  CardDescription,
  CardFooter,
  Card as UICard,
} from "../../ui/card"
import CardContributors from "./CardContributors"
import CardDescriptions from "./CardDescriptions"
import CardHeader from "./CardHeader"
import CardTags from "./CardTags"

export const Card: React.FC<
  Omit<ITemplate, "functions" | "image"> & {
    isFavoriteTemplate: boolean
    toggleFavoriteTemplate: (template: string) => void
  }
> = ({
  title,
  author,
  contributors,
  dateCreated,
  description,
  featured,
  folder,
  lastUpdated,
  tags,
  isFavoriteTemplate,
  toggleFavoriteTemplate,
}) => {
  function handleFavoriteTemplate() {
    toggleFavoriteTemplate(title + dateCreated)
  }

  return (
    <UICard className="bg-card/35">
      <CardHeader
        title={title}
        author={author}
        featured={featured}
        isFavoriteTemplate={isFavoriteTemplate}
        handleFavoriteTemplate={handleFavoriteTemplate}
      />
      <CardContent>
        <CardDescriptions description={description} />
        <CardTags tags={tags} />
        <CardContributors contributors={contributors} />
        <Link href={`/generator/${folder}`}>
          <Button className="w-full">View Template</Button>
        </Link>
      </CardContent>

      <CardFooter className="block">
        <CardDescription>
          Created On: {new Date(dateCreated).toDateString()}
        </CardDescription>
        <CardDescription>
          Last Updated: {new Date(lastUpdated).toDateString()}
        </CardDescription>
      </CardFooter>
    </UICard>
  )
}
