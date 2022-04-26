import React, { Suspense, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { useAppSelector, RootState } from "../../../../../redux/store";

import { Box, GrowAnimation } from "../../../../../design-system";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { urlCreator } from "../../../../../utils/urlCreator";
import { useApiClient } from "../../../../../utils/client";
import { transformData } from "../../../../../utils/transformData";
import { searchActions } from "../../../../../redux/reducer/search";
import queryClient from "../../../../../utils/queryCLient";

import CustomSubmitButton from "../../../../../components/CustomButton/CustomSubmitButton";
import TimeOffsLoader from "./TimeOffsLoader";
import CommonFormModal from "../../../../../components/CommonFormModal/CommonFormModal";
import TimeOffsCalendar from "../../TimeOffsCalendar/TimeOffsCalendar";

import { styles } from "./timeOffsPage-styles";
import { timeOffsApprovedGridStyles } from "../TimeOffsApprovedGrid/timeOffsApprovedGrid-styles";
import { timeOffsPendingGridStyles } from "../TimeOffsPendingGrid/timeOffsPendingGrid-styles";
import leftDraw from "../../../../../theme/assets/timeoff_draw_left.png";
import rightDraw from "../../../../../theme/assets/timeoff_draw_right.png";

const SearchBar = React.lazy(() => import("../../SearchBar/SearchBar"));
const TimeOffsGrid = React.lazy(
  () => import("../TimeOffsGridCommon/TimeOffsGrid")
);

const TimeOffsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const isPendingSectionEmpty = pendingTimeOffs?.data.data.length === 0;

  const displayGrid = isPendingSectionEmpty ? "none" : "";

  return (
    <Box sx={styles.container}>
      <CommonFormModal
        leftPic={leftDraw}
        isOpen={isModalOpen}
        rightPic={rightDraw}
        closeModal={handleClose}
      >
        <TimeOffsCalendar />
      </CommonFormModal>

      <Box sx={styles.innerContainer}>
        <Box sx={styles.submitTimeOffButtonHolder}>
          <GrowAnimation>
            <CustomSubmitButton
              label={"Request time off"}
              styles={styles.submitTimeOff}
              startIcon={<PersonAddIcon />}
              onClick={handleOpen}
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