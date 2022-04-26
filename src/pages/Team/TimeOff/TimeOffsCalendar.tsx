import React, { useState } from "react";
import { DateRange, Range } from "react-date-range";

// * Material Ui
import { Box } from "../../../design-system";

// * Styles
import { THEME_COLORS } from "../../../theme/theme-constants";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
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

  const selectDay = (newRange: Range) => {
    setRange({ ...range, ...newRange });
  };

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
        rangeColors={[THEME_COLORS.purple]}
        className="timeOffCalendar"
      />
    </Box>
  );
};

export default TimeOff;
