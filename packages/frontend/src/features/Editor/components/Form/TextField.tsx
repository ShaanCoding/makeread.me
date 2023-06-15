import React from "react";
import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { InputControl } from "./Controls/InputControl";

export interface ITextField {
  label: string;
  name: string;
  defaultValue: string;
}

const TextField: React.FC<{ data: ITextField }> = ({
  data: { defaultValue, label, name },
}: {
  data: ITextField;
}) => {
  return (
    <InputGroup>
      <InputLeftAddon children={label} />
      <InputControl name={name} label={label} defaultValue={defaultValue} />
    </InputGroup>
  );
};

export default TextField;
