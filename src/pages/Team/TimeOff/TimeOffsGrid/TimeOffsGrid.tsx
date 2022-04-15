import React from "react";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { styles } from "./timeOffsGrid-styles";

const columns: GridColumns = [
  {
    field: "name",
    headerName: "Full name",
    sortable: true,
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 150,
    sortable: true,
  },
  {
    field: "lead",
    headerName: "Lead",
    type: "string",
    width: 150,
    sortable: true,
  },
  {
    field: "timeOffs",
    headerName: "Time Offs",
    type: "number",
    width: 150,
    sortable: true,
  },
  {
    field: "birthday",
    headerName: "Date of Birth",
    type: "string",
    width: 150,
    sortable: true,
  },
  {
    field: "startingDate",
    headerName: "Starting Date",
    type: "string",
    width: 150,
    sortable: true,
  },
];

const UsersGrid = () => {
  return (
    <DataGrid
      pageSize={5}
      // rowsPerPageOptions={[+rows]}
      disableColumnMenu={true}
      sx={styles.grid}
      columns={columns}
      rows={[]}
    />
  );
};
export default UsersGrid;
