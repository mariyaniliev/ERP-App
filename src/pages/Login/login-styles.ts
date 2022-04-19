import { THEME_COLORS } from "../../theme/theme-constants";

export const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#FAFAFA",
    width: "100%",
    overflow: "hidden",
  },

  middleRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: 1.2,
  },
  leftRow: { flex: 1, mt: 30, display: { xs: "none", md: "flex" } },
  rightRow: { flex: 1, mb: 10, display: { xs: "none", md: "flex" } },

  logoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  emptySpaceToFill: {
    height: 60,
    flex: 1,
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "70%", md: "100%" },
    minHeight: "50%",
    overflow: "auto",
    borderRadius: "40px",
    boxShadow: `0px 3px 6px ${THEME_COLORS.grey05}`,
    backgroundColor: `${THEME_COLORS.white}`,
    alignItems: "center",
  },

  header: {
    fontSize: { xs: "1.5em", lg: "1.7em" },
    color: `${THEME_COLORS.purple}`,
    pt: 5,
    pb: 3,
  },
  icons: {
    position: "absolute",
    left: 18,
    fontSize: "18px",
    color: `${THEME_COLORS.purple}`,
  },
  image: { width: "70%", height: "auto" },
  helperText: {
    textAlign: "left",
    width: "65%",
    marginLeft: 5,
    marginBottom: 1,
    marginTop: 3,
  },
  signInAttributes: {
    display: "flex",
    flexDirection: "column",
    width: "65%",
    my: 3,
    height: "100px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  helpers: {
    width: "93%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    "& .MuiSvgIcon-root": { fontSize: 20 },
  },
  checkboxHolder: {
    display: "flex",
    alignItems: "center",
  },
};
