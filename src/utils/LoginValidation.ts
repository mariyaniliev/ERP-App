import { ErrorsValue } from "../pages/Login/types";

export const validation = (email: string, password: string) => {
  const standartEmailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  const errorMassage = {} as ErrorsValue;
  const isEmailNotValid =
    !standartEmailRegex.test(email) || email.length < 6 || !email.length;
  const isPasswordNotValid = password.length < 3 || !password.length;

  if (isEmailNotValid) {
    errorMassage.emailError = "Invalid Email!";
  }
  if (isPasswordNotValid) {
    errorMassage.passwordError = "Invalid Password!";
  }
  return errorMassage;
};
