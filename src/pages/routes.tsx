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
    path: "/teamSection",
    element: <TeamSection />,
    children: [
      {
        path: "/teamSection/users",
        element: <UsersSubPage />,
      },
      {
        path: "/teamSection/timeOffs",
        element: <TimeOffsSubPage />,
      },
      {
        path: "/teamSection/personalInfo",
        element: <PersonalInfoSubPage />,
      },
    ],
  },
];
