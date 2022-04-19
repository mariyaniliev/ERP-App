import React, { Suspense } from "react";
import { Box } from "../../../design-system";
import UsersLoader from "./UsersLoader";

const SearchBar = React.lazy(() => import("./SearchBar/SearchBar"));
const UsersGrid = React.lazy(() => import("./UsersGrid/UsersGrid"));

const Users = () => {
  return (
    <Box px={12} pt={4}>
      <Suspense fallback={<UsersLoader />}>
        <SearchBar />
        <UsersGrid />
      </Suspense>
    </Box>
  );
};
export default Users;
