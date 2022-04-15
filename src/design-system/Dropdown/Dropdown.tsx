import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { dropdownStyles } from "./dropdown-styles";
import { DropdownProps, ListItem } from "../types";

const Dropdown = (props: DropdownProps) => {
  const { placeholder, list, width, onChange } = props;

  const fieldWidth = width ? width : "130";

  return (
    <Box sx={{ ...dropdownStyles, width: `${fieldWidth}px` }}>
      <FormControl fullWidth>
        <InputLabel
          shrink={false}
          sx={{ fontSize: "14px", fontWeight: "600" }}
          id="demo-simple-select-label"
        >
          {placeholder}
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={placeholder}
          onChange={onChange}
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
