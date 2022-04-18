import React, { useEffect, useMemo } from "react";
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

import { useApiClient } from "../../../../utils/client";
import {
  typeOptions,
  periodOptions,
  approvedOptions,
  rowsOptions,
  approvedJSX,
  deniedJSX,
} from "./listOptions";
import { urlCreator } from "./uriCreator.utils";
import { transformData } from "../TimeOffsGrid/transformData";
import { Period, TimeOffType } from "./types";
import { TimeOff } from "types/timeoff";
import { styles } from "./searchBar-styles";

type Props = {
  setData: (data: TimeOff[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  limit: number;
  setLimit: (num: number) => void;
};
let totalPages = 0;
const SearchBar: React.FC<Props> = ({
  setData,
  setIsLoading,
  limit,
  setLimit,
}) => {
  const [period, setPeriod] = React.useState<Period>(Period.period);
  const [type, setType] = React.useState<TimeOffType>(TimeOffType.type);
  const [searchedName, setSearchedName] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [approved, setApproved] = React.useState<string | JSX.Element>(
    "Approved"
  );
  const client = useApiClient();

  const handleSearch = async (event: SelectChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value as string;
    setSearchedName(searchTerm);
  };
  const debouncedChangeHandler = useMemo(() => debounce(handleSearch, 500), []);

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

  const handleRows = (event: SelectChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLimit(Number(value));
  };

  useEffect(() => {
    const fetchTimeOffs = async () => {
      setIsLoading(true);
      try {
        const { data } = await client.get(
          urlCreator(period, type, approved, searchedName, page, limit)
        );
        setData(transformData(data.data));

        totalPages = Math.ceil(data.resultsCount / limit);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchTimeOffs();
  }, [period, type, approved, searchedName, page, limit]);

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
            setPage(curPage);
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
