import * as React from "react";
import ButtonUnstyled, { ButtonUnstyledProps } from "@mui/base/ButtonUnstyled";
import { CustomButtonRoot } from "./customButton-styles";

export const CustomButton = (props: ButtonUnstyledProps) => {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
};
