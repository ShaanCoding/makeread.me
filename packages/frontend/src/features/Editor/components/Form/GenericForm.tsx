import React from "react";
import { Form, FormikProps, Formik } from "formik";
import TextField, { ITextField } from "./TextField";
import { Button, Heading, Stack } from "@chakra-ui/react";
import { EBlockType, IVariable } from "../../hooks/useGetBlocks";
import BooleanField, { IBooleanField } from "./BooleanField";
import ArrayField, { IArrayField } from "./ArrayField";

const generateBlock = (fields: IVariable[]) => {
  return fields.map((variable: IVariable) => {
    switch (variable.type) {
      case EBlockType.TEXT:
        return (
          <TextField
            key={variable.name}
            data={
              {
                label: variable.name,
                name: variable.name,
                defaultValue: variable.defaultValue,
              } as ITextField
            }
          />
        );
      case EBlockType.BOOLEAN:
        return (
          <BooleanField
            key={variable.name}
            data={
              {
                label: variable.label,
                name: variable.name,
                defaultValue: variable.defaultValue,
              } as IBooleanField
            }
          />
        );
      case EBlockType.ARRAY:
        return (
          <ArrayField
            key={variable.name}
            data={
              {
                label: variable.label,
                name: variable.name,
                defaultValue: variable.defaultValue,
              } as IArrayField
            }
          />
        );
      default:
        return null;
    }
  });
};

const GenericForm: React.FC<{
  fields: IVariable[];
  submitClickCallback: (e: any) => void;
}> = ({ fields, submitClickCallback }) => {
  return fields ? (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        submitClickCallback(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Stack py={6} spacing={6}>
            {generateBlock(fields)}
            <Button type="submit" variant="outline" color="primary">
              Submit
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  ) : null;
};

export default GenericForm;
