import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { THEME_SHADOW } from "../../../theme/theme-constants";

const TimeOffsLoaderStyles = {
  borderRadius: "30px",
  boxShadow: THEME_SHADOW,
  opacity: "0.4",
};

const TimeOffsLoader = ({ pageSize }: { pageSize?: number }) => {
  const height =
    pageSize === 5
      ? "343px"
      : pageSize === 10
      ? "603px"
      : pageSize === 20
      ? "1130px"
      : "0px";

  return (
    <Stack>
      <Skeleton
        animation="wave"
        variant="rectangular"
        style={{
          ...TimeOffsLoaderStyles,
          marginTop: "25px",
        }}
        width="100%"
        height={height}
      />
    </Stack>
  );
};
export default TimeOffsLoader;
