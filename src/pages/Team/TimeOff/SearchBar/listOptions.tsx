import { Typography } from "@mui/material";
import React from "react";
export const approvedJSX = <Typography>&#10003;</Typography>;
export const deniedJSX = <Typography>&#10006;</Typography>;
export const typeOptions = [
  {
    label: "Paid",
    value: "paid",
  },
  {
    label: "Unpaid",
    value: "unpaid",
  },
  {
    label: "Sick leave",
    value: "sickLeave",
  },
];
export const periodOptions = [
  {
    label: "Future",
    value: "future",
  },
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Past",
    value: "past",
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
    value: "true",
    label: "",
    renderValue: () => approvedJSX,
  },
  {
    value: "false",
    label: "",
    renderValue: () => deniedJSX,
  },
];
