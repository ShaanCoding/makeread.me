import { ITemplate, templates } from "@/data/templates";
import { useMemo } from "react";

const useGetTemplates = (): ITemplate[] => {
    const data = useMemo(() => {
        const featuredTemplates = templates.filter((template) => template.featured);
        const nonFeaturedTemplates = templates.filter((template) => !template.featured);
    
        const sortedTemplates = [...featuredTemplates, ...nonFeaturedTemplates];
    
        return sortedTemplates;
    }, []);
    
    return data;
}

export { useGetTemplates };