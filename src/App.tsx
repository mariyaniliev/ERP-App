import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./pages/routes";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import { THEME_COLORS } from "./theme/theme-constants";
import "./App.global.css";

const App = () => {
  const element = useRoutes(routes);
  return (
    <div style={{ color: `${THEME_COLORS.purple}` }}>
      <Header />
      <div className="container">
        <SideBar />
        {element}
      </div>
    </div>
  );
};
export default App;
