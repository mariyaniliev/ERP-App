import React from "react";
import { useRoutes } from "react-router-dom";
import { Box } from "@mui/material";
import { routes } from "./pages/routes";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.global.css";

const App = () => {
  const element = useRoutes(routes);
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        {element}
      </Box>
    </Box>
  );
};
export default App;
