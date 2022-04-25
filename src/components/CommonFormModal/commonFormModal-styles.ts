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
  overlay: {
    position: "fixed",
    background: "rgba(0, 0, 0, 0.7)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
};
