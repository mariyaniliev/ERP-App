import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styles } from "./timeOffsGrid-styles";
import { columns } from "./TimeOffGridHelpers";
import { TimeOff } from "types/timeoff";
import TimeOffsLoader from "../TimeOffsLoader";

type Props = {
  timeoffs: TimeOff[];
  isLoading: boolean;
  limit: number;
};

const UsersGrid: React.FC<Props> = ({ timeoffs, isLoading, limit }) => {
  if (isLoading) {
    return <TimeOffsLoader pageSize={limit} />;
  }

  return (
    <DataGrid
      pageSize={limit}
      disableColumnMenu={true}
      sx={{ ...styles.grid, height: `${limit * 52 + 90}px` }}
      columns={columns}
      pagination
      rows={timeoffs || []}
      disableSelectionOnClick
      hideFooterPagination={true}
    />
  );
};
export default UsersGrid;
