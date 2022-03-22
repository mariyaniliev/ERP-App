import React from "react";
import { Link, Outlet } from "react-router-dom";
const A = () => {
  return (
    <div>
      sdasdasdadsdasdasdaas
      <Link to="/A">A</Link>
      {/* without Outlet component, children property doesnt work */}
      <Outlet />
    </div>
  );
};
export default A;
