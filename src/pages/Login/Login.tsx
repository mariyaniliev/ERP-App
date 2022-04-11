import React, { useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "../../design-system";
import { styles } from "./login-styles";
import { CustomInput } from "../Login/CustomInput/CustomInput";
import logo from "../../theme/assets/gs-logo.png";
import leftDraw from "../../theme/assets/draw_left.png";
import rightDraw from "../../theme/assets/draw_right.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
const Login: React.FC = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMassage, setErrorMassage] = useState({});

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    const { email, password } = userCredentials;
    event.preventDefault();
    console.log("email:", email, "password:", password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name }: { value: string; name: string } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.leftRow}>
        <Box sx={styles.logoContainer}>
          <img style={styles.image} src={leftDraw} alt="Generic Soft Logo" />
        </Box>
      </Box>
      <Box sx={styles.middleRow}>
        <Box sx={styles.logoContainer}>
          <img style={{ height: 60 }} src={logo} alt="Generic Soft Logo" />
        </Box>

        <Box sx={styles.formContainer}>
          <Typography sx={styles.header}>Sign in to our platform</Typography>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleLogin}
          >
            <Typography sx={styles.helperText}>Your Email</Typography>
            <CustomInput endAdornment={<MailOutlineIcon sx={styles.icons} />} />

            <Typography sx={styles.helperText}>Your Password</Typography>
            <CustomInput
              type="password"
              endAdornment={<LockOpenIcon sx={styles.icons} />}
            />
          </form>
        </Box>
        <Box sx={styles.emptySpaceToFill}></Box>
      </Box>
      <Box sx={styles.rightRow}>
        <Box sx={styles.logoContainer}>
          <img style={styles.image} src={rightDraw} alt="Generic Soft Logo" />
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
