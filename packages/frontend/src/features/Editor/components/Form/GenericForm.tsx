import React from "react";
import { Form, FormikProps, Formik } from "formik";
import TextField, { TextFieldProps } from "./TextField";
import { Button, Heading } from "@chakra-ui/react";
import { EBlockType, IVariable } from "../../hooks/useGetBlocks";

const generateBlockVariables = (variables: IVariable[]) => {
  return variables?.map((variable) => {
    if (variable.type === EBlockType.TEXT) {
      return (
        <>
          <Heading as="h2" size="md">
            {variable.label}
          </Heading>
          {/* // Need a text input */}

          <Input
            placeholder="Enter text"
            onChange={(e) => {
              setBlockVariables([
                ...blockVariables,
                { name: variable.name, value: e.target.value },
              ]);
            }}
          />
        </>
      );
    } else if (variable.type === EBlockType.BOOLEAN) {
      return null;
    } else if (variable.type === EBlockType.ARRAY) {
      return null;
    } else {
      return null;
    }
  });
};

const generateBlock = (fields: IVariable[]) => {
  return fields.map(({ label, name, type }: IVariable) => {
    switch (type) {
      case EBlockType.TEXT:
        return <TextField key={name} name={name} type={type} label={label} />;
      case EBlockType.BOOLEAN:
        return (
          <BooleanField key={name} name={name} type={type} label={label} />
        );
      case EBlockType.ARRAY:
        return <ArrayField key={name} name={name} type={type} label={label} />;
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
          {generateBlock(fields)}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  ) : null;
};

export default GenericForm;
