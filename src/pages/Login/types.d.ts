import { ButtonProps, CircularProgressProps } from "@mui/material";

export type SubmitButtonProps = {
  loading?: boolean;
  label?: string;
  loadingColor?: CircularProgressProps["color"];
  flex?: number;
} & ButtonProps;

export type ErrorsValue = {
  emailError: string;
  passwordError: string;
};
