import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { SubmitButtonProps } from "../types";

export default function CustomSubmitButton({
  label = "Submit",
  loading = false,
  loadingColor,
  ...props
}: SubmitButtonProps) {
  const guessColor = props.color === "primary" ? "secondary" : "primary";
  const progressColor = loadingColor ? loadingColor : guessColor;
  return (
    <Button
      sx={{ borderRadius: "16px" }}
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
