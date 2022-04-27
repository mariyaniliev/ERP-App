import React from "react";
import { useQuery } from "react-query";
import { DataGrid } from "@mui/x-data-grid";
import { useAppSelector, RootState } from "../../../../redux/store";
import columns from "./UsersGridColumns";
import { useApiClient } from "../../../../utils/client";
import { styles } from "./usersGrid-styles";

const UsersGrid = () => {
  const apiClient = useApiClient();

  const { searchQuery, timeOffs, rows, birthday, pagination } = useAppSelector(
    (state: RootState) => state.users
  );
  console.log("pagination", pagination);
  const getUsers = async () => {
    return apiClient.get("/users");
  };
  // const [usersRowsData, setUsersRowsData] = useState([]);
  // const accumulatedHeight =
  //   usersRowsData.length === 0 ? 10 : usersRowsData.length;
  // const { searchQuery, timeOffs, rows, birthday, pagination } = useAppSelector(
  //   (state: RootState) => state.users
  // );
  // console.log("searchQuery", searchQuery);

  // const getUsers = async () => {
  //   const users = await apiClient.get("/users");
  //   setUsersRowsData(users.data.data);
  // };

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
    // setUsersRowsData(users?.data.data);
  };

  const { data } = useQuery("users", () => getUsers());

  const { data: filteredData, isFetching: isFilteredDataFetching } = useQuery(
    ["searchQuery", searchQuery, rows, timeOffs, birthday, pagination],
    () => filterUsersData(searchQuery, rows, timeOffs, birthday, pagination)
  );
  // if (usersRowsData.length <= 0) {
  //   getUsers();
  // }

  const usersRowsData = () => {
    return filteredData ? filteredData.data.data : data ? data.data.data : [];
  };

  return (
    <DataGrid
      // pageSize={5}
      // rowsPerPageOptions={[+rows]}
      disableColumnMenu={true}
      sx={{
        ...styles.grid,
        // height: `${accumulatedHeight * 52 + 90}px`,
      }}
      columns={columns}
      rows={usersRowsData()}
      hideFooterPagination={true}
      loading={isFilteredDataFetching}
      // disableSelectionOnClick
    />
  );
};
export default UsersGrid;
