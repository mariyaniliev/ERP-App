import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useAppSelector, RootState } from "../../redux/store";
import { userActions } from "../../redux/reducer/user";
import { Box, Checkbox } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CustomSubmitButton from "../../components/CustomButton/CustomSubmitButton";
import { Typography } from "../../design-system";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { THEME_COLORS } from "../../theme/theme-constants";
import { validation } from "../../utils/LoginValidation";
import { useApiClient } from "../../utils/client";
import { User } from "../../types/user";
import api from "../../services/api-endpoints";
import routes from "../../services/routes";
import notificationMessages from "../../services/notification-messages";
import logo from "../../theme/assets/gs-logo.png";
import { styles } from "./login-styles";

const memorizedPassword = Cookies.get("password") || "";
const memorizedEmail = Cookies.get("email") || "";
const rememberMe = Cookies.get("rememberMe") === "true" ? true : false;
const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [focused, setFocused] = useState({ email: false, password: false });
  const [userCredentials, setUserCredentials] = useState({
    email: memorizedEmail,
    password: memorizedPassword,
    rememberMe: rememberMe,
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
    if (!userCredentials.rememberMe) {
      Cookies.remove("email");
      Cookies.remove("password");
      Cookies.remove("rememberMe");
    }

    setErrorMessage("");
    loginStart();

    const res: AxiosResponse<User> | void = await client
      .post(api.sessions.postSession, {
        email,
        password,
      })
      .catch((err) => {
        loginFail(err.message);
        const message = err.message.includes("401")
          ? notificationMessages.invalidCredentials
          : notificationMessages.unknownError;
        setErrorMessage(message);
        return;
      });

    if (res) {
      if (userCredentials.rememberMe) {
        Cookies.set("email", `${email}`);
        Cookies.set("password", `${password}`);
        Cookies.set("rememberMe", `${userCredentials.rememberMe}`);
      }
      loginSuccess(res.data);
      navigate(routes.team.users);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name }: { value: string; name: string } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused({ ...focused, [event.target.name]: true });
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused({ ...focused, [event.target.name]: false });
  };
  return (
    <Box sx={styles.middleRow}>
      <Box sx={styles.logoContainer}>
        <img style={{ height: 60 }} src={logo} alt="Generic Soft Logo" />
      </Box>
      <Box sx={styles.formContainer}>
        <Typography sx={styles.header}>Sign in to our platform</Typography>
        <form
          style={{
            width: "65%",
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
            defaultValue={memorizedEmail}
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
            defaultValue={memorizedPassword}
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
                  defaultChecked={userCredentials.rememberMe}
                  sx={styles.checkbox}
                  onChange={(e) => {
                    setUserCredentials({
                      ...userCredentials,
                      rememberMe: e.target.checked,
                    });
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
  );
};

export default LoginForm;
