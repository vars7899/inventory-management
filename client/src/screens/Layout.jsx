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
        {children}
      </RightContainerStyle>
    </LayoutStyle>
  );
};

export default Layout;
