"use client";
import { IContributor } from "@/config/contributions";
import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import GithubContributionLinks from "./GithubContributionLinks";
import { IUser } from "@/api/generated";
import Link from "next/link";
import SocialMediaIcon from "../common/SocialMediaIcon";
import ShowMinimizeButton from "../common/ShowMinimizeButton";

const ContributionArea: React.FC<{ area: string, contributors: IContributor[] }> = ({ area, contributors }) => {
  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-bold">{area}</h1>
      {contributors.map((contribution: IContributor, index: number) =>
        <IndividualContribution contribution={contribution} isFirst={index === 0} />
      )}
    </section>
  )
}

export default ContributionArea

const IndividualContribution: React.FC<{ contribution: IContributor, isFirst?: boolean }> = ({ contribution, isFirst = false }) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(!isFirst)

  // TODO: Update schema data directly
  const authors: IUser[] = contribution.links.map((links) => {
    return {
      name: `${links.name}'s ${links.icon}`,
      url: {
        url: links.url,
        _type: links.icon,
      }
    }
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-2xl font-semibold">{contribution.name}</h2>
          <ShowMinimizeButton isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
        </div>
      </CardHeader>
      <CardContent className={`${isMinimized ? "hidden" : ""}`}>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex items-start justify-between gap-6">
            <div className="h-64 w-64 relative rounded-md overflow-clip">
              <Image className="h-full" fill src={contribution.image} alt={`Image of ${contribution.name}`} />
            </div>

            {/* to fix */}
            <div className="w-9/12">
              <h3 className="text-lg font-bold mb-2">{contribution.job} </h3>

              <p className="mb-2">{contribution.desc}</p>

              {authors.length > 0 && (
                <>
                  <h3 className="text-lg font-bold mb-2">Socials</h3>
                  <div className="flex flex-wrap gap-2 pb-6">
                    {authors.map((contributor, index) => (
                      <Link href={contributor.url.url} key={index}>
                        <Button variant={"outline"}>
                          <SocialMediaIcon url={contributor.url._type} />
                          {contributor.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-6">
            <h2 className="text-2xl font-semibold">Contributions</h2>
            <GithubContributionLinks githubLinks={contribution.githubContributions} />
          </div>
        </div>
      </CardContent>
    </Card >
  )
}
