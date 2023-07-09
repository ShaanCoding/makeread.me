import React from "react";
import { Button, Heading, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import InputControl from "./Controls/InputControl";

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

  // Arrays are broken for now :(

  return (
    <>
      <Heading as="h3" size="md">
        {label}
      </Heading>
      {array?.map((_, index) => {
        return (
          <InputGroup key={index}>
            <InputLeftAddon children={label} />
            <InputControl name={`${name}`} label={label} defaultValue={"3"} />
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
