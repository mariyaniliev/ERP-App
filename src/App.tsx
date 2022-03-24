import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./pages/routes";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  const element = useRoutes(routes);
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        {element}
      </div>
    </div>
  );
};
export default App;
