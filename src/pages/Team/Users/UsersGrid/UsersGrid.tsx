import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styles } from "./usersGrid-styles";
import { useApiClient } from "../../../../utils/client";
import { useAppSelector, RootState } from "../../../../redux/store";

const columns: any[] = [
  {
    field: "name",
    headerName: "Full name",
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
    field: "timeOffRemainingDays",
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

  const { searchQuery, timeOffs, rows, birthday, pagination } = useAppSelector(
    (state: RootState) => state.users
  );
  console.log("pagination", pagination);
  const getUsers = async (signal?: AbortSignal) => {
    const users = await apiClient.get("/users", { signal });
    setUsersRowsData(users.data.data);
  };

  const filterUsersData = async (
    searchUsersQuery,
    rows,
    timeOffs,
    birthday,
    pagination
  ) => {
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
    if (birthday !== "") {
      users = await apiClient.get(`/users/search?birthday=${birthday}`);
    }
    if (pagination > 0) {
      users = await apiClient.get(`/users?page=${pagination}&limit=${rows}`);
    }
    setUsersRowsData(users.data.data);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (usersRowsData.length <= 0) {
      getUsers(signal);
    }

    if (usersRowsData.length > 0) {
      filterUsersData(searchQuery, rows, timeOffs, birthday, pagination);
    }

    return () => {
      abortController.abort();
    };
  }, [searchQuery, rows, timeOffs, birthday, pagination]);

  return (
    <DataGrid
      // pageSize={5}
      // rowsPerPageOptions={[+rows]}
      disableColumnMenu={true}
      sx={styles.grid}
      columns={columns}
      rows={usersRowsData}
      hideFooterPagination={true}
      disableSelectionOnClick
    />
  );
};
export default UsersGrid;
