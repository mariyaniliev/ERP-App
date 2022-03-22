import * as React from "react";
import type { RouteObject } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";
import A from "./A";
import B from "./B";
import C from "./C";
import NoMatch from "./NoMatch";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    //children is used to have page in the page
    children: [
      //couter use the same path as Home, thats why it doest have a path
      { index: true, element: <Counter /> },
      {
        path: "/A",
        element: <A />,
        // B is chiled of A and use same path as A
        children: [{ index: true, element: <B /> }],
      },
      { path: "*", element: <NoMatch /> },
    ],
  },

  //different page, not a chiled of Home
  { path: "/C", element: <C /> },
];
