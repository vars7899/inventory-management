import { Box, Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import { IconFile } from "@tabler/icons";
import React from "react";
import DashboardTabHeader from "../../components/DashboardTabHeader/DashboardTabHeader.component";
import Layout from "../Layouts/Layout";
import moment from "moment";
import { theme } from "../../styles/globalTheme.style";
import { motion } from "framer-motion";
import { stagger } from "../../styles/Variants.style";
import { useNavigate } from "react-router-dom";
import DocumentFileCard from "../../components/DocumentComponents/DocumentFileCard.component";
import CustomModal from "../../components/CustomModal/CustomModal.component";
import DocumentTextEditor from "../../components/DocumentComponents/DocumentTextEditor.component";

// TODO: remove default object
const obj = {
  _id: "16465198198496519874948",
  title: "Jio investment notes",
};

const Document = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <DashboardTabHeader />
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        mt="20px"
        gridGap="20px"
        justifyItems="stretch"
        as={motion.div}
        variants={stagger.staggerParent}
        initial="hidden"
        animate="show"
      >
        {Array.from({ length: 25 }).map((item) => (
          <CustomModal
            heading={obj.title}
            size="xl"
            element={<DocumentTextEditor />}
          >
            <DocumentFileCard />
          </CustomModal>
        ))}
      </Grid>
    </Layout>
  );
};

export default Document;
