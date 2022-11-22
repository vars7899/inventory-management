import { IconPackage } from "@tabler/icons";
import React from "react";
import StaticsCard from "../../components/HomeComponents/StaticsCard.components";
import HomeHeader from "../../components/HomeHeader/HomeHeader.component";
import Navbar from "../../components/Navbar/Navbar.component";
import { HomeGrid } from "./HomeScreen.style";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <HomeGrid>
        <StaticsCard
          givenCardHeader="Total Orders"
          givenPathTo="/orders"
          givenIcon={<IconPackage />}
          givenData={23894}
        />
      </HomeGrid>
    </div>
  );
};

export default HomeScreen;
