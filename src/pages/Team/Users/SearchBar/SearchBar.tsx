import React from "react";
import { Box, SearchInput, Dropdown } from "../../../../design-system";
import { styles } from "./searchBar-styles";

const SearchBar = () => {
  const leadTest = [
    {
      label: "Ivan Ivanon",
      value: "ivan",
    },
    {
      label: "Dimitar Petrov",
      value: "dimitar",
    },
  ];
  const paginationTest = [
    {
      label: "20",
      value: "20",
    },
    {
      label: "50",
      value: "50",
    },
    {
      label: "100",
      value: "100",
    },
  ];

  return (
    <Box sx={styles.searchBar}>
      <SearchInput />
      <Dropdown selectOptions={leadTest} />
      <Dropdown selectOptions={paginationTest} />
    </Box>
  );
};
export default SearchBar;
