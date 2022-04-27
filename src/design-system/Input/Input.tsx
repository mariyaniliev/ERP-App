import React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { StyledInputElement } from "./input-styles";
import { Box } from "@mui/material";
import { InputProps } from "../types";

const Input = (props: InputProps) => {
  const { placeholder, onChange, width, disabled = false } = props;
  const inputWidth = width ? `${width}px` : "auto";
  return (
    <Box sx={{ width: inputWidth }}>
      <InputUnstyled
        disabled={disabled}
        components={{ Input: StyledInputElement }}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Box>
  );
};

export default Input;
