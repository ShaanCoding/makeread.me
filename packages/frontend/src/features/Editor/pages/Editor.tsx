import { Grid } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import EditorBody from "../components/EditorBody";
import { useState } from "react";

import { useEffect } from "react";
import useGetBlocks, { IFunction } from "../hooks/useGetBlocks";
import useGetSpecificTemplateIndex from "../hooks/useGetSpecificTemplateIndex";

export default function Editor() {
  // Read the templateId from the URL
  const templateId = window.location.pathname.split("/")[2];
  const [templateBlocks, setTemplateBlocks] = useState<IFunction[]>([]);

  const asyncFunction = async () => {
    const index = await useGetSpecificTemplateIndex(templateId);
    const blocks = await useGetBlocks("Best ReadME Template");

    const indexMapped: IFunction[] = [];
    index.forEach((element: string, index: number) => {
      return blocks[0].functions.find((block: IFunction) => {
        if (block.function === element) {
          indexMapped.push(block);
        }
      });
    });

    setTemplateBlocks(indexMapped);
  };

  useEffect(() => {
    asyncFunction();
  }, []);

  return (
    <Grid templateColumns="2fr 5fr" gap={6} p={6}>
      {/* Side Tab for Buttons */}
      <SideBar
        templateBlocks={templateBlocks}
        setTemplateBlocks={setTemplateBlocks}
      />

      {/* Side Tab for Markdown */}
      <EditorBody
        templateId={templateId}
        templateBlocks={templateBlocks}
        setTemplateBlocks={setTemplateBlocks}
      />
    </Grid>
  );
}
