import React, { useState } from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../redux/store";
import Logo from "../Logo/Logo";
import { styled, useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toggle } from "../../redux/reducer/dreawerHeader";
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
      <DrawerHeader>
        <IconButton onClick={() => dispatch(toggle())}>
          {open ? (
            <ChevronLeftIcon className="sideBarButtonIcon" />
          ) : (
            <ChevronRightIcon className="sideBarButtonIcon" />
          )}
        </IconButton>
      </DrawerHeader>
      <Logo />
      {user ? (
        <div className="user">
          <div className="user__logout">
            <a href="#" className="logout-text">
              LogOut
            </a>
          </div>
          <div className="user__username">User:{user}</div>
        </div>
      ) : (
        <div className="no-user">
          <div className="no-user__login">
            <a href="#" className="login-text">
              Log In
            </a>
          </div>
          <div className="no-user__username">User:{user}</div>
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
