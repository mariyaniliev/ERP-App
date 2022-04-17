import { THEME_COLORS } from "../../theme/theme-constants";

export const dropdownStyles = {
  ".MuiInputLabel-root": {},
  ".MuiOutlinedInput-root": {
    height: "32px",
    borderRadius: "16px",
    border: "none !important",
    background: THEME_COLORS.light,
    "&:focused": {
      color: THEME_COLORS.purple,
    },
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  " .MuiTypography-body1": {
    "&:hover": {
      color: THEME_COLORS.purple,
      background: "none",
    },
  },
};
