import React from "react"
import Image from "next/image"
import Link from "next/link"
import { IUser } from "@/api/generated/models/IUser"
import { LinkedinIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SocialButton from "@/components/common/SocialButton"
import SocialMediaIcon from "@/components/common/SocialMediaIcon"

import contributions from "./contributions"

export default function ContributionsPage() {
  // TODO: fix why is the github svg slightly bigger than the linkedin svg lmaooo
  const contributors = contributions()
  return (
    <>
      <div className="flex items-center justify-center flex-wrap w-full p-4">
        {contributors.map((contributor, index) => (
          <Card className="w-[350px] m-4 h-72 relative">
            <CardHeader>
              <CardTitle>{contributor.name}</CardTitle>
              <CardDescription className="font-bold pt-2">
                First contribution: {contributor.first_pr.toDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="h-auto">
              <CardDescription>{contributor.desc}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end absolute -bottom-5 right-0">
              <div className="flex gap-2 items-center h-full float-right">
                {["linkedin", "github"].map((social) => (
                  <div className="">
                    <SocialMedia
                      icon={`/icons/home/social/${social}.svg`}
                      url={
                        social === "linkedin"
                          ? contributor.linkedin
                          : contributor.github
                      }
                    />
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}

interface IContributor {
  icon: string
  url: string
}

const SocialMedia: React.FC<IContributor> = ({ icon, url }) => {
  return (
    <Link href={url}>
      <div className="hover:cursor-pointer hover:opacity-90">
        <div className="mb-3 flex items-center space-x-4">
          <img className="size-[30px]" src={icon} alt={"social image"} />
        </div>
      </div>
    </Link>
  )
}
