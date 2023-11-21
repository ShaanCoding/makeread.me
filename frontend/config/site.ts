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
      title: "Select Template",
      href: "/select-template",
    },
    {
      title: "Make My Own",
      href: "/generator",
    }
  ],
  links: {
    twitter: "https://twitter.com/ShaanCoding",
    github: "https://github.com/ShaanCoding/ReadME-Generator",
  },
}
