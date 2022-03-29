import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { THEME_COLORS } from "../../theme/theme-constants";

const drawerWidth = 240;
const drawerHeight = "calc(100vh - 64px)";

const openedMixin = (theme: Theme): CSSObject => ({
  justifyContent: "space-between",
  position: "relative",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  justifyContent: "space-between",
  position: "relative",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  height: drawerHeight,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  boxShadow: `0px 10px 8px ${THEME_COLORS.grey05}`,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const styles = {
  ListItemButton: {
    minHeight: 48,
    px: 2.5,
    color: "gray",
    "&:focus": {
      background: "rgba(0, 0, 0, 0.04)",
    },
  },
  ListItemIcon: {
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
  },
  sidebarLinkActive: {
    color: THEME_COLORS.purple,
  },
};
