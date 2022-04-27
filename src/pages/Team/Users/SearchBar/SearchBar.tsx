import React from "react";
import { searchUsersActions } from "../../../../redux/reducer/searchUsers";
import {
  Box,
  SearchInput,
  Dropdown,
  Pagination,
} from "../../../../design-system";
import Input from "../../../../design-system/Input/Input";
import { styles } from "./searchBar-styles";

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
      label: "5",
      value: "5",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "20",
      value: "20",
    },
  ];

  const {
    searchUsersByQuery,
    searchUsersByTimeOffs,
    searchUsersByBirthday,
    searchUsersByStartingDate,
    displayUsersRows,
    displayUsersPagination,
  } = searchUsersActions();

  const searchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchUsersByQuery(event.target.value);
  };

  const timeOffsOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchUsersByTimeOffs(event.target.value);
  };

  const birthdayOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchUsersByBirthday(event.target.value);
  };

  const startingDateOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchUsersByStartingDate(event.target.value);
  };

  const rowsOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    displayUsersRows(event.target.value);
  };

  const paginationOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    page: number
  ) => {
    displayUsersPagination(page);
  };

  return (
    <Box sx={styles.searchBar}>
      <SearchInput
        placeholder="Search or filter..."
        onChange={searchOnChange}
      />
      <Dropdown placeholder="Lead" list={leadTest} width="130" />
      <Input placeholder="Time offs" width="85" onChange={timeOffsOnChange} />
      <Input
        placeholder="Date of birth"
        width="120"
        onChange={birthdayOnChange}
      />
      <Input
        placeholder="Starting date"
        width="120"
        onChange={startingDateOnChange}
      />
      <Dropdown
        placeholder="Rows"
        list={paginationTest}
        width="85"
        onChange={rowsOnChange}
      />
      <Pagination count={4} onChange={paginationOnChange} defaultPage={1} />
    </Box>
  );
};
export default SearchBar;
