import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./pages/routes";

const App = () => {
  const element = useRoutes(routes);
  return <div>{element}</div>;
};
export default App;
