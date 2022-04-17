import {
  THEME_COLORS,
  THEME_SHADOW,
} from "./../../../../theme/theme-constants";

export const styles = {
  grid: {
    fontSize: "14px",
    color: THEME_COLORS.grey03,
    width: "100%",
    borderRadius: "30px",
    boxShadow: THEME_SHADOW,
    marginTop: "25px",

    "& .MuiDataGrid-columnHeaderTitleContainer,.MuiDataGrid-cell": {
      justifyContent: "start",
    },
    "& .MuiDataGrid-row": {
      width: "calc(100% - 80px)",
      margin: "0px 20px",

      "&:hover": {
        borderRadius: "30px",
        height: "56px",
        boxShadow: "0px 3px 6px #00000029",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
      },
    },

    "& .MuiDataGrid-columnHeaders": {
      paddingLeft: "30px",
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
};
