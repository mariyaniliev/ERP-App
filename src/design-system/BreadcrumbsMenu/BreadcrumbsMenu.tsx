import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import { Typography } from "../index";
import { styles } from "./BreadcrumbsMenu-styles";

export const BreadcrumbsMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname.split("/");
  currentLocation.shift();
  const firstLetterToUpperCase = (currentMenuItem: string) => {
    const newCurrentMenuItem =
      currentMenuItem.charAt(0).toUpperCase() + currentMenuItem.slice(1);
    return newCurrentMenuItem;
  };

  const changePage = (currentMenuItem: string) => {
    navigate(currentMenuItem);
  };

  return (
    <Breadcrumbs separator="/" aria-label="breadcrumb">
      {currentLocation.map((currentMenuItem: string, index: number) => {
        if (index === currentLocation.length - 1) {
          return (
            <Typography
              key={index}
              onClick={() => changePage(currentMenuItem)}
              sx={styles.breadCrumbsItems}
            >
              {firstLetterToUpperCase(currentMenuItem)}
            </Typography>
          );
        }
        return (
          <Typography
            key={index}
            onClick={() => changePage("")}
            sx={styles.breadCrumbsItems}
          >
            {firstLetterToUpperCase(currentMenuItem)}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};
