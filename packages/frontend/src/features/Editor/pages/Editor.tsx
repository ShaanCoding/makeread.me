import { Grid } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import EditorBody from "../components/EditorBody";

export default function Editor() {
  // Read the templateId from the URL
  const templateId = window.location.pathname.split("/")[2];

  return (
    <Grid templateColumns="2fr 5fr" gap={6} p={6}>
      {/* Side Tab for Buttons */}
      <SideBar />

      {/* Side Tab for Markdown */}
      <EditorBody templateId={templateId} />
    </Grid>
  );
}
