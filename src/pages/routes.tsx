import * as React from "react";
import type { RouteObject } from "react-router-dom";
import Home from "./Home/Home";
import Team from "./Team/Team";
import Timeoffs from "./Timeoffs/Timeoffs";
import Positions from "./Positions/Positions";
import User from "./User/User";
import Login from "./Login/Login";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    //children is used to have page in the page
    children: [
      //couter use the same path as Home, thats why it doest have a path
      {
        path: "/team",
        element: <Team />,
        // TestPage2 is chiled of TestPage1 and use same path as TestPage1
        children: [{ index: true, element: <User /> }],
      },
      { path: "*", element: <Positions /> },
    ],
  },
  { path: "/login", element: <Login /> },
  //different page, not a chiled of Home
  { path: "/timeoffs", element: <Timeoffs /> },
];
