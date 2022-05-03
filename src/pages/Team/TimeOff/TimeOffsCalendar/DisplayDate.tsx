import React from "react";

import { Stack, Typography } from "../../../../design-system";

import { DisplayDateProps } from "./timeOffsCalendar-types";

import { styles } from "./timeOffsCalendarHolder-styles";

const displayDate: React.FC<DisplayDateProps> = ({
  icon,
  dateInfo,
  header,
}) => {
  const { month, date, day } = dateInfo;

  return (
    <Stack sx={styles.displayDateContainer}>
      <Stack direction="row" alignItems="center">
        {icon}
        <Typography>{header}</Typography>
      </Stack>
      <Stack direction="column" sx={styles.displayDate}>
        <Typography color="white" variant="body2">
          {month}
        </Typography>
        <Typography color="white" sx={{ fontSize: "31px" }}>
          {date}
        </Typography>
        <Typography color="white">{day}</Typography>
      </Stack>
    </Stack>
  );
};

export default displayDate;
