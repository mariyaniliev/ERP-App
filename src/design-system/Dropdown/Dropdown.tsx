import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { dropdownStyles } from "./dropdown-styles";
import { DropdownProps, ListItem } from "../types";

const Dropdown = (props: DropdownProps) => {
  const { placeholder, list, width, boxShadow, onChange } = props;
  const fieldWidth = width ? width : "130";
  const dropdownShadow = boxShadow ? `${boxShadow}` : "none";
  return (
    <Box
      sx={{
        ...dropdownStyles,
        width: `${fieldWidth}px`,
        borderRadius: "20px",
        boxShadow: dropdownShadow,
      }}
    >
      <FormControl fullWidth>
        <InputLabel
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
          <MenuItem value="">&nbsp;</MenuItem>
          {list.map((listItem: ListItem) => {
            return (
              <MenuItem key={listItem.value} value={listItem.value + ""}>
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
