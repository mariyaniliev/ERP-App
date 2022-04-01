import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import { InputUnstyled } from "@mui/base";
import { searchInputStyles } from "./searchInput-styles";

const SearchInput = () => {
  return (
    <FormControl sx={searchInputStyles.searchBox}>
      <SearchIcon />
      <InputUnstyled placeholder="Search or filter..." />
    </FormControl>
  );
};
export default SearchInput;
