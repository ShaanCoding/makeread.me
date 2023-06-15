import { FormControl, Input, InputProps } from "@chakra-ui/react";
import { useField, useFormikContext } from "formik";
import React, { FC, ForwardedRef } from "react";
import { BaseProps } from "./BaseProps";

export type InputControlProps = BaseProps & { inputProps?: InputProps };

export const InputControl: FC<InputControlProps> = React.forwardRef(
  (props: InputControlProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { name, label, inputProps, ...rest } = props;
    const [field] = useField(name);
    const { isSubmitting } = useFormikContext();
    return (
      //   <FormControl name={name} label={label} {...rest}>
      <Input
        {...field}
        id={name}
        isDisabled={isSubmitting}
        {...inputProps}
        ref={ref}
      />
      //   </FormControl>
    );
  }
);

export default InputControl;
