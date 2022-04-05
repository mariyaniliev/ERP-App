import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import { InputUnstyled } from "@mui/base";
import { searchInputStyles } from "./searchInput-styles";
import { InputProps } from "../types";

const SearchInput = (props: InputProps) => {
  const { placeholder, onChange, width } = props;
  const inputWidth = width ? `${width}px` : "auto";

  return (
    <FormControl sx={{ ...searchInputStyles.searchBox, inputWidth }}>
      <SearchIcon />
      <InputUnstyled onChange={onChange} placeholder={placeholder} />
    </FormControl>
  );
};
export default SearchInput;
