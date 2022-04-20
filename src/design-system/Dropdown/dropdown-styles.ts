import { THEME_COLORS } from "../../theme/theme-constants";

export const dropdownStyles = {
  display: { xs: "none", md: "flex" },
  ".MuiOutlinedInput-root": {
    height: "32px",
    borderRadius: "16px",
    border: "none !important",
    background: THEME_COLORS.light,
    fontSize: "14px",
    "&:hover": {
      color: THEME_COLORS.purple,
    },
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".MuiSelect-icon": {
    color: THEME_COLORS.grey04,
  },
  " .MuiTypography-body1": {
    color: THEME_COLORS.grey04,
    "&:hover": {
      color: THEME_COLORS.purple,
      background: "none",
    },
  },
  ".Mui-focused": {
    color: `${THEME_COLORS.purple} !important`,
  },
};
