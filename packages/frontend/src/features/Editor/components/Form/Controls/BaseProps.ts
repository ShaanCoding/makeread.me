import {
  FormControlProps,
  FormErrorMessageProps,
  FormLabelProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
export interface BaseProps extends Omit<FormControlProps, "label"> {
  name: string;
  label?: React.ReactNode;
  labelProps?: FormLabelProps;
  helperText?: React.ReactNode;
  //   helperTextProps?: HelpTextProps;
  errorMessageProps?: FormErrorMessageProps;
}
export declare const FormControl: FC<BaseProps>;
export default FormControl;
