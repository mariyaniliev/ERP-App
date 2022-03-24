import * as React from "react";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  List,
  CssBaseline,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import "./sideBar.css";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  justifyContent: "space-between",
  gap: 250,
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
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

const SideBar = () => {
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);
  const navigate = useNavigate();

  const sideBarSectionsTop = [
    { content: "Team", section: "/team", icon: MailIcon },
    { content: "User", section: "/user", icon: MailIcon },
    { content: "Positions", section: "/positions", icon: MailIcon },
    { content: "Timeoffs", section: "/timeoffs", icon: MailIcon },
  ];

  const sideBarSectionsBottum = [
    { content: "System", section: "/system", icon: MailIcon },
    { content: "About", section: "/about", icon: MailIcon },
    { content: "Log out", section: "/logout", icon: MailIcon },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List>
          {sideBarSectionsTop.map((section, index) => (
            <ListItemButton
              key={section.content}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate(section.section)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {<section.icon />}
              </ListItemIcon>
              <ListItemText
                primary={section.content}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>

        <List>
          {sideBarSectionsBottum.map((section, index) => (
            <ListItemButton
              key={section.content}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate(section.section)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {<section.icon />}
              </ListItemIcon>
              <ListItemText
                primary={section.content}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
