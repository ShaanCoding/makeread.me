import Link from "next/link";
import React from "react";
import { GitPullRequest, CircleDot } from "lucide-react";
import { IGithubContributionsList, IIssueType, IPullRequestType } from "@/api/generated";
import ContributionIcon from "./ContributionIcon";

const GithubContributionLinks: React.FC<{ githubLinks: IGithubContributionsList[] }> = ({ githubLinks }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-6">
      <h2 className="text-2xl font-semibold">Contributions</h2>
      <div className="mb-4">
        {
          githubLinks.map((link, key) => {
            return (
              <div key={key}>
                <Link href={link.url}>
                  <div className="flex flex-row p-2 text-blue-500 hover:underline">
                    <div className="pr-2">
                      <ContributionIcon iconType={link.type as IPullRequestType | IIssueType} />
                    </div>
                    <p>{link.name}</p>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GithubContributionLinks;