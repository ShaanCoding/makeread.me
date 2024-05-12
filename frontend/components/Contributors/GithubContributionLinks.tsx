import { IGithubLink } from "@/config/contributions";
import Link from "next/link";
import React from "react";
import { GitPullRequest, CircleDot } from "lucide-react";

export default function GithubContributionLinks({ githubLinks }: { githubLinks: IGithubLink[] }) {
  return (
    <div className="mb-4">

      {
        githubLinks.map((link, key) => {
          return (
            <div key={key} className="block">
              <Link href={link.link} className="">
                <div className="flex flex-row p-2 text-blue-500 hover:underline">
                  <div className="pr-4">
                    <Icon type={link.type} />
                  </div>
                  <p>{link.title}</p>
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
// TODO: Remove
function Icon({ type }: { type: string }) {
  return (
    type === "PR" ? <GitPullRequest color="#3fb950" /> : <CircleDot color="#3fb950" />
  )
}
