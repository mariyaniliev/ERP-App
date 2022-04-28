import { SelectChangeEvent } from "@mui/material";

export interface InputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  disabled?: boolean;
}
export interface ListItem {
  value: string;
  label: string;
}

export interface DropdownProps {
  placeholder: string;
  list: ListItem[];
  width?: string;
  onChange?: (event: SelectChangeEvent<HTMLInputElement>) => void;
  noDefault?: boolean;
  type?: "input" | "select";
}
