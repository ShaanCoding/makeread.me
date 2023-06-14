import React, { useState } from "react";
import { EBlockType, IFunction, IVariable } from "../hooks/useGetBlocks";
import { Button, Heading, Input, Stack } from "@chakra-ui/react";
import TextField from "./Form/TextField";
import { useFormik } from "formik";
import GenericForm from "./Form/GenericForm";

const Blocks: React.FC<{
  templateBlocks: IFunction[];
  setTemplateBlocks: (e: IFunction[]) => any;
}> = ({ templateBlocks, setTemplateBlocks }) => {
  return (
    <Stack h="100%" py={6} spacing={6} align="center">
      {templateBlocks.map((block: IFunction, index) => {
        return (
          <div>
            {/* Up Button */}
            <Button
              onClick={() => {
                if (index !== 0) {
                  const temp = templateBlocks[index - 1];
                  templateBlocks[index - 1] = templateBlocks[index];
                  templateBlocks[index] = temp;
                  setTemplateBlocks([...templateBlocks]);
                }
              }}
            >
              Up
            </Button>
            {/* Down Button */}
            <Button
              onClick={() => {
                if (index !== templateBlocks.length - 1) {
                  const temp = templateBlocks[index + 1];
                  templateBlocks[index + 1] = templateBlocks[index];
                  templateBlocks[index] = temp;
                  setTemplateBlocks([...templateBlocks]);
                }
              }}
            >
              Down
            </Button>

            <Heading as="h2" size="lg">
              {block.name}
            </Heading>
            <Heading as="h2" size="md">
              {block.description}
            </Heading>
            <GenericForm
              fields={block.variables}
              submitClickCallback={() => alert("Pressed submit")}
            />
            <Button
              onClick={() => {
                setTemplateBlocks(templateBlocks.filter((_, i) => i !== index));
              }}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </Stack>
  );
};

export default Blocks;
