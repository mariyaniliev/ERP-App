import { TimeOff } from "types/timeoff";

// Tansforms time offs incoming data to match the datagrid columns requirements
export const transformData = (data: TimeOff[]) => {
  if (!data) return;

  const newData = data.map((item: TimeOff) => {
    item.startDate = String(item.startDate).slice(0, 10);
    item.endDate = String(item.endDate).slice(0, 10);
    item.name = item.user.name;
    return item;
  });
  return newData;
};
