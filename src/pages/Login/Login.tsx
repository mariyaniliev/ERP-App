import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { useAppSelector, RootState } from "../../redux/store";
import { userActions } from "../../redux/reducer/user";
import { Box, Checkbox } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CustomSubmitButton from "./CustomButton/CustomSubmitButton";
import { Typography } from "../../design-system";
import { CustomInput } from "../Login/CustomInput/CustomInput";
import { THEME_COLORS } from "../../theme/theme-constants";
import { validation } from "./Validation";
import { useApiClient } from "../../utils/client";
import { User } from "types/user";
import logo from "../../theme/assets/gs-logo.png";
import leftDraw from "../../theme/assets/draw_left.png";
import rightDraw from "../../theme/assets/draw_right.png";
import { styles } from "./login-styles";

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [focused, setFocused] = useState({ email: false, password: false });
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const isElementFocused = (element: string) => {
    return focused[element] ? THEME_COLORS.purple : "";
  };

  const { isLoading } = useAppSelector((state: RootState) => state.user);
  const { loginStart, loginSuccess, loginFail } = userActions();
  const client = useApiClient();
  const navigate = useNavigate();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    const { email, password } = userCredentials;
    event.preventDefault();
    const error = validation(email, password);
    if (Object.keys(error).length > 0) {
      setErrorMessage(Object.values(error)[0]);
      return;
    }
    setErrorMessage("");
    loginStart();

    const res: AxiosResponse<User> | void = await client
      .post("/sessions", {
        email,
        password,
      })
      .catch((err) => {
        loginFail(err.message);
        const message = err.message.includes("401")
          ? "Invalid password or username"
          : "Something went wrong";
        setErrorMessage(message);
        return;
      });

    if (res) {
      loginSuccess(res.data);
      navigate("/team/users");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name }: { value: string; name: string } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused({ ...focused, [event.target.name]: true });
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused({ ...focused, [event.target.name]: false });
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.leftRow}>
        <Box sx={styles.logoContainer}>
          <img style={styles.image} src={leftDraw} alt="Drawing" />
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
            <Typography
              sx={{
                ...styles.helperText,
                color: isElementFocused("email"),
              }}
            >
              Your Email
            </Typography>
            <CustomInput
              name="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              endAdornment={<MailOutlineIcon sx={styles.icons} />}
            />

            <Typography
              sx={{
                ...styles.helperText,
                color: isElementFocused("password"),
              }}
            >
              Your Password
            </Typography>

            <CustomInput
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              endAdornment={<LockOpenIcon sx={styles.icons} />}
            />
            {errorMessage && (
              <Typography color={THEME_COLORS.danger} sx={{ mt: 1 }}>
                {errorMessage}
              </Typography>
            )}
            <Box sx={styles.signInAttributes}>
              <Box sx={styles.helpers}>
                <Box sx={styles.checkboxHolder}>
                  <Checkbox
                    name="rememberMe"
                    sx={styles.checkbox}
                    onChange={(e) => {
                      console.log(e.target.checked);
                    }}
                  />
                  <Typography>Remember me</Typography>
                </Box>
                <Typography>Forgot me?</Typography>
              </Box>
              <CustomSubmitButton
                loading={isLoading}
                label="Sign in"
                type="submit"
              />
            </Box>
          </form>
        </Box>
        <Box sx={styles.emptySpaceToFill}></Box>
      </Box>
      <Box sx={styles.rightRow}>
        <Box sx={styles.logoContainer}>
          <img style={styles.image} src={rightDraw} alt="Drawing" />
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
