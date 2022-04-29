import { THEME_COLORS } from "../../../theme/theme-constants";

export const dropdownStyles = {
  display: { xs: "none", md: "flex" },
  ".MuiOutlinedInput-root": {
    height: "48px",
    borderRadius: "16px",
    border: "none !important",
    boxShadow: `0px 3px 6px ${THEME_COLORS.grey05}`,
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".MuiSelect-icon": {
    color: THEME_COLORS.grey04,
  },

  " .MuiTypography-body1": {
    color: THEME_COLORS.grey04,
    fontSize: "14px",
    "&:hover": {
      color: THEME_COLORS.purple,
      background: "none",
    },
  },
};
