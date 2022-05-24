import { User } from "./user";

export type Celebration = {
  id: string;
  occasion: OccasionTypes;
  startDate: Date;
  createdAt: Date;
  updatedAt?: Date;
  enabled: boolean;
  userId: string;
  user: User;
};

export enum OccasionTypes {
  Birthday,
  Nameday,
  Other,
}
