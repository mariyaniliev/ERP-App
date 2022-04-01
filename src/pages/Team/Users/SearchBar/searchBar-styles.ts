import { THEME_COLORS } from "../../../../theme/theme-constants";

export const styles = {
  searchBar: {
    width: "100%",
    height: "65px",
    borderRadius: "30px",
    boxShadow: `0px 0px 8px ${THEME_COLORS.grey05}`,
    display: "flex",
    alignItems: "center",
    padding: "15px",
  },
} as const;
