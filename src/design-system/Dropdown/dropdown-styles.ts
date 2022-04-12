import { THEME_COLORS } from "../../theme/theme-constants";

export const dropdownStyles = {
  ".MuiInputLabel-root": {},
  ".MuiOutlinedInput-root": {
    borderRadius: "20px",
    border: "none !important",
    background: THEME_COLORS.light,
    color: THEME_COLORS.grey03,
    fontSize: "14px",
    "&:hover": {
      color: THEME_COLORS.purple,
    },
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".Mui-focused": {
    color: `${THEME_COLORS.purple} !important`,
  },
};
