import { THEME_COLORS } from "../../../../theme/theme-constants";

export const styles = {
  container: {
    zIndex: 2,
    px: "180px",
    py: "90px",
    bgcolor: THEME_COLORS.white,
    borderRadius: "32px",
  },
  typeSelect: {
    alignItems: "center",
    ml: 3,
  },
  submitButtonsHolder: {
    justifyContent: "center",
    display: "flex",
    gap: 2,
  },
  submitButton: {
    width: "auto",
  },
  displayDateContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  displayDate: {
    px: 5.4,
    py: 1.3,
    width: "120px",
    height: "100px",
    bgcolor: "#61C3D9",
    borderRadius: "16px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pcContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pcInner: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
} as const;
