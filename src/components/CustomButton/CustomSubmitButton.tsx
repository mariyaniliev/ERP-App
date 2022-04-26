import React from "react";

import { Button, CircularProgress } from "../../design-system";

import { SubmitButtonProps } from "./customSubmitButton-types";

export default function CustomSubmitButton({
  label = "Submit",
  loading = false,
  loadingColor,
  styles,
  ...props
}: SubmitButtonProps): JSX.Element {
  const guessColor = props.color === "primary" ? "secondary" : "primary";
  const progressColor = loadingColor ? loadingColor : guessColor;
  return (
    <Button
      sx={{
        borderRadius: "16px",
        flex: props.flex ? props.flex : "",
        ...styles,
      }}
      type="submit"
      color="primary"
      variant="contained"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <CircularProgress color={progressColor} size="1.5rem" />
      ) : (
        label
      )}
    </Button>
  );
}
