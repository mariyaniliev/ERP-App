import * as React from "react";

import { MenuItem, FormControl, Select, Box, Typography } from "@mui/material";

import { dropdownStyles } from "./dropdown-styles";
import { DropdownProps, ListItem } from "../types";

const Dropdown = (props: DropdownProps) => {
  const { placeholder, list, width = "116", onChange } = props;

  return (
    <Box sx={{ ...dropdownStyles, width: `${width}px` }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={onChange}
          value={placeholder as unknown as HTMLInputElement}
          renderValue={() => {
            return <Typography>{placeholder}</Typography>;
          }}
        >
          {isNaN(Number(placeholder)) && <MenuItem value="">All</MenuItem>}

          {list.map((listItem: ListItem) => {
            return (
              <MenuItem key={listItem.value} value={listItem.value}>
                {listItem.renderValue ? listItem.renderValue() : listItem.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
export default Dropdown;
