import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const CustomModal = ({ children, element, heading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children && <Box onClick={() => onOpen()}>{children}</Box>}
      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{heading}</DrawerHeader>
          <Divider />
          <DrawerBody>{element}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomModal;
