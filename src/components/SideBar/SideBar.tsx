import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store";
import {
  Box,
  List,
  CssBaseline,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Group from "@mui/icons-material/Group";
import WorkOutline from "@mui/icons-material/WorkOutline";
import PinDrop from "@mui/icons-material/PinDrop";
import EventNote from "@mui/icons-material/EventNote";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { Drawer, styles } from "./sideBar-styles";

const SideBar = () => {
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const sideBarSectionsTop = [
    { content: "Team", section: "/team", icon: Group },
    {
      content: "Business Operations",
      section: "/bo",
      icon: WorkOutline,
    },
    { content: "Office", section: "/office", icon: PinDrop },

    {
      content: "Accounting",
      section: "/accounting",
      icon: EventNote,
    },
  ] as const;

  const sideBarSectionsBottom = [
    { content: "System", section: "/system", icon: Settings },
    { content: "Log out", section: "/logout", icon: Logout },
  ] as const;

  return (
    <Box sx={{ display: "flex" }} pt={1}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List>
          {sideBarSectionsTop.map((section, index) => (
            <ListItemButton
              key={section.content}
              sx={{
                ...styles.ListItemButton,
                ...(section.section === pathname && styles.sidebarLinkActive),
              }}
              onClick={() => navigate(section.section)}
            >
              <ListItemIcon
                sx={{
                  ...styles.ListItemIcon,
                  ...(section.section === pathname && styles.sidebarLinkActive),
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

        <List sx={styles.sideBarBottomList}>
          {sideBarSectionsBottom.map((section, index) => (
            <ListItemButton
              key={section.content}
              sx={{
                ...styles.ListItemButton,
                ...(section.section === pathname && styles.sidebarLinkActive),
              }}
              onClick={() => navigate(section.section)}
            >
              <ListItemIcon
                sx={{
                  ...styles.ListItemIcon,
                  ...(section.section === pathname && styles.sidebarLinkActive),
                }}
              >
                {<section.icon />}
              </ListItemIcon>
              <ListItemText
                primary={section.content}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
