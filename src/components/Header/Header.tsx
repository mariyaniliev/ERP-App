import React, { useState } from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../redux/store";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toggle } from "../../redux/reducer/drawerHeader";
import logo from "../../theme/assets/gs-logo.png";
import "./header.css";

const HeaderComponent = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const open = useAppSelector((state: RootState) => state.drawerHeader.open);
  const [user, setUser] = useState("Nikolay Petkov");
  const [role, setRole] = useState("Admin");

  const menuToggleButton = open ? (
    <ChevronLeftIcon className="sideBarButtonIcon" />
  ) : (
    <ChevronRightIcon className="sideBarButtonIcon" />
  );

  return (
    <div className="header">
      <div className="headerButtonAndLogo">
        <div className="menuToggleWrapper" onClick={() => dispatch(toggle())}>
          {menuToggleButton}
        </div>
        <img className="logo" src={logo} alt="Generic Soft Logo" />
      </div>
      <div className="userDetailWrapper">
        <div
          className="userLogoWrapper"
          style={{
            background: `url(${logo})`,
          }}
        />
          <p className="userName">{user}</p>
      </div>
    </div>
  );
};

export default HeaderComponent;
