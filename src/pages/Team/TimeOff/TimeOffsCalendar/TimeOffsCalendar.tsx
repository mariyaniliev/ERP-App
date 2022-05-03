import React, { useState, useEffect, useCallback } from "react";
import { DateRange, Range } from "react-date-range";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { SelectChangeEvent } from "@mui/material";
import {
  Box,
  Stack,
  Typography,
  FormDropdown,
  Chip,
  Tooltip,
} from "../../../../design-system";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteIcon from "@mui/icons-material/Delete";

import { typeOptions } from "../SearchBar/dropdownOptions";
import { useApiClient } from "../../../../utils/client";
import { storage } from "../../../../../firebase";
import queryClient from "../../../../utils/queryCLient";
import api from "../../../../services/api-endpoints";

import { CalendarProps } from "./timeOffsCalendar-types";

import CustomSubmitButton from "../../../../components/CustomButton/CustomSubmitButton";
import Input from "../../../../design-system/Input/Input";
import UploadProgressCircle from "./UploadProgressCircle";
import DisplayDate from "./DisplayDate";

import { THEME_COLORS } from "../../../../theme/theme-constants";
import { styles } from "./timeOffsCalendarHolder-styles";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./timeOffsCalendar-styles.scss";

const LAST_DAY_OF_MONTH_MIN = 28;

const tomorrowDay = new Date(new Date().setDate(new Date().getDate() + 1));

const TimeOffsCalendar: React.FC<CalendarProps> = ({ info }) => {
  const initialRange = {
    selection: {
      startDate: info ? new Date(info.startDate) : tomorrowDay,
      endDate: info ? new Date(info.endDate) : tomorrowDay,
      key: "selection",
    },
  };

  const client = useApiClient();

  const controller = new AbortController();

  const initialType = info
    ? String(info.type).charAt(0).toUpperCase() + String(info.type).slice(1)
    : "";

  const [timeOffType, setTimeOffType] = useState(initialType);
  const [timeOffDays, setTimeOffDays] = useState(0);
  const [selectedDays, setSelectedDays] = useState(initialRange);
  const [isCalculateDayLoading, setIsCalculateDaysLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [file, setFile] = useState(null);
  const [documentUrl, setDocumentUrl] = useState<string | null>(
    info?.sourceUrl
  );
  const [uploadProgress, setUploadProgress] = useState<null | number>(null);
  const [lastSelectedDate, setLastSelectedDate] = useState<number | null>(
    tomorrowDay.getDate()
  );

  const lastDate = selectedDays.selection.endDate.getDate();

  useEffect(() => {
    const calculateDays = async () => {
      if (info?.uploaded) {
        return;
      }

      const { startDate, endDate } = selectedDays.selection;
      setIsCalculateDaysLoading(true);

      const from = `${startDate.getFullYear()}-${
        startDate.getMonth() + 1
      }-${startDate.getDate()}`;
      const to = `${endDate.getFullYear()}-${
        endDate.getMonth() + 1
      }-${endDate.getDate()}`;

      client
        .post(
          api.timeOffs.calculateDays,
          {
            startDate: from,
            endDate: to,
          },
          { signal: controller.signal }
        )
        .then((res) => {
          setTimeOffDays(res.data.count);
          setIsCalculateDaysLoading(false);
        });
    };

    calculateDays();

    if (lastSelectedDate >= LAST_DAY_OF_MONTH_MIN) {
      setLastSelectedDate(null);
      return;
    }

    if (lastSelectedDate !== null) {
      setLastSelectedDate(lastDate);
    }

    return () => {
      controller.abort();
    };
  }, [selectedDays]);

  const handleSelectDays = (newRange: Range) => {
    setSelectedDays({ ...selectedDays, ...newRange });
  };

  const handleChangeType = useCallback(
    (event: SelectChangeEvent<HTMLInputElement>) => {
      const type = event.target.value as string;
      setTimeOffType(type);
    },
    []
  );

  const handleUploadDocument = async () => {
    if (info?.sourceUrl) {
      const docRef = ref(storage, info.fileName);
      try {
        await deleteObject(docRef);
      } catch (e) {
        console.log(e);
      }
    }

    const fileName = `documents/${uuidv4()}-${file.name}`;
    const docRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(docRef, file);

    setUploadProgress(0);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        setFile(null);
        setUploadProgress(null);
        setErrorMessage(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (sourceUrl) => {
          setFile(null);
          setUploadProgress(null);
          setDocumentUrl(sourceUrl);
          await client.patch(api.timeOffs.updateTimeOff(info.id), {
            uploaded: true,
            sourceUrl,
            fileName,
          });
          queryClient.invalidateQueries(["timeoffs"]);
        });
      }
    );
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

  const buttonLabel = info
    ? `Update request for ${timeOffDays} days leave`
    : `Apply for ${timeOffDays} days leave`;

  const isFileUploading =
    typeof uploadProgress === "number" && uploadProgress < 100;

  const isSubmitButtonDisabled =
    timeOffDays === 0 ||
    isFileUploading ||
    info?.uploaded ||
    isCalculateDayLoading;

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
              <Input placeholder={info?.user.name} disabled={true} />
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
                isDisabled={info?.approved}
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
        <Stack gap={4}>
          {documentUrl ? (
            <Chip
              deleteIcon={
                <Tooltip title="Update document" placement="bottom">
                  <CachedIcon />
                </Tooltip>
              }
              onDelete={() => {
                setDocumentUrl(null);
              }}
              label="Document"
              onClick={() => {
                window.open(documentUrl);
              }}
            />
          ) : (
            <Box sx={styles.submitButtonsHolder}>
              {!info?.approved && (
                <CustomSubmitButton
                  label={buttonLabel}
                  styles={styles.submitButton}
                  flex={1}
                  loading={isCalculateDayLoading}
                  disabled={isSubmitButtonDisabled}
                />
              )}
              {info?.approved && (
                <label htmlFor="raised-button-file">
                  <input
                    style={{ display: "none" }}
                    id="raised-button-file"
                    type="file"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      e.target.value = "";
                    }}
                  />
                  <CustomSubmitButton
                    component="span"
                    label="Upload file"
                    disabled={isFileUploading}
                  />
                </label>
              )}
            </Box>
          )}
          {isFileUploading && (
            <UploadProgressCircle progress={uploadProgress} />
          )}
          {file && uploadProgress !== 100 && (
            <Chip
              disabled={isFileUploading}
              color="primary"
              label={`Submit ${file.name}`}
              onClick={handleUploadDocument}
              onDelete={() => {
                setFile(null);
              }}
              deleteIcon={<DeleteIcon />}
              variant="outlined"
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default TimeOffsCalendar;
