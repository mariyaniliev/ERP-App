import React from "react";
import { Link, Outlet } from "react-router-dom";
const TestPage1 = () => {
  return (
    <div>
      sdasdasdadsdasdasdaas
      <Link to="/TestPage1">TestPage1</Link>
      {/* without Outlet component, children property doesnt work */}
      <Outlet />
    </div>
  );
};
export default TestPage1;
