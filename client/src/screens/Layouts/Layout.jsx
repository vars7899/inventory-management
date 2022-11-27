import { Box } from "@chakra-ui/react";
import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import {
  LayoutStyle,
  LeftContainerStyle,
  RightContainerStyle,
} from "./Layout.style";

const Layout = ({ children }) => {
  const [isSideBarMini, setIsSideBarMini] = useState(false);
  return (
    <LayoutStyle>
      <LeftContainerStyle>
        <Sidebar
          isSideBarMini={isSideBarMini}
          setIsSideBarMini={setIsSideBarMini}
        />
      </LeftContainerStyle>
      <RightContainerStyle>
        <DashboardHeader />
        <Box padding="20px" maxW="inherit">
          {children}
        </Box>
      </RightContainerStyle>
    </LayoutStyle>
  );
};

export default Layout;
