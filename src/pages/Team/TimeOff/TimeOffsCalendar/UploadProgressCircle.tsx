import * as React from "react";

import { Typography, Box, CircularProgress } from "../../../../design-system";
import { CircularProgressProps } from "@mui/material/CircularProgress";

import { styles } from "./timeOffsCalendarHolder-styles";

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  return (
    <Box sx={styles.pcContainer}>
      <CircularProgress variant="determinate" {...props} />
      <Box sx={styles.pcInner}>
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

const UploadProgressCircle = ({ progress }: { progress: number }) => {
  return <CircularProgressWithLabel value={progress} />;
};

export default UploadProgressCircle;
