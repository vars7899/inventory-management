import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { theme } from "../../styles/globalTheme.style";

const CustomImageDrop = () => {
  return (
    <Box
      w="100%"
      h="100%"
      minH="150px"
      borderRadius="10px"
      border={`1px dashed ${theme.color.grey3}`}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text>Click to Upload or Drag and Drop</Text>
    </Box>
  );
};

export default CustomImageDrop;
