import { Heading, Stack, Grid, Container } from "@chakra-ui/react";
import useGetSpecificTemplate from "../hooks/useGetSpecificTemplate";
import nunjucks from "nunjucks";
import React, { useEffect } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import SideBar from "../components/SideBar";
import TemplateModal from "../components/TemplateModal";

export default function Editor() {
  // Read the templateId from the URL
  const templateId = window.location.pathname.split("/")[2];

  const specificTemplate = useGetSpecificTemplate();
  const [output, setOutput] = React.useState("");
  nunjucks.configure({ autoescape: true });

  useEffect(() => {
    const string = `${specificTemplate.macros} ${specificTemplate.index}`;
    const renderedString = nunjucks.renderString(string, {});
    setOutput(renderedString);
  }, []);

  return (
    <Grid templateColumns="2fr 5fr" gap={6} p={6}>
      {/* Side Tab for Buttons */}
      <SideBar />

      {/* Side Tab for Markdown */}
      <MarkdownEditor.Markdown source={output} />
    </Grid>
  );
}
