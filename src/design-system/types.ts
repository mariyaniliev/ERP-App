export interface InputProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}
export interface ListItem {
  value: string;
  label: string;
}

export interface DropdownProps {
  placeholder: string;
  list: ListItem[];
  width?: string;
  onChange?: () => void;
}
