import { Box } from "@chakra-ui/react";
import React from "react";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader.component";
import Sidebar from "../components/Sidebar/Sidebar.component";
import { LayoutStyle, RightContainerStyle } from "./Layout.style";

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Sidebar />
      <RightContainerStyle>
        <DashboardHeader />
        <Box overflowY="scroll" padding="20px">
          {children}
        </Box>
      </RightContainerStyle>
    </LayoutStyle>
  );
};

export default Layout;
