import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../Logo/Logo";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("asdasdsa");

  const logOut = () => {
    window.sessionStorage.clear();
  };

  return (
    <div className="header">
      <Logo />
      {user ? (
        <div className="user">
          <div className="user__logout">
            <a href="#" className="logout-text" onClick={logOut}>
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
