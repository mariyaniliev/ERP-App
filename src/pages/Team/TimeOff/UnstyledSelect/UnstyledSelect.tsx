import * as React from "react";
import SelectUnstyled, { SelectUnstyledProps } from "@mui/base/SelectUnstyled";
import {
  StyledButton,
  StyledListbox,
  StyledPopper,
} from "./unstyledSelect-styles";

export const CustomSelect = (props: SelectUnstyledProps<string>) => {
  const components: SelectUnstyledProps<string>["components"] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
};
