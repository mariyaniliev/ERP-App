import React from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../redux/store";
import { Box } from "@mui/material";
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
      <Box sx={styles.headerButtonAndLogo}>
        <Box sx={styles.sideBarButtonIcon} onClick={() => dispatch(toggle())}>
          {menuToggleButton}
        </Box>
        <Box sx={styles.logoWraper}>
          <img style={styles.logo} src={logo} alt="Generic Soft Logo" />
        </Box>
      </Box>
      <Box>
        <Box sx={styles.userInfo}>
          <Box
            style={{
              ...styles.userAvatarWraper,
              background: THEME_COLORS.purple,
            }}
          ></Box>
          <p style={{ marginLeft: "20px" }}>Nikolay Petkov</p>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
