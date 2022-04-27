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

  leftRow: { flex: 1, mt: 30, display: { xs: "none", md: "flex" } },
  rightRow: { flex: 1, mb: 10, display: { xs: "none", md: "flex" } },

  logoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  image: { width: "70%", height: "auto" },
};
