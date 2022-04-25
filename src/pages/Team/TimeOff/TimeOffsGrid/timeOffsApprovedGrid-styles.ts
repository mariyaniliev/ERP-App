import { THEME_COLORS, THEME_SHADOW } from "../../../../theme/theme-constants";

export const timeOffsApprovedGridStyles = {
  grid: {
    fontSize: "14px",
    color: THEME_COLORS.grey03,
    width: "100%",
    borderRadius: "30px",
    boxShadow: THEME_SHADOW,
    marginTop: "25px",
    pr: "15px",

    "& .MuiDataGrid-columnHeaderTitleContainer,.MuiDataGrid-cell": {
      border: "none",
      p: 0,
      justifyContent: "start",
    },
    "& .MuiDataGrid-columnHeaders": {
      display: "none",
    },

    "& .MuiDataGrid-row": {
      marginLeft: "20px",
      width: "calc(100% - 45px)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        borderRadius: "30px",
        height: "56px",
        boxShadow: "0px 3px 6px #00000029",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
      },
    },

    ".MuiDataGrid-virtualScrollerRenderZone": {
      "& >:not(:last-child)": {
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
      },
    },
    ".MuiDataGrid-virtualScroller": {
      overflow: "hidden",
      marginTop: "17px !important",
    },

    ".MuiDataGrid-footerContainer": {
      minHeight: "0",
      border: "none",
    },

    "& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus": {
      outline: "none",
    },
  },
  cellStyled: {
    borderRadius: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "86px",
    height: "33px",
  },
  actions: {
    borderRadius: "16px",
    height: "33px",
    alignItems: "center",
    display: "flex",

    mr: "42px",
    ".MuiIconButton-root ": {
      color: THEME_COLORS.grey03,
      width: "40px",
      "&:hover": {
        borderRadius: "16px",
        background: "#dfc9f5",
        color: THEME_COLORS.purple,
      },
    },
  },
  avatar: {
    width: "30px",
    height: "30px",
    background: THEME_COLORS.primaryGradient,
  },
} as const;
