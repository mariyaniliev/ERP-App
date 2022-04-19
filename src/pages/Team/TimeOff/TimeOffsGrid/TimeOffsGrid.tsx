import React, { useState } from "react";
import { DataGrid, GridColumns, GridEnrichedColDef } from "@mui/x-data-grid";
import { styles } from "./timeOffsGrid-styles";
import { columns, renderActionsCell } from "./TimeOffGridHelpers";
import { TimeOff } from "types/timeoff";
import { useAppSelector, RootState } from "../../../../redux/store";
import { LinearProgress } from "@mui/material";

type Props = {
  timeoffs: TimeOff[];
  isLoading: boolean;
};

const UsersGrid: React.FC<Props> = ({ timeoffs, isLoading }) => {
  const [selectedColumnList, setSelectedColumnList] = useState(columns);
  const { limit } = useAppSelector(
    (state: RootState) => state.search.searchedQueries
  );

  const onMouseEnterRow = (event) => {
    const rowId = event.currentTarget.getAttribute("data-id");

    setSelectedColumnList((current: GridColumns) => {
      return current.map((item: GridEnrichedColDef) => {
        if (item.field === "actions") {
          return {
            ...item,
            renderCell: (params) => renderActionsCell(params, rowId),
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
      sx={{ ...styles.grid, height: `${limit * 52 + 90}px` }}
      columns={selectedColumnList}
      rows={timeoffs || []}
      disableSelectionOnClick
      hideFooterPagination={true}
    />
  );
};
export default UsersGrid;
