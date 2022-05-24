import { TimeOff } from "../../../../types/timeoff";

export type DisplayDateProps = {
  icon: React.ReactNode;
  dateInfo: {
    month: string;
    date: number;
    day: string;
  };
  header: string;
};

export type CalendarProps = {
  info?: TimeOff;
  handleClose?: () => void;
};
