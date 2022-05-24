import { ButtonProps, CircularProgressProps, CSSObject } from "@mui/material";

export type SubmitButtonProps = {
  loading?: boolean;
  label?: string;
  loadingColor?: CircularProgressProps["color"];
  flex?: number;
  styles?: CSSObject;
  component?: string;
} & ButtonProps;
