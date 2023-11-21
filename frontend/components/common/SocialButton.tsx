import Link from "next/link"
import { IUser } from "@/api/generated"
import { twMerge } from "tailwind-merge"

import { Button } from "../ui/button"
import SocialMediaIcon from "./SocialMediaIcon"

export const SocialButton: React.FC<{
  author: IUser
  className?: string
}> = ({ author, className }) => {
  const {
    url: { url, _type },
    name,
  } = author

  const typeMapped = _type === "Other" ? "Website" : _type

  return (
    <Link href={url}>
      <Button className={twMerge(className)}>
        <SocialMediaIcon url={url} />
        View {name}'s {typeMapped}
      </Button>
    </Link>
  )
}

export default SocialButton
