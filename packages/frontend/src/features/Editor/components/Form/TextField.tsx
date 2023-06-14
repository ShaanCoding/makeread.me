import React from "react";
import { useField, FieldInputProps } from "formik";
import { Input, InputGroup, InputLeftAddon, Stack } from "@chakra-ui/react";

export interface TextFieldProps extends FieldInputProps<""> {
  name: string;
  type: string;
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  ...props
}: TextFieldProps) => {
  const [field, meta] = useField(props);
  return (
    <Stack>
      <InputGroup>
        <InputLeftAddon children={label} />
        <Input placeholder={"ello"} {...field} {...props} />
      </InputGroup>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Stack>
  );
};

export default TextField;
