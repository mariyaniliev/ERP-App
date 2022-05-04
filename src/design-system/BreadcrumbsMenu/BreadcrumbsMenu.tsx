import * as React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import { Typography } from "../index";

export const BreadcrumbsMenu = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/");
  const firstLetterToUpperCase = (currentMenuItem: string) => {
    const newCurrentMenuItem =
      currentMenuItem.charAt(0).toUpperCase() + currentMenuItem.slice(1);
    return newCurrentMenuItem;
  };

  return (
    <Breadcrumbs separator="/" aria-label="breadcrumb">
      {currentLocation
        .slice(1)
        .map((currentMenuItem: string, index: number) => {
          return (
            <Typography key={index} style={{ cursor: "pointer" }}>
              {firstLetterToUpperCase(currentMenuItem)}
            </Typography>
          );
        })}
    </Breadcrumbs>
  );
};
