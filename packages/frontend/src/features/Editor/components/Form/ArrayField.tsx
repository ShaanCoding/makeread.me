import React from "react";
import { useField, FieldInputProps } from "formik";
import {
  Button,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export interface IArrayField {
  label: string;
  name: string;
  defaultValue: string[];
}

const ArrayField: React.FC<{ data: IArrayField }> = ({
  data: { defaultValue, label, name },
}: {
  data: IArrayField;
}) => {
  // const [field, meta] = useField({
  //   name,
  //   value: defaultValue,
  //   onChange: (e: any) => {
  //     console.log(e);
  //   },
  // } as FieldInputProps<any>);
  const [array, setArray] = React.useState<string[]>(defaultValue);

  return (
    <>
      <Heading as="h3" size="md">
        {label}
      </Heading>
      {array?.map((item, index) => {
        return (
          <InputGroup key={index}>
            <Input defaultValue={item} />
            <Button
              onClick={() => {
                setArray(array.filter((_, i) => i !== index));
              }}
            >
              Remove
            </Button>
          </InputGroup>
        );
      })}

      <Button
        onClick={() => {
          setArray([...array, ""]);
        }}
      >
        Add Element
      </Button>
    </>
  );
};

export default ArrayField;
