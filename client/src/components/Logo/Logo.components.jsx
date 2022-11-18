import React from "react";
import { BrandLogo, BrandLogoLarge } from "./Logo.style";
import { GiArtificialHive } from "react-icons/gi";
import { theme } from "../../styles/globalTheme.style";

const LogoLarge = () => {
  return (
    <BrandLogoLarge>
      <GiArtificialHive size={120} color={theme.color.red} />
      <p>vision inventory management</p>
    </BrandLogoLarge>
  );
};

const Logo = () => {
  return (
    <BrandLogo>
      <GiArtificialHive size={45} color="red" />
      <p>vision inventory management</p>
    </BrandLogo>
  );
};

export { Logo, LogoLarge };
