import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Blocks from "./Blocks";
import Preview from "./Preview";
import Raw from "./Raw";
import useGetSpecificTemplate from "../hooks/useGetSpecificTemplate";
import nunjucks from "nunjucks";
import { IFunction, IVariable } from "../hooks/useGetBlocks";

enum BlockType {
  Editor,
  Preview,
  Raw,
}

const EditorBody: React.FC<{
  templateId: string;
  templateBlocks: IFunction[];
  setTemplateBlocks: (e: IFunction[]) => any;
}> = ({ templateId, templateBlocks, setTemplateBlocks }) => {
  const [blockType, setBlockType] = React.useState(BlockType.Editor);

  const [output, setOutput] = React.useState("");
  const [variables, setVariables] = React.useState({});

  nunjucks.configure({ autoescape: true });

  // Make async
  const asyncFunction = async () => {
    const specificTemplate = await useGetSpecificTemplate(templateId);
    // Combine templateBLocks in format "macro1 macro2 macro3"

    const index = templateBlocks
      .map((func: IFunction) => {
        let variableArray: string[] = [];

        func.variables.forEach((variable: IVariable) => {
          variableArray.push(variable.name);
        });

        return `{{ ${func.function}(${variableArray.join(", ")}) }}`;
      })
      .join(" ");

    // const variableString = `{% set username = "Shaan" %} {% set repository = "Test" %}`;

    let variableString = "";
    Object.keys(variables).forEach((element) => {
      const variable: string =
        typeof variables[element] === "string"
          ? variables[element]
          : JSON.stringify(variables[element]);

      variableString += `{% set ${element} = "${variable}" %} `;
    });

    const string = `${variableString} ${specificTemplate} ${index}`;

    const renderedString = nunjucks.renderString(string, {});

    setOutput(renderedString);
  };

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
        <Button colorScheme="teal" onClick={() => asyncFunction()}>
          Generate
        </Button>
      </Stack>

      {blockType === BlockType.Editor && (
        <Blocks
          templateBlocks={templateBlocks}
          setTemplateBlocks={setTemplateBlocks}
          setVariables={setVariables}
        />
      )}
      {blockType === BlockType.Preview && <Preview output={output} />}
      {blockType === BlockType.Raw && <Raw output={output} />}
    </Stack>
  );
};

export default EditorBody;
