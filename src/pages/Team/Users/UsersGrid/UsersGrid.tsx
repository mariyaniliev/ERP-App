import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styles } from "./usersGrid-styles";

const columns: any[] = [
  {
    field: "name",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
    sortable: true,
  },
  {
    field: "lead",
    headerName: "Lead",
    type: "string",
    width: 200,
    sortable: true,
  },
  {
    field: "timeOffs",
    headerName: "Time Offs",
    type: "number",
    width: 200,
    sortable: true,
  },
  {
    field: "birthday",
    birthday: "Date of Birth",
    type: "string",
    width: 200,
    sortable: true,
  },
  {
    field: "startingDate",
    headerName: "Starting Date",
    type: "string",
    width: 200,
    sortable: true,
  },
];

const rows = [
  {
    id: 1,
    name: "Edward Snowden",
    email: "Snowden@",
    lead: "Ivan Petrov",
    timeOffs: "20",
    birthday: "06/07/1994",
    startingDate: "13/05/2021",
  },
  {
    id: 2,
    name: "Edward Snowden",
    email: "Snowden@",
    lead: "Ivan Petrov",
    timeOffs: "20",
    birthday: "07/07/1995",
    startingDate: "10/05/2021",
  },
];

const UsersGrid = () => {
  return (
    <DataGrid
      pageSize={5}
      rowsPerPageOptions={[10]}
      disableColumnMenu={true}
      sx={styles.grid}
      columns={columns}
      rows={rows}
    />
  );
};
export default UsersGrid;
