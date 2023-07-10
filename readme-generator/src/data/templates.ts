export interface ITemplate {
    title: string
    description: string
    tags: string[]
    featured: boolean
    author: string
    authorUrl: string
    contributors: IContributor[]
    href: string
    imageURL?: string
    createdAt: Date
  }
  
export interface IContributor {
    name: string
    url: string
    social: string
  }
  
  export const templates: ITemplate[] = [
    {
      title: "Shaans Default Template",
      author: "ShaanCoding",
      authorUrl: "http://github.com/ShaanCoding",
      description: "The industry standard",
      imageURL: "https://via.placeholder.com/150",
      href: "readme-two",
      createdAt: new Date("2021-05-20T00:00:00.000Z"),
      tags: ["ReadMe", "Industry"],
      featured: false,
      contributors: [
        { name: "ShaanCoding", url: "http://shaancoding.github.io", social: "github" },
        { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
      ],
    },
    {
      title: "Best ReadME Template",
      author: "Othneil Drew",
      authorUrl: "http://github.com/othneildrew",
      description: "This is a template",
      imageURL: "https://via.placeholder.com/150",
      href: "readme-one",
      createdAt: new Date("2021-05-20T00:00:00.000Z"),
      tags: ["ReadMe", "Default"],
      featured: true,
      contributors: [
        { name: "ShaanCoding", url: "http://shaancoding.github.io", social: "github"},
      ],
    },
    {
      title: "Shaans Default Template",
      author: "ShaanCoding",
      authorUrl: "http://github.com/ShaanCoding",
      description: "The industry standard",
      imageURL: "https://via.placeholder.com/150",
      href: "readme-two",
      createdAt: new Date("2021-05-20T00:00:00.000Z"),
      tags: ["ReadMe", "Industry"],
      featured: false,
      contributors: [
        { name: "ShaanCoding", url: "http://shaancoding.github.io", social: "github" },
        { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
      ],
    },
    {
      title: "Shaans Default Template",
      author: "ShaanCoding",
      authorUrl: "http://github.com/ShaanCoding",
      description: "The industry standard",
      imageURL: "https://via.placeholder.com/150",
      href: "readme-two",
      createdAt: new Date("2021-05-20T00:00:00.000Z"),
      tags: ["ReadMe", "Industry"],
      featured: false,
      contributors: [
        { name: "ShaanCoding", url: "http://shaancoding.github.io", social: "github" },
        { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
      ],
    },
    {
      title: "Shaans Default Template",
      author: "ShaanCoding",
      authorUrl: "http://github.com/ShaanCoding",
      description: "The industry standard",
      imageURL: "https://via.placeholder.com/150",
      href: "readme-two",
      createdAt: new Date("2021-05-20T00:00:00.000Z"),
      tags: ["ReadMe", "Industry"],
      featured: false,
      contributors: [
        { name: "ShaanCoding", url: "http://shaancoding.github.io", social: "github" },
        { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
      ],
    },
    {
      title: "Shaans Default Template",
      author: "ShaanCoding",
      authorUrl: "http://github.com/ShaanCoding",
      description: "The industry standard",
      imageURL: "https://via.placeholder.com/150",
      href: "readme-two",
      createdAt: new Date("2021-05-20T00:00:00.000Z"),
      tags: ["ReadMe", "Industry"],
      featured: false,
      contributors: [
        { name: "ShaanCoding", url: "http://shaancoding.github.io", social: "github" },
        { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
      ],
    },
  ];
  