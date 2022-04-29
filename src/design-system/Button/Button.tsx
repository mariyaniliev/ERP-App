import React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { Box } from "../index";
import { ButtonProps } from "../types";
import { StyledButtonElement } from "./button-styles";

const Button = (props: ButtonProps) => {
  const { onClick, width, children } = props;
  const buttonWidth = width ? `${width}px` : "auto";
  return (
    <Box sx={{ width: buttonWidth }}>
      <ButtonUnstyled component={StyledButtonElement} onClick={onClick}>
        {children}
      </ButtonUnstyled>
    </Box>
  );
};

export default Button;
