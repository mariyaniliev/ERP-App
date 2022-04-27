import React, { useMemo } from "react";
import { debounce } from "lodash";

import { useAppSelector, RootState } from "../../../../redux/store";
import { searchActions } from "../../../../redux/reducer/search";

import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material";
import {
  Box,
  SearchInput,
  Dropdown,
  Pagination,
  Typography,
  Stack,
  PaginationItem,
  GrowAnimation,
} from "../../../../design-system";

import { typeOptions, periodOptions, rowsOptions } from "./dropdownOptions";

import { styles } from "./searchBar-styles";

const SearchBar: React.FC = () => {
  const { setQueries } = searchActions();
  const { searchedQueries } = useAppSelector(
    (state: RootState) => state.search
  );

  const { period, type, page, limit, totalPages } = searchedQueries;

  const handleSearch = async (event: SelectChangeEvent<HTMLInputElement>) => {
    const searchedName = event.target.value as string;
    setQueries({ ...searchedQueries, searchedName });
  };

  const debouncedChangeHandler = useMemo(() => debounce(handleSearch, 500), []);

  const handleSearchFilter = (
    event: SelectChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    const value = event.target.value as string;

    if (value === "") {
      setQueries({ ...searchedQueries, [label.toLowerCase()]: label });
      return;
    }

    setQueries({
      ...searchedQueries,
      [label.toLowerCase()]: value,
    });
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
        onChange={(e) => {
          handleSearchFilter(e, "Period");
        }}
      />
      <Dropdown
        placeholder={type}
        list={typeOptions}
        onChange={(e) => {
          handleSearchFilter(e, "Type");
        }}
      />

      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography sx={styles.rowsTitle}>Show per page</Typography>
        <Dropdown
          width="55"
          placeholder={String(limit)}
          list={rowsOptions}
          onChange={handleRows}
          noDefault={true}
        />
        {totalPages > 1 && (
          <GrowAnimation>
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
          </GrowAnimation>
        )}
      </Stack>
    </Box>
  );
};
export default SearchBar;
