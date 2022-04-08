import React, { useState, useEffect } from "react";
import { DateRange, Range } from "react-date-range";
import { Box, Button } from "@mui/material";

import { CustomSelect } from "./UnstyledSelect/UnstyledSelect";
import { timeOffsCalc } from "./timeOffsCalc";

import { StyledOption } from "./UnstyledSelect/unstyledSelect-styles";
import { styles } from "./timeOff-styles";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const initialRange = {
  selection: {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
};

const TimeOff: React.FC = () => {
  const [range, setRange] = useState(initialRange);

  const [timeOffs, setTimeOffs] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState<string | null>("Paid");

  const color =
    value === "Paid" ? "green" : value === "Unpaid" ? "red" : "yellow";

  useEffect(() => {
    setTimeOffs(
      timeOffsCalc(range.selection.startDate, range.selection.endDate)
    );
  }, [range]);

  const handleSelect = (newRange: Range) => {
    setRange({ ...range, ...newRange });
  };

  const isCalendarShown = () => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.datePickerContainer}>
      <Box sx={styles.sideMenuContainer}>
        <Box>
          <CustomSelect value={value} onChange={setValue}>
            <StyledOption value={"Paid"}>Paid</StyledOption>
            <StyledOption value={"Unpaid"}>Unpaid</StyledOption>
            <StyledOption value={"Sick"}>Sick</StyledOption>
          </CustomSelect>
        </Box>
        <Box sx={styles.timeOffLegendContainer}>
          <Box sx={styles.timeOffLegend}>
            <h2>Paid</h2>
            <Box
              component="span"
              sx={{ ...styles.timeOffLegendSpan, background: "green" }}
            />{" "}
          </Box>
          <Box sx={styles.timeOffLegend}>
            <h2>Unpaid</h2>
            <Box
              component="span"
              sx={{ ...styles.timeOffLegendSpan, background: "red" }}
            />{" "}
          </Box>
          <Box sx={styles.timeOffLegend}>
            <h2>Sick</h2>
            <Box
              component="span"
              sx={{ ...styles.timeOffLegendSpan, background: "yellow" }}
            />{" "}
          </Box>
        </Box>
        <Button onClick={isCalendarShown}>Open Calendar</Button>
      </Box>
      <Box sx={styles.contentCenter}>
        {open && (
          <Box>
            <DateRange
              onChange={handleSelect}
              ranges={[range.selection]}
              months={1}
              direction="horizontal"
              editableDateInputs={true}
              showDateDisplay
              showMonthAndYearPickers
              showMonthArrow
              rangeColors={[color]}
            />
            <Box sx={styles.contentCenter}>
              <Box></Box>{" "}
              <Box>
                {" "}
                <Button>{timeOffs}</Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TimeOff;
