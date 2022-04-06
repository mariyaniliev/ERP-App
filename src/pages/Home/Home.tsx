import React from "react";
import { Link } from "react-router-dom";
import { Box } from "../../design-system";

const Home = () => {
  return (
    <Box>
      <Link to="/team">Team</Link>
      {/* without Outlet component, children property doesnt work */}
      {/* <Outlet /> */}
    </Box>
  );
};
export default Home;
