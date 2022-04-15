import React from "react";
import { Box } from "../index";
import { ModalProps } from "../types";
import { StyledModal } from "./modal-styles";

export const Modal = (props: ModalProps) => {
  const { open, children, BackdropProps, BackdropComponent, modalStyles } =
    props;
  return (
    <StyledModal
      open={open}
      BackdropComponent={BackdropComponent}
      BackdropProps={BackdropProps}
    >
      <Box sx={modalStyles}>{children}</Box>
    </StyledModal>
  );
};
