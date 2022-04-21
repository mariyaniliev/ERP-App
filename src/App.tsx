import React from "react";

import { useLocation, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Box } from "./design-system";
import { routes } from "./pages/routes";
import appTheme from "./theme/theme";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.global.css";

const App = () => {
  const element = useRoutes(routes);
  const location = useLocation();

  const isPageLogin = location.pathname === "/login";

  return (
    <ThemeProvider theme={appTheme}>
      <Box>
        {!isPageLogin && <Header />}
        <Box sx={{ display: "flex" }}>
          {!isPageLogin && <SideBar />}
          {element}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default App;
