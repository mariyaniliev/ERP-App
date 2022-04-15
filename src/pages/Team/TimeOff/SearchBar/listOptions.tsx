import React from "react";
const approvedJSX = <span>&#10003;</span>;
const deniedJSX = <span>&#10006;</span>;
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
