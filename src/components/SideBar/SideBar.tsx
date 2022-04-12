import * as React from "react";
import { RootState, useAppSelector } from "../../redux/store";
import { Box, CssBaseline } from "../../design-system";
import MenuList from "./MenuList/MenuList";
import {
  sideBarSectionsTop,
  sideBarSectionsBottom,
} from "../../services/navigation-items-constants";
import { Drawer } from "./sideBar-styles";

const SideBar = () => {
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);

  return (
    <Box sx={{ display: "flex" }} pt={1}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <MenuList menuList={sideBarSectionsTop} open={open} />
        <MenuList menuList={sideBarSectionsBottom} open={open} />
      </Drawer>
    </Box>
  );
};

export default React.memo(SideBar);
