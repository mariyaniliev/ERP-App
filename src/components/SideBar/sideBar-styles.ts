import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { THEME_COLORS } from "../../theme/theme-constants";

const drawerWidth = 225;

const openedMixin = (theme: Theme): CSSObject => ({
  justifyContent: "space-between",
  gap: `calc(${theme.spacing(30)} + 1px)`,
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
  gap: 250,
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
  minHeight: 654,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
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
    justifyContent: open ? "initial" : "center",
    px: 2.5,
    color: "gray",
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
