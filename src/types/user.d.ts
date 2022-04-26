import { Celebration } from "./celebration";
import { Lead } from "./lead";
import { TimeOff } from "./timeoff";

export type User = {
  id: string;
  email: string;
  name: string;
  enabled: boolean;
  authority: AuthorityTypes;
  alcohol?: AlcoholTypes;
  phone?: string;
  discord?: string;
  birthday?: string;
  tshirtSize: TshirtSizes;
  leadId: string | null;
  lead: Lead | null;
  celebration: Celebration[];
  timeOffs: TimeOff[];
  createdAt: Date;
  updatedAt: Date;
  accessToken?: string;
  refreshToken?: string;
  timeOffRemainingDays: number;
};

export enum AuthorityTypes {
  Admin,
  User,
  Accounting,
  HR,
}

export enum AlcoholTypes {
  Whiskey,
  Vodka,
  Beer,
  Wine,
  Rum,
  Tequila,
  Absinthe,
  Gin,
  Other,
}

export enum TshirtSizes {
  XXS,
  XS,
  S,
  M,
  L,
  XL,
  XXL,
  XXXL,
}
