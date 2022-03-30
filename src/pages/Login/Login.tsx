import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "./CustomButton/customButton";
import { CustomInput } from "./CustomInput/customInput";
import { styles } from "./login-styles";

const Login: React.FC = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMassage, setErrorMassage] = useState({});

  const { email, password } = userCredentials;

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("email:", email, "password:", password);

    // let error = inputValidation(email, password);
    // Object.keys(error).length
    //   ? setErrorMassage(error)
    //   : dispatch(logInRequest(email, password));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name }: { value: string; name: string } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Box
      sx={{
        ...styles.contentCenter,
        width: "100%",
        margin: "8rem 0px",
      }}
    >
      <form onSubmit={handleLogin}>
        <Box sx={{ ...styles.contentCenter, ...styles.formContainer }}>
          <Typography>Log In</Typography>
          <Box sx={styles.inputContainer}>
            <CustomInput
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
            <CustomInput
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <CustomButton type="submit">Log In</CustomButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
export default Login;
