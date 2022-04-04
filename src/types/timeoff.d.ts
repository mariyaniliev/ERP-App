import { User } from "./user";

export type TimeOff = {
  id: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt?: Date;
  approved: boolean;
  uploaded: boolean;
  type: TimeOffTypes;
  user: User;
};

export enum TimeOffTypes {
  paid,
  unpaid,
  sick,
  motherhood,
  paternity,
}
