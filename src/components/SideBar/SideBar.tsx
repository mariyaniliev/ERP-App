import * as React from "react";
import { useNavigate } from "react-router-dom";
import { RootState, useAppSelector } from "../../redux/store";
import {
  Box,
  List,
  CssBaseline,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { THEME_COLORS } from "../../theme/theme-constants";
import { Drawer } from "./sideBarImports";

const SideBar = () => {
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);
  const navigate = useNavigate();

  const sideBarSectionsTop = [
    { content: "Team", section: "/team", icon: MailIcon },
    { content: "User", section: "/user", icon: MailIcon },
    { content: "Positions", section: "/positions", icon: MailIcon },
    { content: "Timeoffs", section: "/timeoffs", icon: MailIcon },
  ] as const;

  const sideBarSectionsBottum = [
    { content: "System", section: "/system", icon: MailIcon },
    { content: "About", section: "/about", icon: MailIcon },
    { content: "Log out", section: "/logout", icon: MailIcon },
  ] as const;

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
                  color: `${THEME_COLORS.purple}`,
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
                  color: `${THEME_COLORS.purple}`,
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
