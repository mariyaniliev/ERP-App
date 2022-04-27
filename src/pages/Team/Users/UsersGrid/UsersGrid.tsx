import React from "react";
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
  const getUsers = async () => {
    return apiClient.get("/users");
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

  const { data } = useQuery("users", () => getUsers(), {});

  const { data: filteredData, isFetching: isFilteredDataFetching } = useQuery(
    ["searchQuery", searchQuery, rows, timeOffs, birthday, pagination],
    () => filterUsersData(searchQuery, rows, timeOffs, birthday, pagination)
  );

  const usersRowsData = () => {
    return filteredData ? filteredData.data.data : data ? data.data.data : [];
  };

  return (
    <DataGrid
      // pageSize={5}
      // rowsPerPageOptions={[+rows]}
      disableColumnMenu={true}
      sx={styles.grid}
      columns={columns}
      rows={usersRowsData()}
      hideFooterPagination={true}
      loading={isFilteredDataFetching}
    />
  );
};
export default UsersGrid;
