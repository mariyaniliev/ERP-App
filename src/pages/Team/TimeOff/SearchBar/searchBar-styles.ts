import { THEME_COLORS, THEME_SHADOW } from "../../../../theme/theme-constants";

export const styles = {
  searchBar: {
    width: "100%",
    height: "65px",
    borderRadius: "32px",
    boxShadow: THEME_SHADOW,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "23px",
  },
  pagination: {
    ".MuiPaginationItem-root": {
      transition: "all 0.3s ease-in-out",
      fontSize: "14px",
      color: "#707070",
      minWidth: "8px",
      height: "19px",
      margin: 0,
    },
    ".MuiPaginationItem-previousNext": {
      color: "#C5C5C5",
    },
    ".MuiSvgIcon-root": {
      margin: "0 -10px",
      fontSize: "25px",
    },
    ".MuiPaginationItem-previousNext:hover": {
      color: "primary.main",
      background: "none",
      transform: "scale(1.5)",
    },

    ul: {
      "	.Mui-selected": {
        color: "primary.main",
      },
    },
  },
  rowsTitle: {
    color: THEME_COLORS.grey02,
    display: { xs: "none", md: "none", lg: "flex" },
  },
} as const;
