import React from "react";
import CommonForm from "../../components/CommonForm/CommonForm";
import LoginForm from "./LoginForm";
import leftDraw from "../../theme/assets/draw_left.png";
import rightDraw from "../../theme/assets/draw_right.png";

const LoginPage = () => {
  return (
    <CommonForm leftPic={leftDraw} rightPic={rightDraw}>
      <LoginForm />
    </CommonForm>
  );
};
export default LoginPage;
