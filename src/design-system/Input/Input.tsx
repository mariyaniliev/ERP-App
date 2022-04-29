import React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { StyledInputElement } from "./input-styles";
import { Box } from "@mui/material";
import { InputProps } from "../types";

const Input = (props: InputProps) => {
  const { placeholder, onChange, width, boxShadow } = props;
  const inputWidth = width ? `${width}px` : "auto";
  const inputShadow = boxShadow ? `${boxShadow}` : "none";
  return (
    <Box
      sx={{ width: inputWidth, borderRadius: "20px", boxShadow: inputShadow }}
    >
      <InputUnstyled
        components={{
          Input: StyledInputElement,
        }}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Box>
  );
};

export default Input;
