import React from "react";
import { ButtonStyle } from "./Button.style";

const ButtonComponent = ({ text, type }) => {
  return (
    <>
      <ButtonStyle type={type}>
        <p>{text}</p>
      </ButtonStyle>
    </>
  );
};

export default ButtonComponent;
