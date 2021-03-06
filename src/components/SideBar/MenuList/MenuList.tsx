import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "../../../design-system";

import { MenuListProps } from "./../sideBar-types";

import { styles } from "../sideBar-styles";

const MenuList = (props: MenuListProps) => {
  const { menuList, open } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <List>
      {menuList.map((menuItem) => {
        const isMenuLinkActive =
          menuItem.section === pathname || pathname.includes(menuItem.section);
        return (
          <ListItemButton
            key={menuItem.content}
            sx={{
              ...styles.ListItemButton,
              ...(isMenuLinkActive && styles.sidebarLinkActive),
            }}
            onClick={() => navigate(menuItem.section)}
          >
            <ListItemIcon
              sx={{
                ...styles.ListItemIcon,
                ...(isMenuLinkActive && styles.sidebarLinkActive),
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
};
export default MenuList;
