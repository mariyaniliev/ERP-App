export type ConfirmationDialogProps = {
  isOpen?: boolean;
  handleConfirm?: () => void;
  handleCancel?: () => void;
  title?: string;
  content?: string;
  isLoading?: boolean;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  error?: string;
};
