import { Grid } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import EditorBody from "../components/EditorBody";
import { useState } from "react";

import { useEffect } from "react";
import { IFunction } from "../hooks/useGetBlocks";

export default function Editor() {
  // Read the templateId from the URL
  const templateId = window.location.pathname.split("/")[2];
  const [templateBlocks, setTemplateBlocks] = useState<IFunction[]>([]);

  useEffect(() => {
    console.log(JSON.stringify(templateBlocks, null, 2));
  }, [templateBlocks]);

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
