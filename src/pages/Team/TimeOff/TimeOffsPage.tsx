import React, { Suspense, useEffect } from "react";
import { useQuery } from "react-query";

// * Material Ui
import { Box, GrowAnimation } from "../../../design-system";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

// * Helpers
import { urlCreator } from "./SearchBar/urlCreator";
import { useApiClient } from "../../../utils/client";
import { transformData } from "./TimeOffsGrid/transformData";
import { searchActions } from "../../../redux/reducer/search";
import queryClient from "../../../utils/queryCLient";

// * Redux
import { useAppSelector, RootState } from "../../../redux/store";

// * Styles
import { styles } from "./timeOffsPage-styles";
import { timeOffsApprovedGridStyles } from "./TimeOffsGrid/timeOffsApprovedGrid-styles";
import { timeOffsPendingGridStyles } from "./TimeOffsGrid/timeOffsPendingGrid-styles";

// * Components
import CustomSubmitButton from "../../../components/CustomButton/CustomSubmitButton";
import TimeOffsLoader from "./TimeOffsLoader";
const SearchBar = React.lazy(() => import("./SearchBar/SearchBar"));
const TimeOffsGrid = React.lazy(() => import("./TimeOffsGrid/TimeOffsGrid"));

const TimeOffsPage = () => {
  const { setQueries } = searchActions();
  const { searchedQueries } = useAppSelector(
    (state: RootState) => state.search
  );

  const { period, type, searchedName, page, limit } = searchedQueries;

  const client = useApiClient();

  const fetchTimeOffs = async (actualPage: number, status: string) => {
    const url = urlCreator(
      status,
      actualPage,
      limit,
      period,
      type,
      searchedName
    );
    const res = await client.get(url);
    if (status === "approved") {
      setQueries({
        ...searchedQueries,
        totalPages: Math.ceil(res.data.resultsCount / limit),
      });
    }
    return res;
  };

  const { data: approvedTimeOffs, isFetching: isApprovedTimeOffsFetching } =
    useQuery(["timeoffs", page, limit, period, type, searchedName], () =>
      fetchTimeOffs(page, "approved")
    );

  const { data: pendingTimeOffs, isFetching: isPendingTimeOffsFetching } =
    useQuery(["pendingTimeOffs"], () => fetchTimeOffs(page, "pending"));

  useEffect(() => {
    queryClient.invalidateQueries(["timeoffs"]);
  }, [limit, period, type, searchedName]);

  useEffect(() => {
    queryClient.prefetchQuery(
      ["timeoffs", page + 1, limit, period, type, searchedName],
      () => fetchTimeOffs(page + 1, "approved")
    );
  }, [page, searchedName, period, type, limit]);

  useEffect(() => {
    return () => {
      setQueries(searchedQueries);
    };
  }, []);

  const isPendingSectionEmpty = pendingTimeOffs?.data.data.length === 0;
  const displayGrid = isPendingSectionEmpty ? "none" : "";

  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.submitTimeOffButtonHolder}>
          <GrowAnimation>
            <CustomSubmitButton
              label={"Request time off"}
              styles={styles.submitTimeOff}
              startIcon={<PersonAddIcon />}
            />
          </GrowAnimation>
        </Box>

        <Suspense fallback={<TimeOffsLoader />}>
          <GrowAnimation>
            <SearchBar />
          </GrowAnimation>
          <GrowAnimation>
            <TimeOffsGrid
              gridType={"pending"}
              displayGrid={displayGrid}
              timeoffs={transformData(pendingTimeOffs?.data.data)}
              isLoading={isPendingTimeOffsFetching}
              styles={timeOffsPendingGridStyles}
            />

            <TimeOffsGrid
              gridType={"approved"}
              timeoffs={transformData(approvedTimeOffs?.data.data)}
              isLoading={isApprovedTimeOffsFetching}
              styles={timeOffsApprovedGridStyles}
              isPendingSectionEmpty={isPendingSectionEmpty}
            />
          </GrowAnimation>
        </Suspense>
      </Box>
    </Box>
  );
};
export default TimeOffsPage;
