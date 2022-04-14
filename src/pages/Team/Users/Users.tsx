import React, { Suspense } from "react";
import { Box } from "../../../design-system";
import UsersLoader from "./UsersLoader";

const SearchBar = React.lazy(() => import("./SearchBar/SearchBar"));
const UsersGrid = React.lazy(() => import("./UsersGrid/UsersGrid"));
const AddEmployeeBtn = React.lazy(
  () => import("../Users/AddEmployeeBtn/AddEmployeeBtn")
);

const Users = () => {
  return (
    <Box px={12}>
      <Suspense fallback={<UsersLoader />}>
        <AddEmployeeBtn />
        <SearchBar />
        <UsersGrid />
      </Suspense>
    </Box>
  );
};
export default Users;
