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

export type SearchUsers = {
  searchQuery: string;
  lead: string;
  timeOffs: string;
  birthday: string;
  startingDate: string;
  rows: number;
  pagination: string;
};

export type SearchState = {
  searchedQueries: {
    period: string;
    type: string;
    searchedName: string;
    limit: number;
    page: number;
    totalPages: number;
  };
};
