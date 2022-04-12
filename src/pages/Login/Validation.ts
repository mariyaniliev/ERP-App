interface errorsValue {
  emailError: string;
  passwordError: string;
}

export const validation = (email: string, password: string) => {
  const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  const errorMassage = {} as errorsValue;
  const isEmailNotValid =
    !regex.test(email) || email.length < 6 || !email.length;
  const isPasswordNotValid = password.length < 3 || !password.length;

  if (isEmailNotValid) {
    errorMassage.emailError = "Invalid Email!";
  }
  if (isPasswordNotValid) {
    errorMassage.passwordError = "Invalid Password!";
  }
  return errorMassage;
};
