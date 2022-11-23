import { Box } from "@chakra-ui/react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import { LayoutStyle, RightContainerStyle } from "./Layout.style";

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Sidebar />
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
