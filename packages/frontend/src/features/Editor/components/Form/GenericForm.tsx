import React from "react";
import { Form, Formik } from "formik";
import TextField, { ITextField } from "./TextField";
import { Button, Stack } from "@chakra-ui/react";
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
                label: variable.label,
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

const generateDefaultValues = (fields: IVariable[]) => {
  const defaultValues: any = {};
  fields.forEach((variable: IVariable) => {
    defaultValues[variable.name] = variable.defaultValue;
  });
  return defaultValues;
};

const GenericForm: React.FC<{
  fields: IVariable[];
}> = ({ fields }) => {
  return fields ? (
    <Formik
      initialValues={generateDefaultValues(fields)}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        // submitClickCallback(values);
        // actions.setSubmitting(false);
        // actions.resetForm();
      }}
    >
      {({ handleSubmit, values, errors, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
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
