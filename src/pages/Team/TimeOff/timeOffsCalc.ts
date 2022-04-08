import holidays from "./holidays.json";

export const timeOffsCalc = (startDate: Date, endDate: Date) => {
  const year = `${new Date().getFullYear()}` as keyof typeof holidays;
  const hd = holidays[year];
  let count = 0;
  let filteredDays: string[] = [];
  const curDate = new Date(startDate);
  while (curDate <= endDate) {
    const dayOfWeek = curDate.getDay();
    filteredDays = hd.filter(
      (e) => new Date(e).getTime() === curDate.getTime()
    );
    if (dayOfWeek !== 0 && dayOfWeek !== 6)
      count = count + 1 - filteredDays.length;
    curDate.setDate(curDate.getDate() + 1);
  }
  return count;
};
