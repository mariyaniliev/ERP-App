import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "./CustomButton/customButton";
import { CustomInput } from "./CustomInput/customInput";
import { styles } from "./login-styles";

const Login = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMassage, setErrorMassage] = useState({});

  const { email, password } = userCredentials;

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log("email:", email, "password:", password);

  // let error = inputValidation(email, password);
  // Object.keys(error).length
  //   ? setErrorMassage(error)
  //   : dispatch(logInRequest(email, password));
  // };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Box
      sx={{
        ...styles.contentCenter,
        width: "100%",
        margin: "8rem 0px",
      }}
      // onSubmit={handleLogin}
    >
      <Box sx={{ ...styles.contentCenter, ...styles.formContainer }}>
        <Typography>Log In</Typography>
        <Box sx={styles.inputContainer}>
          <CustomInput placeholder="username" onChange={handleChange} />
          <CustomInput placeholder="password" onChange={handleChange} />
        </Box>
        <Box>
          <CustomButton onClick={() => console.log("click!")}>
            Log In
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
