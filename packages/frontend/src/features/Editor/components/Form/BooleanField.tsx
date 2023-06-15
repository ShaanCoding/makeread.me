import React from "react";
import { useField, FieldInputProps } from "formik";
import { Checkbox, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { CheckboxControl } from "./Controls/CheckboxControl";

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
      <InputLeftAddon children={label} />
      <CheckboxControl
        name={name}
        label={label}
        defaultChecked={defaultValue}
      />
    </InputGroup>
  );
};

export default BooleanField;
