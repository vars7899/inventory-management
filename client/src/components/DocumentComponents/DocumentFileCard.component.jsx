import { Box, Flex, Text } from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { stagger } from "../../styles/Variants.style";
import { motion } from "framer-motion";
import { IconFile } from "@tabler/icons";
import moment from "moment";

// TODO: remove the default imports
const DocumentFileCard = ({
  givenHeader = "Not Available",
  givenDate = "2022-11-21T02:46:20.071+00:00",
}) => {
  return (
    <Box
      border={`1px solid ${theme.color.grey3}`}
      padding="20px"
      borderRadius="10px"
      display="flex"
      justifyContent="center"
      maxW="350px"
      as={motion.div}
      variants={stagger.staggerChildren}
    >
      <Flex>
        <Flex justifyContent="center" marginLeft="-50px">
          <IconFile size="100px" strokeWidth="0.25px" />
        </Flex>
        <Flex flexDir="column" ml="10px">
          <Text fontSize="xl" fontWeight="bold">
            {givenHeader}
          </Text>
          <Text fontSize="xs">Created: {moment(givenDate).fromNow()}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DocumentFileCard;
