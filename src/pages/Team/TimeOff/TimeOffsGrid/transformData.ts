import { TimeOff } from "types/timeoff";

export const transformData = (data: TimeOff[]) => {
  const newData = data.map((item: TimeOff) => {
    item.startDate = String(item.startDate).slice(0, 10);
    item.endDate = String(item.endDate).slice(0, 10);
    item.name = item.user.name;
    return item;
  });
  return newData;
};
