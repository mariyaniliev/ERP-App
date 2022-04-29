import { THEME_SHADOW } from "../../theme/theme-constants";

export const styles = {
  contentCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "relative",
    height: "3.5rem",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 50px",
    boxShadow: THEME_SHADOW,
    color: "gray",
  },
  sideBarButtonIcon: {
    height: "3.5rem",
    position: "absolute",
    left: "22px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
  logoWraper: {
    position: "absolute",
    left: "55px",
    width: "5rem",
    height: "3.5rem",
  },
  logo: {
    width: "4rem",
    height: "2rem",
  },
  userAvatarWraper: {
    width: "35px",
    height: "35px",
    borderRadius: "50px ",
  },
  userAvatar: {
    width: "25px",
    height: "25px",
  },
};
