import React from "react";
import { GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { styles } from "./timeOffsGrid-styles";
import {
  Typography,
  Avatar,
  Stack,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { THEME_COLORS } from "../../../../theme/theme-constants";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CheckIcon from "@mui/icons-material/Check";
import ListAltIcon from "@mui/icons-material/ListAlt";

export const renderActionsCell = (
  params: GridRenderCellParams,
  rowId: string
) => {
  if (rowId === params.id) {
    return (
      <Box sx={styles.actions}>
        <Tooltip title="Approve" placement="bottom">
          <IconButton size="small">
            <CheckIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Details" placement="bottom">
          <IconButton size="small">
            <ListAltIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="bottom">
          <IconButton size="small">
            <ModeEditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" placement="bottom">
          <IconButton size="small">
            <DeleteSweepIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    );
  }
  return null;
};

export const renderCell = (values: GridRenderCellParams) => {
  let color: string;
  let background: string;

  if (values.field !== "type") {
    color = "primary.main";
    background = "rgba(247, 245, 250, 1)";
  } else {
    console.log(values.value);
    color = "#57D9A9";
    background = "rgba(87, 217, 169, 0.2)";
  }
  return (
    <Typography
      sx={{
        ...styles.cellStyled,
        background,
        color,
      }}
    >
      {values.value}
    </Typography>
  );
};

export const renderUser = (values: GridRenderCellParams) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" marginLeft="20px">
      <Avatar
        component={PersonIcon}
        sx={{
          width: "30px",
          height: "30px",
          background: THEME_COLORS.primaryGradient,
        }}
      />

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
