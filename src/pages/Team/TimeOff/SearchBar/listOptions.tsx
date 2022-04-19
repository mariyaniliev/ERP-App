/* import { Typography } from "@mui/material";
import React from "react";
export const approvedJSX = <Typography>&#10003;</Typography>;
export const deniedJSX = <Typography>&#10006;</Typography>; */
export const typeOptions = [
  {
    label: "Paid",
    value: "Paid",
  },
  {
    label: "Unpaid",
    value: "Unpaid",
  },
  {
    label: "Sick leave",
    value: "Sick leave",
  },
];
export const periodOptions = [
  {
    label: "Future",
    value: "Future",
  },
  {
    label: "Today",
    value: "Today",
  },
  {
    label: "Past",
    value: "Past",
  },
];
export const rowsOptions = [
  {
    label: "5",
    value: "5",
  },
  {
    label: "10",
    value: "10",
  },
  {
    label: "20",
    value: "20",
  },
];
export const approvedOptions = [
  {
    value: "True",
    label: "True",
    /*  renderValue: () => approvedJSX, */
  },
  {
    value: "False",
    label: "False",
    /* renderValue: () => deniedJSX, */
  },
];
