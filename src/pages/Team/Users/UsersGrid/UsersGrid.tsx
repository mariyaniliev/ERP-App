import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { DataGrid } from "@mui/x-data-grid";
import { useAppSelector, RootState } from "../../../../redux/store";
import columns from "./UsersGridColumns";
import { useApiClient } from "../../../../utils/client";
import { usersUrlCreator } from "../../../../utils/usersUrlCreator";
import { styles } from "./usersGrid-styles";

const UsersGrid = () => {
  const apiClient = useApiClient();

  const { searchQuery, timeOffs, rows, birthday, pagination } = useAppSelector(
    (state: RootState) => state.users
  );

  const [usersRowsData, setUsersRowsData] = useState([]);

  const accumulatedHeight =
    usersRowsData.length === 0 ? 10 : usersRowsData.length;

  const fetchSearchUsers = async () => {
    const url = usersUrlCreator(
      searchQuery,
      timeOffs,
      birthday,
      pagination,
      rows
    );
    const res = await apiClient.get(url);

    return res;
  };

  const { data: users, isFetching: isUsersFetching } = useQuery(
    ["searchQuery", searchQuery, timeOffs, birthday, pagination, rows],
    () => fetchSearchUsers()
  );

  useEffect(() => {
    users && setUsersRowsData(users.data.data);
  }, [users]);

  return (
    <DataGrid
      disableColumnMenu={true}
      sx={{
        ...styles.grid,
        height: `${accumulatedHeight * 52 + 90}px`,
      }}
      columns={columns}
      rows={users?.data.data || []}
      hideFooterPagination={true}
      loading={isUsersFetching}
    />
  );
};
export default UsersGrid;
