import * as React from "react";
import SelectUnstyled, {
  SelectUnstyledProps,
  SelectOption,
} from "@mui/base/SelectUnstyled";
import {
  StyledButton,
  StyledOption,
  StyledListbox,
  StyledPopper,
} from "./dropdown-styles";

const renderValue = (testSelect: SelectOption<number> | null) => {
  if (testSelect === null) {
    return <span>Lead</span>;
  }
  return <span>{testSelect?.label}</span>;
};

const CustomSelect = (props: SelectUnstyledProps<number>) => {
  const components: SelectUnstyledProps<number>["components"] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
};

const Dropdown = (props: any) => {
  const { selectOptions } = props;
  return (
    <CustomSelect renderValue={renderValue}>
      {selectOptions.map((selectOption, index) => (
        <StyledOption value={selectOption.value} key={index}>
          {selectOption.label}
        </StyledOption>
      ))}
    </CustomSelect>
  );
};

export default Dropdown;
