export type ContributorsConfig = typeof contributorsConfig

export const contributorsConfig = {
    description: "The development of makeread.me could not have been possible without the help of our contributors. Here's a little thanks to the people that have helped along the way!",
}

import { IContributor } from "@/api/generated"

const development = [
  {
    name: "Shaan Khan",
    image: "http://github.com/ShaanCoding.png",
    title: "Software Engineer at Nine",
    description: "Dynamic and results-oriented software developer with a passion for crafting robust and scalable solutions. Proficient in various programming languages and frameworks, with a proven track record of delivering high-quality code on time and within budget. Excellent problem-solving abilities and a collaborative mindset, combined with strong communication skills to effectively interact with cross-functional teams and stakeholders.",
    url: [
      {
        _type: "LinkedIn",
        url: "https://www.linkedin.com/in/shaancoding/",
      },
      {
        _type: "Github",
        url: "https://www.github.com/shaancoding",
      },
      {
        _type: "Twitter",
        url: "https://twitter.com/ShaanCoding",
      }
    ],
    contributions: [
      {
        name: "Generator Page Too Cramped",
        url: "https://github.com/ShaanCoding/makeread.me/pull/108",
        type: "ClosedIssueDone"
      },
      {
        name: "Add a new template",
        url: "",
        type: "PullRequestCancelled"
      }
    ]
  } as IContributor
]


export const contributionData = {
  development: development,
  design: [development[0], development[0]],
  contributedToTemplate: [development[0], development[0], development[0]],
  bugReports: development,
}
