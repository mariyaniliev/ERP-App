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

interface MenuListItems {
  content: string;
  icon: any;
  section: string;
}

const SideBar = () => {
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const sideBarMenu = (menuList: MenuListItems) => (
    <List>
      {menuList.map((menuItem, index) => {
        const menuItemActive =
          menuItem.section === pathname || pathname.includes(menuItem.section);

        return (
          <ListItemButton
            key={menuItem.content}
            sx={{
              ...styles.ListItemButton,
              ...(menuItemActive && styles.sidebarLinkActive),
            }}
            onClick={() => navigate(menuItem.section)}
          >
            <ListItemIcon
              sx={{
                ...styles.ListItemIcon,
                ...(menuItemActive && styles.sidebarLinkActive),
              }}
            >
              {<menuItem.icon />}
            </ListItemIcon>
            <ListItemText
              primary={menuItem.content}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        );
      })}
    </List>
  );

  return (
    <Box sx={{ display: "flex" }} pt={1}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        {sideBarMenu(sideBarSectionsTop)}
        {sideBarMenu(sideBarSectionsBottom)}
      </Drawer>
    </Box>
  );
};

export default SideBar;
