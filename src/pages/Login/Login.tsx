import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "./CustomButton/customButton";
import { CustomInput } from "./CustomInput/customInput";
import logo from "../../theme/assets/gs-logo.png";
import { THEME_COLORS } from "../../theme/theme-constants";
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
          <img style={{ height: 60 }} src={logo} alt="Generic Soft Logo" />
          <Typography variant="h4" color={THEME_COLORS.grey03}>
            Log In
          </Typography>
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
