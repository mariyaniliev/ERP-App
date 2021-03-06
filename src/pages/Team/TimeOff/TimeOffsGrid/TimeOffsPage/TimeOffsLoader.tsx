import React from "react";

import { Skeleton, Stack } from "../../../../../design-system";

import { styles } from "./timeOffsPage-styles";

const TimeOffsLoader = () => {
  return (
    <Stack>
      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{ ...styles.loader, borderRadius: "32px" }}
        width="100%"
        height="65px"
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{ ...styles.loader, mt: "25px" }}
        width="100%"
        height="65vh"
      />
    </Stack>
  );
};
export default TimeOffsLoader;
