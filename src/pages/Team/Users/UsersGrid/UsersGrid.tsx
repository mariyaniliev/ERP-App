import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styles } from "./usersGrid-styles";
import { useTestPromise } from "../../../../redux/reducer/users";
import { useAppDispatch } from "../../../../redux/store";

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
    width: 120,
    sortable: true,
  },
  {
    field: "birthday",
    birthday: "Date of Birth",
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
  // const apiClient = useApiClient();
  const dispatch = useAppDispatch();
  const [usersRowsData, setUsersRowsData] = useState([]);

  // const getUsers = async () => {
  //   const users = await apiClient.get("/users");
  //   return users;
  // };

  useEffect(() => {
    dispatch(useTestPromise());
  }, []);

  return (
    <DataGrid
      pageSize={5}
      rowsPerPageOptions={[10]}
      disableColumnMenu={true}
      sx={styles.grid}
      columns={columns}
      rows={usersRowsData}
    />
  );
};
export default UsersGrid;
