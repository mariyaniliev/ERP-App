import * as React from "react";
import { InputUnstyled, InputUnstyledProps } from "@mui/base";
import { StyledInputElement } from "./customInput-styles";

export const CustomInput = (props: InputUnstyledProps) => {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} />
  );
};
