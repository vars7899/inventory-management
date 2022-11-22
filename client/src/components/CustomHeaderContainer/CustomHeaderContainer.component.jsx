import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { theme } from "../../styles/globalTheme.style";

const CustomHeaderContainer = ({ children, given_text }) => {
  return (
    <Box w="100%">
      <Text
        fontSize={{ base: "md", xl: "xl" }}
        fontWeight="bold"
        color={theme.color.grey2}
        mb={{ base: "5px", xl: "7.5px" }}
      >
        {given_text}
      </Text>
      <Box
        border={`1px solid ${theme.color.grey3}`}
        borderRadius="10px"
        padding={{ base: "10px", xl: "20px" }}
      >
        <VStack spacing="10px">{children}</VStack>
      </Box>
    </Box>
  );
};

export default CustomHeaderContainer;
