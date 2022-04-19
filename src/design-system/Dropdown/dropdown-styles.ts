import { THEME_COLORS } from "../../theme/theme-constants";

export const dropdownStyles = {
  display: { xs: "none", md: "flex" },
  ".MuiOutlinedInput-root": {
    height: "32px",
    borderRadius: "16px",
    border: "none !important",
    background: THEME_COLORS.light,
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  ".MuiSelect-icon": {
    color: "#C5C5C5",
  },

  " .MuiTypography-body1": {
    color: "#C5C5C5",
    "&:hover": {
      color: THEME_COLORS.purple,
      background: "none",
    },
  },
};
