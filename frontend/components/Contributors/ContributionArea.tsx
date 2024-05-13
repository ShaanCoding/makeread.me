"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import GithubContributionLinks from "./GithubContributionLinks";
import { IContributor } from "@/api/generated";
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
          <div className="flex flex-col items-center justify-center md:flex-row gap-6">
            <div className="h-full w-full md:w-auto md:min-w-[256px] rounded-md overflow-clip">
              <Image
                width={1024}
                height={1024}
                layout="responsive"
                src={contribution.image} alt={`Image of ${contribution.name}`} />
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">{contribution.title} </h3>
              <p className="mb-2">{contribution.description}</p>

              {contribution.url.length > 0 && (
                <>
                  <h3 className="text-lg font-bold mb-2">Socials</h3>
                  <div className="flex flex-wrap gap-2 pb-6">
                    {contribution.url.map((socialMediaURL, index) => (
                      <Link href={socialMediaURL.url} key={index}>
                        <Button variant={"outline"}>
                          <SocialMediaIcon url={socialMediaURL._type} />
                          {contribution.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <GithubContributionLinks githubLinks={contribution.contributions} />
        </div>
      </CardContent>
    </Card >
  )
}
