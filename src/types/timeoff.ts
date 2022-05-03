import { User } from "./user";

export type TimeOff = {
  id: string;
  userId: string;
  startDate: Date | string;
  endDate: Date | string;
  createdAt: Date;
  updatedAt?: Date;
  roles: AuthorityTypes[];
  approved: boolean;
  uploaded: boolean;
  type: TimeOffTypes;
  user: User;
  name?: string;
  sourceUrl: string | null;
  fileName?: string;
};

export type TimeOffInput = {
  startDate: Date;
  endDate: Date;
  type: TimeOffTypes;
};

export enum TimeOffTypes {
  Paid = "paid",
  Unpaid = "unpaid",
  "Sick Leave" = "sick",
}

export enum AuthorityTypes {
  Admin,
  User,
  Accounting,
  HR,
}
