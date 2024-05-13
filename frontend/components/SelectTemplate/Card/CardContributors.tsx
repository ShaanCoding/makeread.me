import Link from "next/link"
import { ITemplate } from "@/api/generated"

import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import SocialMediaIcon from "@/components/common/SocialMediaIcon"

const CardContributors: React.FC<Pick<ITemplate, "contributors">> = ({
  contributors,
}) => {
  return (
    <>
      <CardTitle className="pb-2">Contributors</CardTitle>
      <div className="flex flex-wrap gap-2 pb-6">
        {contributors.map((contributor, index) => (
          <Link href={contributor.url.url} key={index}>
            <Button variant={"outline"}>
              <SocialMediaIcon url={contributor.url._type} />
              {contributor.name}
            </Button>
          </Link>
        ))}
      </div>
    </>
  )
}

export default CardContributors
