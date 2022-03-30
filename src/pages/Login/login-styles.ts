import { THEME_COLORS } from "../../theme/theme-constants";

export const styles = {
  contentCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "4rem 0px",
    width: "25rem",
    height: "20rem",
    background: `${THEME_COLORS.light}`,
    boxShadow: `0px 0px 4px 4px ${THEME_COLORS.grey05}`,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "10rem",
    height: "6.8rem",
  },
};
