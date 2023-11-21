import {
  FacebookIcon,
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react"

const SocialMediaIcon: React.FC<{ url: string }> = ({ url }) => {
  switch (url) {
    case "Facebook":
      return <FacebookIcon className="mr-2 size-4" />
    case "Instagram":
      return <InstagramIcon className="mr-2 size-4" />
    case "Twitter":
      return <TwitterIcon className="mr-2 size-4" />
    case "Github":
      return <GithubIcon className="mr-2 size-4" />
    case "LinkedIn":
      return <LinkedinIcon className="mr-2 size-4" />
    default:
      return <GlobeIcon className="mr-2 size-4" />
  }
}

export default SocialMediaIcon
