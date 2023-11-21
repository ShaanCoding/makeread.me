import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const UpgradePrompt: React.FC = () => {
  return (
    <div className="mt-auto p-4">
      <Card>
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>We Just Launched!</CardTitle>
          <CardDescription>
            Support us on product hut, by having a look on our launching page,
            and dropping an upvote. Your help supports the OSS work we do.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Button size="sm" className="w-full">
            Product Hut
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default UpgradePrompt
