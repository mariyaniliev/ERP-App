import React from "react";
import { Outlet } from "react-router-dom";
import { THEME_FONT_FAMILY } from "../../theme/theme-constants";
const Home = () => {
  return (
    <div>
      HOME
      <h2 style={{ fontFamily: `${THEME_FONT_FAMILY}` }}>
        Test font family in the app
      </h2>
      {/* without Outlet component, children property doesnt work */}
      <Outlet />
    </div>
  );
};
export default Home;
