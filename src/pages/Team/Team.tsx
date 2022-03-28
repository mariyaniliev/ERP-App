import React from "react";
import { Link, Outlet } from "react-router-dom";
const Team = () => {
  return (
    <div>
      <Link to="/team">Team</Link>
      {/* without Outlet component, children property doesnt work */}
      <Outlet />
    </div>
  );
};
export default Team;
