export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "makeread.me",
  description:
    "Make your README.md file with ease. Select a template or make your own.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Template",
      href: "/select-template",
    },
    {
      title: "Scratch",
      href: "/generator",
    }
  ],
  links: {
    twitter: "https://twitter.com/ShaanCoding",
    linkedin: "https://www.linkedin.com/in/shaancoding/",
    github: "https://github.com/ShaanCoding/",
  },
  footer: {
    title: "makeread.me",
    description: "Make your README.md file with ease. Select a template or make your own.",
    quickLinks: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Select Template",
        href: "/select-template",
      },
      {
        title: "Make My Own",
        href: "/generator",
      }
    ],
    socialMedia: [
      {
        name: "Github",
        url: "https://github.com/ShaanCoding/",
        icon: "/icons/home/social/github.svg",
      },
      {
        name: "LinkedIn",
        icon: "/icons/home/social/linkedin.svg",
        url: "https://www.linkedin.com/in/shaancoding/",
      },
      {
        name: "Twitter",
        icon: "/icons/home/social/twitter.svg",
        url: "https://twitter.com/ShaanCoding",
      },
    ]
  }
}
