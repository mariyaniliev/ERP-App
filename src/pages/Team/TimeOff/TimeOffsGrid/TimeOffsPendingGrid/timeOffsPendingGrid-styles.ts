import {
  THEME_COLORS,
  THEME_SHADOW,
} from "../../../../../theme/theme-constants";
export const timeOffsPendingGridStyles = {
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
      color: THEME_COLORS.grey03,
      fontSize: "14px",
      p: 0,
      justifyContent: "start",
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
    ".MuiDataGrid-columnHeaders": {
      border: "none",
    },

    "& .MuiDataGrid-columnHeadersInner": {
      px: "20px",
      "& >:first-of-type": {
        px: "18px",
      },
    },

    ".MuiDataGrid-virtualScrollerRenderZone": {
      "& >:not(:last-child)": {
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
      },
    },
    ".MuiDataGrid-virtualScroller": {
      overflow: "hidden",
    },

    ".MuiDataGrid-footerContainer": {
      minHeight: "25px",
      border: "none",
    },

    "& .MuiDataGrid-iconSeparator": {
      display: "none",
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
    background: THEME_COLORS.purplelight,
    borderRadius: "16px",
    height: "33px",
    alignItems: "center",
    display: "flex",

    mr: "42px",
    ".MuiIconButton-root ": {
      borderRadius: "16px",
      color: THEME_COLORS.grey03,
      width: "45px",
      "&:hover": {
        background: THEME_COLORS.purple02,
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
