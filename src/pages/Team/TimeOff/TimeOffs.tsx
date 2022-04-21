import React, { Suspense, useEffect } from "react";
import { useQuery } from "react-query";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { useAppSelector, RootState } from "../../../redux/store";
import { Box } from "../../../design-system";
import { urlCreator } from "./SearchBar/urlCreator";
import { useApiClient } from "../../../utils/client";
import { transformData } from "./TimeOffsGrid/transformData";
import { searchActions } from "../../../redux/reducer/search";
import queryClient from "../../../utils/queryCLient";
import CustomSubmitButton from "../../Login/CustomButton/CustomSubmitButton";
import TimeOffsLoader from "./TimeOffsLoader";

import { styles } from "./timeOffsStyles";

const SearchBar = React.lazy(() => import("./SearchBar/SearchBar"));
const TimeOffsGrid = React.lazy(() => import("./TimeOffsGrid/TimeOffsGrid"));

const Users = () => {
  const { setQueries } = searchActions();
  const { searchedQueries } = useAppSelector(
    (state: RootState) => state.search
  );

  const { period, type, approved, searchedName, page, limit } = searchedQueries;

  const client = useApiClient();

  const fetchTimeOffs = async (actualPage: number) => {
    const url = urlCreator(
      actualPage,
      limit,
      period,
      type,
      approved,
      searchedName
    );
    const res = await client.get(url);
    setQueries({
      ...searchedQueries,
      totalPages: Math.ceil(res.data.resultsCount / limit),
    });
    return res;
  };

  const { data, isFetching } = useQuery(
    ["timeoffs", page, limit, period, approved, type, searchedName],
    () => fetchTimeOffs(page)
  );

  useEffect(() => {
    queryClient.invalidateQueries(["timeoffs"]);
  }, [limit, period, approved, type, searchedName]);
  useEffect(() => {
    queryClient.prefetchQuery(
      ["timeoffs", page + 1, limit, period, approved, type, searchedName],
      () => fetchTimeOffs(page + 1)
    );
  }, [page, searchedName, period, approved, type, limit]);
  useEffect(() => {
    return () => {
      setQueries(searchedQueries);
    };
  }, []);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Suspense fallback={<TimeOffsLoader />}>
          <Box sx={styles.submitTimeOffButtonHolder}>
            <CustomSubmitButton
              label={"Request time off"}
              styles={styles.submitTimeOff}
              startIcon={<PersonAddIcon />}
            />
          </Box>
          <SearchBar />
          <TimeOffsGrid
            timeoffs={transformData(data?.data.data)}
            isLoading={isFetching}
          />
        </Suspense>
      </Box>
    </Box>
  );
};
export default Users;
