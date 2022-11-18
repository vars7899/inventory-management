import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import { LayoutStyle, RightContainerStyle } from "../Layout.style";

const DashBoard = () => {
  return (
    <LayoutStyle>
      <Sidebar />
      <RightContainerStyle>
        <DashboardHeader />
      </RightContainerStyle>
    </LayoutStyle>
  );
};

export default DashBoard;
