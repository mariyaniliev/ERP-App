import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomSubmitButton from "../../pages/Login/CustomButton/CustomSubmitButton";
import { Typography } from "@mui/material";
import { THEME_COLORS } from "../../theme/theme-constants";
export interface ConfirmationDialogProps {
  isOpen?: boolean;
  handleConfirm?: () => void;
  handleCancel?: () => void;
  title?: string;
  content?: string;
  isLoading?: boolean;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  error?: string;
}

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
    <DialogContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 0,
      }}
    >
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
      />
      <CustomSubmitButton
        flex={1}
        variant="text"
        onClick={handleCancel}
        color="primary"
        label={cancelButtonLabel}
      />
    </DialogActions>
  </Dialog>
);

export default ConfirmationDialog;
