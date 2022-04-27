// * Types
import { CSSObject } from "@mui/material/styles";
import { TimeOff } from "types/timeoff";

export type TimeOffsGridProps = {
  timeoffs: TimeOff[];
  isLoading: boolean;
  styles: {
    grid: CSSObject;
    cellStyled: CSSObject;
    actions: CSSObject;
    avatar: CSSObject;
  };
  isPendingSectionEmpty?: boolean;
  gridType?: string;
  displayGrid?: string;
};
