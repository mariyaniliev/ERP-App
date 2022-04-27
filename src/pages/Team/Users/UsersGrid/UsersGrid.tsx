import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useAppSelector, RootState } from "../../../../redux/store";
import columns from "./UsersGridColumns";
import { useApiClient } from "../../../../utils/client";
import { styles } from "./usersGrid-styles";

const UsersGrid = () => {
  const apiClient = useApiClient();
  const [usersRowsData, setUsersRowsData] = useState([]);
  const accumulatedHeight =
    usersRowsData.length === 0 ? 10 : usersRowsData.length;
  const { searchQuery, timeOffs, rows, birthday, pagination } = useAppSelector(
    (state: RootState) => state.users
  );
  console.log("searchQuery", searchQuery);

  const getUsers = async () => {
    const users = await apiClient.get("/users");
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
    setUsersRowsData(users?.data.data);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (usersRowsData.length <= 0) {
      getUsers();
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
      sx={{
        ...styles.grid,
        height: `${accumulatedHeight * 52 + 90}px`,
      }}
      columns={columns}
      rows={usersRowsData}
      hideFooterPagination={true}
      disableSelectionOnClick
    />
  );
};
export default UsersGrid;
