import React from "react";
import {
  ActionList,
  BrandLogo,
  NavBar,
  NavBarContainer,
  NavBarList,
  NavItem,
} from "./Navbar.style";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";
import ButtonComponent from "../Button/Button.component";

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavBar>
        <div>
          <BrandLogo>
            <GiArtificialHive size={45} color="red" />
            <p>vision inventory management</p>
          </BrandLogo>
          <NavBarList>
            <NavItem>
              <p>Platform</p>
              <MdKeyboardArrowDown size={20} />
            </NavItem>
            <NavItem>
              <p>Pricing</p>
            </NavItem>
            <NavItem>
              <p>Solutions</p>
              <MdKeyboardArrowDown size={20} />
            </NavItem>
            <NavItem>
              <p>Resources</p>
              <MdKeyboardArrowDown size={20} />
            </NavItem>
            <NavItem>
              <p>Company</p>
              <MdKeyboardArrowDown size={20} />
            </NavItem>
          </NavBarList>
        </div>
        <ActionList>
          <ButtonComponent text={"login"} />
          <ButtonComponent text={"start a demo"} type="outline" />
        </ActionList>
      </NavBar>
    </NavBarContainer>
  );
};

export default Navbar;
