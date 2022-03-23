import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./pages/routes";
import SideBar from "./common/SideBar/SideBar/SideBar";

const App = () => {
  const element = useRoutes(routes);
  return (
    <div>
      <SideBar />
      {element}
    </div>
  );
};
export default App;
