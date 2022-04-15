import React from "react";
import { Dropdown, Box, Button } from "../../../../design-system/index";
import Input from "../../../../design-system/Input/Input";
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
  return (
    <Box sx={styles.formContainer}>
      <Box sx={styles.shadow}>
        <Input
          placeholder="Starting date"
          width="517"
          onChange={() => console.log("change")}
        />
        <Input
          placeholder="Starting date"
          width="517"
          onChange={() => console.log("change")}
        />
      </Box>
      <Box sx={styles.shadow}>
        <Dropdown placeholder="Lead" list={leadTest} width="246" />
      </Box>
      <Box sx={styles.shadow}>
        <Input
          placeholder="Starting date"
          width="246"
          onChange={() => console.log("change")}
        />
        <Dropdown placeholder="Lead" list={leadTest} width="246" />
      </Box>
      <Box sx={styles.shadow}>
        {" "}
        <Input
          placeholder="Starting date"
          width="517"
          onChange={() => console.log("change")}
        />
      </Box>
      <Box>
        <Button onClick={() => console.log("click")}>Add Employee</Button>
      </Box>
    </Box>
  );
};
