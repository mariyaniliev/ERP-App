import holidays from "./holidays.json";

export const weekendsCalc = (startDate: Date, endDate: Date) => {
  let count = 0;
  let weekends = 0;
  let curDate = startDate.getDate();
  const startDay = startDate.getDay();
  const endDay = endDate.getDay();

  if (startDay === 0) {
    weekends = 1;
  } else if (startDay === 6) {
    weekends = 2;
  }

  if (endDay === 6) {
    weekends = weekends + 1;
  } else if (endDay === 0) {
    weekends = weekends + 2;
  }

  while (curDate <= endDate.getDate()) {
    count++;
    curDate++;
  }

  return count - weekends;
};

export const timeOffsCalc = (startDate: Date, endDate: Date) => {
  const hd = holidays[2022];
  const curDay = new Date(startDate);
};
