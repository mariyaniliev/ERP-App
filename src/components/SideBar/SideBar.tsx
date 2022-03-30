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
import {
  sideBarSectionsTop,
  sideBarSectionsBottom,
} from "../../services/navigation-items-constants";

import { Drawer, styles } from "./sideBar-styles";

const SideBar = () => {
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);
  const navigate = useNavigate();
  const { pathname } = useLocation();

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

        <List>
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
