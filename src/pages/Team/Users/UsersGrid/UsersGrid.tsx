import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styles } from "./usersGrid-styles";
import { useApiClient } from "../../../../utils/client";
import { useAppSelector, RootState } from "../../../../redux/store";

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
  const apiClient = useApiClient();
  const [usersRowsData, setUsersRowsData] = useState([]);

  const { searchQuery, timeOffs, rows } = useAppSelector(
    (state: RootState) => state.users
  );

  const getUsers = async (signal?: AbortSignal) => {
    const users = await apiClient.get("/users", { signal });
    setUsersRowsData(users.data.data);
  };

  const filterUsersData = async (searchUsersQuery, rows, timeOffs) => {
    let users = [];
    if (searchQuery !== "") {
      users = await apiClient.get(
        `/users/search?emailOrName=${searchUsersQuery}`
      );
    }
    if (+rows > 0) {
      users = await apiClient.get(`/users?limit=${rows}`);
    }
    if (timeOffs > 0) {
      users = await apiClient.get(
        `/users/search?timeOffRemainingDays=${timeOffs}`
      );
    }
    // usersRowsData
    console.log(usersRowsData);
    console.log(users.data.data);
    setUsersRowsData(users?.data.data);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (usersRowsData.length <= 0) {
      getUsers(signal);
    }

    filterUsersData(searchQuery, rows, timeOffs);

    return () => {
      abortController.abort();
    };
  }, [searchQuery, rows, timeOffs]);

  return (
    <DataGrid
      // pageSize={5}
      rowsPerPageOptions={[+rows]}
      disableColumnMenu={true}
      sx={styles.grid}
      columns={columns}
      rows={usersRowsData}
    />
  );
};
export default UsersGrid;
