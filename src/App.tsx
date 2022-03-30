import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { ThemeProvider, Box } from "@mui/material";
import { routes } from "./pages/routes";
import appTheme from "./theme/theme";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.global.css";

const App = () => {
  const element = useRoutes(routes);
  const location = useLocation();
  return (
    <ThemeProvider theme={appTheme}>
      <Box>
        {location.pathname !== "/login" && <Header />}
        <Box sx={{ display: "flex" }}>
          {location.pathname !== "/login" && <SideBar />}
          {element}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default App;
