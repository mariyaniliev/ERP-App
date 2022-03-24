import React from "react";
import { useDispatch } from "react-redux";

const Logo = () => {
  const dispatch = useDispatch();
  const toHomePage = () => {
    sessionStorage.setItem("section", "");
  };
  return (
    <div className="logo" onClick={toHomePage}>
      Generic Soft
    </div>
  );
};
export default Logo;
