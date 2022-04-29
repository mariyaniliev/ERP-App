import React, { Suspense } from "react";
import { Box } from "../../../design-system";
import UsersLoader from "./UsersLoader";

const SearchBar = React.lazy(() => import("./SearchBar/SearchBar"));
const UsersGrid = React.lazy(() => import("./UsersGrid/UsersGrid"));

const styles = {
  content: {
    width: "100%",
    padding: "0 25px 25px 25px",
  },
  innerContent: {
    width: "calc(100vw - 303px)",
    margin: "0 auto",
  },
} as const;

const Users = () => {
  return (
    <Box sx={styles.content}>
      <Box sx={styles.innerContent}>
        <Suspense fallback={<UsersLoader />}>
          <SearchBar />
          <UsersGrid />
        </Suspense>
      </Box>
    </Box>
  );
};
export default Users;
