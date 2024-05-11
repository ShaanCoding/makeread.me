import ContributionArea from "@/components/Contributors/ContributionArea";
import React from "react";
import { Contributions, IContributor } from "./contributions";
import { contributorsConfig } from "@/config/contributors";

export default function page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
      <h1 className="text-4xl font-bold">Our Contributors</h1>
      <h2 className="text-lg">
        {contributorsConfig.description}
      </h2>

      <ContributionArea area="Development" contributors={Contributions.development} />
      <ContributionArea area="Design" contributors={Contributions.design} />
      <ContributionArea area="Templates" contributors={Contributions.contributedToTemplate} />
      <ContributionArea area="Bug report" contributors={Contributions.bugReports} />
    </main>
  )
}
