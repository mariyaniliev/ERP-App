import React, { useState, useEffect } from "react";
import { DateRange, Range } from "react-date-range";

import {
  Box,
  Stack,
  Typography,
  FormDropdown,
} from "../../../../design-system";
import { SelectChangeEvent } from "@mui/material";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";

import { calculateTimeOffDays } from "../../../../utils/timeOffsCalc";
import { typeOptions } from "../SearchBar/dropdownOptions";

import DisplayDate from "./DisplayDate";
import CustomSubmitButton from "../../../../components/CustomButton/CustomSubmitButton";
import Input from "../../../../design-system/Input/Input";

import { THEME_COLORS } from "../../../../theme/theme-constants";
import { styles } from "./timeOffsCalendarHolder-styles";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./timeOffsCalendar-styles.scss";

const LAST_DAY_OF_MONTH_MIN = 28;

const tomorrowDay = new Date(new Date().setDate(new Date().getDate() + 4));

const initialRange = {
  selection: {
    startDate: tomorrowDay,
    endDate: tomorrowDay,
    key: "selection",
  },
};

const TimeOffsCalendar: React.FC = () => {
  const [timeOffType, setTimeOffType] = useState("");
  const [timeOffDays, setTimeOffDays] = useState(0);
  const [selectedDays, setSelectedDays] = useState(initialRange);
  const [errorMessage, setErrorMessage] = useState(null);
  const [lastSelectedDate, setLastSelectedDate] = useState<number | null>(
    tomorrowDay.getDate()
  );

  const lastDate = selectedDays.selection.endDate.getDate();

  useEffect(() => {
    const calculateDays = async () => {
      const { startDate, endDate } = selectedDays.selection;
      const count = await calculateTimeOffDays(startDate, endDate);
      setTimeOffDays(count);
    };

    calculateDays();

    if (lastSelectedDate >= LAST_DAY_OF_MONTH_MIN) {
      setLastSelectedDate(null);
      return;
    }

    if (lastSelectedDate === null) {
      return;
    }

    setLastSelectedDate(lastDate);
  }, [selectedDays]);

  const handleSelectDays = (newRange: Range) => {
    setSelectedDays({ ...selectedDays, ...newRange });
  };

  const handleChangeType = async (
    event: SelectChangeEvent<HTMLInputElement>
  ) => {
    const type = event.target.value as string;
    setTimeOffType(type);
  };

  const getDateInfo = (dateType: "endDate" | "startDate") => {
    return {
      month: String(selectedDays.selection[dateType]).slice(4, 7),
      date: selectedDays.selection[dateType].getDate(),
      day: String(selectedDays.selection[dateType]).slice(0, 3).toUpperCase(),
    };
  };

  const shownMonthsCount =
    lastSelectedDate === null || lastSelectedDate >= LAST_DAY_OF_MONTH_MIN
      ? 2
      : 1;

  return (
    <Box sx={styles.container}>
      <Stack gap={4}>
        <Stack direction="column" gap={1}>
          <Stack direction="row" gap={7}>
            <Stack sx={{ flex: 1 }} gap={1}>
              <Stack direction="row" sx={styles.typeSelect} gap={1}>
                <PersonOutlineOutlinedIcon color="primary" />
                <Typography variant="subtitle1">Full Name</Typography>
              </Stack>
              <Input placeholder="Ivan Kraev" disabled={true} />
            </Stack>
            <Stack sx={{ flex: 1 }} gap={1}>
              <Stack direction="row" sx={styles.typeSelect} gap={1}>
                <BarChartIcon color="primary" />
                <Typography variant="subtitle1">Type</Typography>
              </Stack>
              <FormDropdown
                placeholder={timeOffType}
                width={"auto"}
                list={typeOptions}
                noDefault={true}
                onChange={handleChangeType}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" gap={7}>
          <DateRange
            minDate={tomorrowDay}
            onChange={handleSelectDays}
            ranges={[selectedDays.selection]}
            months={shownMonthsCount}
            direction="horizontal"
            showDateDisplay={false}
            showMonthAndYearPickers={false}
            showMonthArrow={true}
            rangeColors={[THEME_COLORS.purple03]}
            className="timeOffCalendar"
          />
          <Stack direction="column" gap={1}>
            <DisplayDate
              icon={<SubdirectoryArrowRightIcon color="primary" />}
              dateInfo={getDateInfo("startDate")}
              header="From"
            />
            <DisplayDate
              icon={<SubdirectoryArrowLeftIcon color="primary" />}
              dateInfo={getDateInfo("endDate")}
              header="To"
            />
          </Stack>
        </Stack>
        <Box sx={styles.submitButtonHolder}>
          <CustomSubmitButton
            label={`Apply for ${timeOffDays} days leave`}
            styles={styles.submitButton}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default TimeOffsCalendar;
