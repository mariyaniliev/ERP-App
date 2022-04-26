import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Box } from "./design-system";
import { routes } from "./pages/routes";
import appTheme from "./theme/theme";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.global.css";
import queryClient from "./utils/queryCLient";
const App = () => {
  const element = useRoutes(routes);
  const location = useLocation();

  const isPageLogin = location.pathname === "/login";

  return (
    <ThemeProvider theme={appTheme}>
      <QueryClientProvider client={queryClient}>
        <Box>
          {!isPageLogin && <Header />}
          <Box sx={{ display: "flex" }}>
            {!isPageLogin && <SideBar />}
            {element}
          </Box>
        </Box>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default App;
