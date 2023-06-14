import React from "react";
import { useField, FieldInputProps } from "formik";
import { Checkbox, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

export interface IBooleanField {
  label: string;
  name: string;
  defaultValue: boolean;
}

const BooleanField: React.FC<{ data: IBooleanField }> = ({
  data: { defaultValue, label, name },
}: {
  data: IBooleanField;
}) => {
  // const [field, meta] = useField({
  //   name,
  //   value: defaultValue,
  //   onChange: (e: any) => {
  //     console.log(e);
  //   },
  // } as FieldInputProps<any>);

  return (
    <InputGroup>
      <Checkbox isChecked={defaultValue}>{label}</Checkbox>
    </InputGroup>
  );
};

export default BooleanField;
