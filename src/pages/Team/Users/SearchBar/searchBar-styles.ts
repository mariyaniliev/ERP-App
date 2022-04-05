import { THEME_COLORS } from "../../../../theme/theme-constants";

export const styles = {
  searchBar: {
    width: "100%",
    height: "85px",
    borderRadius: "30px",
    boxShadow: `0px 0px 8px ${THEME_COLORS.grey05}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
  },
} as const;
