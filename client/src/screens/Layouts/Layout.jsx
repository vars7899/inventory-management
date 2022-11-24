import { Box } from "@chakra-ui/react";
import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import { LayoutStyle, RightContainerStyle } from "./Layout.style";

const Layout = ({ children }) => {
  const [isSideBarMini, setIsSideBarMini] = useState(false);
  console.log(isSideBarMini);
  return (
    <LayoutStyle>
      <Sidebar
        isSideBarMini={isSideBarMini}
        setIsSideBarMini={setIsSideBarMini}
      />
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
