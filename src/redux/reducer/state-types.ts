import { AxiosError } from "axios";
import { User } from "../../types/user";

export type SubpageState = {
  subpage: number;
};

export type DrawerHeaderState = {
  open: boolean;
};
//TODO define user types
export type userState = {
  user: User;
  isLoading: boolean;
  error: AxiosError | null;
};
