import * as React from "react";

// * Helpers
import {
  sideBarSectionsTop,
  sideBarSectionsBottom,
} from "../../services/navigation-items-constants";

// * Redux
import { useAppSelector, RootState } from "../../redux/store";
import { toggleActions } from "../../redux/reducer/drawerHeader";

// * Material Ui
import { Box, IconButton } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

import logo from "../../theme/assets/gs-logo.png";

// * Components & styles
import { Drawer, styles } from "./sideBar-styles";
import MenuList from "./MenuList/MenuList";

const SideBar = () => {
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);

  const { toggle } = toggleActions();

  const menuToggleButton = open ? <FirstPageIcon /> : <LastPageIcon />;

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{ style: { position: "fixed", zIndex: 1 } }}
    >
      <Box sx={styles.leftMenuHolder}>
        <IconButton
          size="large"
          edge="start"
          sx={{ mr: 2 }}
          onClick={toggle}
          disableRipple
        >
          {menuToggleButton}
        </IconButton>
        <img alt="GenericSoft Logo" src={logo} style={styles.logo} />
      </Box>
      <MenuList menuList={sideBarSectionsTop} open={open} />
      <MenuList menuList={sideBarSectionsBottom} open={open} />
    </Drawer>
  );
};

export default React.memo(SideBar);
