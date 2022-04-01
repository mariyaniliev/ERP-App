import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Box } from "./design-system";
import { routes } from "./pages/routes";
import appTheme from "./theme/theme";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.global.css";

const App = () => {
  const element = useRoutes(routes);
  return (
    <ThemeProvider theme={appTheme}>
      <Box>
        <Header />
        <Box sx={{ display: "flex" }}>
          <SideBar />
          {element}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default App;
