import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { theme } from "../../styles/globalTheme.style";

const DocumentTextEditor = () => {
  const [value, setValue] = useState("");
  return (
    <Flex flexDir="column" h="100%">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <Spacer />
      <Button bg={theme.color.accent} color={theme.color.text}>
        Update
      </Button>
      <Accordion w="100%" allowToggle mt="20px">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="center">
                Danger operation zone
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text color={theme.color.alert} fontWeight="bold" mb="20px">
              WARNING: By performing the following operation current notes data
              will be permanently deleted from the records.
            </Text>
            <Button w="100%" bg={theme.color.alert} color={theme.color.text}>
              I understand
            </Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default DocumentTextEditor;
