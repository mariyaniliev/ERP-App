import React from "react";

import {
  Typography,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
} from "../../design-system/index";

import { ConfirmationDialogProps } from "./confirmationDialog-types";

import CustomSubmitButton from "../CustomButton/CustomSubmitButton";

import { dialogContentStyles } from "./confirmationDialog-styles";
import { THEME_COLORS } from "../../theme/theme-constants";

const ConfirmationDialog = ({
  isOpen = false,
  handleConfirm,
  handleCancel,
  title = "Confirmation",
  content,
  confirmButtonLabel = "Confirm",
  cancelButtonLabel = "Cancel",
  error,
  isLoading,
}: ConfirmationDialogProps) => (
  <Dialog
    open={isOpen}
    onClose={handleCancel}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent sx={dialogContentStyles}>
      <DialogContentText
        id="alert-dialog-description"
        sx={{ fontSize: "1.3em", mb: 2 }}
      >
        {content}
      </DialogContentText>
      <Typography color={THEME_COLORS.danger}>{error}</Typography>
    </DialogContent>
    <DialogActions sx={{ p: 3 }}>
      <CustomSubmitButton
        flex={1}
        onClick={handleConfirm}
        color="primary"
        label={confirmButtonLabel}
        loading={isLoading}
        loadingColor="primary"
      />
      <CustomSubmitButton
        flex={1}
        variant="text"
        onClick={handleCancel}
        color="primary"
        label={cancelButtonLabel}
        disabled={isLoading}
      />
    </DialogActions>
  </Dialog>
);

export default ConfirmationDialog;
