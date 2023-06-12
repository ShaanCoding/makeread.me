export interface ITemplate {
  name: string;
  author: string;
  authorUrl: string;
  description: string;
  image: string;
  folder: string;
  date: string;
  tags: string[];
  featured: boolean;
  contributors: IContributor[];
}

export interface IContributor {
  name: string;
  url: string;
}

export const templates: ITemplate[] = [
  {
    name: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    image: "https://via.placeholder.com/150",
    folder: "readme-two",
    date: "2021-05-20T00:00:00.000Z",
    tags: ["ReadMe", "Industry"],
    featured: false,
    contributors: [
      { name: "ShaanCoding", url: "http://shaancoding.github.io" },
      { name: "qtKite", url: "http://github.com/qtKite" },
    ],
  },
  {
    name: "Best ReadME Template",
    author: "Othneil Drew",
    authorUrl: "http://github.com/othneildrew",
    description: "This is a template",
    image: "https://via.placeholder.com/150",
    folder: "readme-one",
    date: "2021-05-20T00:00:00.000Z",
    tags: ["ReadMe", "Default"],
    featured: true,
    contributors: [
      { name: "ShaanCoding", url: "http://shaancoding.github.io" },
    ],
  },
  {
    name: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    image: "https://via.placeholder.com/150",
    folder: "readme-two",
    date: "2021-05-20T00:00:00.000Z",
    tags: ["ReadMe", "Industry"],
    featured: false,
    contributors: [
      { name: "ShaanCoding", url: "http://shaancoding.github.io" },
      { name: "qtKite", url: "http://github.com/qtKite" },
    ],
  },
  {
    name: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    image: "https://via.placeholder.com/150",
    folder: "readme-two",
    date: "2021-05-20T00:00:00.000Z",
    tags: ["ReadMe", "Industry"],
    featured: false,
    contributors: [
      { name: "ShaanCoding", url: "http://shaancoding.github.io" },
      { name: "qtKite", url: "http://github.com/qtKite" },
    ],
  },
  {
    name: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    image: "https://via.placeholder.com/150",
    folder: "readme-two",
    date: "2021-05-20T00:00:00.000Z",
    tags: ["ReadMe", "Industry"],
    featured: false,
    contributors: [
      { name: "ShaanCoding", url: "http://shaancoding.github.io" },
      { name: "qtKite", url: "http://github.com/qtKite" },
    ],
  },
  {
    name: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    image: "https://via.placeholder.com/150",
    folder: "readme-two",
    date: "2021-05-20T00:00:00.000Z",
    tags: ["ReadMe", "Industry"],
    featured: false,
    contributors: [
      { name: "ShaanCoding", url: "http://shaancoding.github.io" },
      { name: "qtKite", url: "http://github.com/qtKite" },
    ],
  },
];
