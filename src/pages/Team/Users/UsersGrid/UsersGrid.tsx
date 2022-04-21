import React, { useEffect } from "react";
import { useQuery } from "react-query";
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

  const { searchQuery, timeOffs, rows, birthday, pagination } = useAppSelector(
    (state: RootState) => state.users
  );
  console.log("pagination", pagination);
  const getUsers = async (signal?: AbortSignal) => {
    return apiClient.get("/users", { signal });
  };

  const filterUsersData = async (
    searchUsersQuery,
    rows,
    timeOffs,
    birthday,
    pagination
  ) => {
    if (searchQuery !== "") {
      return apiClient.get(`/users/search?emailOrName=${searchUsersQuery}`);
    }
    if (+rows > 0) {
      return apiClient.get(`/users?limit=${rows}`);
    }
    if (timeOffs > 0) {
      return apiClient.get(`/users/search?timeOffRemainingDays=${timeOffs}`);
    }
    if (birthday !== "") {
      return apiClient.get(`/users/search?birthday=${birthday}`);
    }
    if (pagination > 0) {
      return apiClient.get(`/users?page=${pagination}&limit=${rows}`);
    }
  };
  const abortController = new AbortController();
  const signal = abortController.signal;
  const { data } = useQuery(["users", signal], () => getUsers(signal), {});
  const { data: filteredData } = useQuery(
    ["searchQuery", searchQuery, rows, timeOffs, birthday, pagination],
    () => filterUsersData(searchQuery, rows, timeOffs, birthday, pagination),
    {
      // keepPreviousData: true,
    }
  );

  const usersRowsData = () => {
    return filteredData ? filteredData.data.data : data ? data.data.data : [];
  };

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, [searchQuery, timeOffs, rows, birthday, pagination]);

  return (
    <DataGrid
      // pageSize={5}
      // rowsPerPageOptions={[+rows]}
      disableColumnMenu={true}
      sx={styles.grid}
      columns={columns}
      rows={usersRowsData()}
      hideFooterPagination={true}
    />
  );
};
export default UsersGrid;
