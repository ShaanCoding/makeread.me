import { ITemplate, templates } from "@/data/templates";

export function useGetTemplates(): ITemplate[] {
    const featuredTemplates = templates.filter((template) => template.featured);
    const nonFeaturedTemplates = templates.filter((template) => !template.featured);

    const sortedTemplates = [...featuredTemplates, ...nonFeaturedTemplates];

    return sortedTemplates;
}