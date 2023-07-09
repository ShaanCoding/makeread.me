import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useGetTemplates from "../hooks/useGetTemplates";
import { ITemplate } from "../../../data/templates";

const ChooseTemplate = () => {
  const templates: ITemplate[] = useGetTemplates();

  return (
    <Grid templateColumns="1fr 1fr 1fr 1fr" gap={6} p={6}>
      {templates.map((template, index) => (
        <TemplateCard template={template} key={index} />
      ))}
    </Grid>
  );
};

const TemplateCard: React.FC<{
  template: ITemplate;
}> = ({ template }) => {
  const {
    name,
    author,
    // authorUrl,
    description,
    // image,
    folder,
    // date,
    // tags,
    // featured, // If featured then tag it with a star or something
    // contributors,
  } = template;

  return (
    // Style up later
    <Card>
      <CardHeader>
        <Heading as="h1" size="md">
          {name}
        </Heading>
        <Heading as="h2" size="sm">
          By {author}
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing={6}>
          <Box>
            <Text fontSize="sm" pt={2}>
              {description}
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="sm" textTransform={"uppercase"}>
              Click to Choose
            </Heading>
            <Button
              pt={2}
              as={Link}
              fontSize={"sm"}
              fontWeight={600}
              to={`/editor/${folder}`}
              colorScheme="blue"
            >
              Choose Template
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ChooseTemplate;
