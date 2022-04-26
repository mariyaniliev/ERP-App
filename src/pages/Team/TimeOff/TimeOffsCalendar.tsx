import React, { useState } from "react";

import { DateRange, Range } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Box } from "@mui/material";

import "./timeOffsCalendar-styles.scss";

const initialRange = {
  selection: {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
};

const TimeOff: React.FC = () => {
  const [range, setRange] = useState(initialRange);

  const color = "rgba(127, 83, 172, 0.5)";

  const selectDay = (newRange: Range) => {
    setRange({ ...range, ...newRange });
  };
  console.log(range.selection);

  return (
    <Box sx={{ zIndex: 2 }}>
      <DateRange
        onChange={selectDay}
        ranges={[range.selection]}
        months={1}
        direction="horizontal"
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        showMonthArrow={true}
        rangeColors={[color]}
        className="timeOffCalendar"
      />
    </Box>
  );
};

export default TimeOff;
