export const styles = {
  modal: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },

  leftRow: {
    flex: 1,
    mt: "20%",
    display: { xs: "none", md: "none", lg: "flex" },
  },
  rightRow: {
    flex: 1,
    mb: "20%",
    display: { xs: "none", md: "none", lg: "flex" },
  },

  logoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  image: { width: "70%", height: "auto", zIndex: 2 },
  overlay: {
    position: "fixed",
    background: "rgba(0, 0, 0, 0.2)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backdropFilter: "blur(10px)",
  },
};
