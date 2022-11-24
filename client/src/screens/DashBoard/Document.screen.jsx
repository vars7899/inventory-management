import { Box, Button, Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import { IconFile, IconFilePlus } from "@tabler/icons";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { DOCS_RESET, GET_ALL_DOCS } from "../../redux/feature/docSlice";
import { toast } from "react-toastify";
import { useRedirectLoggedOut } from "../../hooks/useRedirect";

const Document = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isFetchAllSuccess, message, docs, isError } = useSelector(
    (state) => state.docs
  );
  useRedirectLoggedOut("/login", "/dashboard/documents");
  useEffect(() => {
    dispatch(GET_ALL_DOCS());
    if (isError) {
      toast.error(message);
    }
    if (isFetchAllSuccess) {
      toast.success(message);
    }
    dispatch(DOCS_RESET());
  }, []);
  return (
    <Layout>
      <DashboardTabHeader
        addElement={
          <CustomModal
            size="xl"
            heading="New Document"
            element={<DocumentTextEditor />}
          >
            <Button
              leftIcon={<IconFilePlus strokeWidth="1.5px" />}
              bg={theme.color.accent}
              color={theme.color.text}
            >
              Add Document
            </Button>
          </CustomModal>
        }
      />
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        mt="20px"
        gridGap="20px"
        justifyItems="stretch"
        as={motion.div}
        variants={stagger.staggerParent}
        initial="hidden"
        animate="show"
      >
        {docs &&
          docs.map((item, index) => (
            <CustomModal
              key={`doc-card-${index}`}
              heading={item?.title}
              size="xl"
              element={<DocumentTextEditor docData={item} type="update" />}
            >
              <DocumentFileCard
                givenHeader={item?.title}
                givenDate={item?.updatedAt}
              />
            </CustomModal>
          ))}
        {docs && docs.length === 0 && <Text>No Files </Text>}
      </Grid>
    </Layout>
  );
};

export default Document;
