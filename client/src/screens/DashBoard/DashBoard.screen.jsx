import { Grid } from "@chakra-ui/react";
import {
  IconBuildingWarehouse,
  IconPackages,
  IconPigMoney,
  IconShoppingCartOff,
  IconTruckDelivery,
} from "@tabler/icons";
import StaticsCard from "../../components/HomeComponents/StaticsCard.components";
import ActiveShipment from "../../components/HomeComponents/ActiveShipment.components";
import { theme } from "../../styles/globalTheme.style";
import Layout from "../Layouts/Layout";
import { useRedirectLoggedOut } from "../../hooks/useRedirect";
import DashboardTabHeader from "../../components/DashboardTabHeader/DashboardTabHeader.component";

const DashBoard = () => {
  useRedirectLoggedOut("/login");
  return (
    <Layout>
      <DashboardTabHeader />
      <Grid templateColumns="repeat(5,1fr)" p="20px" gridGap="10px">
        <StaticsCard
          givenCardHeader="Total Products"
          givenPathTo="/orders"
          givenIcon={<IconPackages size={theme.icon.xl} strokeWidth="0.75" />}
          givenData={2}
        />
        <StaticsCard
          givenCardHeader="Total Store Value"
          givenPathTo="/orders"
          givenIcon={<IconPigMoney size={theme.icon.xl} strokeWidth="0.75" />}
          givenData={345345}
        />
        <StaticsCard
          givenCardHeader="Total Supply Orders"
          givenPathTo="/orders"
          givenIcon={
            <IconTruckDelivery size={theme.icon.xl} strokeWidth="0.75" />
          }
          givenData={3436}
        />
        <StaticsCard
          givenCardHeader="Total Supplier"
          givenPathTo="/orders"
          givenIcon={
            <IconBuildingWarehouse size={theme.icon.xl} strokeWidth="0.75" />
          }
          givenData={898}
        />
        <StaticsCard
          givenCardHeader="Out of Stock"
          givenPathTo="/orders"
          givenIcon={
            <IconShoppingCartOff size={theme.icon.xl} strokeWidth="0.75" />
          }
          givenData={344}
        />
      </Grid>
      <Grid templateColumns="2fr 2fr 1fr" p="20px" gridGap="10px">
        <ActiveShipment />
      </Grid>
    </Layout>
  );
};

export default DashBoard;
