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
import PreviewModal from "../PreviewModal/PreviewModal"
import { useState } from "react"

export const Card: React.FC<Omit<ITemplate, "functions" | "image">> = ({
  title,
  author,
  contributors,
  dateCreated,
  description,
  featured,
  folder,
  lastUpdated,
  tags,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <UICard className="h-full bg-card/35">
      <CardHeader title={title} author={author} featured={featured} />
      <CardContent>
        <CardDescriptions description={description} />
        <CardTags tags={tags} />
        <CardContributors contributors={contributors} />

        <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-6">
          <PreviewModal
            folder={folder}
            templateTitle={`${title}`}
            modalOpen={modalOpen}
            setModalOpen={
              (open: boolean) => setModalOpen(open)
            }
          />

          <Link href={`/generator/${folder}`}>
            <Button className="w-full">Use Template</Button>
          </Link>
        </div>
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
