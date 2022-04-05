import React, { useState } from "react";
import {
  DateRange,
  DefinedRange,
  createStaticRanges,
  Range,
} from "react-date-range";
import { Box, Button } from "@mui/material";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { sideMenuOptions } from "./sideMenuOptions";
import { CustomSelect } from "./UnstyledSelect/UnstyledSelect";

import { StyledOption } from "./UnstyledSelect/unstyledSelect-styles";
import { styles } from "./timeOff-styles";

const initialState = {
  selection: {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
};

const TimeOff: React.FC = () => {
  const sideMenu = sideMenuOptions();
  const staticRanges = [...createStaticRanges(sideMenu)];

  const [state, setState] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState<string | null>("Paid");

  const color =
    value === "Paid" ? "green" : value === "Unpaid" ? "red" : "yellow";

  const handleSelect = (ranges: Range) => {
    setState({ ...state, ...ranges });
    !open && setOpen(true);
    console.log("state:", state, "ranges:", ranges, "rest:", {
      ...state,
      ...ranges,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box>
        <CustomSelect value={value} onChange={setValue}>
          <StyledOption value={"Paid"}>Paid</StyledOption>
          <StyledOption value={"Unpaid"}>Unpaid</StyledOption>
          <StyledOption value={"Sick"}>Sick</StyledOption>
        </CustomSelect>
      </Box>
      <Box sx={styles.contentCenter}>
        <Box>
          <DefinedRange
            staticRanges={staticRanges}
            inputRanges={[]}
            onChange={handleSelect}
            ranges={[state.selection]}
          />
        </Box>
        {open && (
          <Box>
            <DateRange
              onChange={handleSelect}
              ranges={[state.selection]}
              months={1}
              direction="horizontal"
              editableDateInputs={true}
              showDateDisplay
              showMonthAndYearPickers
              showMonthArrow
              rangeColors={[color]}
            />
            <Box sx={styles.contentCenter}>
              <Box>
                <Button onClick={handleClose}>Close</Button>
              </Box>{" "}
              <Box>
                {" "}
                <Button>
                  {state.selection.endDate.getDate() -
                    state.selection.startDate.getDate() +
                    1}
                </Button>
              </Box>
            </Box>
          </Box>
        )}
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
    </Box>
  );
};

export default TimeOff;
