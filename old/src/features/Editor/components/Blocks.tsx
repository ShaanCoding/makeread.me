import { IFunction, IVariable } from "../hooks/useGetBlocks";
import { Button, Heading, Stack } from "@chakra-ui/react";
import GenericForm from "./Form/GenericForm";
import { Form, Formik } from "formik";

const generateDefaultValues2 = (blocks: IFunction[]) => {
  const defaultValues: any = {};
  blocks.forEach((block: IFunction) => {
    // let values: any = {};
    block.variables.forEach((variable: IVariable) => {
      // values[variable.name] = variable.defaultValue;
      defaultValues[variable.name] = variable.defaultValue;
    });

    // defaultValues[block.function] = values;
  });

  return defaultValues;
};

// Not doing that nested structure as expected

const Blocks: React.FC<{
  templateBlocks: IFunction[];
  setTemplateBlocks: (e: IFunction[]) => any;
  setVariables: (e: any) => any;
}> = ({ templateBlocks, setTemplateBlocks, setVariables }) => {
  const defaultValues = generateDefaultValues2(templateBlocks);
  return (
    <Stack h="100%" py={6} spacing={6} align="center">
      <Formik
        initialValues={defaultValues}
        enableReinitialize={true}
        onSubmit={(
          values
          // ,actions
        ) => {
          setVariables(values);
        }}
      >
        {({
          handleSubmit,
          // , values, errors, setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
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
                    // defaultValues={defaultValues[block.function]}
                  />
                  <Button
                    onClick={() => {
                      setTemplateBlocks(
                        templateBlocks.filter((_, i) => i !== index)
                      );
                    }}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}

            <Button type="submit" variant="outline" color="primary" w={"100%"}>
              Submit
            </Button>

            <Button type="reset" variant="outline" color="primary" w={"100%"}>
              Reset
            </Button>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default Blocks;
