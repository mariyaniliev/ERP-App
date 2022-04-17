import { THEME_SHADOW } from "../../../../theme/theme-constants";

export const styles = {
  searchBar: {
    width: "100%",
    height: "65px",
    borderRadius: "32px",
    boxShadow: THEME_SHADOW,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
  },
} as const;
