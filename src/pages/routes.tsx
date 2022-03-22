import * as React from "react";
import type { RouteObject } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";
import TestPage1 from "./TestPage1";
import TestPage2 from "./TestPage2";
import TestPage3 from "./TestPage3";
import TestNoMatch from "./TestNoMatch";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    //children is used to have page in the page
    children: [
      //couter use the same path as Home, thats why it doest have a path
      { index: true, element: <Counter /> },
      {
        path: "/TestPage1",
        element: <TestPage1 />,
        // B is chiled of A and use same path as A
        children: [{ index: true, element: <TestPage2 /> }],
      },
      { path: "*", element: <TestNoMatch /> },
    ],
  },

  //different page, not a chiled of Home
  { path: "/TestPage3", element: <TestPage3 /> },
];
