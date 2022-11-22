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
import { Button } from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { Link } from "react-router-dom";

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
          <Link to="/login">
            <Button variant="ghost" size="lg">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button
              ml="10px"
              variant="outline"
              size="lg"
              borderColor={theme.color.accent}
            >
              Start A Demo
            </Button>
          </Link>
        </ActionList>
      </NavBar>
    </NavBarContainer>
  );
};

export default Navbar;
