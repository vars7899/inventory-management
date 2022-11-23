import HomeHeader from "../../components/HomeHeader/HomeHeader.component";
import Navbar from "../../components/Navbar/Navbar.component";
import { HomeGrid } from "./HomeScreen.style";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <HomeGrid></HomeGrid>
    </div>
  );
};

export default HomeScreen;
