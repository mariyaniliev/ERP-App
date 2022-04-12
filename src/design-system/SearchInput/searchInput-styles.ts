import { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { THEME_COLORS } from "../../theme/theme-constants";

const searchInputStyles = {
  searchBox: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: THEME_COLORS.grey04,
    [`& .${inputUnstyledClasses.root}`]: {
      ".MuiInput-input": {
        border: "none",
      },
      [`& .${inputUnstyledClasses.input}`]: {
        paddingLeft: 1,
        fontSize: "14px",
        color: THEME_COLORS.purple,
        outline: "none",
      },
    },
    "&:hover": {
      color: THEME_COLORS.purple,
      cursor: "pointer",
    },
  },
} as const;

export { searchInputStyles };
