import React from "react";
import { BackdropProps } from "../types";
import { StyledBackdrop } from "./backdrop-styles";

export const Backdrop = (props: BackdropProps) => {
  const { onClick } = props;
  return <StyledBackdrop onClick={onClick} />;
};
