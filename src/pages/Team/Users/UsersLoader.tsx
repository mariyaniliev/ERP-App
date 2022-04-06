import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { THEME_COLORS } from "./../../../theme/theme-constants";

const usersLoaderStyles = {
  borderRadius: "30px",
  boxShadow: `0px 0px 8px ${THEME_COLORS.grey05}`,
};

const UsersLoader = () => (
  <Stack>
    <Skeleton
      variant="rectangular"
      style={usersLoaderStyles}
      width="100%"
      height={85}
    />
    <Skeleton
      variant="rectangular"
      style={{
        ...usersLoaderStyles,
        marginTop: "25px",
      }}
      width="100%"
      height={600}
    />
  </Stack>
);
export default UsersLoader;
