"use client";
import { IContributor } from "@/app/team/contributions";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SocialMediaLinks from "./SocialMediaLinks";
import GithubContributionLinks from "./GithubContributionLinks";

export default function ContributionArea({ area, contributors }: { area: string, contributors: IContributor[] }) {
  return (
    <section className="p-4">
      <h1 className="font-bold mb-4 text-3xl">{area}</h1>
      {contributors.map((contribution: IContributor) =>
        IndividualContribution(contribution)
      )}
    </section>
  )
}

// sourced from https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function IndividualContribution(contribution: IContributor) {
  const [isOpen, setOpen] = useState(true);
  const { height, width } = useWindowDimensions();

  // NOTE: Weird media query here. If the width is < 600, dont render the minimise buttons
  // as it adds to the clutter of the screen on small devices


  return (
    <Card className="mb-6">
      <Collapsible open={isOpen}>
        <CardHeader>
          <div className="flex items-center justify-between space-x-4 px-4">
            <h3 className="text-2xl font-semibold">{contribution.name}</h3>
            <CollapsibleTrigger asChild>
              <div>
                {width > 600 &&
                  <Button variant="outline" onClick={() => setOpen(!isOpen)}>
                    {isOpen ? "- Minimise" : "+ Expand"}
                  </Button>
                }
              </div>
            </CollapsibleTrigger>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <CollapsibleContent className="px-6">
            <div className="mb-6 ml-4 flex md:flex-row flex-col h-full">
              <div className="flex items-center h-full justify-center md:justify-normal">
                <div className="relative md:h-64 md:w-64 w-52 h-52 p-0 mb-4 md:mb-0">
                  <Image src={`https://github.com/${contribution.image}.png`} fill alt="ContributorImage" style={{ "borderRadius": "2%" }} />
                </div>
              </div>
              <div className="md:pl-6 flex flex-col justify-start w-full h-auto">
                <h2 className="text-lg font-bold pb-2">{contribution.job} </h2>
                <h3>
                  {contribution.desc}
                </h3>
              </div>
            </div>

            <div className="w-full flex justify-between flex-col md:flex-row items-center mb-4">
              <GithubContributionLinks githubLinks={contribution.githubContributions} />
              <SocialMediaLinks links={contribution.links} />
            </div>
          </CollapsibleContent>
        </CardContent>
      </Collapsible>
    </Card >
  )
}
