import * as React from "react";

import { MenuItem, FormControl, Select, Box, Typography } from "../..";

import { DropdownProps, ListItem } from "../../types";

import { dropdownStyles } from "./dropdown-styles";

const Dropdown = (props: DropdownProps) => {
  const {
    placeholder,
    list,
    width = "120",
    onChange,
    noDefault = false,
    isDisabled = false,
  } = props;

  return (
    <Box sx={{ ...dropdownStyles, width: `${width}px` }}>
      <FormControl fullWidth>
        <Select
          disabled={isDisabled}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={onChange}
          value={placeholder as unknown as HTMLInputElement}
          renderValue={() => {
            return <Typography>{placeholder}</Typography>;
          }}
        >
          {!noDefault && <MenuItem value="">All</MenuItem>}

          {list.map((listItem: ListItem) => {
            return (
              <MenuItem key={listItem.value} value={listItem.value}>
                {listItem.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
export default Dropdown;
