import * as React from "react";
import { InputUnstyled, InputUnstyledProps } from "@mui/base";
import { StyledInputElement } from "./customInput-styles";

export const CustomInput = (props: InputUnstyledProps) => {
  return (
    <>
      <InputUnstyled
        style={{
          width: "65%",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
        components={{ Input: StyledInputElement }}
        {...props}
      />
    </>
  );
};
