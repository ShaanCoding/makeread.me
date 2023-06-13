import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Blocks from "./Blocks";
import Preview from "./Preview";
import Raw from "./Raw";
import useGetSpecificTemplate from "../hooks/useGetSpecificTemplate";
import nunjucks from "nunjucks";

enum BlockType {
  Editor,
  Preview,
  Raw,
}

const EditorBody: React.FC<{ templateId: string }> = ({ templateId }) => {
  const [blockType, setBlockType] = React.useState(BlockType.Editor);

  const [output, setOutput] = React.useState("");
  nunjucks.configure({ autoescape: true });

  useEffect(() => {
    // Make async
    const asyncFunction = async () => {
      const specificTemplate = await useGetSpecificTemplate(templateId);

      const string = `${specificTemplate.macros} ${specificTemplate.index}`;
      const renderedString = nunjucks.renderString(string, {});
      setOutput(renderedString);
    };

    asyncFunction();
  }, []);

  return (
    <Stack h="100%" py={6} spacing={6} align="center">
      <Stack direction="row" spacing={4}>
        <Button
          colorScheme="teal"
          onClick={() => setBlockType(BlockType.Editor)}
        >
          Editor
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => setBlockType(BlockType.Preview)}
        >
          Preview
        </Button>
        <Button colorScheme="teal" onClick={() => setBlockType(BlockType.Raw)}>
          Raw
        </Button>
      </Stack>

      {blockType === BlockType.Editor && <Blocks />}
      {blockType === BlockType.Preview && <Preview output={output} />}
      {blockType === BlockType.Raw && <Raw output={output} />}
    </Stack>
  );
};

export default EditorBody;
