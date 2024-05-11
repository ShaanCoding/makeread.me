export type IContributions = typeof Contributions
export type IContributor = typeof Contributions.development[0];
export interface IGithubLink {
  link: string,
  type: string,
  title: string
}

export const Contributions = {
  development: [
    {
      name: "Shaan Khan",
      image: "shaancoding",
      job: "Software Engineer at Nine",
      desc: "DDynamic and results-oriented software developer with a passion for crafting robust and scalable solutions. Proficient in various programming languages and frameworks, with a proven track record of delivering high-quality code on time and within budget. Excellent problem-solving abilities and a collaborative mindset, combined with strong communication skills to effectively interact with cross-functional teams and stakeholders.ynamic and results-oriented software developer with a passion for crafting robust and scalable solutions. Proficient in various programming languages and frameworks, with a proven track record of delivering high-quality code on time and within budget. Excellent problem-solving abilities and a collaborative mindset, combined with strong communication skills to effectively interact with cross-functional teams and stakeholders.",
      links: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/shaancoding/",
          icon: "icons/home/social/linkedin.svg"
        },
        {
          name: "github",
          url: "https://www.github.com/shaancoding",
          icon: "icons/home/social/github.svg"
        },
        {
          name: "twitter",
          url: "https://twitter.com/ShaanCoding",
          icon: "icons/home/social/twitter.svg"
        }
      ],
      githubContributions: [
        {
          link: "https://github.com/ShaanCoding/makeread.me/pull/108",
          title: "[Shaan] Generator Page Too Cramped",
          type: "PR"
        },
        {
          link: "https://github.com/ShaanCoding/makeread.me/issues/109",
          title: "Make this a progressive web app 🙃",
          type: "issue"
        }
      ],
    },
    {
      name: "Bobrandy",
      job: "Unemployed lol",
      image: "bobrandy13",
      desc: "High School student that loves to code.",
      links: [

        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/kevin-huang-9a94441a1/",
          icon: "icons/home/social/linkedin.svg"
        },
        {
          name: "github",
          url: "https://www.github.com/bobrandy13",
          icon: "icons/home/social/github.svg"
        },

      ],
      githubContributions: [
        {
          link: "https://github.com/ShaanCoding/makeread.me/pull/83",
          title: "[Bobrandy13] Created Contributions Page",
          type: "PR"
        },
      ],
    },
  ],
  design: [
    {
      name: "Mathys Deshaies",
      image: "MathPow",
      job: "I'm Mathys, a developer passionate about all aspects of computer science and management.",
      desc: "Dynamic and results-oriented software developer with a passion for crafting robust and scalable solutions. Proficient in various programming languages and frameworks, with a proven track record of delivering high-quality code on time and within budget. Excellent problem-solving abilities and a collaborative mindset, combined with strong communication skills to effectively interact with cross-functional teams and stakeholders.",
      links: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/mathys-deshaies/",
          icon: "icons/home/social/linkedin.svg"
        },
        {
          name: "github",
          url: "https://www.github.com/MathPow",
          icon: "icons/home/social/github.svg"
        }
      ],
      githubContributions: [
        {
          link: "https://github.com/ShaanCoding/makeread.me/pull/93",
          title: "[MathPow] Added Favorite Templates",
          type: "PR"
        },
        {
          link: "https://github.com/ShaanCoding/makeread.me/issues/81",
          title: "[MattPow] Card Transition, Framer Motion",
          type: "PR"
        },
        {
          link: "https://github.com/ShaanCoding/makeread.me/issues/72",
          title: "feat: contributors page on the web site",
          type: "issue"
        }
      ],
    },
    {
      name: "Amin Beigi",
      job: '"An idiot admires complexity, a genius admires simplicity." - Terry A. Davis',
      image: "aminbeigi",
      desc: "Dynamic and results-oriented software developer with a passion for crafting robust and scalable solutions. Proficient in various programming languages and frameworks, with a proven track record of delivering high-quality code on time and within budget. Excellent problem-solving abilities and a collaborative mindset, combined with strong communication skills to effectively interact with cross-functional teams and stakeholders.",
      links: [

        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/amin-beigi/",
          icon: "icons/home/social/github.svg"
        },
        {
          name: "github",
          url: "https://www.github.com/aminbeigi",
          icon: "icons/home/social/github.svg"
        }

      ],
      githubContributions: [
        {
          link: "https://github.com/ShaanCoding/makeread.me/pull/106",
          title: "[aminbeigi] Replace FS with MongoDB ",
          type: "PR"
        },
      ],
    },
  ],
  contributedToTemplate: [
    {
      name: "Shaan Khan",
      image: "shaancoding",
      job: "Software Engineer at Nine",
      desc: "Dynamic and results-oriented software developer with a passion for crafting robust and scalable solutions. Proficient in various programming languages and frameworks, with a proven track record of delivering high-quality code on time and within budget. Excellent problem-solving abilities and a collaborative mindset, combined with strong communication skills to effectively interact with cross-functional teams and stakeholders.",
      links: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/shaancoding/",
          icon: "icons/home/social/github.svg"
        },
        {
          name: "github",
          url: "https://www.github.com/shaancoding",
          icon: "icons/home/social/github.svg"
        }
      ],
      githubContributions: [],
    },
  ],
  bugReports: [{
    name: "Shaan Khan",
    image: "Shaancoding",
    job: "Software Engineer at Nine",
    desc: "DDynamic and results-oriented software developer with a passion for crafting robust and scalable solutions. Proficient in various programming languages and frameworks, with a proven track record of delivering high-quality code on time and within budget. Excellent problem-solving abilities and a collaborative mindset, combined with strong communication skills to effectively interact with cross-functional teams and stakeholders.ynamic and results-oriented software developer with a passion for crafting robust and scalable solutions. Proficient in various programming languages and frameworks, with a proven track record of delivering high-quality code on time and within budget. Excellent problem-solving abilities and a collaborative mindset, combined with strong communication skills to effectively interact with cross-functional teams and stakeholders.",
    links: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/shaancoding/",
        icon: "icons/home/social/github.svg",

      },
      {
        name: "github",
        url: "https://www.github.com/shaancoding",
        icon: "icons/home/social/github.svg"
      }
    ],
    githubContributions: [
      {
        link: "https://github.com/ShaanCoding/makeread.me/pull/107",
        title: "[Release] Fixed Crashing & Added Preview Modal To Cards",
        type: "PR"
      },
      {
        link: "https://github.com/ShaanCoding/makeread.me/issues/109",
        title: "[Release] Fixed Crashing & Added Preview Modal To Cards",
        type: "issue"
      }
    ],
  },
  ],
}

