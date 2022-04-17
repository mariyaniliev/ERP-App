import React, { Suspense } from "react";
import { Box } from "../../../design-system";
import UsersLoader from "./TimeOffsLoader";

const SearchBar = React.lazy(() => import("./SearchBar/SearchBar"));
const TimeOffsGrid = React.lazy(() => import("./TimeOffsGrid/TimeOffsGrid"));

const Users = () => {
  return (
    <Box px={12}>
      <Suspense fallback={<UsersLoader />}>
        <SearchBar />
        <TimeOffsGrid />
      </Suspense>
    </Box>
  );
};
export default Users;
