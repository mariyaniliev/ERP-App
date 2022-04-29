import React from "react";

import { GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { Typography, Avatar, Stack } from "../../../../../design-system/index";
import PersonIcon from "@mui/icons-material/Person";

import { timeOffsApprovedGridStyles } from "../TimeOffsApprovedGrid/timeOffsApprovedGrid-styles";

const renderCell = (values: GridRenderCellParams) => {
  let color: string;
  let background: string;

  // * Here we define the color and the background for the field based on the time off type
  if (values.field !== "type") {
    color = "primary.main";
    background = "rgba(247, 245, 250, 1)";
  } else {
    const type = values.row.type;
    switch (type) {
      case "paid":
        color = "#57D9A9";
        background = "rgba(87, 217, 169, 0.2)";
        break;
      case "unpaid":
        color = "#61C3D9";
        background = "rgba(97, 195, 217, 0.2)";
        break;
      case "sick":
        color = "#D9B04C";
        background = "rgba(217, 176, 76, 0.2)";
        break;
      default:
    }
  }
  return (
    <Typography
      sx={{
        ...timeOffsApprovedGridStyles.cellStyled,
        background,
        color,
      }}
    >
      {values.value}
    </Typography>
  );
};

const renderUser = (values: GridRenderCellParams) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" marginLeft="20px">
      <Avatar component={PersonIcon} sx={timeOffsApprovedGridStyles.avatar} />
      <Typography>{values.value}</Typography>
    </Stack>
  );
};

export const columns: GridColumns = [
  {
    field: "name",
    headerName: "User",
    sortable: true,
    width: 150,
    renderCell: renderUser,
    flex: 1,
  },
  {
    field: "startDate",
    headerName: "Start",
    type: "string",
    width: 150,
    sortable: true,
    renderCell,
    flex: 1,
  },
  {
    field: "endDate",
    headerName: "End",
    type: "string",
    width: 150,
    sortable: true,
    renderCell,
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    type: "number",
    width: 150,
    sortable: true,
    renderCell,
    flex: 1,
  },
  {
    headerName: "",
    field: "actions",
    width: 150,
    sortable: true,
    flex: 1,
  },
];
