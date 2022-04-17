import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { dropdownStyles } from "./dropdown-styles";
import { DropdownProps, ListItem } from "../types";
import { Typography } from "@mui/material";

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
