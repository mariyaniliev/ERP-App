import { User } from "./user";

export type Lead = {
  id: string;
  createdAt: Date;
  userId: string;
  leadInfo: User;
  team: User[];
};
