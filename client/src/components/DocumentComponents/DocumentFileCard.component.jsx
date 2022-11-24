import { Box, Flex, Text } from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { stagger } from "../../styles/Variants.style";
import { motion } from "framer-motion";
import { IconFile } from "@tabler/icons";
import moment from "moment";

const DocumentFileCard = ({ givenHeader, givenDate }) => {
  return (
    <Box
      border={`1px solid ${theme.color.grey3}`}
      padding="20px"
      borderRadius="10px"
      display="flex"
      justifyContent="flex-start"
      maxW="350px"
      as={motion.div}
      variants={stagger.staggerChildren}
    >
      <Flex justifyContent="flex-start">
        <Flex justifyContent="center">
          <IconFile size="100px" strokeWidth="0.25px" />
        </Flex>
        <Flex flexDir="column" ml="10px">
          <Text fontSize="xl" fontWeight="bold">
            {givenHeader.substring(0, 20)}
            {givenHeader.length > 20 && "..."}
          </Text>
          <Text fontSize="xs">
            Last Modified: {moment(givenDate).fromNow()}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DocumentFileCard;
