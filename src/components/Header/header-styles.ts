import { THEME_SHADOW } from "../../theme/theme-constants";

export const styles = {
  toolbar: {
    justifyContent: "space-between",
    pl: 2.6,
    pr: 5.6,
  },
  leftMenuHolder: {
    alignItems: "center",
    display: "flex",
  },
  rightMenuHolder: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  appBar: {
    background: "#FFFFFF",
    boxShadow: THEME_SHADOW,
    position: "sticky",
  },
  logo: {
    width: "4rem",
    height: "2rem",
  },
} as const;
