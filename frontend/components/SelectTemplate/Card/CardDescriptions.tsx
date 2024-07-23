import { ITemplate } from "@/openAPI/generated"

import { CardDescription, CardTitle } from "@/components/ui/card"

const CardDescriptions: React.FC<Pick<ITemplate, "description">> = ({
  description,
}) => {
  return (
    <>
      <CardTitle>Description</CardTitle>
      <CardDescription className="pb-2">{description}</CardDescription>
    </>
  )
}

export default CardDescriptions
