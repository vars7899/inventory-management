import React from "react";
import { IconButtonStyle } from "./Button.style";
import { IconBellRinging } from "@tabler/icons";
import { theme } from "../../styles/globalTheme.style";

const IconButton = ({ children }) => {
  return (
    <IconButtonStyle>
      <>{children}</>
    </IconButtonStyle>
  );
};

export default IconButton;
