import { Box } from "@chakra-ui/react";
import { Vortex } from "react-loader-spinner";
import { theme } from "../../styles/globalTheme.style";
import { motion } from "framer-motion";

const CustomLoader = () => {
  return (
    <Box
      maxH="100vh"
      maxW="100vw"
      h="100vh"
      w="100vw"
      bg={theme.color.dark}
      backdropFilter="blur(10px)"
      position="absolute"
      top="0"
      left="0"
      as={motion.div}
      animate={{ opacity: 1 }}
      exit={{ opacity: [2, 1.5, 1, 0.5, 0] }}
      zIndex="2000"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Vortex
          visible={true}
          height="150"
          width="150"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={[
            theme.color.accent,
            theme.color.dark,
            theme.color.accent,
            theme.color.dark,
            theme.color.dark,
            theme.color.accent,
          ]}
        />
      </Box>
    </Box>
  );
};

export default CustomLoader;
