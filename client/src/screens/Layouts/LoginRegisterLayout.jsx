import React from "react";
import {
  LoginRegisterLeft,
  LoginRegisterRight,
  LoginRegisterStyleContainer,
} from "./LoginRegister.style";
import BgImage from "../../assets/lgbg.png";

const LoginRegisterLayout = ({ children }) => {
  return (
    <LoginRegisterStyleContainer>
      <LoginRegisterLeft>
        <img src={BgImage} alt="unavailable" />
      </LoginRegisterLeft>
      <LoginRegisterRight>{children}</LoginRegisterRight>
    </LoginRegisterStyleContainer>
  );
};

export default LoginRegisterLayout;
