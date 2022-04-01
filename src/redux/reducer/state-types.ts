import { AxiosError } from "axios";

export type SubpageState = {
  subpage: number;
};

export type DrawerHeaderState = {
  open: boolean;
};
//TODO define user types
export type userState = {
  user: { accessToken: string; refreshToken: string };
  isLoading: boolean;
  error: AxiosError | null;
};
