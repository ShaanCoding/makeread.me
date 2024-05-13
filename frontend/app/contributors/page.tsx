import ContributionArea from "@/components/Contributors/ContributionArea";
import React from "react";
import { contributionData } from "../../config/contributors";
import { contributorsConfig } from "@/config/contributors";

export default function page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
      <h1 className="text-4xl font-bold">Our Contributors</h1>
      <h2 className="text-lg">
        {contributorsConfig.description}
      </h2>

      <div className="grid gap-6 grid-cols-1">
        <ContributionArea area="Development" contributors={contributionData.development} />
        <ContributionArea area="Design" contributors={contributionData.design} />
        <ContributionArea area="Templates" contributors={contributionData.contributedToTemplate} />
        <ContributionArea area="Bug report" contributors={contributionData.bugReports} />
      </div>
    </main>
  )
}
