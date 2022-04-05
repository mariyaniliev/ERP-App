import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfYear,
  endOfYear,
  addYears,
} from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const defineds = {
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),

  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),

  startOfLastSevenDay: startOfDay(addDays(new Date(), -7)),

  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),

  startOfLastThreeMonth: startOfMonth(addMonths(new Date(), -3)),
  endOfLastThreeMonth: endOfDay(new Date()),

  startOfLastSixMonth: startOfMonth(addMonths(new Date(), -6)),
  endOfLastSixMonth: endOfDay(new Date()),

  startOflastYear: startOfYear(addYears(new Date(), -1)),
  endOflastYear: endOfYear(addYears(new Date(), -1)),
};

export const sideMenuOptions = (): any => {
  const customDateObjects = [
    {
      label: "Today",
      range: () => ({
        startDate: defineds.startOfToday,
        endDate: defineds.endOfToday,
      }),
    },
    {
      label: "Yesterday",
      range: () => ({
        startDate: defineds.startOfYesterday,
        endDate: defineds.endOfYesterday,
      }),
    },
    {
      label: "Last 7 Days",
      range: () => ({
        startDate: defineds.startOfLastSevenDay,
        endDate: defineds.endOfToday,
      }),
    },
    {
      label: "Last Month",
      range: () => ({
        startDate: defineds.startOfLastMonth,
        endDate: defineds.endOfLastMonth,
      }),
    },
    {
      label: "Last 3 Months",
      range: () => ({
        startDate: defineds.startOfLastThreeMonth,
        endDate: defineds.endOfLastThreeMonth,
      }),
    },
    {
      label: "Last 6 Months",
      range: () => ({
        startDate: defineds.startOfLastSixMonth,
        endDate: defineds.endOfLastSixMonth,
      }),
    },
    {
      label: "Last Year",
      range: () => ({
        startDate: defineds.startOflastYear,
        endDate: defineds.endOflastYear,
      }),
    },
    {
      label: "Custom Date...",
      range: () => ({
        startDate: new Date(),
        endDate: new Date(),
      }),
    },
  ];

  return customDateObjects;
};
