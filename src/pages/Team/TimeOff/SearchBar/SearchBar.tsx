import { SelectChangeEvent } from "@mui/material";
import React from "react";
import {
  Box,
  SearchInput,
  Dropdown,
  Pagination,
} from "../../../../design-system";
import { styles } from "./searchBar-styles";
import { Period, TimeOffType } from "./types";
import { useApiClient } from "../../../../utils/client";
import { typeOptions, periodOptions, approvedOptions } from "./listOptions";

/* import api, { searchQueryTypes } from "../../../../services/api-endpoints"; */

const approvedJSX = <span>&#10003;</span>;
const deniedJSX = <span>&#10006;</span>;
const SearchBar = () => {
  const [period, setPeriod] = React.useState<Period>(Period.period);
  const [type, setType] = React.useState<TimeOffType>(TimeOffType.type);
  const [approved, setApproved] = React.useState<string | JSX.Element>(
    "Approved"
  );
  const client = useApiClient();

  const handleSearch = async (event: SelectChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value as string;
    return searchTerm;
    /*     const searchResults = await client.get(
      api.users.searchUsers(searchQueryTypes.emailOrName, searchTerm)
    );

    console.log(searchResults.data); */
  };

  const handleApproved = (event: SelectChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    if (value === "") {
      setApproved("Approved");
      return;
    }
    setApproved(value === "true" ? approvedJSX : deniedJSX);
  };

  const handlePeriod = (event: SelectChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    if (value === "") {
      setPeriod(Period.period);
      return;
    }
    setPeriod(Period[value as keyof typeof Period]);
  };

  const handleType = (event: SelectChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    if (value === "") {
      setType(TimeOffType.type);
      return;
    }
    setType(TimeOffType[value as keyof typeof TimeOffType]);
  };

  return (
    <Box sx={styles.searchBar}>
      <SearchInput placeholder="Search or filter..." onChange={handleSearch} />
      <Dropdown
        placeholder={period}
        list={periodOptions}
        onChange={handlePeriod}
      />
      <Dropdown placeholder={type} list={typeOptions} onChange={handleType} />
      <Dropdown
        placeholder={approved}
        list={approvedOptions}
        onChange={handleApproved}
      />
      <Pagination
        count={4}
        onChange={() => {
          console.log("searched");
        }}
        defaultPage={1}
      />
    </Box>
  );
};
export default SearchBar;
