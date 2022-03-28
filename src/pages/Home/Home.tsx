import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/team">Team</Link>
      {/* without Outlet component, children property doesnt work */}
      {/* <Outlet /> */}
    </div>
  );
};
export default Home;
