import React from "react";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      HOME
      {/* without Outlet component, children property doesnt work */}
      <Outlet />
    </div>
  );
};
export default Home;
