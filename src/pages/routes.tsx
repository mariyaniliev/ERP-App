import * as React from "react";
import type { RouteObject } from "react-router-dom";
import Home from "./Home/Home";
import TeamSection from "./Team/Team";
import UsersSubPage from "./Team/Users/Users";
import TimeOffsSubPage from "./Team/TimeOff/TimeOffsPage";
import PersonalInfoSubPage from "./Team/PersonalInfo/PersonalInfo";
import Login from "./Login/LoginPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/team",
    element: <TeamSection />,
    children: [
      {
        path: "/team/users",
        element: <UsersSubPage />,
      },
      {
        path: "/team/timeoffs",
        element: <TimeOffsSubPage />,
      },
      {
        path: "/team/personalInfo",
        element: <PersonalInfoSubPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
