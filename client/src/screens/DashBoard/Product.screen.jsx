import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { IconPlus } from "@tabler/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../components/CustomTable/CustomTable.component";
import DashboardTabHeader from "../../components/DashboardTabHeader/DashboardTabHeader.component";
import { supplier_data } from "../../data/dummy";
import { theme } from "../../styles/globalTheme.style";
import Layout from "../Layout";
import NewProduct from "./NewProduct.screen";

const Product = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <DashboardTabHeader
        given_heading="Product List"
        given_sub_heading="Create, read, update and delete product"
        addElement={
          <Button
            leftIcon={<IconPlus />}
            bg={theme.color.accent}
            color={theme.color.text}
            marginRight="10px"
            onClick={() => navigate("/dashboard/product/new")}
          >
            Add New Product
          </Button>
        }
      />
      <Tabs variant="solid-rounded" mt="20px">
        <TabList>
          <Tab borderRadius="10px">Published</Tab>
          <Tab borderRadius="10px">Out Of Stock</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding="0px">
            <CustomTable given_data={supplier_data} />
          </TabPanel>
          <TabPanel padding="0px">
            <CustomTable given_data={supplier_data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default Product;
