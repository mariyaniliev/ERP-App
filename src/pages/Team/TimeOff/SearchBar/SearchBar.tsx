import React, { useMemo } from "react";
import { debounce } from "lodash";
import {
  PaginationItem,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import {
  Box,
  SearchInput,
  Dropdown,
  Pagination,
} from "../../../../design-system";
import {
  typeOptions,
  periodOptions,
  approvedOptions,
  rowsOptions,
} from "./listOptions";
import { useAppSelector, RootState } from "../../../../redux/store";
import { searchActions } from "../../../../redux/reducer/search";

import { styles } from "./searchBar-styles";

const SearchBar: React.FC = () => {
  const { setQueries } = searchActions();
  const { searchedQueries } = useAppSelector(
    (state: RootState) => state.search
  );

  const { period, type, approved, page, limit, totalPages } = searchedQueries;

  const handleSearch = async (event: SelectChangeEvent<HTMLInputElement>) => {
    const searchedName = event.target.value as string;
    setQueries({ ...searchedQueries, searchedName });
  };
  const debouncedChangeHandler = useMemo(() => debounce(handleSearch, 500), []);

  const handleApproved = (event: SelectChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    if (value === "") {
      setQueries({ ...searchedQueries, approved: "Approved" });
      return;
    }

    setQueries({
      ...searchedQueries,
      approved: value,
    });
  };

  const handlePeriod = (event: SelectChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    if (value === "") {
      setQueries({ ...searchedQueries, period: "Period" });
      return;
    }
    setQueries({ ...searchedQueries, period: value });
  };

  const handleType = (event: SelectChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    if (value === "") {
      setQueries({ ...searchedQueries, type: "Type" });
      return;
    }
    setQueries({ ...searchedQueries, type: value });
  };

  const handleRows = (event: SelectChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQueries({ ...searchedQueries, limit: Number(value) });
  };

  return (
    <Box sx={styles.searchBar}>
      <SearchInput
        placeholder="Search or filter..."
        onChange={debouncedChangeHandler}
      />

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
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography
          sx={{
            color: "#707070",
            display: { xs: "none", md: "none", lg: "flex" },
          }}
        >
          Show per page
        </Typography>
        <Dropdown
          width="55"
          placeholder={String(limit)}
          list={rowsOptions}
          onChange={handleRows}
        />
        <Pagination
          sx={styles.pagination}
          shape="rounded"
          color="secondary"
          count={totalPages}
          siblingCount={0}
          defaultPage={page}
          onChange={(_value, curPage) => {
            setQueries({ ...searchedQueries, page: curPage });
          }}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowLeft, next: ArrowRight }}
              {...item}
            />
          )}
        />
      </Stack>
    </Box>
  );
};
export default SearchBar;
