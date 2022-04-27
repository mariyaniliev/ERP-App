import React from "react";
import {
  Box,
  SearchInput,
  SearchBarDropdown,
  Pagination,
} from "../../../../design-system";
import { styles } from "./searchBar-styles";
import Input from "../../../../design-system/Input/Input";

const SearchBar = () => {
  const leadTest = [
    {
      label: "Ivan Ivanov",
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

  const testOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("testOnChange", event.target.value);
  };

  return (
    <Box sx={styles.searchBar}>
      <SearchInput placeholder="Search or filter..." onChange={testOnChange} />
      <SearchBarDropdown placeholder="Lead" list={leadTest} width="130" />
      <Input placeholder="Time offs" onChange={testOnChange} width="85" />
      <Input placeholder="Date of birth" onChange={testOnChange} width="120" />
      <Input placeholder="Starting date" onChange={testOnChange} width="120" />
      <SearchBarDropdown placeholder="Rows" list={paginationTest} width="85" />
      <Pagination
        count={4}
        onChange={(event, page) => console.log(page)}
        defaultPage={1}
      />
    </Box>
  );
};
export default SearchBar;
