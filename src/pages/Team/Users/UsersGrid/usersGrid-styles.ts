import {
  THEME_COLORS,
  THEME_SHADOW,
} from "./../../../../theme/theme-constants";

export const styles = {
  grid: {
    fontSize: "14px",
    color: THEME_COLORS.grey03,
    width: "100%",
    height: "470px",
    borderRadius: "30px",
    boxShadow: THEME_SHADOW,
    marginTop: "25px",
    "& .MuiDataGrid-columnHeaderTitleContainer,.MuiDataGrid-cell": {
      justifyContent: "start",
      border: "none",
      color: THEME_COLORS.grey03,
      fontSize: "14px",
      p: 0,
    },
    "& .MuiDataGrid-row": {
      width: "calc(100% - 45px)",
      margin: "0px 20px",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        borderRadius: "30px",
        height: "56px",
        boxShadow: "0px 3px 6px #00000029",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
      },
    },
    "& .MuiDataGrid-columnHeaders": {
      paddingLeft: "20px",
      border: "none",
    },
    "& .MuiDataGrid-virtualScrollerRenderZone": {
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

    "& .MuiDataGrid-columnHeadersInner": {
      px: "20px",
      "& >:first-of-type": {
        px: "18px",
      },
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
};
