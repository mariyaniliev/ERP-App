import * as React from "react";
import type { RouteObject } from "react-router-dom";
import Home from "./Home/Home";
import TeamSection from "./Team/TeamSection";
import UsersSubPage from "./Team/subPages/UsersSubPage/UsersSubPage";
import TimeOffsSubPage from "./Team/subPages/TimeOffsSubPage/TimeOffsSubPage";
import PersonalInfoSubPage from "./Team/subPages/PersonalInfoSubPage/PersonalInfoSubPage";

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
];
