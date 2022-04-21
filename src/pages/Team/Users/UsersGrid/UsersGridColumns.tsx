import React from "react";
import { GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { Typography, Avatar, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { THEME_COLORS } from "../../../../theme/theme-constants";
import { styles } from "./usersGrid-styles";

const avatarStyles = {
  width: "30px",
  height: "30px",
  background: THEME_COLORS.primaryGradient,
} as const;

const renderCell = (values: GridRenderCellParams) => {
  let color: string;
  let background: string;
  let width: string;

  if (values.field === "email") {
    color = "primary.main";
    background = "rgba(247, 245, 250, 1)";
    width = "200px";
  } else {
    color = "primary.main";
    background = "rgba(247, 245, 250, 1)";
  }
  return (
    <Typography
      sx={{
        ...styles.cellStyled,
        background,
        color,
        width,
      }}
    >
      {values.value}
    </Typography>
  );
};

const renderUser = (values: GridRenderCellParams) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" marginLeft="20px">
      <Avatar component={PersonIcon} sx={avatarStyles} />
      <Typography>{values.value}</Typography>
    </Stack>
  );
};

const columns: GridColumns = [
  {
    field: "name",
    headerName: "Name",
    sortable: true,
    renderCell: renderUser,
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
    renderCell,
    sortable: true,
  },
  {
    field: "lead",
    headerName: "Lead",
    type: "string",
    width: 200,
    renderCell,
    sortable: true,
  },
  {
    field: "timeOffRemainingDays",
    headerName: "Time Offs",
    type: "number",
    width: 200,
    renderCell,
    sortable: true,
  },
  {
    field: "birthday",
    birthday: "Date of Birth",
    type: "string",
    width: 200,
    renderCell,
    sortable: true,
  },
  {
    field: "startingDate",
    headerName: "Starting Date",
    type: "string",
    width: 150,
    sortable: true,
  },
];

export default columns;
