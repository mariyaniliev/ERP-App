import React, { useState } from "react";

import { useAppSelector, RootState } from "../../../../../redux/store";

import { LinearProgress } from "../../../../../design-system/index";
import {
  DataGrid,
  GridColumns,
  GridEnrichedColDef,
  GridRenderCellParams,
  MuiEvent,
} from "@mui/x-data-grid";

import { columns } from "./TimeOffsGridHelpers";

import { TimeOffsGridProps } from "./timeOffsGrid-types";

import TimeOffsApprovedGridActions from "../TimeOffsApprovedGrid/TimeOffsApprovedGridActions";
import TimeOffsPendingGridActions from "../TimeOffsPendingGrid/TimeOffsPendingGridActions";

import { timeOffsPendingGridStyles } from "../../TimeOffsGrid/TimeOffsPendingGrid/timeOffsPendingGrid-styles";

const TimeOffsApprovedGrid: React.FC<TimeOffsGridProps> = ({
  timeoffs = [],
  isLoading,
  styles,
  isPendingSectionEmpty,
  gridType,
  displayGrid = "",
}) => {
  const [selectedColumnList, setSelectedColumnList] = useState(columns);

  const { limit } = useAppSelector(
    (state: RootState) => state.search.searchedQueries
  );

  const onMouseEnterRow = (event: MuiEvent<React.MouseEvent<HTMLElement>>) => {
    const rowId = event.currentTarget.getAttribute("data-id");

    setSelectedColumnList((current: GridColumns) => {
      return current.map((item: GridEnrichedColDef) => {
        if (item.field === "actions") {
          return {
            ...item,
            renderCell: (params: GridRenderCellParams): React.ReactNode =>
              gridType === "approved" ? (
                <TimeOffsApprovedGridActions params={params} rowId={rowId} />
              ) : (
                <TimeOffsPendingGridActions params={params} rowId={rowId} />
              ),
          };
        }
        return { ...item };
      });
    });
  };

  const onMouseLeaveRow = () => {
    setSelectedColumnList((current: GridColumns) => {
      return current.map((item: GridEnrichedColDef) => {
        if (item.field === "actions") {
          return { ...item, renderCell: null };
        }
        return { ...item };
      });
    });
  };

  const calculateHeightAccumulator =
    timeoffs.length === 0 ? 10 : timeoffs.length;

  // * Approved table and pending table needs different additional heights to align with the applied CSS.
  const additionalHeight =
    !isPendingSectionEmpty && gridType === "approved" ? 65 : 90;

  const appliedStyles =
    isPendingSectionEmpty && gridType === "approved"
      ? timeOffsPendingGridStyles
      : styles;

  return (
    <DataGrid
      componentsProps={{
        loadingOverlay: LinearProgress,
        row: {
          onMouseEnter: onMouseEnterRow,
          onMouseLeave: onMouseLeaveRow,
        },
      }}
      loading={isLoading}
      pageSize={limit}
      disableColumnMenu={true}
      sx={{
        ...appliedStyles.grid,
        height: `${calculateHeightAccumulator * 52 + additionalHeight}px`,
        display: displayGrid,
      }}
      columns={selectedColumnList}
      rows={timeoffs || []}
      disableSelectionOnClick
      hideFooterPagination={true}
    />
  );
};
export default TimeOffsApprovedGrid;
