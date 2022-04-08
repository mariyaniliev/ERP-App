import { AxiosError } from "axios";
import { User } from "../../types/user";

export type SubpageState = {
  subpage: number;
};

export type DrawerHeaderState = {
  open: boolean;
};

export type userState = {
  isLoading: boolean;
  error: AxiosError | null;
  user: User | null;
};

export type UsersState = {
  users: User[];
};
