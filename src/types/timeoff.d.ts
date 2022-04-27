import { User } from "./user";

export type TimeOff = {
  id: string;
  userId: string;
  startDate: Date | string;
  endDate: Date | string;
  createdAt: Date;
  updatedAt?: Date;
  approved: boolean;
  uploaded: boolean;
  type: TimeOffTypes;
  user: User;
  name?: string;
};

export enum TimeOffTypes {
  Paid,
  Unpaid,
  Sick,
  Motherhood,
  Paternity,
}
