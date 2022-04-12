import React from "react";
import { useAppSelector, RootState } from "../../redux/store";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toggleActions } from "../../redux/reducer/drawerHeader";
import logo from "../../theme/assets/gs-logo.png";
import { Box, Typography } from "../../design-system";
import { THEME_COLORS } from "../../theme/theme-constants";
import { styles } from "./header-styles";

const HeaderComponent = () => {
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);
  const { name } = useAppSelector((state: RootState) => state.user.user);
  const { toggle } = toggleActions();
  const menuToggleButton = open ? <ChevronLeftIcon /> : <ChevronRightIcon />;

  return (
    <Box sx={styles.header}>
      <Box sx={styles.contentCenter}>
        <Box
          sx={{ ...styles.sideBarButtonIcon, ...styles.contentCenter }}
          onClick={() => toggle()}
        >
          {menuToggleButton}
        </Box>
        <Box sx={{ ...styles.logoWraper, ...styles.contentCenter }}>
          <img style={styles.logo} src={logo} alt="Generic Soft Logo" />
        </Box>
      </Box>
      <Box>
        <Box sx={styles.contentCenter}>
          <Box
            style={{
              ...styles.userAvatarWraper,
              ...styles.contentCenter,
              background: THEME_COLORS.purple,
            }}
          ></Box>
          <Typography
            variant="button"
            component="span"
            color={THEME_COLORS.grey03}
            ml={4}
          >
            {name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(HeaderComponent);
