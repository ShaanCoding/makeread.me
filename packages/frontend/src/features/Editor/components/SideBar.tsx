import { Container, Heading, Stack, Select, Input } from "@chakra-ui/react";
import React from "react";
import useGetBlocks from "../hooks/useGetBlocks";

const SideBar = () => {
  const getBlocks = useGetBlocks();

  const generateBlocks = () => {
    const allBlocks: string[] = [];
    getBlocks.forEach((block) => {
      block.blocks.forEach((individualBlock) => {
        allBlocks.push(individualBlock.name);
      });
    });

    return allBlocks;
  };

  return (
    <Container h="100%" background="gray.900">
      <Stack h="100%" py={6} spacing={6} align="center">
        <Heading as="h2" size="lg">
          Filter by ReadME Template
        </Heading>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Heading as="h2" size="lg">
          Search by Block
        </Heading>
        <Input placeholder="Search" />

        <Heading as="h2" size="lg">
          Blocks
        </Heading>

        {generateBlocks().map((block) => (
          <Heading as="h2" size="md">
            {block}
          </Heading>
        ))}
      </Stack>
    </Container>
  );
};

export default SideBar;
