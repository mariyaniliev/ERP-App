import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateRange, Range } from "react-date-range";
import { Box, Button } from "@mui/material";

import { CustomSelect } from "./UnstyledSelect/UnstyledSelect";
import { timeOffsCalc } from "./timeOffsCalc";

import { User } from "./user-type";

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
const today = new Date();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjOTgzOGU4LWI3MGItNDRkYS04ZjA0LTI0NzAyY2Y4YTg1NiIsImVtYWlsIjoibHl1dUBnbWFpbC5jb20iLCJuYW1lIjoiTHl1dSIsImVuYWJsZWQiOmZhbHNlLCJ0aW1lT2ZmUmVtYWluaW5nRGF5cyI6MTQ0LCJhdXRob3JpdHkiOiJVc2VyIiwiYWxjb2hvbCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMi0wNC0xMVQwODowMjowNy41NDJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNC0xMVQxMzo0Nzo1Ni4zOTVaIiwiYmlydGhkYXkiOm51bGwsInN0YXJ0aW5nRGF0ZSI6bnVsbCwicGhvbmUiOm51bGwsImRpc2NvcmQiOm51bGwsImxlYWRJZCI6bnVsbCwidHNoaXJ0U2l6ZSI6bnVsbCwic2Vzc2lvbiI6ImI0MjdlMzBhLWFjNWMtNDQ3Zi05MjAxLTUzYTBmNTEyYWNiNiIsImlhdCI6MTY0OTc1MzMxOSwiZXhwIjoxNjgxMjg5MzE5fQ.lyYu6VT4ChtXE-tGQpoHJBEZZAQ2ayp226R_IF7Lt9o";

const TimeOff: React.FC = () => {
  const [range, setRange] = useState(initialRange);

  const [timeOffs, setTimeOffs] = useState(0);

  const [user, setUser] = useState<User | null>(null);

  const [timeOffType, setTimeOffType] = React.useState<string | null>("paid");

  const isChosenDaysAllowed =
    (user && user.timeOffRemainingDays < timeOffs) ||
    (range.selection.startDate <= today && true);

  const color =
    timeOffType === "paid"
      ? "green"
      : timeOffType === "unpaid"
      ? "red"
      : "yellow";

  useEffect(() => {
    axios
      .get(
        "https://genericsoft-api.herokuapp.com/users/6c9838e8-b70b-44da-8f04-24702cf8a856",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setUser(res.data));
    setTimeOffs(
      timeOffsCalc(range.selection.startDate, range.selection.endDate)
    );
  }, [range]);

  const selectDay = (newRange: Range) => {
    setRange({ ...range, ...newRange });
  };

  const requestTimeOff = () => {
    const timeOffBody = {
      startDate: range.selection.startDate,
      endDate: range.selection.endDate,
      approved: true,
      uploaded: true,
      type: timeOffType,
    };
    axios
      .post(
        "https://genericsoft-api.herokuapp.com/timeoffs/6c9838e8-b70b-44da-8f04-24702cf8a856",
        timeOffBody,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() =>
        setUser(
          user && {
            ...user,
            timeOffRemainingDays: user.timeOffRemainingDays - timeOffs,
          }
        )
      )
      .then(() => setTimeOffs(0));
  };

  return (
    <Box sx={styles.datePickerContainer}>
      <Box sx={styles.sideMenuContainer}>
        <Box>{user && user.timeOffRemainingDays} ramaining time off days</Box>
        <Box>
          <CustomSelect value={timeOffType} onChange={setTimeOffType}>
            <StyledOption value={"paid"}>Paid</StyledOption>
            <StyledOption value={"unpaid"}>Unpaid</StyledOption>
            <StyledOption value={"sick"}>Sick</StyledOption>
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
      </Box>
      <Box sx={styles.contentCenter}>
        <Box>
          <DateRange
            onChange={selectDay}
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
            {" "}
            {timeOffs && !isChosenDaysAllowed ? (
              <Box>
                <Button onClick={requestTimeOff}>
                  {timeOffs} requested days
                </Button>
                <Button onClick={() => setTimeOffs(0)}>Cancel</Button>
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TimeOff;
