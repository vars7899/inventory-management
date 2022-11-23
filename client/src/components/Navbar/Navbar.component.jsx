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
import { Button } from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { Link } from "react-router-dom";
import {
  ShowOnLogin,
  ShowOnLogout,
} from "../ProtectedRoutes/HiddenLinks.components";

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
          <ShowOnLogout>
            <Link to="/login">
              <Button variant="ghost" size="lg">
                Sign In
              </Button>
            </Link>
          </ShowOnLogout>
          <ShowOnLogout>
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
          </ShowOnLogout>
          <ShowOnLogin>
            <Link to="/dashboard/home">
              <Button
                ml="10px"
                variant="outline"
                size="lg"
                borderColor={theme.color.accent}
              >
                Dashboard
              </Button>
            </Link>
          </ShowOnLogin>
        </ActionList>
      </NavBar>
    </NavBarContainer>
  );
};

export default Navbar;
