import * as React from "react";

import { InputUnstyled, InputUnstyledProps } from "@mui/base";

import { StyledInputElement } from "./customInput-styles";

const inputStyles = {
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
} as const;

export const CustomInput = (props: InputUnstyledProps) => {
  return (
    <>
      <InputUnstyled
        style={inputStyles}
        components={{ Input: StyledInputElement }}
        {...props}
      />
    </>
  );
};
