import { ButtonProps, CircularProgressProps, CSSObject } from "@mui/material";

export type SubmitButtonProps = {
  loading?: boolean;
  label?: string;
  loadingColor?: CircularProgressProps["color"];
  flex?: number;
  styles?: CSSObject;
} & ButtonProps;

export type ErrorsValue = {
  emailError: string;
  passwordError: string;
};
