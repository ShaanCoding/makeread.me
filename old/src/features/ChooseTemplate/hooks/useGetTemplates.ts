import { ITemplate, templates } from "../../../data/templates.js";

export default function useGetTemplates(): ITemplate[] {
  // We should sort this to show featured templates first

  const featuredTemplates = templates.filter((template) => template.featured);
  const nonFeaturedTemplates = templates.filter(
    (template) => !template.featured
  );

  const sortedTemplates = [...featuredTemplates, ...nonFeaturedTemplates];

  return sortedTemplates;
}
