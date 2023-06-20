import {
  Container,
  Heading,
  Stack,
  Select,
  Input,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useGetBlocks, { IFunction, IReadME } from "../hooks/useGetBlocks";
import useGetNames from "../hooks/useGetNames";

interface IFilter {
  filterString: string;
  allBlocks: IFunction[];
}

const SideBar: React.FC<{
  templateBlocks: IFunction[];
  setTemplateBlocks: (e: IFunction[]) => any;
}> = ({ templateBlocks, setTemplateBlocks }) => {
  const [blocks, setBlocks] = React.useState<IReadME[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [filter, setFilter] = React.useState<IFilter>({} as IFilter);
  const [templateList, setTemplateList] = React.useState<string[]>([]);

  const setSearchDropdown = async () => {
    const getNames = await useGetNames();
    setTemplateList(getNames);
  };

  useEffect(() => {
    const asyncFunction = async () => {
      const blocks = await useGetBlocks(filter.filterString, search);

      setBlocks(blocks);
    };

    asyncFunction();
  }, [search, filter]);

  useEffect(() => {
    setSearchDropdown();
  }, []);

  return (
    <Container h="100%" background="gray.900">
      <Stack h="100%" py={6} spacing={6} align="center">
        <Heading as="h2" size="lg">
          Filter by ReadME Template
        </Heading>
        <Select
          placeholder="Select option"
          onChange={(e) => {
            setFilter({
              ...filter,
              filterString: e.target.value,
            });
          }}
        >
          {templateList.map((template) => {
            return <option value={template}>{template}</option>;
          })}
        </Select>
        <Heading as="h2" size="lg">
          Search by Block
        </Heading>
        <Input
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <Heading as="h2" size="lg">
          Blocks
        </Heading>

        {blocks.map((block: IReadME) => (
          <>
            <Heading as="h2" size="md">
              {block.name}
            </Heading>
            <Heading as="h2" size="md">
              {block.description}
            </Heading>

            <UnorderedList>
              {block.functions.map((func: IFunction) => (
                <ListItem>
                  <Button
                    backgroundColor="red.700"
                    onClick={() => {
                      setTemplateBlocks([...templateBlocks, func]);
                      // setTemplateBlocks([...func.blocks, ...func.blocks]);
                    }}
                  >
                    {func.name}
                  </Button>
                  <Heading as="h2" size="sm">
                    {func.description}
                  </Heading>
                </ListItem>
              ))}
            </UnorderedList>
          </>
        ))}
      </Stack>
    </Container>
  );
};

export default SideBar;
