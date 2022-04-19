import React, { Suspense, useEffect } from "react";
import { useAppSelector, RootState } from "../../../redux/store";
import { Box } from "../../../design-system";
import { urlCreator } from "./SearchBar/uriCreator.utils";
import { useApiClient } from "../../../utils/client";
import { useQuery } from "react-query";
import { transformData } from "./TimeOffsGrid/transformData";
import { searchActions } from "../../../redux/reducer/search";
import queryClient from "../../../utils/queryCLient";
import TimeOffsLoader from "./TimeOffsLoader";
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

  const { data, error, isFetching } = useQuery(
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
    <Box px="25px" py={5} width="100%" display="flex" justifyContent="center">
      <Box width="1632px">
        <Suspense fallback={<TimeOffsLoader />}>
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
