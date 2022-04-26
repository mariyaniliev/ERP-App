import React, { useState, useEffect } from "react";
import { DateRange, Range } from "react-date-range";

import { Box } from "../../../../design-system";

import { calculateTimeOffDays } from "../../../../utils/timeOffsCalc";

import { THEME_COLORS } from "../../../../theme/theme-constants";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./timeOffsCalendar-styles.scss";

const tomorrowDay = new Date(new Date().setDate(new Date().getDate() + 1));

const initialRange = {
  selection: {
    startDate: tomorrowDay,
    endDate: tomorrowDay,
    key: "selection",
  },
};

const TimeOff: React.FC = () => {
  const [range, setRange] = useState(initialRange);
  const [timeOffDays, setTimeOffDays] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  const selectDay = (newRange: Range) => {
    setRange({ ...range, ...newRange });
  };

  useEffect(() => {
    const calculateDays = async () => {
      const startDate = range.selection.startDate;
      const endDate = range.selection.endDate;
      const today = new Date();

      if (today > startDate) {
        setErrorMessage("You cant book days in past");
        return;
      }

      setErrorMessage(null);
      const count = await calculateTimeOffDays(startDate, endDate);
      setTimeOffDays(count);
    };
    calculateDays();
  }, [range]);

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
