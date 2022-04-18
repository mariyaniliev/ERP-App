import React, { useState } from "react";
import { Dropdown, Box, Button } from "../../../../design-system/index";
import Input from "../../../../design-system/Input/Input";
import { THEME_INPUTS_SHADOW } from "../../../../theme/theme-constants";
import { styles } from "./addEmployeeForm-styles";

export const AddEmployeeForm = () => {
  const leadTest = [
    {
      label: "Ivan Ivanov",
      value: "ivan",
    },
    {
      label: "Dimitar Petrov",
      value: "dimitar",
    },
  ];

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
    roles: "",
    lead: "",
    position: "",
    timeOffs: "",
  });

  const { email, password, fullName, roles, lead, position, timeOffs } =
    userData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Box sx={styles.formContainer}>
      <Box sx={{ ...styles.contentPostion, height: "125px" }}>
        <Input
          placeholder="Full Name"
          width="450"
          boxShadow={THEME_INPUTS_SHADOW}
          onChange={handleChange}
        />
        <Input
          placeholder="Email"
          width="450"
          boxShadow={THEME_INPUTS_SHADOW}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          ...styles.contentPostion,
          flexDirection: "row",
          width: "450px",
        }}
      >
        <Dropdown
          placeholder="Roles"
          list={leadTest}
          width="200"
          boxShadow={THEME_INPUTS_SHADOW}
        />
        <Dropdown
          placeholder="Lead"
          list={leadTest}
          width="200"
          boxShadow={THEME_INPUTS_SHADOW}
        />
      </Box>
      <Box
        sx={{ ...styles.contentPostion, flexDirection: "row", width: "450px" }}
      >
        <Dropdown
          placeholder="Postion"
          list={leadTest}
          width="200"
          boxShadow={THEME_INPUTS_SHADOW}
        />
        <Input
          placeholder="Remaining Time Offs"
          width="200"
          boxShadow={THEME_INPUTS_SHADOW}
          onChange={handleChange}
        />
      </Box>
      <Box>
        {" "}
        <Input
          placeholder="Password"
          width="450"
          boxShadow={THEME_INPUTS_SHADOW}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Button onClick={() => console.log("click")}>Add Employee</Button>
      </Box>
    </Box>
  );
};
