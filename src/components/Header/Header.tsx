import React from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../redux/store";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toggle } from "../../redux/reducer/drawerHeader";
import logo from "../../theme/assets/gs-logo.png";
import { THEME_COLORS } from "../../theme/theme-constants";
import { styles } from "./header-styles";

const HeaderComponent = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);

  const menuToggleButton = open ? <ChevronLeftIcon /> : <ChevronRightIcon />;

  return (
    <Box sx={styles.header}>
      <Box sx={styles.contentCenter}>
        <Box
          sx={{ ...styles.sideBarButtonIcon, ...styles.contentCenter }}
          onClick={() => dispatch(toggle())}
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
          <Typography component="p" ml={4}>
            Nikolay Petkov
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
