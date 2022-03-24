import React, { useState } from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../redux/store";
import { styled, useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toggle } from "../../redux/reducer/drawerHeader";
import logo from "../../theme/assets/gs-logo.png";
import "./header.css";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const HeaderComponent = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);
  const [user, setUser] = useState("asdasdsa");

  return (
    <div className="header">
      <div className="headerButtonAndLogo">
        <DrawerHeader>
          <IconButton onClick={() => dispatch(toggle())}>
            {open ? (
              <ChevronLeftIcon className="sideBarButtonIcon" />
            ) : (
              <ChevronRightIcon className="sideBarButtonIcon" />
            )}
          </IconButton>
        </DrawerHeader>
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="username">User:{user}</div>
    </div>
  );
};

export default HeaderComponent;
