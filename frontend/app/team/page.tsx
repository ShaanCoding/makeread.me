import ContributionArea from "@/components/Team/ContributionArea";
import React from "react";
import { Contributions, IContributor } from "./contributions";

export default function page() {
  return (
    <section className="mt-12 w-full flex justify-center">
      <div className="xl:w-2/3 w-11/12 max-w-screen-lg">
        <h1 className="text-5xl font-bold mb-6 px-4">Contributions</h1>
        <h2 className="mb-4 px-4">
          Makeread.me could not be done without the support of our contributors. Here's a little thanks to the people that have helped along the way!
        </h2>

        <ContributionArea area="Development" contributors={Contributions.development} />
        <ContributionArea area="Design" contributors={Contributions.design} />
        <ContributionArea area="Templates" contributors={Contributions.contributedToTemplate} />
        <ContributionArea area="Bug report" contributors={Contributions.bugReports} />
      </div>
    </section>
  )
}
