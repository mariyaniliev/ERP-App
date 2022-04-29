import React, { useMemo } from "react";
import { debounce } from "lodash";
import { useAppSelector, RootState } from "../../../../redux/store";
import { searchUsersActions } from "../../../../redux/reducer/searchUsers";
import {
  Box,
  SearchInput,
  SearchBarDropdown,
  Pagination,
  Typography,
  Stack,
} from "../../../../design-system";
import Input from "../../../../design-system/Input/Input";
import { rowsOptions } from "../../../../pages/Team/TimeOff/SearchBar/dropdownOptions";
import { styles } from "./searchBar-styles";

const SearchBar = () => {
  // Hardcoded data for lead will be removed in the branch for fetching users with react query
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

  const { rows } = useAppSelector((state: RootState) => state.users);

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

  const debouncedChangeHandler = useMemo(
    () => debounce(searchOnChange, 500),
    []
  );

  return (
    <Box sx={styles.searchBar}>
      <SearchInput
        placeholder="Search or filter..."
        onChange={debouncedChangeHandler}
      />
      <SearchBarDropdown placeholder="Lead" list={leadTest} width="130" />
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
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography>Show per page</Typography>
        <SearchBarDropdown
          list={rowsOptions}
          placeholder={String(rows)}
          width="55"
          onChange={rowsOnChange}
        />
      </Stack>
      <Pagination count={4} onChange={paginationOnChange} defaultPage={1} />
    </Box>
  );
};
export default SearchBar;
