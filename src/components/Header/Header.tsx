import React from "react";

// * Material Ui
import {
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Avatar,
} from "../../design-system";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

// * Redux
import { useAppSelector, RootState } from "../../redux/store";
import { toggleActions } from "../../redux/reducer/drawerHeader";

// * Styles
import { THEME_COLORS } from "../../theme/theme-constants";
import { styles } from "./header-styles";
import logo from "../../theme/assets/gs-logo.png";

// * Components
import HideOnScroll from "../../design-system/HideOnScroll/HideOnScroll";

const HeaderComponent = () => {
  const { name } = useAppSelector((state: RootState) => state.user.user);

  const { toggle } = toggleActions();

  const open = useAppSelector((state: RootState) => state.drawerHeader.open);

  const menuToggleButton = open ? <FirstPageIcon /> : <LastPageIcon />;

  return (
    <HideOnScroll>
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolbar} disableGutters>
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
            <img alt="Remy Sharp" src={logo} style={styles.logo} />
          </Box>
          <Box sx={styles.rightMenuHolder}>
            <Avatar alt="Remy Sharp" src="" sx={{ width: 30, height: 30 }} />
            <Typography color={THEME_COLORS.grey02}>{name}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default React.memo(HeaderComponent);
