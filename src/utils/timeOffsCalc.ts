import Holidays from "date-holidays";
const hd = new Holidays("BG");

export const calculateTimeOffDays = (startDate: Date, endDate: Date) => {
  const fromDate = new Date(startDate);
  const toDate = new Date(endDate);
  const timeOffDaysInfo = getBusinessDatesCount(fromDate, toDate);

  async function getBusinessDatesCount(fromDate: Date, toDate: Date) {
    let count = 0;
    const timeOffDays: Set<string> = new Set();
    const curDate = fromDate;

    const allHolidays = hd.getHolidays("BG");

    while (curDate <= toDate) {
      const dayOfWeek = curDate.getDay();

      const formattedDate = `${
        curDate.getMonth() + 1
      }/${curDate.getDate()}/${curDate.getFullYear()}`;

      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        timeOffDays.add(formattedDate);
        count++;
      }
      curDate.setDate(curDate.getDate() + 1);
    }

    allHolidays
      .filter((holiday) => {
        const dayOfWeek =
          holiday.start.getDay() - 1 < 0 ? 6 : holiday.start.getDay() - 1;

        const isBusinessDay = dayOfWeek !== 0 && dayOfWeek !== 6;
        if (isBusinessDay) {
          return (
            holiday.name === "Christmas Day" ||
            holiday.name === "Second day of Christmas" ||
            holiday.name === "Easter Sunday"
          );
        }
      })
      .map((holiday) => {
        return `${
          holiday.start.getMonth() + 1
        }/${holiday.start.getDate()}/${holiday.start.getFullYear()}`;
      })
      .forEach((holiday) => {
        timeOffDays.forEach((day) => {
          if (day === holiday) {
            timeOffDays.delete(day);
            count -= 1;
          }
        });
      });

    count = count < 0 ? 0 : count;
    return count;
  }
  return timeOffDaysInfo;
};
