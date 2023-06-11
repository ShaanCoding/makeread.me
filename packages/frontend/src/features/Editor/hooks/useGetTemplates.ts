import { trpcReact } from "../App";

export default function useGetTemplates() {
  const context = trpcReact.useContext();

  return [
    {
      title: "Best ReadME Template",
      author: "Othneil Drew",
      authorUrl: "http://github.com/othneildrew",
      description: "The best ReadME template",
      date: "2021-05-20T00:00:00.000Z",
      tags: ["ReadMe", "Default"],
      featured: true,
      contributors: [
        { name: "ShaanCoding", url: "http://shaancoding.github.io" },
      ],
    },
    {
      title: "Shaans Default Template",
      author: "ShaanCoding",
      authorUrl: "http://github.com/ShaanCoding",
      description: "The industry standard",
      date: "2021-05-20T00:00:00.000Z",
      tags: ["ReadMe", "Industry"],
      featured: false,
      contributors: [
        { name: "ShaanCoding", url: "http://shaancoding.github.io" },
        { name: "qtKite", url: "http://github.com/qtKite" },
      ],
    },
  ];
}
