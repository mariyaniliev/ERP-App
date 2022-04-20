import { THEME_COLORS } from "../../../theme/theme-constants";
export const styles = {
  container: {
    px: "25px",
    pb: 3,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  innerContainer: {
    width: { sm: "600px", md: "800px", lg: "1000px", xl: "1236px" },
  },

  submitTimeOffButtonHolder: {
    width: "100%",
    height: "57px",
    justifyContent: "end",
    display: "flex",
    alignItems: "start",
  },
  submitTimeOff: {
    width: "188px",
    mr: 5,
    fontSize: "14px",
    color: THEME_COLORS.white,
  },
} as const;
