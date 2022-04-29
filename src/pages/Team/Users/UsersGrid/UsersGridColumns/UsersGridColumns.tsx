import React from "react";
import { GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import ProfileInfo from "../../../../../components/ProfileInfo/ProfileInfo";
import { styles } from "../usersGrid-styles";

const renderCell = (values: GridRenderCellParams) => {
  let color: string;
  let background: string;
  let width: string;

  if (values.field === "email") {
    color = "primary.main";
    width = "180px";
  } else if (values.field === "birthday" || values.field === "startingDate") {
    color = "primary.main";
    background = "rgba(247, 245, 250, 1)";
    width = "100px";
  } else {
    color = "primary.main";
    width = "100px";
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
  return <ProfileInfo name={values.value} />;
};

const renderLead = (values: GridRenderCellParams) => {
  if (values.row.lead) {
    return <ProfileInfo name={values.row.lead?.leadInfo.name} />;
  }
};

const columns: GridColumns = [
  {
    field: "name",
    headerName: "Name",
    sortable: true,
    renderCell: renderUser,
    width: 200,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 220,
    renderCell,
    sortable: true,
    flex: 1,
  },
  {
    field: "leadInfo",
    headerName: "Lead",
    type: "string",
    width: 220,
    renderCell: renderLead,
    sortable: true,
    flex: 1,
  },
  {
    field: "timeOffRemainingDays",
    headerName: "Time Offs",
    type: "number",
    width: 150,
    renderCell,
    sortable: true,
    flex: 1,
  },
  {
    field: "birthday",
    headerName: "Date of Birth",
    type: "string",
    width: 200,
    renderCell,
    sortable: true,
    flex: 1,
  },
  {
    field: "startingDate",
    headerName: "Starting Date",
    type: "string",
    renderCell,
    width: 150,
    sortable: true,
    flex: 1,
  },
];

export default columns;
