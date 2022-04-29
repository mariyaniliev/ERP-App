import { CSSObject, SelectChangeEvent } from "@mui/material";
import React from "react";

export interface InputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  disabled?: boolean;
  boxShadow?: string;
}
export interface ListItem {
  value: string;
  label: string;
}

export interface DropdownProps {
  placeholder: string;
  list: ListItem[];
  width?: string;
  boxShadow?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  onClick: (event: React.MouseEvent) => void;
  width?: string;
  children: React.ReactNode;
}

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  BackdropComponent: React.ReactNode;
  BackdropProps: BackdropProps;
  modalStyles: CSSObject;
}

export interface BackdropProps {
  onClick: (event: React.MouseEvent) => void;
  onChange?: (event: SelectChangeEvent<HTMLInputElement>) => void;
  noDefault?: boolean;
  type?: "input" | "select";
}
