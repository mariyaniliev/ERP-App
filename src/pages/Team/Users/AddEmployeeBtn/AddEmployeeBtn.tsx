import React from "react";
import { Box } from "@mui/material";
import { Button } from "../../../../design-system/index";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { styles } from "./addEmployeeBtn-styles";

const AddEmployeeBtn = () => {
  return (
    <Box sx={styles.btnContainer}>
      <Button onClick={() => console.log("button")}>
        <PersonAddAltIcon /> Add Employee
      </Button>
    </Box>
  );
};

export default AddEmployeeBtn;
