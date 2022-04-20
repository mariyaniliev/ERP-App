export interface InputProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  boxShadow?: string;
}
export interface ListItem {
  value: string;
  label: string;
}

export interface DropdownProps {
  placeholder: string | JSX.Element;
  list: ListItem[];
  width?: string;
  boxShadow?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  onClick: (event: React.MouseEvent) => void;
  width?: string;
  children: any;
}

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  BackdropComponent: any;
  BackdropProps: BackdropProps;
  modalStyles: {
    width: string;
    height: string;
    position: string;
    background: string;
    boxShadow: string;
    borderRadius: string;
    overflow: string;
  };
}

export interface BackdropProps {
  onClick: (event: React.MouseEvent) => void;
}
